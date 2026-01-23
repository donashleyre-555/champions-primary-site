import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface UserProgress {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  total_sessions: number;
  total_minutes: number;
  focus_level: number;
  calm_level: number;
  weekly_goal: number;
  last_session_date: string | null;
}

export function useUserProgress() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProgress = async () => {
    if (!user) {
      setProgress(null);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("user_progress")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) throw error;
      setProgress(data);
    } catch (error: any) {
      console.error("Error fetching progress:", error);
      toast({
        title: "Error loading progress",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, [user]);

  const updateProgress = async (updates: Partial<UserProgress>) => {
    if (!user || !progress) return { error: new Error("Not authenticated") };

    try {
      const { error } = await supabase
        .from("user_progress")
        .update(updates)
        .eq("user_id", user.id);

      if (error) throw error;

      setProgress((prev) => (prev ? { ...prev, ...updates } : null));
      return { error: null };
    } catch (error: any) {
      console.error("Error updating progress:", error);
      return { error };
    }
  };

  const calculateAndUpdateStreak = async () => {
    if (!user || !progress) return;

    const today = new Date().toISOString().split("T")[0];
    const lastSession = progress.last_session_date;

    let newStreak = progress.current_streak;

    if (!lastSession) {
      // First session ever
      newStreak = 1;
    } else if (lastSession === today) {
      // Already logged today, don't change streak
      return;
    } else {
      const lastDate = new Date(lastSession);
      const todayDate = new Date(today);
      const diffTime = todayDate.getTime() - lastDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Consecutive day
        newStreak = progress.current_streak + 1;
      } else {
        // Streak broken
        newStreak = 1;
      }
    }

    const newLongest = Math.max(newStreak, progress.longest_streak);

    await updateProgress({
      current_streak: newStreak,
      longest_streak: newLongest,
      last_session_date: today,
    });
  };

  const incrementSessions = async (durationSeconds: number) => {
    if (!user || !progress) return;

    const newTotalSessions = progress.total_sessions + 1;
    const newTotalMinutes = progress.total_minutes + Math.floor(durationSeconds / 60);

    await updateProgress({
      total_sessions: newTotalSessions,
      total_minutes: newTotalMinutes,
    });

    await calculateAndUpdateStreak();
  };

  return {
    progress,
    loading,
    updateProgress,
    incrementSessions,
    refetch: fetchProgress,
  };
}
