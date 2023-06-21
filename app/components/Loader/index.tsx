"use client"
import { useState } from "react"
import { Box, Image } from "@chakra-ui/react"

export const Loader = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={1000}
    >
      <Image src="memejuice.png" alt="Loader" w={"100%"} />
    </Box>
  )
}
