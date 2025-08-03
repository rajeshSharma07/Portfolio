import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    title: 'SamuhikSauda System',
    description:
      'A platform that connects street vendors with trusted raw material suppliers, improving accessibility and transparency.',
    image: '/Vendor.png', // 🔁 make sure image is in /public/projects
    tech: ['React', 'Firebase',],
    github: 'https://github.com/rajeshSharma07/Tutedude-Hackthon-Project',
    live: 'https://tutedude-hackthon-project.vercel.app',
    details: {
      problem:
        'Street food vendors struggle to find reliable and nearby raw material suppliers. There’s a lack of structured platforms for communication.',
      solution:
        'Developed a vendor-supplier system allowing vendors to register, find suppliers, and communicate directly. Firebase was used for real-time data syncing and authentication.',
      features: [
        'Firebase Authentication',
        'Vendor-supplier mapping',
        'Product listings & contact options',
        'Real-time data updates',
      ],
      impact:
        'Promoted local business connectivity and streamlined procurement for small-scale vendors.',
    },
  },
  {
    title: 'Online Video Tracking System',
    description:
      'A full-stack platform to manage and track video uploads, with real-time monitoring and secure user access.',
    image: '/videoTracking.png', // 🔁 change to your image path
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/rajeshSharma07/video-tracking-system',
    live: 'https://client-plum-kappa.vercel.app/',
    details: {
      problem:
        'Managing large video files and tracking their usage is complex and often unscalable.',
      solution:
        'Created a MERN app with MongoDB for metadata, secure React frontend, and Express APIs for seamless video tracking.',
      features: [
        'Upload & manage videos',
        'Real-time progress tracking',
        'Authentication & protected routes',
        'Responsive UI',
      ],
      impact:
        'Improved the video workflow for creators and teams managing bulk video content.',
    },
  },
  {
    title: 'E-Commerce Website with AI',
    description:
      'A modern e-commerce store with smart filtering, secure checkout, and admin controls for inventory management.',
    image: '/E-commerce.png', // 🔁 change to your image path
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/rajeshSharma07/E-commerce-Ai',
    live: 'https://five-onecart-frontendone.onrender.com/login',
    details: {
      problem:
        'Users often face poor UX while browsing and managing carts. Many local e-commerce solutions lack performance and personalization.',
      solution:
        'Built a fast e-commerce app with filtering, cart management, secure login using JWT, and AI-enhanced product views.',
      features: [
        'Product browsing & search',
        'Cart management',
        'JWT-based auth',
        'Responsive UI with Tailwind',
      ],
      impact:
        'Offered a smooth shopping experience, reduced bounce rate, and improved product discoverability.',
    },
  },
];
