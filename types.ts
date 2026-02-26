
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Hackathon {
  title: string;
  award: string;
  year: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  highlights: string[];
}
