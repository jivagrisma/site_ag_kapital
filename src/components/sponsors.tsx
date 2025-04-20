import React from "react";

export default function Sponsors() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-xl md:text-2xl font-medium text-center text-muted-foreground">
            Trusted by leading companies
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <div className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              Microsoft
            </div>
            <div className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              Google
            </div>
            <div className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              AWS
            </div>
            <div className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              LinkedIn
            </div>
            <div className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              Stripe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
