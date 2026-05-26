import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Overview & History', href: '/about' },
      { label: 'Message from the President', href: '/about/president' },
      { label: 'Executive Committee', href: '/about/committee' },
      { label: 'Affiliation & Certifications', href: '/about/affiliation' },
      { label: 'Code of Conduct', href: '/about/code-of-conduct' },
    ],
  },
  {
    label: 'Structure & Style',
    href: '/structure',
    children: [
      { label: 'Shotokan Karate (SKIF) Philosophy', href: '/structure' },
      { label: 'Grading & Belt System', href: '/structure/grading' },
      { label: 'Syllabus & Technical Rules', href: '/structure/syllabus' },
    ],
  },
  {
    label: 'Events & Calendar',
    href: '/events',
    children: [
      { label: 'Upcoming Tournaments', href: '/events?filter=tournament' },
      { label: 'National Championships', href: '/events?filter=national' },
      { label: 'Seminars & Training Camps', href: '/events?filter=seminar' },
      { label: 'International Events', href: '/events?filter=international' },
    ],
  },
  {
    label: 'Media & News',
    href: '/news',
    children: [
      { label: 'Latest News', href: '/news' },
      { label: 'Photo Gallery', href: '/gallery' },
      { label: 'Video Highlights', href: '/gallery?tab=videos' },
      { label: 'Press Releases', href: '/news?filter=press-release' },
    ],
  },
  { label: 'Dojo Directory', href: '/dojos' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/skifbd', icon: 'facebook' },
  { name: 'YouTube', href: 'https://youtube.com/@skifbd', icon: 'youtube' },
  { name: 'Instagram', href: 'https://instagram.com/skifbd', icon: 'instagram' },
];
