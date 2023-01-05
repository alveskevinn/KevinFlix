import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Flex justifyContent="center" height="40px" color="gray" >
      <Text>
        Feito por {""}
        <Link
          color="teal.500"
          href="https://www.linkedin.com/in/kevin-pedroso/"
        >
          Kevin Alves
        </Link>
      </Text>
    </Flex>
  );
}
