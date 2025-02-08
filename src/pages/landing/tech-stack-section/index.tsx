import { Container, Title, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import {
  IconBrandReact,
  IconBrandPython,
  IconDatabase,
  IconServer,
  IconLock,
  IconChartDots,
} from '@tabler/icons-react';
import classes from './TechStackSection.module.css';

const technologies = [
  {
    icon: IconBrandReact,
    title: 'Frontend',
    description: 'Built with React Native for cross-platform mobile development (iOS & Android)',
  },
  {
    icon: IconBrandPython,
    title: 'Backend',
    description: 'Powered by Django REST API for robust server-side operations',
  },
  {
    icon: IconDatabase,
    title: 'Database',
    description: 'PostgreSQL for reliable and scalable data storage',
  },
  {
    icon: IconServer,
    title: 'Hosting',
    description: 'Deployed on VPS with Ubuntu, Nginx, and Docker with Compose',
  },
  {
    icon: IconLock,
    title: 'Authentication',
    description: 'Secure access with Django authentication and OAuth integration',
  },
  {
    icon: IconChartDots,
    title: 'Analytics',
    description: 'Machine learning forecasting using Python (Scikit-learn/Pandas)',
  },
];

export function TechStackSection() {
  const items = technologies.map((technology) => (
    <div key={technology.title} className={classes.item}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <technology.icon style={{ width: '1.5rem', height: '1.5rem' }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {technology.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {technology.description}
      </Text>
    </div>
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Tech Stack</Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Built with modern technologies to ensure reliability, scalability, and excellent user experience.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
} 