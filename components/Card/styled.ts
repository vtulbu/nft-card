import styled from "@emotion/styled";
import {
  VStack as ChakraVStack,
  Heading as ChakraHeading,
  Text as ChakraText,
  Box as ChakraBox,
  SimpleGrid as ChakraSimpleGrid,
  Link as ChakraLink,
  Image as ChakraImage,
  Divider as ChakraDiveder,
} from "@chakra-ui/react";

export const VStack = styled(ChakraVStack)(() => ({
  backgroundColor: "hsl(216, 50%, 16%)",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0px 30px 40px 40px rgba(0, 0, 0, 0.1)",
  alignItems: "flex-start",
}));

export const BoxImage = styled(ChakraBox)(() => ({
  display: "flex",
  borderRadius: "11px",
}));

export const HoverBackground = styled("div")(() => ({
  position: "absolute",
  zIndex: "1",
  width: "325px",
  height: "325px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "11px",
  backgroundColor: "rgba(0, 255, 247, 0.2)",

  ":hover": {
    zIndex: "2",
  },
}));

export const Heading = styled(ChakraHeading)(() => ({
  color: "white",
  fontSize: "26px",
  margin: "10px 0",
}));

export const Paragraphe = styled(ChakraText)(() => ({
  color: "hsl(215, 51%, 70%)",
  fontSize: "20px",
  lineHeight: "30px",
  fontWeight: "300",
}));

export const Box = styled(ChakraBox)(() => ({
  display: "flex",
  alignItems: "center",
  columnGap: "10px",
  fontSize: "20px",
}));

export const Link = styled(ChakraLink)(() => ({
  color: "white",

  ":hover": {
    color: "hsl(178, 100%, 50%)",
    cursor: "pointer",
    textDecoration: "none",
  },
}));

export const Divider = styled(ChakraDiveder)(() => ({
  borderBottomColor: "hsl(215, 32%, 27%)",
}));

export const Image = styled(ChakraImage)(() => ({
  zIndex: "2",

  ":hover": {
    zIndex: "0",
    mixBlendMode: "color-dodge",
  },
}));
