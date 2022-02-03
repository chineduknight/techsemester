// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/components/input.ts

const primary = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    bg: "#F6F7F9",
    borderRadius: "15px",
    h: "56px",
    fontSize: "sm",
    paddingLeft: "8",
    _placeholder: {
      color: "#7A8395"
    }
  },
};

export const InputStyles = {
  variants: {
    primary
  },
};
