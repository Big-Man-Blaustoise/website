import { Button, Container, SimpleGrid, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <Container className={classes.root}>
        <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
          {/* <Image src={image.src} className={classes.mobileImage} /> */}
          <div>
            <Title className={classes.title}>
              You have found a secret place.
            </Title>
            <Text c="dimmed" size="lg">
              Oops! Looks like the page you were searching for has gone on a
              linguistic adventure. How about we embark on a language learning
              journey instead?
            </Text>
            <Link to="/">
              <Button
                variant="outline"
                size="md"
                mt="xl"
                className={classes.control}
              >
                Get back to learning English
              </Button>
            </Link>
          </div>
          {/* <Image src={image.src} className={classes.desktopImage} /> */}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default NotFound;
