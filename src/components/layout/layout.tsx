import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBars } from "react-icons/fa6";
import { appConfig } from "../../config";
import { paths } from "../../paths";
import Footer from "./footer";
import NavContent from "./nav-content";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <NavContent display={{ base: "none", md: "contents" }} />
          <IconButton
            aria-label="Navigation"
            icon={<Icon as={FaBars} />}
            colorScheme="primary"
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bgColor="bg.opaque" color="text.primary">
              <DrawerCloseButton />
              <DrawerBody display="flex" flexDirection="column" alignItems="center" pt="space-2xl">
                <NavContent sx={{ "& ul": { flexDirection: "column", alignItems: "center", py: "space-lg" } }} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Container>
      </Box>
      <Box as="main" flexGrow="1">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
