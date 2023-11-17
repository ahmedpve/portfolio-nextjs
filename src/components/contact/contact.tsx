import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { FaEnvelopeCircleCheck, FaEnvelopeOpenText } from "react-icons/fa6";
import SectionHeading from "../elements/section-heading";

export default function Contact() {
  return (
    <Box
      id="contact"
      as="section"
      bgImage="url('/images/bg-contact.webp')"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box bgColor="bg.overlay">
        <Container maxW="container.lg" px="space-md" pt="space-xl" pb="space-2xl">
          <SectionHeading>Contact Me</SectionHeading>
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
            <Box display="flex" alignItems="center" gap="space-sm">
              <Center borderRadius="full" p="space-sm" bgColor="primary.light">
                <Icon as={FaEnvelopeOpenText} boxSize="6" color="primary.dark" />
              </Center>
              <Heading as="h3" size="md" color="primary.main">
                Drop Me a Message
              </Heading>
            </Box>
            <FormControl>
              <FormLabel color="primary.light">Name</FormLabel>
              <Input type="text" placeholder="Your name..." required />
            </FormControl>
            <FormControl>
              <FormLabel color="primary.light">Email</FormLabel>
              <Input type="email" placeholder="Your email..." required />
            </FormControl>
            <FormControl>
              <FormLabel color="primary.light">Subject</FormLabel>
              <Input type="text" placeholder="Message subject..." required />
            </FormControl>
            <FormControl>
              <FormLabel color="primary.light">Message</FormLabel>
              <Textarea placeholder="Your message..." minH="10rem" required />
            </FormControl>
            <Button
              colorScheme="primary"
              leftIcon={<Icon as={FaEnvelopeCircleCheck} boxSize="6" />}
              color="text.inverse"
            >
              Send Message
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
