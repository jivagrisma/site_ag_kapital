"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"clients" | "freelancers">("clients");

  const pricingPlans = {
    clients: [
      {
        name: "Beginner",
        description: "Perfect for small businesses and startups.",
        price: 99,
        features: [
          "Up to 5 active projects",
          "Basic freelancer hiring",
          "Secure payment processing",
          "Hosting service",
          "Priority support",
        ],
        popular: false,
        buttonText: "Get Started",
      },
      {
        name: "Professional",
        description: "Ideal for growing businesses with ongoing needs.",
        price: 249,
        features: [
          "Up to 15 active projects",
          "Advanced talent search",
          "Secure payment processing",
          "Hosting service",
          "Priority support",
          "Team collaboration tools",
        ],
        popular: true,
        buttonText: "Get started",
      },
      {
        name: "Enterprise",
        description: "For organizations with large development needs.",
        price: 599,
        features: [
          "Hosting service",
          "Elite talent search",
          "Dedicated account manager",
          "Custom legal agreements",
          "24/7 premium support",
          "Advanced analytics and reporting",
        ],
        popular: false,
        buttonText: "Contact Sales",
      },
    ],
    freelancers: [
      {
        name: "Basic",
        description: "Perfect for beginners and occasional freelancers.",
        price: 0,
        features: [
          "Create a professional profile",
          "Up to 10 skills showcase",
          "Basic discovery visibility",
          "Standard support",
          "8% platform fee",
        ],
        popular: false,
        buttonText: "Join for Free",
      },
      {
        name: "Plus",
        description: "Ideal for regular freelancers seeking more opportunities.",
        price: 19,
        features: [
          "Enhanced profile visibility",
          "Up to 20 skills showcase",
          "Featured in search results",
          "Priority support",
          "5% platform fee",
          "Skill certifications",
        ],
        popular: true,
        buttonText: "Get Plus",
      },
      {
        name: "Pro",
        description: "For established professionals with a strong portfolio.",
        price: 49,
        features: [
          "Premium profile placement",
          "Unlimited skills showcase",
          "Dedicated career advisor",
          "24/7 priority support",
          "3% platform fee",
          "Early access to premium projects",
        ],
        popular: false,
        buttonText: "Go Pro",
      },
    ],
  };

  const plans =
    activeTab === "clients" ? pricingPlans.clients : pricingPlans.freelancers;

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center space-y-3 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Flexible plans designed to fit your business needs and budget.
            </p>
          </div>

          <div className="flex gap-2 p-1 border rounded-lg bg-muted/50">
            <Button
              variant={activeTab === "clients" ? "default" : "ghost"}
              onClick={() => setActiveTab("clients")}
              className="rounded-md"
            >
              For Clients
            </Button>
            <Button
              variant={activeTab === "freelancers" ? "default" : "ghost"}
              onClick={() => setActiveTab("freelancers")}
              className="rounded-md"
            >
              For Freelancers
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3 w-full">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col p-6 rounded-lg border ${
                  plan.popular
                    ? "border-primary shadow-md relative bg-card"
                    : "border-muted bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-5">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
