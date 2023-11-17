import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box as="section" bgImage="url('/images/bg-contact.webp')" bgAttachment="fixed" bgRepeat="no-repeat" bgSize="cover">
      <Box bgColor="bg.overlay">
        <Container maxW="container.lg" px="space-md" pt="space-xl" pb="space-2xl">
          <Heading
            as="h2"
            size="md"
            mb="space-lg"
            color="primary.main"
            textAlign="center"
            textTransform="uppercase"
            letterSpacing="widest"
          >
            Contact Me
          </Heading>
          <Box
            as="form"
            display="flex"
            flexDirection="column"
            gap="space-md"
            maxW="lg"
            m="auto"
            border="1px"
            borderColor="border"
            borderRadius="md"
            p="space-md"
            bgColor="bg.opaque"
          >
            <FormControl>
              <FormLabel color="primary.main">Name</FormLabel>
              <Input type="text" placeholder="Your name..." required />
            </FormControl>
            <FormControl>
              <FormLabel color="primary.main">Email</FormLabel>
              <Input type="email" placeholder="Your email..." required />
            </FormControl>
            <FormControl>
              <FormLabel color="primary.main">Subject</FormLabel>
              <Input type="text" placeholder="Message subject..." required />
            </FormControl>
            <FormControl>
              <FormLabel color="primary.main">Message</FormLabel>
              <Textarea placeholder="Your message..." required />
            </FormControl>
            <Button colorScheme="primary" color="primary.900">
              Send Message
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
