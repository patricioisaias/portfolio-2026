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
  cvPath: string;
  status: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

export const siteConfig: SiteConfig = {
  author: 'Patricio Isaías',
  title: 'Patricio Isaías | Desarrollador & Creador Multidisciplinario',
  description: 'Portafolio personal, hub creativo, diario digital. Analista Programador enfocado en backend, arquitectura de microservicios, tecnologías cloud, arte digital.',
  url: 'https://patricioisaias.dev',
  cvPath: '/CV.pdf',
  status: 'Santiago, Chile',
  navItems: [
    { name: 'Proyectos', href: '/projects' },
    { name: 'Notas', href: '/notes' },
    { name: 'Fotografía', href: '/photography' },
    { name: 'Sobre mí', href: '/about' },
  ],
  socialLinks: [
    { name: 'GitHub', href: 'https://github.com/patricioisaias' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/patricioisaias' },
  ],
};
