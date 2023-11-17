import { Box, Button, Container, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import ReactCountryFlag from "react-country-flag";
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
          px="space-md"
          py="space-sm"
        >
          <Box
            as={NextLink}
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
              as={NextLink}
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
              as={NextLink}
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
              as={NextLink}
              href="#skills"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              transitionDuration="fast"
              _hover={{ color: "primary.main" }}
            >
              Skills
            </Box>
            <Box
              as={NextLink}
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
            as={NextLink}
            href="#contact"
            colorScheme="primary"
            color="text.inverse"
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
      <Box as="footer" borderTop="1px" borderColor="border" bgColor="bg.opaque">
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxW="container.lg"
          px="space-md"
          py="space-sm"
          color="text.secondary"
          fontSize="sm"
        >
          <Text>
            Made in <ReactCountryFlag countryCode="EG" aria-label="Egypt" svg /> by {appConfig.info.name}
          </Text>
          <Text>
            Background images are{" "}
            <Link
              href="https://www.freepik.com/free-vector/egypt-pharaoh-tomb-treasury-full-gold-coins_4394150.htm#page=2&query=hieroglyphs&position=46&from_view=search&track=sph"
              target="_blank"
              rel="noreferrer"
            >
              by vectorpouch
            </Link>
            ,{" "}
            <Link
              href="https://www.freepik.com/free-vector/egyptian-pyramids-night-landscape-cartoon_4394561.htm"
              target="_blank"
              rel="noreferrer"
            >
              by vectorpocket
            </Link>
            , &{" "}
            <Link
              href="https://www.freepik.com/free-vector/illustration-data-analysis-graph_2825365.htm#query=my%20finance&position=24&from_view=search&track=ais&uuid=246a0300-eaea-4453-be80-ee6216e2d729"
              target="_blank"
              rel="noreferrer"
            >
              by rawpixel.com
            </Link>{" "}
            on Freepik - Many Thanks
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
