import { Box, Container, Text } from "@chakra-ui/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import apexcharts from "../../../public/tech-icons/apex-charts.png";
import chakraui from "../../../public/tech-icons/chakraui-svgrepo-com.svg";
import css from "../../../public/tech-icons/css-svgrepo-com.svg";
import express from "../../../public/tech-icons/express-svgrepo-com.svg";
import figma from "../../../public/tech-icons/figma-svgrepo-com.svg";
import git from "../../../public/tech-icons/git-svgrepo-com.svg";
import html from "../../../public/tech-icons/html-svgrepo-com.svg";
import js from "../../../public/tech-icons/js-official-svgrepo-com.svg";
import mapbox from "../../../public/tech-icons/mapbox-icon-svgrepo-com.svg";
import mui from "../../../public/tech-icons/material-ui-svgrepo-com.svg";
import mongodb from "../../../public/tech-icons/mongo-svgrepo-com.svg";
import nextjs from "../../../public/tech-icons/next-svgrepo-com.svg";
import nodejs from "../../../public/tech-icons/node-svgrepo-com.svg";
import postman from "../../../public/tech-icons/postman-icon-svgrepo-com.svg";
import react from "../../../public/tech-icons/reactjs-svgrepo-com.svg";
import redux from "../../../public/tech-icons/redux-svgrepo-com.svg";
import sass from "../../../public/tech-icons/sass-svgrepo-com.svg";
import tw from "../../../public/tech-icons/tailwind-svgrepo-com.svg";
import ts from "../../../public/tech-icons/typescript-official-svgrepo-com.svg";
import useAnimateOnScroll from "../../hooks/use-animate-onscroll";
import SectionHeading from "../elements/section-heading";

type SkillItemProps = {
  imageSrc: StaticImport;
  label: string;
};

function SkillItem({ imageSrc, label }: SkillItemProps) {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      flexDirection="column"
      gap="space-xs"
      w="8rem"
      borderRadius="xl"
      p="space-sm"
      bgColor="bg.opaque"
      sx={{ "& > img": { transitionDuration: "normal" }, "&:hover > img": { transform: "rotateZ(360deg)" } }}
    >
      <Image src={imageSrc} alt="" width={25} height={25} />
      <Text fontSize="sm">{label}</Text>
    </Box>
  );
}

export default function Skills() {
  const { animatedElement: animatedCards } = useAnimateOnScroll<HTMLDivElement>("slide-up");

  return (
    <Box id="skills" as="section">
      <Container maxW="container.lg" px="space-md" pt="space-xl" pb="space-2xl">
        <SectionHeading>My Skills</SectionHeading>
        <Box ref={animatedCards} display="flex" flexWrap="wrap" justifyContent="center" gap="space-sm">
          <SkillItem imageSrc={js} label="JavaScript" />
          <SkillItem imageSrc={ts} label="TypeScript" />
          <SkillItem imageSrc={html} label="HTML" />
          <SkillItem imageSrc={css} label="CSS" />
          <SkillItem imageSrc={react} label="React" />
          <SkillItem imageSrc={nextjs} label="Next.js" />
          <SkillItem imageSrc={redux} label="Redux" />
          <SkillItem imageSrc={chakraui} label="ChakraUI" />
          <SkillItem imageSrc={mui} label="MUI" />
          <SkillItem imageSrc={tw} label="Tailwind CSS" />
          <SkillItem imageSrc={sass} label="Sass" />
          <SkillItem imageSrc={mapbox} label="Mapbox" />
          <SkillItem imageSrc={apexcharts} label="Apex Charts" />
          <SkillItem imageSrc={nodejs} label="Node.js" />
          <SkillItem imageSrc={express} label="Express" />
          <SkillItem imageSrc={mongodb} label="MongoDB" />
          <SkillItem imageSrc={git} label="Git" />
          <SkillItem imageSrc={postman} label="Postman" />
          <SkillItem imageSrc={figma} label="Figma" />
        </Box>
      </Container>
    </Box>
  );
}
