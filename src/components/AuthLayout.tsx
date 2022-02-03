import React from "react";
import lottery from "assets/lottery-display.svg";


import { Box, Grid, Heading, Image } from "@chakra-ui/react";

type AuthLayoutProps = {
  children: React.ReactNode
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <Grid gridTemplateColumns="2fr 5fr">
    <Box bg="#0070ff" minH="100vh"
      p="16"
    >
      <Heading mt="20" color="#fff">A few clicks away from creating your Lottery Display</Heading>
      <Image
        src={lottery}
      />
    </Box>
    {children}
  </Grid>;
};

export default AuthLayout;
