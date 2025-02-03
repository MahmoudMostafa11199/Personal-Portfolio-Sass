import {
  Code,
  Devices,
  GitBranch,
  Layout,
  Speedometer,
  Plugs,
} from '@phosphor-icons/react';

export const services = [
  {
    id: 'service-1',
    title: 'Front-end Development',
    description:
      'Building responsive, high-quality web applications using the latest technologies, ensuring a robust and user-centric experience.',
    icon: Code,
  },
  {
    id: 'service-2',
    title: 'UI/UX Development',
    description:
      'Developing modern, user-friendly interfaces that are visually appealing and function seamlessly across devices.',
    icon: Layout,
  },
  {
    id: 'service-3',
    title: 'Performance Optimization',
    description:
      'Boosting website performance by reducing load times, optimizing code, and ensuring a fast, efficient user experience.',
    icon: Speedometer,
  },
  {
    id: 'service-4',
    title: 'API Integration',
    description:
      'Seamlessly integrating third-party services such as booking systems, databases, or payment gateways to enhance functionality.',
    icon: Plugs,
  },
  {
    id: 'service-5',
    title: 'Responsive Design',
    description:
      'Crafting designs that adapt flawlessly to all screen sizes, delivering a consistent and optimized experience across all devices.',
    icon: Devices,
  },
  {
    id: 'service-6',
    title: 'Version Control',
    description:
      'Leveraging tools like Git to efficiently manage code changes, enable seamless collaboration, and maintain project integrity.',
    icon: GitBranch,
  },
];
