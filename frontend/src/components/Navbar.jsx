import { Button, Container, Flex, HStack, Text} from "@chakra-ui/react";
import {useColorMode, useColorModeValue,} from "./ui/color-mode";

import { Link } from "react-router-dom";
import React, { use } from 'react'

//icons
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";



const navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
   <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100", "gray.900")}>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear-gradient({colors.cyan.400}, {colors.blue.500})"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

            <HStack spacing={2} alignItems={"center"}>

            <Link to={"/create"}>
                <Button>
                   <CiSquarePlus fontSize={20}/>
                </Button>
              </Link>

              <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
              </Button>
            
            </HStack>
        </Flex>
    </Container>
  )
}

export default navbar
