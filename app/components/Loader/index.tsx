"use client"
import { useState, useEffect } from "react"
import { Flex, Image } from "@chakra-ui/react"

export const Loader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      position={"fixed"}
      display={loading ? "flex" : "none"}
      top={0}
      left={0}
      zIndex={1000}
      align={"center"}
      justify={"center"}
      bgImg={"memejuice.jpg"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      bgSize={"cover"}
    />
  )
}
