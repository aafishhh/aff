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
        { text: 'TrendTrack vs Minea', href: '/blog/trendtrack-vs-minea/' },
        { text: 'TrendTrack 20% Off', href: '/blog/trendtrack-20-off/' },
        { text: 'Break Even ROAS Calculator', href: '/blog/break-even-roas-calculator/' },
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

// ─── French navigation data ───────────────────────────────────
export const headerDataFR = {
  links: [
    {
      text: 'Code Promo',
      href: '/fr/#promo-code',
    },
    {
      text: 'Fonctionnalites',
      href: '/fr/#features',
    },
    {
      text: 'Comment ca marche',
      href: '/fr/#how-it-works',
    },
    {
      text: 'Tarifs',
      href: '/fr/#pricing',
    },
    {
      text: 'Avis',
      href: '/fr/#reviews',
    },
    {
      text: 'FAQ',
      href: '/fr/#faq',
    },
  ],
  actions: [
    { text: '20% de remise avec WINNING →', href: 'https://trendtrack.io?fpr=lanetrendtrack', variant: 'primary' },
  ],
};

export const footerDataFR = {
  links: [
    {
      title: 'Produit',
      links: [
        { text: 'Code Promo', href: '/fr/#promo-code' },
        { text: 'Fonctionnalites', href: '/fr/#features' },
        { text: 'Comment ca marche', href: '/fr/#how-it-works' },
        { text: 'Tarifs', href: '/fr/#pricing' },
        { text: 'Avis', href: '/fr/#reviews' },
        { text: 'FAQ', href: '/fr/#faq' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { text: 'Alternatives', href: '/alternatives' },
        { text: 'TrendTrack vs Minea', href: '/blog/trendtrack-vs-minea/' },
        { text: 'TrendTrack 20% Off', href: '/blog/trendtrack-20-off/' },
        { text: 'Calculateur ROAS', href: '/blog/break-even-roas-calculator/' },
        { text: 'Blog', href: '/blog/' },
      ],
    },
    {
      title: 'A propos',
      links: [
        { text: 'Politique de confidentialite', href: '/privacy' },
        { text: "Conditions d'utilisation", href: '/terms' },
        { text: 'A propos de nous', href: '/about' },
        { text: 'Contactez-nous', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Code Promo TrendTrack : WINNING - Obtenez 20% de reduction verifies en 2026. Accedez a la plateforme d'analyse e-commerce N deg 1 pour votre prochaine reussite." },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Trendtrack_io' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/trendtrack_io?igsh=dW14aW01MjA4bDI1' },
  ],
  footNote: `
    © 2026 Code Promo TrendTrack. Tous droits reserves.
  `,
};

// ─── Polish navigation data ───────────────────────────────────
export const headerDataPL = {
  links: [
    {
      text: 'Kod Rabatowy',
      href: '/pl/#promo-code',
    },
    {
      text: 'Funkcje',
      href: '/pl/#features',
    },
    {
      text: 'Jak to dziala',
      href: '/pl/#how-it-works',
    },
    {
      text: 'Cennik',
      href: '/pl/#pricing',
    },
    {
      text: 'Opinie',
      href: '/pl/#reviews',
    },
    {
      text: 'FAQ',
      href: '/pl/#faq',
    },
  ],
  actions: [
    { text: '20% rabatu z WINNING →', href: 'https://trendtrack.io?fpr=lanetrendtrack', variant: 'primary' },
  ],
};

export const footerDataPL = {
  links: [
    {
      title: 'Produkt',
      links: [
        { text: 'Kod Rabatowy', href: '/pl/#promo-code' },
        { text: 'Funkcje', href: '/pl/#features' },
        { text: 'Jak to dziala', href: '/pl/#how-it-works' },
        { text: 'Cennik', href: '/pl/#pricing' },
        { text: 'Opinie', href: '/pl/#reviews' },
        { text: 'FAQ', href: '/pl/#faq' },
      ],
    },
    {
      title: 'Zasoby',
      links: [
        { text: 'Alternatywy', href: '/alternatives' },
        { text: 'TrendTrack vs Minea', href: '/blog/trendtrack-vs-minea/' },
        { text: 'TrendTrack 20% taniej', href: '/blog/trendtrack-20-off/' },
        { text: 'Kalkulator ROAS', href: '/blog/break-even-roas-calculator/' },
        { text: 'Blog', href: '/blog/' },
      ],
    },
    {
      title: 'O nas',
      links: [
        { text: 'Polityka prywatnosci', href: '/privacy' },
        { text: 'Warunki korzystania', href: '/terms' },
        { text: 'O nas', href: '/about' },
        { text: 'Kontakt', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Kod Rabatowy TrendTrack: WINNING - Zweryfikowany kod na 20% rabatu w 2026. Uzyskaj dostep do platformy do analizy e-commerce N1 dla Twojego kolejnego sukcesu.' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Trendtrack_io' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/trendtrack_io?igsh=dW14aW01MjA4bDI1' },
  ],
  footNote: `
    © 2026 Kod Rabatowy TrendTrack. Wszelkie prawa zastrzezone.
  `,
};

// ─── Spanish navigation data ───────────────────────────────────
export const headerDataES = {
  links: [
    {
      text: 'Cupón',
      href: '/es/#promo-code',
    },
    {
      text: 'Características',
      href: '/es/#features',
    },
    {
      text: 'Cómo funciona',
      href: '/es/#how-it-works',
    },
    {
      text: 'Precios',
      href: '/es/#pricing',
    },
    {
      text: 'Reseñas',
      href: '/es/#reviews',
    },
    {
      text: 'FAQ',
      href: '/es/#faq',
    },
  ],
  actions: [
    { text: '20% de descuento con WINNING →', href: 'https://trendtrack.io?fpr=lanetrendtrack', variant: 'primary' },
  ],
};

export const footerDataES = {
  links: [
    {
      title: 'Producto',
      links: [
        { text: 'Cupón', href: '/es/#promo-code' },
        { text: 'Características', href: '/es/#features' },
        { text: 'Cómo funciona', href: '/es/#how-it-works' },
        { text: 'Precios', href: '/es/#pricing' },
        { text: 'Reseñas', href: '/es/#reviews' },
        { text: 'FAQ', href: '/es/#faq' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Alternativas', href: '/alternatives' },
        { text: 'TrendTrack vs Minea', href: '/blog/trendtrack-vs-minea/' },
        { text: 'TrendTrack 20% descuento', href: '/blog/trendtrack-20-off/' },
        { text: 'Calculadora ROAS', href: '/blog/break-even-roas-calculator/' },
        { text: 'Blog', href: '/blog/' },
      ],
    },
    {
      title: 'Acerca de',
      links: [
        { text: 'Política de privacidad', href: '/privacy' },
        { text: 'Términos de servicio', href: '/terms' },
        { text: 'Sobre nosotros', href: '/about' },
        { text: 'Contáctanos', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Cupón TrendTrack: WINNING - Obtén un 20% de descuento verificado en 2026. Accede a la plataforma de análisis e-commerce Nº1 para tu próximo gran éxito.' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Trendtrack_io' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/trendtrack_io?igsh=dW14aW01MjA4bDI1' },
  ],
  footNote: `
    © 2026 Cupón TrendTrack. Todos los derechos reservados.
  `,
};
