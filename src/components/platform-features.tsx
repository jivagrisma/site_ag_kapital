import React from "react";
import { CreditCard, MessageSquare, ClipboardList, Shield, Wallet2, BarChart2 } from "lucide-react";

const features = [
  {
    title: "Secure Payments",
    description: "Our escrow system ensures funds are only released when the work is completed to your satisfaction.",
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    title: "Real-Time Messaging",
    description: "Communicate efficiently with integrated chat, video calling, and file sharing tools.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: "Project Management",
    description: "Track progress with milestones, tasks, timelines, and customized project dashboards.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: "Quality Assurance",
    description: "We vet every professional on our platform to ensure high-quality service delivery.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Flexible Payments",
    description: "Pay hourly, with a fixed price, or by milestones with multiple payment methods.",
    icon: <Wallet2 className="w-6 h-6" />,
  },
  {
    title: "Analytics and Reporting",
    description: "Track project performance, time spent, and ROI with detailed reports and insights.",
    icon: <BarChart2 className="w-6 h-6" />,
  },
];

export default function PlatformFeatures() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 items-center">
          <div className="text-center space-y-3 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Platform Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for successful project collaboration
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col p-6 rounded-lg shadow-sm border bg-card text-card-foreground hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
