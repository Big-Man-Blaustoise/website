import { Container, Title, Text, Button, Group, Image } from '@mantine/core';
import { IconDeviceMobile, IconChartBar } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import classes from './HeroSection.module.css';

const screenshots = [
  '/screenshots/IMG_9145.PNG',
  '/screenshots/IMG_9146.PNG',
  '/screenshots/IMG_9147.PNG',
  '/screenshots/IMG_9148.PNG',
  '/screenshots/IMG_9149.PNG',
];

export function HeroSection() {
  const slides = screenshots.map((screenshot) => (
    <Carousel.Slide key={screenshot}>
      <Image src={screenshot} className={classes.screenshot} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size="xl" className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <Text component="span" className={classes.highlight} inherit>
              SpotMe
            </Text>
            {' '}CMU Gym Tracker
          </Title>

          <Text className={classes.description}>
            Real-time gym occupancy tracking for Tepper and Cohon gyms. Make informed decisions about your workout timing with live updates, historical trends, and future forecasts.
          </Text>

          <Group mt={30}>
            <Button
              size="xl"
              className={classes.control}
              leftSection={<IconDeviceMobile size={20} />}
            >
              Download App
            </Button>
            <Button
              size="xl"
              variant="outline"
              className={classes.control}
              leftSection={<IconChartBar size={20} />}
            >
              View Live Status
            </Button>
          </Group>
        </div>

        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            indicators: classes.indicators,
            indicator: classes.indicator,
          }}
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap="md"
          align="start"
          slidesToScroll={1}
        >
          {slides}
        </Carousel>
      </Container>
    </div>
  );
}
