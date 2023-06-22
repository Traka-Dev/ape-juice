"use client"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    mainTitle: "Lobster, cursive",
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} cssVarsRoot={undefined}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
