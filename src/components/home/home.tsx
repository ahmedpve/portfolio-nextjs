import { Avatar, Box, Center, Container, Heading, Icon, IconButton, Link, Text, keyframes } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import profileImg from "../../../public/images/profile-img.jpg";
import { appConfig } from "../../config";
import useTypingText from "../../hooks/use-typing-text";

const techs = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Redux",
  "Chakra UI",
  "Material UI",
  "Tailwind CSS",
  "Sass",
  "Mapbox",
  "Apex Charts",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Postman",
  "Figma",
];

const sliderAnimation = keyframes`
  0% {
    transform: translateX(0%)
  }
  100% {
    transform: translateX(-100%)
  }
`;

export default function Home() {
  const { typingText } = useTypingText(appConfig.typingIntroHeading);
  const sliderAnimationStyles = `${sliderAnimation} 200s linear infinite`;

  return (
    <Box
      id="home"
      as="section"
      overflow="hidden"
      bgImage="url('/images/bg-home.webp')"
      bgAttachment="fixed"
      bgPosition="bottom"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box minH="calc(100vh - 2rem)" bgColor="bg.overlay">
        <Container maxW="container.lg" pt="calc(10rem + 1vw)">
          <Center flexDirection="column" gap="space-lg">
            <Avatar
              src={profileImg.src}
              name={appConfig.info.name}
              showBorder={true}
              w="40"
              h="40"
              border="2px"
              bgColor="primary.main"
              borderColor="#ffffff !important"
            />
            <Heading as="h1" size="xl" textAlign="center" letterSpacing="wide">
              Hi 👋 I am{" "}
              <Text as="span" color="primary.main">
                A{typingText}
              </Text>
            </Heading>
            <Text color="text.secondary" fontSize="xl" textAlign="center">
              {appConfig.introText}
            </Text>
            <Box display="flex" alignItems="center" gap="space-md">
              <IconButton
                as={Link}
                href={appConfig.social.github}
                aria-label="Github profile"
                icon={<Icon as={FaGithub} boxSize="5" />}
                colorScheme="primary"
                border="1px"
                borderColor="border"
                borderRadius="2xl"
                bgColor="bg.body"
              />
              <IconButton
                as={Link}
                href={appConfig.social.linkedin}
                aria-label="LinkedIn profile"
                icon={<Icon as={FaLinkedin} boxSize="5" />}
                colorScheme="primary"
                border="1px"
                borderColor="border"
                borderRadius="2xl"
                bgColor="bg.body"
              />
              <IconButton
                as={Link}
                href={appConfig.social.facebook}
                aria-label="Facebook"
                icon={<Icon as={FaFacebook} boxSize="5" />}
                colorScheme="primary"
                border="1px"
                borderColor="border"
                borderRadius="2xl"
                bgColor="bg.body"
              />
            </Box>
          </Center>
        </Container>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        h="2rem"
        bgColor="primary.main"
        color="text.inverse"
        fontWeight="medium"
        whiteSpace="nowrap"
      >
        <Text animation={sliderAnimationStyles}>
          {[...techs, ...techs, ...techs, ...techs, ...techs, ...techs, ...techs, ...techs, ...techs, ...techs].map(
            (t, i) => (
              <Box as="span" key={i}>
                {t}&nbsp;&nbsp;*&nbsp;&nbsp;
              </Box>
            )
          )}
        </Text>
      </Box>
    </Box>
  );
}
