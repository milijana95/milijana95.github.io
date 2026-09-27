import type { ReactNode } from 'react';

export interface ExperienceEntry {
  company: string;
  period: string;
  role: string;
  highlights: readonly ReactNode[];
}

export const experience: readonly ExperienceEntry[] = [
  {
    company: 'BlueCat Networks',
    period: 'Jun. 2024 - present',
    role: 'Lead User Experience Researcher & UX Designer',
    highlights: [
      'At BlueCat Networks, I built the company’s first UX Research practice from the ground up, standardizing workflows, templates, and insight repositories across all products. I drive the quarterly research roadmap aligned to product strategy and lead end-to-end studies (moderated and unmoderated, qualitative and quantitative) that surface unmet needs, uncover why users prefer certain workflows (e.g., console vs. web UI), validate design directions, and resolve usability issues.',
      'To accelerate learning, I introduced ChatGPT-driven prototyping, allowing us to test MVP concepts with functional prototypes before design assets were ready. I’ve embedded research into every stage of the product lifecycle—from early design summits and problem framing to launch—linking insights directly to adoption, behavior, and PLG metrics.',
      'Beyond studies, I negotiate with research vendors (UserTesting, Maze, dScout, UserInterviews) to scale our practice, and collaborate closely with product, design, and engineering teams across time zones to improve cross-platform consistency and performance.',
      'In parallel, I also serve as lead product designer for BlueCat’s Edge product, managing design tickets, and ensuring research directly shapes product direction.',
    ],
  },
  {
    company: 'Microsoft (Fixed - Term Contract)',
    period: 'Feb. 2022 - Aug. 2023',
    role: 'User Experience Researcher & Designer',
    highlights: [
      <>
        <strong>Copilot in Word</strong> – Led qualitative research from a hackathon prototype to a
        shipped product. Recruited users, ran concept value and usability studies, and provided
        insights that shaped intuitive flows and informed which AI-generated elements users valued
        most.
      </>,
      <>
        <strong>Viva Sales Copilot</strong> – Researched CRM data workflows through mixed-methods
        studies; uncovered pain points in manual document creation, built the case for generative AI
        automation, and delivered insights that guided CRM product enhancements and cross-team
        decision making.
      </>,
      <>
        <strong>Designer in Word Online</strong> – Identified and addressed usability gaps through
        interviews, usability testing, and competitive analysis. Introduced diary studies to capture
        real-world usage, which informed strategic planning and improved the overall design
        experience. Collaborated with product design team, and designed templates to help users start
        with document creation process.
      </>,
    ],
  },
  {
    company: 'Roger Directors',
    period: 'Jan. 2021 - Dec. 2021',
    role: 'Product Designer',
    highlights: [
      'Delivered design solutions that meet project-specific needs, demonstrating an understanding of user behaviors for positive brand outcomes.',
      'Supported the brand’s campaigns by leveraging my graphic design skills, ensuring a holistic approach to creating compelling visual elements.',
    ],
  },
  {
    company: 'McCann / Drive Agency',
    period: 'Sep. 2020 - Jan. 2021',
    role: 'Digital Designer',
    highlights: [
      'Craft social media material for digital campaigns for various brands.',
      'Contributed to enhancing the visual representation and brand messaging, leaving a positive imprint on the campaigns, and effectively engaging the target audience.',
    ],
  },
  {
    company: 'Upwork',
    period: '2017 - 2020',
    role: 'Freelancer',
    highlights: [
      'Worked as a product designer on projects for various industries based in the USA.',
      'Delivered products that are both visually appealing and effortlessly usable.',
    ],
  },
  {
    company: 'No Solution',
    period: 'Mar. 2018 - Jun 2018',
    role: 'Intership',
    highlights: [],
  },
];
