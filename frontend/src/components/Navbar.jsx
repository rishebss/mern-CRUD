import React from 'react';
import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.200", "gray.900");

  return (
    <Container maxW={"1450px"} px={5} bg={bg} borderRadius={6}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap="wrap"
      >
        {/* Logo and Title */}
        <Text
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          <Link to={"/"}> SNEAKER STORE 👟</Link>
        </Text>
        
        {/* Spacer for alignment */}
        <Flex flexGrow={1} justifyContent="flex-end">
          <HStack spacing={4} alignItems={"center"}>
            <Link to={"/create"}>
              <IconButton icon={<FaPlus />} aria-label="Add Product" />
            </Link>
            <IconButton 
              onClick={toggleColorMode} 
              aria-label="Toggle Theme" 
              icon={colorMode === "light" ? <IoMoon /> : <FaSun />} 
            />
          </HStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
