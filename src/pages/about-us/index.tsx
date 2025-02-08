import { Box, Container, Flex, Text, Title } from "@mantine/core";

const AboutUs = () => {
  return (
    <Container maw={1200}>
      <Box m={20}>
        <Flex direction="column" gap={20}>
          <Title order={2}>About Us</Title>
          <Text>
            Welcome to our innovative language learning project, where the
            future of education meets the power of artificial intelligence. At
            Linguist AI, we are passionate about helping you master new
            languages with ease, precision, and personalization.
          </Text>
          <Title order={3}>Our Mission</Title>
          <Text>
            Our mission is to transform the way people learn languages by
            harnessing the capabilities of generative AI and Natural Language
            Processing (NLP). We believe that language learning should be a
            dynamic, engaging, and personalized experience, and that's precisely
            what we aim to deliver.
          </Text>
          <Title order={3}>Personalized Learning</Title>
          <Text>
            Unlike traditional language learning methods, we understand that
            everyone's language proficiency and learning pace are unique. That's
            why we've developed a cutting-edge platform that adapts to your
            language level. Our AI-driven system constantly evaluates your
            progress and tailors the learning experience to introduce words and
            concepts that align with your current skills, ensuring that you're
            always challenged and engaged.
          </Text>
          <Title order={3}>Building Your Vocabulary</Title>
          <Text>
            One of the keys to mastering any language is expanding your
            vocabulary. Our platform goes beyond simple memorization. We focus
            on comprehensive wordlists, including academic word lists, ensuring
            you acquire language skills that are valuable in various contexts.
            You'll not only learn everyday words but also enrich your language
            skills with words that are vital in academic, professional, and
            intellectual settings.
          </Text>
          <Title order={3}>Our Team</Title>
          <Text>
            As you progress in your language journey, you'll undoubtedly come
            across words that are new to you or need more practice. Our platform
            allows you to save these words effortlessly, creating your
            personalized word bank. You can revisit and practice these words at
            your own pace, making sure you grasp them thoroughly. At Linguist
            AI, we're dedicated to making language learning an exciting and
            transformative experience. Whether you're a student, a professional,
            or simply someone with a passion for languages, our platform is here
            to guide you on your journey to linguistic excellence. Join us
            today, and let's embark on a language learning adventure together.
            We can't wait to be part of your success story.
          </Text>
          <Text>
            We are a group of five people studying at Bilkent University.
          </Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default AboutUs;
