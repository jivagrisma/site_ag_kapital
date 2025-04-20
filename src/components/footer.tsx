import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">AG Kapital</h3>
            <p className="text-sm text-gray-400 mb-4">
              AgrosurKapital (AG) is a legally incorporated American technology and professional services company.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">How to Hire</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Talent Marketplace</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Project Catalog</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Enterprise Solutions</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Success Stories</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">For Talent</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">How to Find Work</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Direct Contracts</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Find Freelance Jobs</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Certifications</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Community</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Help & Support</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Community Forum</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Affiliate Program</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary">Investor Relations</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 Agrosur Kapital LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-primary">Terms</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-primary">Privacy</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-primary">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
