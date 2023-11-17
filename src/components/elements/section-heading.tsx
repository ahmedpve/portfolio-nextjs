import { Heading } from "@chakra-ui/react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <Heading
      as="h2"
      size="md"
      mb="space-lg"
      color="primary.main"
      textAlign="center"
      textTransform="uppercase"
      letterSpacing="widest"
    >
      {children}
    </Heading>
  );
}
