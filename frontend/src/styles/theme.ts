import { extendTheme, ColorMode } from "@chakra-ui/react";

export interface ChakraConfig {
  initialColorMode: ColorMode;
  useSystemColorMode: boolean;
}

const config: ChakraConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default theme;
