import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have questions or need assistance?</h2>
              <p className="text-xl text-muted-foreground">We&apos;re here to help you succeed.</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/contact.webp"
                  alt="Customer support team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-sm text-muted-foreground">Weekend support available for urgent matters</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-sm text-muted-foreground">info@agrosurkapital.com</p>
                  <p className="text-sm text-muted-foreground">We aim to respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+1 (800) 555-1234</p>
                  <p className="text-sm text-muted-foreground">For urgent matters and direct assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">EE. UU.</h3>
                  <p className="text-sm text-muted-foreground">7302 Yellowstone Road</p>
                  <p className="text-sm text-muted-foreground">Cheyenne, WY 8200</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Visit Our Office</Button>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium">
                  Full Name
                </label>
                <Input id="fullName" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <select 
                  id="subject" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Your message"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-4 w-4 mt-1 rounded border-gray-300"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  I agree to the Privacy Policy and consent to being contacted regarding my inquiry.
                </label>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.806828652863!2d-104.83258862487371!3d41.182380308687755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f3a1092fa583f%3A0xfc76c793bf429125!2s7302%20Yellowstone%20Rd%2C%20Cheyenne%2C%20WY%2082009%2C%20USA!5e0!3m2!1sen!2sco!4v1744153664338!5m2!1sen!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
