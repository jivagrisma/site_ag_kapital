"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import { Button } from "@/components/ui/button";
import { QuoteIcon } from "lucide-react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"client" | "freelancer">("client");

  const filteredTestimonials = testimonials.filter((t) => t.type === activeTab);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center space-y-3 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              See what our clients and freelancers have to say about their experience with our platform.
            </p>
          </div>

          <div className="flex gap-2 p-1 border rounded-lg bg-muted/50">
            <Button
              variant={activeTab === "client" ? "default" : "ghost"}
              onClick={() => setActiveTab("client")}
              className="rounded-md"
            >
              Client Reviews
            </Button>
            <Button
              variant={activeTab === "freelancer" ? "default" : "ghost"}
              onClick={() => setActiveTab("freelancer")}
              className="rounded-md"
            >
              Freelance Success
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3 w-full">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col p-6 rounded-lg shadow-sm border bg-card text-card-foreground"
              >
                <QuoteIcon className="h-8 w-8 text-muted-foreground mb-4 opacity-50" />
                <p className="mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
