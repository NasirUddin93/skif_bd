import Link from 'next/link';
import { socialLinks } from '@/data/navigation';

const footerLinks = {
  about: [
    { label: 'Overview & History', href: '/about' },
    { label: 'Executive Committee', href: '/about/committee' },
    { label: 'Affiliation', href: '/about/affiliation' },
    { label: 'Code of Conduct', href: '/about/code-of-conduct' },
  ],
  quickLinks: [
    { label: 'Shotokan Philosophy', href: '/structure' },
    { label: 'Belt System', href: '/structure/grading' },
    { label: 'Find a Dojo', href: '/dojos' },
    { label: 'Photo Gallery', href: '/gallery' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-crimson rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-heading">S</span>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold uppercase tracking-wider">SKIF-BD</span>
                <p className="text-[10px] text-white/50 uppercase tracking-widest leading-none">
                  Shotokan Karate Bangladesh
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              The official body of Shotokan Karate-Do International Federation in Bangladesh. 
              Empowering youth through discipline, respect, and the art of Shotokan Karate since 1995.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-crimson flex items-center justify-center transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.name[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wide mb-5 text-gold">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wide mb-5 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wide mb-5 text-gold">Contact</h3>
            <div className="space-y-4 text-sm text-white/60">
              <div>
                <span>Mirpur Indoor Stadium, Section 2, Mirpur, Dhaka-1216, Bangladesh</span>
              </div>
              <div>
                <span>info@skif-bd.com</span>
              </div>
              <div>
                <span>+880-1711-123456</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between py-5 gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} SKIF-Bangladesh. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/about/code-of-conduct" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about/code-of-conduct" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
