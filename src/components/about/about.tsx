import { Box, Card, Container, Heading, Text } from "@chakra-ui/react";
import { appConfig } from "../../config";

export default function About() {
  return (
    <Box as="section" py="space-xl">
      <Container maxW="container.md">
        <Heading
          as="h2"
          size="md"
          mb="space-md"
          color="primary.main"
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          About Me
        </Heading>
        <Card bgColor="inherit" color="inherit">
          <Box display="flex" justifyContent="center" alignItems="center" gap="space-md" mb="space-md">
            <Box
              display="flex"
              flexDirection="column"
              gap="1"
              border="1px"
              borderColor="border"
              borderRadius="xl"
              p="space-sm"
              textAlign="center"
            >
              <Heading as="h3" color="primary.main" fontSize="sm" fontWeight="medium" textTransform="uppercase">
                Name
              </Heading>
              <Text>{appConfig.info.name}</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="1"
              border="1px"
              borderColor="border"
              borderRadius="xl"
              p="space-sm"
              textAlign="center"
            >
              <Heading as="h3" color="primary.main" fontSize="sm" fontWeight="medium" textTransform="uppercase">
                From
              </Heading>
              <Text>{appConfig.info.from}</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="1"
              border="1px"
              borderColor="border"
              borderRadius="xl"
              p="space-sm"
              textAlign="center"
            >
              <Heading as="h3" color="primary.main" fontSize="sm" fontWeight="medium" textTransform="uppercase">
                Languages
              </Heading>
              <Text>{appConfig.info.languages}</Text>
            </Box>
          </Box>
          <Text maxW="container.sm" m="auto" textAlign="center">
            {appConfig.summary}
          </Text>
        </Card>
      </Container>
    </Box>
  );
}
