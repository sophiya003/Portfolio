"use client";

import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 text-center">
     

    
      

    
          <DialogHeader>
            <DialogTitle>Send me a message</DialogTitle>
            <DialogDescription className="text-gray-400">
              Fill in the form below and I&apos;ll get back to you soon.
            </DialogDescription>
          </DialogHeader>

          {emailSubmitted ? (
            <p className="text-green-400 text-center py-6">
              ✅ Your message has been sent successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="bg-[#1F2024] border border-[#33353F] text-gray-100"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Just saying hi"
                  className="bg-[#1F2024] border border-[#33353F] text-gray-100"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Let's talk about..."
                  className="bg-[#1F2024] border border-[#33353F] text-gray-100"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary-600"
                } bg-primary-500 text-white`}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
    
    
    </section>
  );
}
