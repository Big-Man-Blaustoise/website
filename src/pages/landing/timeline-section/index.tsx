import { Container, Title, Timeline, Text, ThemeIcon } from '@mantine/core';
import { IconFlag, IconCode, IconDatabase, IconBellRinging } from '@tabler/icons-react';
import classes from './TimelineSection.module.css';

export function TimelineSection() {
  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Deployment Plan</Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Our structured approach to delivering a robust and feature-complete application.
        </Text>
      </Container>

      <Container size={800} mt={40}>
        <Timeline active={1} bulletSize={24} lineWidth={2}>
          <Timeline.Item
            bullet={
              <ThemeIcon size={24} radius="xl" color="blue">
                <IconFlag style={{ width: '0.8rem', height: '0.8rem' }} />
              </ThemeIcon>
            }
            title="Phase 1: MVP Development"
          >
            <Text c="dimmed" size="sm">4-6 weeks</Text>
            <Text size="sm" mt={4}>
              • User authentication & gym selection<br />
              • Manual self-reporting functionality<br />
              • Live crowdedness display
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={
              <ThemeIcon size={24} radius="xl" color="blue">
                <IconDatabase style={{ width: '0.8rem', height: '0.8rem' }} />
              </ThemeIcon>
            }
            title="Phase 2: Data Collection & Refinements"
          >
            <Text c="dimmed" size="sm">4 weeks</Text>
            <Text size="sm" mt={4}>
              • Implement historical data storage<br />
              • Display past trends with graphs<br />
              • Gather initial data for forecasting model
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={
              <ThemeIcon size={24} radius="xl" color="blue">
                <IconCode style={{ width: '0.8rem', height: '0.8rem' }} />
              </ThemeIcon>
            }
            title="Phase 3: Forecasting & Notifications"
          >
            <Text c="dimmed" size="sm">4 weeks</Text>
            <Text size="sm" mt={4}>
              • Develop predictive analytics feature<br />
              • Implement push notifications<br />
              • UI/UX refinements
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={
              <ThemeIcon size={24} radius="xl" color="blue">
                <IconBellRinging style={{ width: '0.8rem', height: '0.8rem' }} />
              </ThemeIcon>
            }
            title="Launch & Monitoring"
          >
            <Text c="dimmed" size="sm">Ongoing</Text>
            <Text size="sm" mt={4}>
              • Beta testing with initial user group<br />
              • Full launch across CMU campus<br />
              • Continuous monitoring and improvements
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>
    </Container>
  );
} 