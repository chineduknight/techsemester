import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/buttonStyles";
import { InputStyles as Input } from "./components/inputStyles";
import { SelectStyles as Select } from "./components/selectStyles";

// custom themes in chakra UI
// https://chakra-ui.com/docs/theming/customize-theme
//https://www.easyreact.com/articles/chakra-ui-customisations

const WorkspaceTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Spartan",
    body: "Spartan",
  },
  colors: {
    primary: "#2FA072",
    secondary: "#2FA07224",
    highlight: "#00C9A7",
    warning: "#FFC75F",
    danger: "#C34A36",
    text: "#454545",
    light: "#334DBA24",
    // to generate color scheme    
    //https://github.com/chakra-ui/chakra-ui/discussions/2846
    // https://smart-swatch.netlify.app/#2FA072
    lime:
    {
      50: "#ffeddf",
      100: "#fccdb6",
      200: "#f5ac8a",
      300: "#ef8c5d",
      400: "#e96c2f",
      500: "#d05216",
      600: "#a23f10",
      700: "#742d0a",
      800: "#471902",
      900: "#1e0600",
    },
    green:
    {
      50: "#dffcf2",
      100: "#beefdc",
      200: "#99e3c5",
      300: "#73d6af",
      400: "#4ecb98",
      500: "#34b17e",
      600: "#268a62",
      700: "#186345",
      800: "#073c29",
      900: "#00160a",
    }
  },
  components: {
    Button, // Has to match to the name of the component
    Input,
    Select
  },
});

export default WorkspaceTheme;
