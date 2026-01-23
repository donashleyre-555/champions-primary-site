import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Trophy, Target, Zap, LogIn } from "lucide-react";
import { useUserProgress } from "@/hooks/useUserProgress";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProgressTracker = () => {
  const { user } = useAuth();
  const { progress, loading } = useUserProgress();

  // Convert 0-100 scale to 1-5 for display
  const focusLevel = progress ? Math.ceil(progress.focus_level / 20) : 3;
  const calmLevel = progress ? Math.ceil(progress.calm_level / 20) : 3;

  const weeklyGoal = progress?.weekly_goal || 5;
  // For now, we'll calculate this from total_sessions mod 7 as a simple approach
  // A more accurate approach would require querying sessions from this week
  const completedThisWeek = progress ? Math.min(progress.total_sessions % 7, weeklyGoal) : 0;
  const progressPercentage = (completedThisWeek / weeklyGoal) * 100;

  if (!user) {
    return (
      <Card className="card-gradient p-6">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Progress Tracker</h3>
        </div>
        <div className="text-center py-8">
          <LogIn className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
          <p className="text-muted-foreground mb-4">Sign in to track your progress</p>
          <Button asChild variant="outline" size="sm">
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="card-gradient p-6">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Progress Tracker</h3>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </Card>
    );
  }

  return (
    <Card className="card-gradient p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Progress Tracker</h3>
      </div>

      {/* Current Streak */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Current Streak</span>
          <Badge variant="secondary" className="animate-glow">
            <Zap className="w-3 h-3 mr-1" />
            {progress?.current_streak || 0} days
          </Badge>
        </div>
        {progress?.longest_streak && progress.longest_streak > 0 && (
          <p className="text-xs text-muted-foreground">
            Longest streak: {progress.longest_streak} days
          </p>
        )}
      </div>

      {/* Weekly Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Weekly Goal</span>
          <span className="text-sm text-muted-foreground">
            {completedThisWeek}/{weeklyGoal}
          </span>
        </div>
        <Progress value={progressPercentage} className="h-3" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <Calendar className="w-4 h-4 mx-auto mb-1 text-primary" />
          <p className="text-sm font-medium">{progress?.total_sessions || 0}</p>
          <p className="text-xs text-muted-foreground">Total Sessions</p>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <Target className="w-4 h-4 mx-auto mb-1 text-accent" />
          <p className="text-sm font-medium">{progress?.total_minutes || 0}</p>
          <p className="text-xs text-muted-foreground">Total Minutes</p>
        </div>
      </div>

      {/* Current Levels */}
      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm">Focus Level</span>
            <span className="text-sm font-medium">{focusLevel}/5</span>
          </div>
          <Progress value={focusLevel * 20} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm">Calm Level</span>
            <span className="text-sm font-medium">{calmLevel}/5</span>
          </div>
          <Progress value={calmLevel * 20} className="h-2" />
        </div>
      </div>
    </Card>
  );
};

export default ProgressTracker;
