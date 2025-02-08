import { Container, Title, SimpleGrid, Text, ThemeIcon, rem } from '@mantine/core';
import {
  IconUserCheck,
  IconGauge,
  IconChartBar,
  IconChartLine,
  IconDeviceMobile,
  IconBellRinging,
} from '@tabler/icons-react';
import classes from './FeaturesSection.module.css';

const features = [
  {
    icon: IconUserCheck,
    title: 'User Authentication',
    description: 'Secure access through CMU credentials or separate account system with optional OAuth integration.',
  },
  {
    icon: IconGauge,
    title: 'Manual Crowdedness Reporting',
    description: 'Submit gym crowdedness levels with predefined ranges from Low (1-25%) to Very Crowded (76-100%).',
  },
  {
    icon: IconChartBar,
    title: 'Live Crowdedness Display',
    description: 'View aggregated real-time crowdedness reports with visual representations for each gym.',
  },
  {
    icon: IconChartLine,
    title: 'Historical Trends & Analysis',
    description: 'Access past crowdedness trends with detailed charts and graphs for better visualization.',
  },
  {
    icon: IconDeviceMobile,
    title: 'Forecasting Feature',
    description: 'Machine learning-based predictions for expected gym occupancy based on historical data.',
  },
  {
    icon: IconBellRinging,
    title: 'Notifications & Alerts',
    description: 'Opt-in push notifications for updates on gym crowdedness levels and wait times.',
  },
];

export function FeaturesSection() {
  const items = features.map((feature) => (
    <div key={feature.title} className={classes.feature}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="filled"
        color="#C41230"
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500} c="#121212">
        {feature.title}
      </Text>
      <Text c="#6D6E71" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Key Features</Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Experience a comprehensive set of features designed to help you make informed decisions about your gym visits.
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
