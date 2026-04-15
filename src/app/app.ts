import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

type ThemeMode = 'light' | 'dark';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private readonly document = inject(DOCUMENT);

  protected readonly currentYear = new Date().getFullYear();
  protected readonly theme = signal<ThemeMode>('dark');

  protected readonly profile = {
    name: 'Gurpreet Singh',
    title: 'Senior Software Engineer',
    subtitle: 'Full-stack engineer building AI-powered web products',
    location: 'Ludhiana, Punjab, India',
    email: 'gurpr33t1998@gmail.com',
    phone: '+91 7986364435',
    linkedin: 'https://www.linkedin.com/in/gbgurpreet',
    resume: 'resume/gur-resume-28-01-26.pdf'
  };

  protected readonly navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  protected readonly highlights = [
    '4.7+ years in full-stack product development',
    'Large-scale frontend migrations and UI systems',
    'AI search, embeddings, RAG workflows, and automation'
  ];

  protected readonly metrics = [
    { value: '4.7+', label: 'Years building production apps' },
    { value: '3', label: 'Product teams and delivery roles' },
    { value: '4', label: 'Flagship products across web and mobile' }
  ];

  protected readonly expertise = [
    'Angular (v12-v18), HTML5, CSS3, JavaScript, Bootstrap, Ionic, jQuery',
    'PHP, CodeIgniter, REST APIs, Firebase, MySQL',
    'RAG, prompt engineering, embeddings, vector search, AI agents, Ollama',
    'Azure OpenAI, Azure AI Search, Azure Functions, Blob Storage, AWS S3 and WebSockets',
    'Git, Agile delivery, Android Studio, real-time systems, mentorship'
  ];

  protected readonly experience = [
    {
      company: 'Niwi.ai',
      role: 'Senior Software Engineer',
      period: 'April 2024 - Present',
      summary:
        'Leading responsive web application development while expanding product intelligence with LLM-driven workflows.',
      achievements: [
        'Built dynamic Angular and PHP experiences with customizable forms and real-time validation.',
        'Integrated AI models using USDA, Open Food Facts, and CNF datasets.',
        'Contributed to food and diet tag classification, recommendation systems, and embedding-powered vector search.',
        'Mentored junior engineers and improved code quality through reviews and migration guidance.'
      ]
    },
    {
      company: 'Nextgen Apps',
      role: 'Senior Software Engineer / Full Stack Developer',
      period: 'July 2021 - April 2024',
      summary:
        'Delivered secure backend services and polished user-facing apps across web and mobile experiences.',
      achievements: [
        'Built Angular, Ionic, and Firebase products for daily client operations.',
        'Implemented real-time chat using AWS WebSocket infrastructure and Firebase.',
        'Handled third-party integrations and API design for production systems.',
        'Supported junior teammates with code reviews and engineering best practices.'
      ]
    },
    {
      company: 'Impinge Solutions',
      role: 'PHP Developer Intern',
      period: 'January 2021 - June 2021',
      summary:
        'Started with hands-on PHP product work and strengthened execution discipline inside a delivery team.',
      achievements: [
        'Assisted in building PHP-based web solutions.',
        'Practiced clear communication, time management, and punctual execution.',
        'Delivered assigned tasks efficiently in a collaborative environment.'
      ]
    }
  ];

  protected readonly projects = [
    {
      name: 'Hub.niwi.ai',
      stack: 'Angular, PHP, CodeIgniter',
      description:
        'A dietitian portal for client management, diet plans, nutrition reports, and customizable reporting workflows.'
    },
    {
      name: 'Grow.primhub.ai',
      stack: 'Angular, PHP, Ionic',
      description:
        'A SaaS B2B platform for nutritionists covering client management, marketing flows, appointments, reporting, and role-based access.'
    },
    {
      name: 'Prim App',
      stack: 'Angular, Ionic, Android Studio',
      description:
        'A web and Android experience helping dietitian clients access plans, recipes, invoices, and feedback in one place.'
    },
    {
      name: 'AI Diet Recommendation & Tagging System',
      stack: 'LLMs, embeddings, semantic search, automation',
      description:
        'An ongoing AI-powered nutrition platform using retrieval techniques and cloud workflows for more relevant diet recommendations.'
    }
  ];

  protected readonly education = {
    school: 'Gulzar Group of Institutes, Khanna',
    degree: 'B.Tech in Computer Science',
    period: 'August 2017 - July 2021',
    summary:
      'Built practical skills through coding contests, workshops, and project-based learning.'
  };

  constructor() {
    const savedTheme = this.getStoredTheme();
    this.applyTheme(savedTheme ?? this.getPreferredTheme());
  }

  protected toggleTheme(): void {
    this.applyTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(mode: ThemeMode): void {
    this.theme.set(mode);
    this.document.documentElement.setAttribute('data-theme', mode);
    this.document.body.setAttribute('data-theme', mode);
    this.document.body.style.colorScheme = mode;
    this.document.defaultView?.localStorage.setItem('portfolio-theme', mode);
  }

  private getStoredTheme(): ThemeMode | null {
    const stored = this.document.defaultView?.localStorage.getItem('portfolio-theme');
    return stored === 'light' || stored === 'dark' ? stored : null;
  }

  private getPreferredTheme(): ThemeMode {
    return this.document.defaultView?.matchMedia?.('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }
}
