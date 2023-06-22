"use client"
import { Loader } from "./components/Loader"
import { NavBar } from "./components/NavBar"
import { Image, Flex, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <main>
      <Loader />
      <NavBar />
      <Flex
        h={"90vh"}
        w={"100vw"}
        justify={{ base: "start", md: "space-around" }}
        align="center"
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <Image
          src="ape-juice.png"
          alt="ape juice"
          w={{ base: "100%", md: "xl" }}
        />
        <Flex flexDir={"column"} align={"center"} justify={"center"} p={5}>
          <Heading
            textAlign={"center"}
            fontFamily={"mainTitle"}
            fontSize={{ base: "5xl", md: "4xl", lg: "7xl" }}
          >
            MEME JUICE
          </Heading>
          <Heading
            textAlign={"center"}
            fontFamily={"mainTitle"}
            fontSize={{ base: "4xl", md: "3xl", lg: "5xl" }}
          >
            Taste the future with us!
          </Heading>
        </Flex>
      </Flex>
    </main>
  )
}
