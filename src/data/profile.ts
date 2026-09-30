// Single source of truth for all portfolio content.
// Edit this file to update the site — components only render what's here.

export const profile = {
  name: 'Hadi Rezaee',
  role: 'Software Architect',
  company: 'Austrian Airlines',
  location: 'Vienna, Austria',
  url: 'https://mhrezaee.github.io',
  headline: 'I design scalable, secure, cloud-native systems on .NET and Azure, and lead teams in building them.',
  summary: [
    "Software Architect with 15+ years of experience in software development and architecture and a Master's in Software Engineering. I design scalable, secure and high-performance systems on Microsoft Azure and .NET, and I still work hands-on across the full stack.",
    'At Austrian Airlines I define architectural standards, drive technical decisions across teams and apply AI-assisted engineering in my daily work, using AI as an accelerator while keeping ownership of architecture, security and code quality. I work technology-agnostic and adapt quickly to new tools to deliver the best outcome.',
  ],
};

export const keyFacts = [
  { value: '15+', label: 'Years of experience' },
  { value: '7+', label: 'Companies' },
  { value: 'M.Sc.', label: 'Software Engineering' },
];

export const competencies = [
  'Solution Architecture',
  'Cloud-Native on Azure',
  '.NET & ASP.NET Core',
  'Angular & React',
  'CI/CD & DevOps',
  'Technical Leadership',
  'AI-Assisted Engineering',
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hadirezaee/', icon: 'simple-icons:linkedin', handle: 'in/hadirezaee' },
  { label: 'GitHub', href: 'https://github.com/mhrezaee', icon: 'simple-icons:github', handle: 'mhrezaee' },
  { label: 'X', href: 'https://twitter.com/DevRezaee', icon: 'simple-icons:x', handle: 'DevRezaee' },
  { label: 'Facebook', href: 'https://www.facebook.com/m.hadi.rezaee/', icon: 'simple-icons:facebook', handle: 'm.hadi.rezaee' },
];

export type Role = {
  title: string;
  period: string;
  summary: string;
  highlights?: { heading: string; items: string[] }[];
  tech: string[];
};

export type Company = {
  name: string;
  location: string;
  current?: boolean;
  roles: Role[];
};

export const experience: Company[] = [
  {
    name: 'Austrian Airlines',
    location: 'Vienna, Austria',
    current: true,
    roles: [
      {
        title: 'Software Architect',
        period: 'Apr 2025 – Present',
        summary:
          'Responsible for designing scalable, secure and high-performance systems aligned with business objectives. Leading cross-functional teams, defining architectural standards and driving technical decisions across the full SDLC.',
        highlights: [
          {
            heading: 'Architecture & Leadership',
            items: [
              'Design scalable, cloud-native architectures on Microsoft Azure',
              'Define system design standards, best practices and coding guidelines',
              'Lead architectural reviews and technical decision-making across teams',
              'Implement services and RESTful APIs with ASP.NET Core',
            ],
          },
          {
            heading: 'AI-Assisted Engineering & Leadership',
            items: [
              'Adopt and apply AI-assisted software engineering practices in day-to-day development',
              'Establish practical AI workflows across the lifecycle: architecture analysis, coding, refactoring, testing, debugging, documentation and code review',
              'Use AI as an engineering accelerator to explore technical solutions, identify potential issues and reduce repetitive tasks',
              'Evaluate AI-generated solutions for architecture, security, performance, maintainability and production readiness',
              'Promote responsible AI usage while retaining human ownership of technical decisions and code quality',
            ],
          },
          {
            heading: 'Cloud & DevOps',
            items: [
              'Architect Azure-based solutions with CI/CD pipelines',
              'Implement monitoring, logging and performance optimization strategies',
            ],
          },
        ],
        tech: ['C# / .NET', 'ASP.NET Core', 'Azure', 'Azure DevOps', 'Angular', 'TypeScript', 'SQL Server', 'AI-Assisted Development'],
      },
      {
        title: 'Fullstack Software Developer',
        period: 'Jul 2023 – Apr 2025',
        summary:
          'Developed and maintained applications with cross-functional teams, ensuring high-quality code across the full software development lifecycle, from requirement analysis to deployment.',
        tech: ['C# / .NET', 'ASP.NET MVC', 'Azure', 'Azure DevOps', 'Angular', 'TypeScript', 'SQL Server'],
      },
    ],
  },
  {
    name: 'Austrian Post',
    location: 'Vienna, Austria',
    roles: [
      {
        title: 'Senior Software Developer',
        period: 'Aug 2021 – Jul 2023',
        summary:
          'Worked on core applications in the delivery systems area across a wide range of technologies, from maintaining legacy projects to building greenfield solutions.',
        tech: ['C#', 'ASP.NET Core', 'Azure', 'React', 'WCF', 'Kendo UI', 'T-SQL'],
      },
    ],
  },
  {
    name: 'Nativy Translations',
    location: 'Vienna, Austria',
    roles: [
      {
        title: 'Tech Lead',
        period: 'Jul 2020 – Jul 2021',
        summary:
          'Acting CTO: managed third-party services and Azure infrastructure, led code reviews, took part in the design and implementation of new features and owned the CI/CD deployment pipeline on Azure DevOps.',
        tech: ['Azure', 'Azure DevOps', 'AWS', 'CI/CD'],
      },
      {
        title: 'Software Developer',
        period: 'Aug 2018 – Jun 2020',
        summary:
          'Implemented new features, maintained and optimized legacy sections, provided technical solutions and took part in requirements, design, development, testing and documentation.',
        tech: ['ASP.NET Web API', 'SQL Server', 'Entity Framework', 'Selenium', 'xUnit', 'Knockout.js'],
      },
    ],
  },
  {
    name: 'Fidilio',
    location: 'Tehran, Iran',
    roles: [
      {
        title: 'Senior Software Developer',
        period: 'Aug 2016 – Aug 2018',
        summary:
          'Developed new features in an Agile team, acted as R&D lead (migration to .NET Core, Dapper, CI/CD with Jenkins, fast search with Algolia) and was responsible for code review.',
        tech: ['ASP.NET Core', 'ASP.NET MVC', 'SQL Server', 'Dapper', 'Angular', 'Jenkins'],
      },
    ],
  },
  {
    name: 'Hamrad',
    location: 'Karaj, Iran',
    roles: [
      {
        title: 'Software Developer',
        period: 'Feb 2015 – Jul 2016',
        summary: 'Developed web applications for clients, primarily in the online shopping domain.',
        tech: ['C#', 'ASP.NET MVC', 'Web API', 'SQL Server', 'jQuery'],
      },
    ],
  },
];

export const education = [
  {
    degree: 'Master of Science, Software Engineering',
    field: 'Data Management',
    school: 'Karaj Azad University (KIAU)',
    period: '2016 – 2018',
  },
  {
    degree: 'Bachelor of Science, Software Engineering',
    school: 'Karaj Azad University (KIAU)',
    period: '2010 – 2013',
  },
];

export const skillGroups = [
  {
    title: 'Backend',
    skills: [
      { name: 'C# / .NET', icon: 'simple-icons:dotnet', note: 'ASP.NET Core, MVC, Web API, WCF' },
      { name: 'SQL Server', icon: 'simple-icons:microsoftsqlserver', note: 'T-SQL, Entity Framework, Dapper' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular', icon: 'simple-icons:angular', note: 'TypeScript, RxJS' },
      { name: 'React', icon: 'simple-icons:react', note: 'JavaScript, TypeScript' },
      { name: 'TypeScript / JavaScript', icon: 'simple-icons:typescript', note: 'ES6+, Node, npm' },
      { name: 'HTML / CSS', icon: 'simple-icons:html5', note: 'Sass, Bootstrap, Tailwind' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', icon: 'simple-icons:microsoftazure', note: 'App Services, VMs, Storage, SQL' },
      { name: 'Azure DevOps', icon: 'simple-icons:azuredevops', note: 'CI/CD pipelines, Boards' },
      { name: 'AWS', icon: 'simple-icons:amazonwebservices', note: 'Cloud services' },
      { name: 'Git', icon: 'simple-icons:git', note: 'GitHub, branching strategies' },
    ],
  },
  {
    title: 'AI Engineering',
    skills: [
      { name: 'AI-Assisted Development', icon: 'lucide:sparkles', note: 'Coding, refactoring, testing, debugging' },
      { name: 'AI Engineering Workflows', icon: 'lucide:workflow', note: 'Architecture analysis, documentation, code review' },
      { name: 'Responsible AI Usage', icon: 'lucide:shield-check', note: 'Security, quality, human ownership' },
    ],
  },
];

export const practices = [
  'System Architecture',
  'Technical Leadership',
  'AI-Assisted Development',
  'Clean Code',
  'Design Patterns',
  'Code Review',
  'TDD',
  'Agile / Scrum',
  'Cross-Functional Teams',
];

export const interests = ['Lifelong learning', 'Learning German', 'Gym', 'Chess', 'Classical music', 'Movies'];
