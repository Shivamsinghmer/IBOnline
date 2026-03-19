import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Free Guides", href: "/guides" },
        { name: "Tutor Login", href: "/auth/tutor" },
        { name: "Parent Login", href: "/auth/parent" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="text-3xl font-serif font-black tracking-tight text-[var(--foreground)]">
            BrightMind<span className="text-[#aff33e]">.</span>
          </Link>
          <p className="text-[var(--muted-foreground)] max-w-sm">
            Empowering students to reach their full potential through personalized, 
            one-on-one online tutoring with world-class educators.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="p-2 bg-[var(--muted)] rounded-full hover:bg-[#aff33e] hover:text-black transition-all">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="p-2 bg-[var(--muted)] rounded-full hover:bg-[#aff33e] hover:text-black transition-all">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="p-2 bg-[var(--muted)] rounded-full hover:bg-[#aff33e] hover:text-black transition-all">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((group) => (
          <div key={group.title} className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-[var(--foreground)]">{group.title}</h4>
            <ul className="flex flex-col gap-4">
              {group.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[var(--muted-foreground)] hover:text-[#aff33e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted-foreground)]">
        <p>&copy; {currentYear} BrightMind Learning Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Terms</Link>
          <Link href="#" className="hover:underline">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
