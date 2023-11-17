import { Box, Container, Text } from "@chakra-ui/react";
import { appConfig } from "../../config";
import SectionHeading from "../elements/section-heading";

export default function About() {
  return (
    <Box id="about" as="section" bgColor="bg.opaque">
      <Container maxW="container.md" px="space-md" pt="space-xl" pb="space-2xl">
        <SectionHeading>About Me</SectionHeading>
        <Box>
          <Text maxW="container.sm" mx="auto" mb="space-md" textAlign="center">
            {appConfig.summary}
          </Text>
          <Box display="flex" justifyContent="center" alignItems="center" gap="space-lg">
            <Box
              display="flex"
              flexDirection="column"
              gap="1"
              border="1px"
              borderColor="border"
              borderRadius="sm"
              p="space-sm"
              textAlign="center"
              transitionDuration="fast"
              _hover={{ bgColor: "primary.light", "& > *": { color: "text.inverse" } }}
            >
              <Text color="primary.main" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
                Name
              </Text>
              <Text>{appConfig.info.name}</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="1"
              border="1px"
              borderColor="border"
              borderRadius="sm"
              p="space-sm"
              textAlign="center"
              transitionDuration="fast"
              _hover={{ bgColor: "primary.light", "& > *": { color: "text.inverse" } }}
            >
              <Text color="primary.main" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
                From
              </Text>
              <Text>{appConfig.info.from}</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="1"
              border="1px"
              borderColor="border"
              borderRadius="sm"
              p="space-sm"
              textAlign="center"
              transitionDuration="fast"
              _hover={{ bgColor: "primary.light", "& > *": { color: "text.inverse" } }}
            >
              <Text color="primary.main" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
                Languages
              </Text>
              <Text>{appConfig.info.languages}</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
