import { Badge, Box, Container, Heading, Icon, IconButton, Link, Tag } from "@chakra-ui/react";
import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa6";
import { appConfig } from "../../config";

export default function Portfolio() {
  return (
    <Box as="section" bgColor="bg.opaque">
      <Container maxW="container.lg" px="space-md" py="space-lg">
        <Heading
          as="h2"
          size="md"
          mb="space-lg"
          color="primary.main"
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          Recent Projects
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(14rem, 22rem))"
          justifyContent="center"
          gap="space-lg"
        >
          {appConfig.projects.map((project, i) => (
            <Box
              key={i}
              position="relative"
              overflow="hidden"
              border="2px"
              borderColor="border"
              borderRadius="md"
              bgColor="bg.body"
              _hover={{
                "& > *:nth-child(1)::before": { h: "full" },
                "& > *:nth-child(2)": { visibility: "initial", opacity: "1" },
                "& img": { transform: "scale(110%)" },
              }}
            >
              <Box
                position="relative"
                minH="14rem"
                overflow="hidden"
                sx={{
                  "&::before": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    top: "0",
                    zIndex: "1",
                    h: "0",
                    w: "full",
                    bgColor: "whiteAlpha.800",
                    transitionDuration: "slow",
                  },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top", transition: "all 0.2s ease" }}
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                gap="space-sm"
                visibility="hidden"
                opacity="0"
                position="absolute"
                top="7rem"
                left="50%"
                zIndex="2"
                transform="translateX(-50%) translateY(-50%)"
                transitionDuration="slow"
              >
                <IconButton
                  as={Link}
                  href={project.repo}
                  aria-label="Repository"
                  icon={<Icon as={FaGithub} boxSize="6" />}
                  colorScheme="white"
                  size="lg"
                  borderRadius="full"
                  bgColor="primary.900"
                  _hover={{ bgColor: "primary.main", color: "primary.900" }}
                />
                {project.host && (
                  <IconButton
                    as={Link}
                    href={project.host}
                    aria-label="Host"
                    icon={<Icon as={FaEye} boxSize="6" />}
                    colorScheme="white"
                    size="lg"
                    borderRadius="full"
                    bgColor="primary.900"
                    _hover={{ bgColor: "primary.main", color: "primary.900" }}
                  />
                )}
              </Box>
              <Box p="space-sm">
                <Heading as="h3" size="sm" mb="space-sm">
                  {project.title}
                </Heading>
                <Badge colorScheme="primary" variant="outline" mb="space-sm">
                  {project.category}
                </Badge>
                <Box display="flex" flexWrap="wrap" gap="space-xs">
                  {project.technologies.map((t) => (
                    <Tag key={t} colorScheme="primary" size="sm" variant="solid" color="primary.900">{`#${t}`}</Tag>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
