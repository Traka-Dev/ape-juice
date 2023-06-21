"use client"
import { NavBar } from "./components/NavBar"
import { Image, Flex } from "@chakra-ui/react"

export default function Home() {
  return (
    <main>
      <NavBar />
      <Flex h={"90vh"} w={"100vw"} justify="center" align="center">
        <Image src="ape-juice.png" alt="ape juice" h={"90vh"} />
      </Flex>
    </main>
  )
}
