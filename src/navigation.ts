import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Promo Code',
      href: getPermalink('/#promo-code'),
    },
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'How It Works',
      href: getPermalink('/#how-it-works'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/#pricing'),
    },
    {
      text: 'Reviews',
      href: getPermalink('/#reviews'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Alternatives',
      href: getPermalink('/alternatives'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Get Started', href: '#', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Promo Code', href: '/#promo-code' },
        { text: 'Features', href: '/#features' },
        { text: 'How It Works', href: '/#how-it-works' },
        { text: 'Pricing', href: '/#pricing' },
        { text: 'Reviews', href: '/#reviews' },
        { text: 'FAQ', href: '/#faq' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Alternatives', href: getPermalink('/alternatives') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'About Us', href: '#' },
        { text: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Subscription Policies', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    © 2026 TrendTrack. All rights reserved.
  `,
};
