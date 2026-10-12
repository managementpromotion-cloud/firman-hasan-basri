export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  tags: string[];
  client?: string;
  year?: string;
  link?: string;
  featured?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Desain' | 'Tools & Software' | 'Web & Frontend' | 'Soft Skills';
  level?: string; // e.g. 'Expert', 'Lanjutan', 'Menengah'
  iconName?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  role: string;
  secondaryRole?: string;
  bioHeadline: string;
  bioShort: string;
  bioLong: string;
  location: string;
  status: string;
  email: string;
  phone: string;
  whatsapp: string;
  website?: string;
  avatarUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
  socials: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    dribbble?: string;
    behance?: string;
    youtube?: string;
  };
}
