import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface DailyLog {
  id: string;
  user_id: string;
  log_date: string;
  focus_level: number | null;
  calm_level: number | null;
  notes: string | null;
  created_at: string | null;
}

interface SaveLogParams {
  focus_level: number;
  calm_level: number;
  notes: string;
}

export function useDailyLogs() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [todayLog, setTodayLog] = useState<DailyLog | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const fetchTodayLog = async () => {
    if (!user) {
      setTodayLog(null);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("daily_logs")
        .select("*")
        .eq("user_id", user.id)
        .eq("log_date", today)
        .maybeSingle();

      if (error) throw error;
      setTodayLog(data);
    } catch (error: any) {
      console.error("Error fetching today's log:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodayLog();
  }, [user]);

  const saveLog = async ({ focus_level, calm_level, notes }: SaveLogParams) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save your daily log.",
        variant: "destructive",
      });
      return { error: new Error("Not authenticated") };
    }

    setSaving(true);

    try {
      if (todayLog) {
        // Update existing log
        const { error } = await supabase
          .from("daily_logs")
          .update({ focus_level, calm_level, notes })
          .eq("id", todayLog.id);

        if (error) throw error;

        setTodayLog((prev) =>
          prev ? { ...prev, focus_level, calm_level, notes } : null
        );
      } else {
        // Insert new log
        const { data, error } = await supabase
          .from("daily_logs")
          .insert({
            user_id: user.id,
            log_date: today,
            focus_level,
            calm_level,
            notes,
          })
          .select()
          .single();

        if (error) throw error;
        setTodayLog(data);
      }

      // Also update user_progress with new levels
      await supabase
        .from("user_progress")
        .update({
          focus_level: focus_level * 20, // Convert 1-5 to 0-100
          calm_level: calm_level * 20,
        })
        .eq("user_id", user.id);

      toast({
        title: "Log saved!",
        description: "Your daily log has been saved successfully.",
      });

      return { error: null };
    } catch (error: any) {
      console.error("Error saving log:", error);
      toast({
        title: "Error saving log",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    } finally {
      setSaving(false);
    }
  };

  return {
    todayLog,
    loading,
    saving,
    saveLog,
    refetch: fetchTodayLog,
  };
}
