export type ContentSection = 'About' | 'Work' | 'Contact';

export interface WorkExperience {
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  skills: string[];
}

export type ExperienceData = WorkExperience[];
