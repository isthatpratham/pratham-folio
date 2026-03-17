export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Skill {
  icon: React.ReactNode;
  name: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}