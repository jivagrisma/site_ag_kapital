import React from "react";
import { Code, BarChart3, PenTool, FileText, Headphones, BarChartHorizontal } from "lucide-react";

const categories = [
  {
    title: "Development and IT",
    icon: <Code className="w-6 h-6" />,
    stats: "More than 20,000 jobs posted weekly",
  },
  {
    title: "Sales and Marketing",
    icon: <BarChart3 className="w-6 h-6" />,
    stats: "More than 10,000 jobs posted weekly",
  },
  {
    title: "Design and Creativity",
    icon: <PenTool className="w-6 h-6" />,
    stats: "More than 15,000 jobs posted weekly",
  },
  {
    title: "Writing and Translation",
    icon: <FileText className="w-6 h-6" />,
    stats: "More than 20,000 jobs posted weekly",
  },
  {
    title: "Administration and Customer Service",
    icon: <Headphones className="w-6 h-6" />,
    stats: "More than 10,000 jobs posted weekly",
  },
  {
    title: "Finance and Accounting",
    icon: <BarChartHorizontal className="w-6 h-6" />,
    stats: "More than 15,000 jobs posted weekly",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Professional services for your business</h2>
            <p className="text-xl text-muted-foreground">Hire the best freelancers</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col p-6 rounded-lg shadow-sm border bg-card text-card-foreground hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{category.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
