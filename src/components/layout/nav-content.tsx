import { Box, BoxProps, Button } from "@chakra-ui/react";
import NextLink from "next/link";

type NavItemProps = {
  href: string;
  label: string;
};

function NavItem({ href, label }: NavItemProps) {
  return (
    <Box
      as={NextLink}
      href={href}
      fontWeight="semibold"
      textTransform="uppercase"
      letterSpacing="wider"
      transitionDuration="fast"
      _hover={{ color: "primary.main" }}
    >
      {label}
    </Box>
  );
}

export default function NavContent(boxProps: BoxProps) {
  return (
    <Box {...boxProps}>
      <Box as="ul" display="flex" gap="space-md">
        <NavItem href="#home" label="Home" />
        <NavItem href="#about" label="About" />
        <NavItem href="#skills" label="Skills" />
        <NavItem href="#portfolio" label="Portfolio" />
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
    </Box>
  );
}
