import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Save, Star, LogIn, Loader2 } from "lucide-react";
import { useDailyLogs } from "@/hooks/useDailyLogs";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const DailyLogger = () => {
  const { user } = useAuth();
  const { todayLog, loading, saving, saveLog } = useDailyLogs();
  
  const [focusRating, setFocusRating] = useState([3]);
  const [calmRating, setCalmRating] = useState([3]);
  const [notes, setNotes] = useState("");

  // Pre-fill form with existing log data
  useEffect(() => {
    if (todayLog) {
      setFocusRating([todayLog.focus_level || 3]);
      setCalmRating([todayLog.calm_level || 3]);
      setNotes(todayLog.notes || "");
    }
  }, [todayLog]);

  const handleSave = async () => {
    await saveLog({
      focus_level: focusRating[0],
      calm_level: calmRating[0],
      notes,
    });
  };

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  if (!user) {
    return (
      <Card className="card-glass p-6">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Daily Logger</h3>
        </div>
        <div className="text-center py-8">
          <LogIn className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
          <p className="text-muted-foreground mb-4">Sign in to save your daily logs</p>
          <Button asChild variant="outline" size="sm">
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="card-glass p-6">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Daily Logger</h3>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </Card>
    );
  }

  return (
    <Card className="card-glass p-6">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Daily Logger</h3>
        {todayLog && (
          <Badge variant="outline" className="ml-auto text-xs">
            Saved today
          </Badge>
        )}
      </div>

      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-4">{today}</p>
      </div>

      {/* Rating Sliders */}
      <div className="space-y-6 mb-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">Focus Level</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= focusRating[0] 
                      ? "text-primary fill-current" 
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
          <Slider
            value={focusRating}
            onValueChange={setFocusRating}
            max={5}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">Calm Level</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= calmRating[0] 
                      ? "text-accent fill-current" 
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
          <Slider
            value={calmRating}
            onValueChange={setCalmRating}
            max={5}
            min={1}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="mb-4">
        <label className="text-sm font-medium mb-2 block">
          Session Notes
        </label>
        <Textarea
          placeholder="How did today's session feel? Any insights or observations..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[100px] resize-none"
        />
      </div>

      {/* Save Button */}
      <Button 
        onClick={handleSave}
        className="w-full btn-hero"
        disabled={saving}
      >
        {saving ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Saving...
          </>
        ) : (
          <>
            <Save className="w-4 h-4 mr-2" />
            {todayLog ? "Update Entry" : "Save Entry"}
          </>
        )}
      </Button>

      {/* Today's Insights */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <h4 className="text-sm font-medium mb-2">Today's Focus:</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">Breath Awareness</Badge>
          <Badge variant="outline" className="text-xs">Present Moment</Badge>
          <Badge variant="secondary" className="text-xs">Inner Calm</Badge>
        </div>
      </div>
    </Card>
  );
};

export default DailyLogger;
