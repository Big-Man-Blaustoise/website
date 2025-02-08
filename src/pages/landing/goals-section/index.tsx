import { Container, Title, Text, List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import classes from './GoalsSection.module.css';

export function GoalsSection() {
  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Goals & Objectives</Title>
      
      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Our mission is to enhance the gym experience for CMU students by providing real-time occupancy data and predictive analytics.
        </Text>
      </Container>

      <Container size={800} mt={40}>
        <List
          spacing="xl"
          size="lg"
          center
          icon={
            <ThemeIcon size={28} radius="xl" color="blue">
              <IconCircleCheck style={{ width: '1rem', height: '1rem' }} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text size="lg">Enable informed decision-making for gym visits through real-time occupancy data</Text>
          </List.Item>
          
          <List.Item>
            <Text size="lg">Collect and visualize crowdedness data for both immediate updates and historical analysis</Text>
          </List.Item>
          
          <List.Item>
            <Text size="lg">Implement predictive analytics to forecast gym occupancy based on historical patterns</Text>
          </List.Item>
          
          <List.Item>
            <Text size="lg">Ensure secure and authenticated access to maintain data integrity and user privacy</Text>
          </List.Item>
        </List>
      </Container>
    </Container>
  );
} 