import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
 links: [
    {
      text: 'Promo Code',
      href: '/#promo-code', // 直接写字符串，不要用 getPermalink
    },
    {
      text: 'Features',
      href: '/#features',
    },
    {
      text: 'How It Works',
      href: '/#how-it-works',
    },
    {
      text: 'Pricing',
      href: '/#pricing',
    },
    {
      text: 'Reviews',
      href: '/#reviews',
    },
    {
      text: 'FAQ',
      href: '/#faq',
    },
  ],
actions: [
  { text: 'Save 20% with WINNING →', href: 'https://trendtrack.io?fpr=lanetrendtrack', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
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
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'About Us', href: '/about' },
        { text: 'Contact Us', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'TrendTrack Promo Code: WINNING – Get a verified 20% OFF Discount in June 2026. Unlock the #1 ecommerce analytics platform for your next million-dollar win.'},
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Trendtrack_io' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/trendtrack_io?igsh=dW14aW01MjA4bDI1' },
  ],
  footNote: `
    © 2026 TrendTrack Promo Code. All rights reserved.
  `,
};
