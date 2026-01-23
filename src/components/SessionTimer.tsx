import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, Clock, CheckCircle } from "lucide-react";

interface SessionTimerProps {
  sessionActive: boolean;
  currentStep: number;
  onSessionToggle: (active: boolean) => void;
  onSessionComplete?: (durationSeconds: number, stepCompleted: number) => void;
}

const SessionTimer = ({ 
  sessionActive, 
  currentStep, 
  onSessionToggle,
  onSessionComplete 
}: SessionTimerProps) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [stepStartTime, setStepStartTime] = useState(0);

  const stepDurations = {
    1: 60,    // 1 minute for baseline
    2: 15,    // 15 seconds for audio setup
    3: 180,   // 3 minutes for open awareness
    4: 600,   // 10 minutes for focused attention
    5: 180,   // 3 minutes for micro action
  };

  const currentStepDuration = stepDurations[currentStep as keyof typeof stepDurations] || 60;
  const stepProgress = Math.min((timeElapsed - stepStartTime) / currentStepDuration * 100, 100);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (sessionActive) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sessionActive]);

  useEffect(() => {
    setStepStartTime(timeElapsed);
  }, [currentStep]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTimeElapsed(0);
    setStepStartTime(0);
    onSessionToggle(false);
  };

  const completeSession = () => {
    if (timeElapsed > 0 && onSessionComplete) {
      onSessionComplete(timeElapsed, currentStep);
    }
    resetTimer();
  };

  return (
    <Card className="card-gradient p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Session Timer</h3>
      </div>

      {/* Main Timer Display */}
      <div className="mb-6">
        <div className="text-4xl font-bold text-gradient mb-2">
          {formatTime(timeElapsed)}
        </div>
        <p className="text-sm text-muted-foreground">
          Step {currentStep} • {formatTime(currentStepDuration)} target
        </p>
      </div>

      {/* Step Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Step Progress</span>
          <span className="text-sm text-muted-foreground">
            {Math.round(stepProgress)}%
          </span>
        </div>
        <Progress value={stepProgress} className="h-3" />
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-3">
        <Button
          size="lg"
          className={sessionActive ? "btn-glass" : "btn-hero"}
          onClick={() => onSessionToggle(!sessionActive)}
        >
          {sessionActive ? (
            <>
              <Pause className="w-5 h-5 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-5 h-5 mr-2" />
              Start
            </>
          )}
        </Button>
        
        {timeElapsed > 0 && (
          <Button
            variant="default"
            size="lg"
            onClick={completeSession}
            className="bg-green-600 hover:bg-green-700"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Complete
          </Button>
        )}
        
        <Button
          variant="outline"
          size="lg"
          onClick={resetTimer}
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Reset
        </Button>
      </div>

      {/* Session Status */}
      {sessionActive && (
        <div className="mt-4 p-3 bg-primary/10 rounded-lg animate-fade-in">
          <p className="text-sm text-primary font-medium">
            Session Active • Stay focused
          </p>
        </div>
      )}
    </Card>
  );
};

export default SessionTimer;
