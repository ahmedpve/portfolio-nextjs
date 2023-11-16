import { Box, Button, Container, Text } from "@chakra-ui/react";
import Link from "next/link";
import { appConfig } from "../../config";
import { paths } from "../../paths";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minH="100vh" bgColor="bg.body" color="text.primary">
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="banner"
        backdropFilter="blur(5px)"
        borderBottom="1px"
        borderColor="primary.main"
        bgColor="bg.opaque"
      >
        <Container
          as="nav"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="space-lg"
          maxW="container.lg"
          py="space-sm"
        >
          <Box
            as={Link}
            href={paths.index}
            display="inline-block"
            color="primary.main"
            fontFamily="logo"
            fontSize="3xl"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            {appConfig.title}
            <Text as="span" color="text.primary" fontSize="md">
              .com
            </Text>
          </Box>
          <Box as="ul" display="flex" gap="space-md">
            <Box
              as={Link}
              href="#home"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              transitionDuration="fast"
              _hover={{ color: "primary.main" }}
            >
              Home
            </Box>
            <Box
              as={Link}
              href="#about"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              transitionDuration="fast"
              _hover={{ color: "primary.main" }}
            >
              About
            </Box>
            <Box
              as={Link}
              href="#portfolio"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              transitionDuration="fast"
              _hover={{ color: "primary.main" }}
            >
              Portfolio
            </Box>
          </Box>
          <Button
            as={Link}
            href="#contact"
            colorScheme="primary"
            color="bg.body"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Contact Me
          </Button>
        </Container>
      </Box>
      <Box as="main" flexGrow="1">
        {children}
      </Box>
      <Box as="footer" borderTop="1px" borderColor="primary.main">
        <Container maxW="container.lg" py="space-sm" textAlign="center">
          {appConfig.copyright}
        </Container>
      </Box>
    </Box>
  );
}
