import { Container, Title, SimpleGrid, Text, Image } from '@mantine/core';
import classes from './TeamSection.module.css';

const team = [
  {
    name: 'Amanda Qi',
    role: 'Full Stack Developer',
    image: '/team/amanda.jpeg',
  },
  {
    name: 'Nate Odonkor',
    role: 'Full Stack Developer',
    image: '/team/nate.jpg',
  },
  {
    name: 'Tolga Ozgun',
    role: 'Full Stack Developer',
    image: '/team/tolga.jpeg',
  },
];

export function TeamSection() {
  const members = team.map((member) => (
    <div key={member.name} className={classes.member}>
      <Image src={member.image} className={classes.avatar} />
      <Text size="lg" fw={500} mt="sm">
        {member.name}
      </Text>
      <Text size="sm" c="dimmed">
        {member.role}
      </Text>
    </div>
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Meet Our Team</Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          A passionate team of developers from Carnegie Mellon University working to improve the gym experience for everyone.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={40} mt={50}>
        {members}
      </SimpleGrid>
    </Container>
  );
} 