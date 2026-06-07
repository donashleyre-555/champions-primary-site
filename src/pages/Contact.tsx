import { useState } from "react";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Clock, Send, Calendar, Download, Users, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject || null,
      message: parsed.data.message,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Couldn't send your message. Please try again.");
      return;
    }
    toast.success("Message sent! Coach Don's team will respond within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const infoCards = [
    { icon: <Mail className="w-5 h-5" />, title: "Email", value: "hello@championslifestyle.com", href: "mailto:hello@championslifestyle.com" },
    { icon: <Phone className="w-5 h-5" />, title: "Phone", value: "+1 (310) 555-0100", href: "tel:+13105550100" },
    { icon: <Clock className="w-5 h-5" />, title: "Response Time", value: "Within 24 hours", href: null },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">It's a Choice</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Get In Touch with Coach Don
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Questions, partnerships, or ready to start? Send a message and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="card-gradient p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Send a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" value={form.name} onChange={handleChange} required maxLength={100} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required maxLength={255} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={form.subject} onChange={handleChange} maxLength={200} />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={form.message} onChange={handleChange} required maxLength={5000} className="min-h-[140px]" />
                </div>
                <Button type="submit" className="btn-hero w-full h-12" disabled={submitting}>
                  {submitting ? "Sending..." : <><Send className="w-5 h-5 mr-2" />Send Message</>}
                </Button>
              </form>
            </Card>

            {/* Info + Quick Start */}
            <div className="space-y-6">
              <Card className="card-glass p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                <div className="space-y-5">
                  {infoCards.map((c, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">{c.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{c.title}</h4>
                        {c.href ? (
                          <a href={c.href} className="text-muted-foreground hover:text-primary transition-colors">{c.value}</a>
                        ) : (
                          <p className="text-muted-foreground">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="card-gradient p-8">
                <h3 className="text-xl font-bold mb-4">Quick Start Options</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" onClick={() => window.open("https://cal.com/coachdonashley", "_blank", "noopener,noreferrer")}>
                    <Calendar className="w-4 h-4 mr-2" />Schedule a Discovery Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => toast.info("Free guide coming soon!")}>
                    <Download className="w-4 h-4 mr-2" />Download Free Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => window.open("https://www.skool.com/championslifestyle", "_blank", "noopener,noreferrer")}>
                    <Users className="w-4 h-4 mr-2" />Join the Community
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
