import {
  createSystem,
  defaultConfig,
  defineTokens,
  defineSemanticTokens,
  defineRecipe,
} from "@chakra-ui/react";

const tokens = defineTokens({
  colors: {
    brand: {
      50: { value: "#e8f9ef" },
      100: { value: "#c6efd6" },
      200: { value: "#9ee4bb" },
      300: { value: "#6cd89f" },
      400: { value: "#37cb83" },
      500: { value: "#00bf68" },
      600: { value: "#00a55a" },
      700: { value: "#00894a" },
      800: { value: "#006d3b" },
      900: { value: "#004c29" },
    },
    gray: {
      50: { value: "#f7fafc" },
      800: { value: "#1a202c" },
    },
  },

  fonts: {
    heading: { value: "'Inter', sans-serif" },
    body: { value: "'Inter', sans-serif" },
  },
});

const semanticTokens = defineSemanticTokens({
  colors: {
    // Puedes sobrescribir body bg/text por modo si quieres
    "bg.body": {
      value: { base: "gray.50", _dark: "gray.800" },
    },
    "text.body": {
      value: { base: "gray.800", _dark: "gray.50" },
    },
  },
});


const ButtonRecipe = defineRecipe({
  base: {
    rounded: "xl",
    fontWeight: "600",
    transition: "all 0.2s ease",
  },

  variants: {
    variant: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: { bg: "brand.600" },
      },
      outline: {
        borderWidth: "1px",
        borderColor: "brand.500",
        color: "brand.600",
        _hover: { bg: "brand.50" },
      },
    },
  },

  defaultVariants: {
    variant: "solid",
  },
});

// BADGE
const BadgeRecipe = defineRecipe({
  base: {
    rounded: "md",
    fontWeight: "600",
  },
  variants: {
    variant: {
      solid: {
        bg: "brand.100",
        color: "brand.700",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

const theme = createSystem(defaultConfig, {
  theme: {
    tokens,
    semanticTokens,
    recipes: {
      Button: ButtonRecipe,
      Badge: BadgeRecipe,
    },
  },

});

export default theme;
