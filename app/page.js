"use client";
import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import Layout from "./layout";

export default function page() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Layout>
      <Box>cdc</Box>
    </Layout>
  );
}
