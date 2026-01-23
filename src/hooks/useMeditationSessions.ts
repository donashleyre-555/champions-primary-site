import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface SaveSessionParams {
  duration_seconds: number;
  session_type: string;
  step_completed: number;
  audio_track?: string;
  notes?: string;
}

export function useMeditationSessions() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);

  const saveSession = async ({
    duration_seconds,
    session_type,
    step_completed,
    audio_track,
    notes,
  }: SaveSessionParams) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save your meditation session.",
        variant: "destructive",
      });
      return { error: new Error("Not authenticated"), data: null };
    }

    setSaving(true);

    try {
      const { data, error } = await supabase
        .from("meditation_sessions")
        .insert({
          user_id: user.id,
          duration_seconds,
          session_type,
          step_completed,
          audio_track: audio_track || null,
          notes: notes || null,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Session saved!",
        description: `Great job! You completed ${Math.floor(duration_seconds / 60)} minutes of meditation.`,
      });

      return { error: null, data };
    } catch (error: any) {
      console.error("Error saving session:", error);
      toast({
        title: "Error saving session",
        description: error.message,
        variant: "destructive",
      });
      return { error, data: null };
    } finally {
      setSaving(false);
    }
  };

  return {
    saving,
    saveSession,
  };
}
