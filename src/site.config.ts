export interface SocialLink {
  name: string;
  href: string;
  icon?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  author: string;
  title: string;
  description: string;
  url: string;
  status: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

export const siteConfig: SiteConfig = {
  author: 'Patricio Céspedes',
  title: 'Patricio Céspedes | Analista Programador y Licenciado en Artes',
  description: 'Analista Programador y Licenciado en Artes. Backend Developer enfocado en sistemas cloud-native.',
  url: 'https://patriciocespedes.vercel.app',
  status: 'Santiago, Chile',
  navItems: [
    { name: 'Proyectos', href: '/projects' },
    { name: 'Fotografía', href: '/photography' },
    { name: 'Sobre mí', href: '/about' },
  ],
  socialLinks: [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/patricioisaias' },
    { name: 'GitHub', href: 'https://github.com/patricioisaias' },
  ],
};
