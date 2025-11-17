// theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50:  "#e8f9ef",
      100: "#c6efd6",
      200: "#9ee4bb",
      300: "#6cd89f",
      400: "#37cb83",
      500: "#00bf68",
      600: "#00a55a",
      700: "#00894a",
      800: "#006d3b",
      900: "#004c29",
    },
  },

  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },

  styles: {
    global: {
      "html, body": {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        rounded: "xl",
        fontWeight: "600",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.600",
          _hover: {
            bg: "brand.50",
          },
        },
      },
    },

    Badge: {
      baseStyle: {
        rounded: "md",
        fontWeight: "600",
      },
      variants: {
        solid: {
          bg: "brand.100",
          color: "brand.700",
        },
      },
    },
  },
});

export default theme;
