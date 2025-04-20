import React from "react";

export default function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-10 items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Why do our users love us?</h2>

          <div className="grid gap-8 md:grid-cols-3 w-full max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">96%</div>
              <div className="text-muted-foreground">Customer Satisfaction Rate</div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">85%</div>
              <div className="text-muted-foreground">Loyalty Rate</div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">4.8/5</div>
              <div className="text-muted-foreground">Average rating across all projects</div>
            </div>
          </div>

          <div className="text-center max-w-2xl mt-6">
            <h3 className="text-2xl font-bold mb-4">Ready to experience it for yourself?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of satisfied clients and freelancers on our platform today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Hire Talent
              </button>
              <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Offer your services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
