import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/#about" },
        { name: "How It Works", href: "/#how-it-works" },
        { name: "Subjects", href: "/#subjects" },
        { name: "Contact", href: "/#contact-form" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Success Stories", href: "/#testimonials" },
        { name: "Free Guides", href: "/guides" },
        { name: "Tutor Login", href: "/auth/tutor" },
        { name: "Parent Login", href: "/auth/parent" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms", href: "/terms" },
        { name: "Privacy", href: "/privacy" },
        { name: "Cookies", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--dark)] pt-24 pb-12 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <Link 
              href="/" 
              className="text-xl font-heading font-bold text-white hover:opacity-80 transition-opacity"
            >
              BrightMind<span className="text-[var(--primary)]">.</span>
            </Link>
            <p className="text-[#6b7280] font-body text-sm leading-relaxed max-w-[200px] mt-4">
              Empowering students to reach their full potential through expert IB tutoring.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col">
              <h4 className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-[#4b5563] mb-6">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm font-body text-[#9ca3af] hover:text-[var(--primary)] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1f2937] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs font-body text-[#4b5563]">
            &copy; {currentYear} BrightMind Learning Inc. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            {[
              { icon: <Twitter size={16} />, href: "#" },
              { icon: <Linkedin size={16} />, href: "#" },
              { icon: <Instagram size={16} />, href: "#" },
              { icon: <Facebook size={16} />, href: "#" }
            ].map((social, i) => (
              <Link 
                key={i} 
                href={social.href}
                className="text-[#4b5563] hover:text-[var(--primary)] transition-colors duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
