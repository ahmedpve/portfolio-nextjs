import { As, Avatar, Box, Center, Container, Heading, Icon, IconButton, Link, Text, keyframes } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import profileImg from "../../../public/images/profile-img.jpg";
import { appConfig } from "../../config";
import useAnimateOnScroll from "../../hooks/use-animate-onscroll";
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

type SocialButtonProps = {
  icon: As;
  href: string;
  label: string;
};

function SocialButton({ icon, href, label }: SocialButtonProps) {
  return (
    <IconButton
      as={Link}
      href={href}
      target="_blank"
      aria-label={label}
      icon={<Icon as={icon} zIndex="1" boxSize="5" transitionDuration="slow" />}
      colorScheme="primary"
      overflow="hidden"
      border="1px"
      borderColor="border"
      borderRadius="2xl"
      bgColor="bg.body"
      sx={{
        "&::before": {
          content: "''",
          display: "inline-block",
          position: "absolute",
          left: "0",
          w: "0",
          h: "full",
          borderRadius: "2xl",
          bgColor: "primary.main",
          transitionDuration: "slow",
        },
        "&:hover::before": { w: "full" },
        "&:hover svg": { color: "text.inverse" },
        "&:not(:hover)::before": { left: "auto", right: "0" },
      }}
    />
  );
}

export default function Home() {
  const { typingText } = useTypingText(appConfig.typingIntroHeading);
  const { animatedElement: animatedAvatar } = useAnimateOnScroll<HTMLDivElement>("slide-right");
  const { animatedElement: animatedHeading } = useAnimateOnScroll<HTMLDivElement>("slide-left");
  const { animatedElement: animatedParagraph } = useAnimateOnScroll<HTMLDivElement>("slide-up");
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
              ref={animatedAvatar}
              className="slide-right-transition"
              src={profileImg.src}
              name={appConfig.info.name}
              showBorder={true}
              w="40"
              h="40"
              border="2px"
              bgColor="primary.main"
              borderColor="#ffffff !important"
            />
            <Heading
              ref={animatedHeading}
              className="slide-left-transition"
              as="h1"
              size="xl"
              textAlign="center"
              letterSpacing="wide"
            >
              Hi 👋 I am{" "}
              <Text as="span" color="primary.main">
                A{typingText}
              </Text>
            </Heading>
            <Text
              ref={animatedParagraph}
              className="slide-up-transition"
              color="text.secondary"
              fontSize="xl"
              textAlign="center"
            >
              {appConfig.introText}
            </Text>
            <Box display="flex" alignItems="center" gap="space-md">
              <SocialButton icon={FaGithub} href={appConfig.social.github} label="Github Profile" />
              <SocialButton icon={FaLinkedin} href={appConfig.social.linkedin} label="LinkedIn Profile" />
              <SocialButton icon={FaFacebook} href={appConfig.social.facebook} label="Facebook Profile" />
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
