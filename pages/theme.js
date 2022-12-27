import { extendTheme } from "@chakra-ui/react";

// 3. extend the theme
const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;
