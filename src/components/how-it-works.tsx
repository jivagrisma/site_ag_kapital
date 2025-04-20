import React from "react";
import { FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Post Your Project",
    description:
      "Describe your project needs, required skills, and set your budget. Our intelligent matching system will find the ideal talent.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    number: 2,
    title: "Connect with Experts",
    description:
      "Review profiles, portfolios, and ratings. Compare proposals and choose the freelancer that best suits your needs.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    number: 3,
    title: "Complete Your Project",
    description:
      "Collaborate through our secure platform with messaging, file sharing, and milestone payments. Release funds only when you're satisfied.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 items-center">
          <div className="text-center space-y-3 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">How it Works</h2>
            <p className="text-xl text-muted-foreground">
              Our platform makes it easy to connect with top talent and efficiently manage projects from start to finish.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8 w-full max-w-5xl mt-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
