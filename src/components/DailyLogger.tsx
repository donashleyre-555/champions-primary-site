import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { BookOpen, Save, Star } from "lucide-react";

const DailyLogger = () => {
  const [focusRating, setFocusRating] = useState([3]);
  const [calmRating, setCalmRating] = useState([3]);
  const [notes, setNotes] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    // In a real app, this would save to a database
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Card className="card-glass p-6">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Daily Logger</h3>
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
        disabled={isSaved}
      >
        <Save className="w-4 h-4 mr-2" />
        {isSaved ? "Saved!" : "Save Entry"}
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