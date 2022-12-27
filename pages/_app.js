import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      primary: {
        default: "red.500",
        _dark: "red.400",
      },
      secondary: {
        default: "red.800",
        _dark: "red.700",
      },
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
