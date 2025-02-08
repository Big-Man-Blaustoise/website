import { MantineProvider, AppShell, Container, Title, Text, Button, Group, Stack, Card, SimpleGrid, rem, Image, Box } from '@mantine/core';
import { IconUsers, IconChartHistogram, IconBellRinging, IconBrain } from '@tabler/icons-react';

// Import screenshots
import screenshot1 from './assets/screenshots/IMG_9145.PNG';
import screenshot2 from './assets/screenshots/IMG_9146.PNG';
import screenshot3 from './assets/screenshots/IMG_9147.PNG';
import screenshot4 from './assets/screenshots/IMG_9148.PNG';
import screenshot5 from './assets/screenshots/IMG_9149.PNG';

const features = [
  {
    icon: IconUsers,
    title: 'Real-time Crowdedness',
    description: 'Get live updates on gym occupancy levels at Tepper and Cohon gyms through user-reported data.',
  },
  {
    icon: IconChartHistogram,
    title: 'Historical Trends',
    description: 'View past crowdedness patterns and make informed decisions about your workout timing.',
  },
  {
    icon: IconBrain,
    title: 'Smart Predictions',
    description: 'ML-powered forecasting helps you predict the best times to visit the gym.',
  },
  {
    icon: IconBellRinging,
    title: 'Smart Notifications',
    description: 'Receive alerts when the gym is less crowded or approaching peak hours.',
  },
];

export default function App() {
  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
      >
        <AppShell.Header p="xs">
          <Container size="lg">
            <Group justify="space-between">
              <Title order={1} size="h3">CMU Gym Tracker</Title>
              <Group>
                <Button variant="subtle">About</Button>
                <Button variant="subtle">Features</Button>
                <Button variant="subtle">Team</Button>
                <Button variant="filled">Try Demo</Button>
              </Group>
            </Group>
          </Container>
        </AppShell.Header>

        <AppShell.Main>
          <Container size="lg">
            {/* Hero Section */}
            <Stack gap="xl" my={50}>
              <Box ta="center">
                <Title order={1} size="h1" mb="md">
                  Never Wait for Gym Equipment Again
                </Title>
                <Text size="lg" c="dimmed" mb="xl" maw={600} mx="auto">
                  Track real-time gym crowdedness at CMU's Tepper and Cohon facilities. 
                  Make data-driven decisions about your workout timing.
                </Text>
                <Group justify="center">
                  <Button size="lg">Get Started</Button>
                  <Button size="lg" variant="light">Learn More</Button>
                </Group>
              </Box>

              {/* Screenshots Section */}
              <Box>
                <Title order={2} size="h2" ta="center" mb="xl">
                  App Screenshots
                </Title>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                  <Image radius="md" src={screenshot1} alt="App Screenshot 1" />
                  <Image radius="md" src={screenshot2} alt="App Screenshot 2" />
                  <Image radius="md" src={screenshot3} alt="App Screenshot 3" />
                  <Image radius="md" src={screenshot4} alt="App Screenshot 4" />
                  <Image radius="md" src={screenshot5} alt="App Screenshot 5" />
                </SimpleGrid>
              </Box>

              {/* Features Section */}
              <Box>
                <Title order={2} size="h2" ta="center" mb="xl">
                  Key Features
                </Title>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                  {features.map((feature) => (
                    <Card key={feature.title} shadow="sm" padding="xl" radius="md">
                      <feature.icon size={rem(50)} stroke={1.5} />
                      <Text size="lg" fw={500} mt="md">
                        {feature.title}
                      </Text>
                      <Text size="sm" c="dimmed" mt="sm">
                        {feature.description}
                      </Text>
                    </Card>
                  ))}
                </SimpleGrid>
              </Box>

              {/* Team Section */}
              <Box>
                <Title order={2} size="h2" ta="center" mb="xl">
                  Meet the Team
                </Title>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
                  <Card shadow="sm" padding="xl" radius="md">
                    <Text size="lg" fw={500}>John Doe</Text>
                    <Text size="sm" c="dimmed">Frontend Developer</Text>
                  </Card>
                  <Card shadow="sm" padding="xl" radius="md">
                    <Text size="lg" fw={500}>Jane Smith</Text>
                    <Text size="sm" c="dimmed">Backend Developer</Text>
                  </Card>
                  <Card shadow="sm" padding="xl" radius="md">
                    <Text size="lg" fw={500}>Alex Johnson</Text>
                    <Text size="sm" c="dimmed">ML Engineer</Text>
                  </Card>
                </SimpleGrid>
              </Box>
            </Stack>
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
