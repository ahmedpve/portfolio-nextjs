import { Box, Container, Link, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { appConfig } from "../../config";

export default function Footer() {
  return (
    <Box as="footer" borderTop="1px" borderColor="border" bgColor="bg.opaque">
      <Container
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        gap="space-md"
        maxW="container.lg"
        px="space-md"
        py="space-sm"
        color="text.secondary"
        fontSize="sm"
      >
        <Text>
          © {appConfig.title}.com <ReactCountryFlag countryCode="EG" aria-label="Egypt" svg />
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
  );
}
