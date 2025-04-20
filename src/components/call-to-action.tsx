import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to start your project?</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of companies that have already found the ideal talent for their technology, administration, marketing, and other needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button size="lg" className="md:text-base">Post a project</Button>
                <Button size="lg" variant="outline" className="md:text-base">
                  Request a service
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/professional-ready-new.jpg"
                alt="Professional team ready to work on your project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
