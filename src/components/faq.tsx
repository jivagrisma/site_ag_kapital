import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the hiring process work?",
    answer:
      "Our hiring process is simple: post your job with detailed requirements, review proposals from qualified freelancers, interview your top candidates, select the best match for your project, and start collaborating through our secure platform. You can communicate directly, set milestones, and only release payment when you're satisfied with the work delivered.",
  },
  {
    question: "What types of professionals can I find on your platform?",
    answer:
      "We host a diverse range of skilled professionals across various categories including Development & IT, Sales & Marketing, Design & Creativity, Writing & Translation, Administration & Customer Service, and Finance & Accounting. Whatever your project needs, you'll find vetted experts with the specific skills and experience required to deliver quality results.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Our secure escrow payment system protects both clients and freelancers. Clients deposit funds before work begins, which are only released to freelancers when project milestones are approved or the work is completed to satisfaction. We support multiple payment methods including credit cards, debit cards, PayPal, and bank transfers for your convenience.",
  },
  {
    question: "What fees does the platform charge?",
    answer:
      "For clients, we charge a 5% service fee added to each payment made to freelancers. For freelancers, our fee structure depends on your membership tier - ranging from 3-8% of the project value. Enterprise clients with high-volume needs can access custom fee arrangements by contacting our sales team.",
  },
  {
    question: "How do you ensure quality professionals?",
    answer:
      "We maintain high standards through a rigorous vetting process that includes skill assessments, portfolio reviews, and identity verification. Our rating system provides transparent feedback from previous clients, and our success managers regularly monitor project quality. Additionally, we offer a satisfaction guarantee - if you're not satisfied with the work, we'll help resolve the issue or assist you in finding a replacement.",
  },
  {
    question: "Can I hire professionals for long-term projects?",
    answer:
      "Absolutely! Many clients use our platform for ongoing collaboration with freelancers. You can set up recurring contracts, retainer agreements, or part-time/full-time arrangements. For long-term engagements, we offer discounted platform fees and specialized support to ensure a sustainable working relationship.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center space-y-3 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
