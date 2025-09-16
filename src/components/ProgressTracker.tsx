import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Target, Zap } from "lucide-react";

const ProgressTracker = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalSessions, setTotalSessions] = useState(23);
  const [focusLevel, setFocusLevel] = useState(4);
  const [calmLevel, setCalmLevel] = useState(4);

  const weeklyGoal = 7;
  const completedThisWeek = 5;
  const progressPercentage = (completedThisWeek / weeklyGoal) * 100;

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
            {currentStreak} days
          </Badge>
        </div>
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
          <p className="text-sm font-medium">{totalSessions}</p>
          <p className="text-xs text-muted-foreground">Total Sessions</p>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <Target className="w-4 h-4 mx-auto mb-1 text-accent" />
          <p className="text-sm font-medium">85%</p>
          <p className="text-xs text-muted-foreground">Success Rate</p>
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