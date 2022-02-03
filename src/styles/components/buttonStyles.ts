import { darken, mode, whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: "none",
    _focus: { boxShadow: "none" },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props) => ({
      bg: "primary",
      color: "white",
      borderRadius: "10px",
      padding: "1.6rem",
      _hover: {
        bg: mode(whiten("primary", 20), darken("primary", 20))(props),
        boxShadow: "md",
      },
    }),
    secondary: () => ({
      bg: "secondary",
      color: "primary",
      padding: "1.6rem",
      borderRadius: "10px",
      _hover: {
        bg: "rgba(47, 160, 114, 0.24)",
        boxShadow: "md",
        outline: "none",
      },
    }),
    secondaryOutline: () => ({
      bg: "transparent",
      border: "1px solid",
      borderRadius: "10px",
      padding: "1.6rem",
      borderColor: "primary",
      color: "primary",
      transition: "all 200ms ease",
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
      },
      _focus: {
        outline: "none",
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
