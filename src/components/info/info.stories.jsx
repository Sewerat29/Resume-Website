import Info from './info';

const meta = {
  component: Info,
};

export default meta;

const sections = [
  {
    title: 'Experience',
    items: [
      {
        institution: 'All-Team',
        years: '2023',
        description: 'A 1-week program created by the Regional University Network (RUN-EU), co-created by the European Union, in which we were taught the fundamentals of AI, robotics and scientific writting. ',
        keywords: ['Leadership', 'Project Management', 'Angular']
      }
    ]
  },
  {
    title: 'Education',
    items: [
      {
        institution: 'Instituto Politécnico do Cávado e do Ave',
        course: 'Engineering and devolpment of Digital Games',
        years: '2022 - Ongoing',
        description: 'While focused on Digital Games, this degree encompasses a wide spectrum of topics withing computer science. Topics such as maths, web development and computer vision.',
        keywords: ['JavaScript', 'React', 'CSS']
      },
      {
        institution: 'Instituto Politécnico do Cávado e do Ave',
        course: '2AI Summer School - Artificial Inteligence',
        years: '2023',
        description: 'The goal of the project was to develop a video game which used OpenAI’s (Chatgpt) api in order to teach both kids and parents about auditory deseases.',
        keywords: ['Video Game Development', 'React', 'CSS']
      },
      {
        institution: 'RUN-EU - Short Advanced Program (SAP)',
        course: 'RUN-EU Research Challenge Artficial Inteligence',
        years: '2023',
        description: 'A 1-week program created by the Regional University Network (RUN-EU), co-created by the European Union, in which we were taught the fundamentals of AI, robotics and scientific writting. ',
        keywords: ['AI', 'Robotics', 'Scientific Writting']
      },
    ]
  },
  {
    title: 'Extras',
    items: [
      {
        institution: 'X-Geeks Geekathon',
        years: '2022',
        description: 'Theme: Turism',
        keywords: ['App Development', 'React', 'CSS']
      },
      {
        institution: 'IPCA Game Jam 2023',
        years: '2023',
        description: 'Participated in the IPCA Game Jam.',
        keywords: ['Video Game Development', 'Unity', 'C#']
      },
      {
        institution: 'MAD Game Jam 2023',
        years: '2023',
        description: 'Participated in the MAD Game Jam.',
        keywords: ['Video Game Development', 'Unity', 'C#']
      },
      {
        institution: 'Staff Member - IPCA Game Jam 2024',
        years: '2024',
        description: 'Helped organize the IPCA Game Jam.',
        keywords: ['Leadership', 'Management']
      },
    ]
  }
];

export const Default = {
  args: {
    sections
  }
};
