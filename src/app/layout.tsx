'use client'
import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import Providers from "./providers"
import Modal from "@/components/Modal/Modal"

export default function RootLayout({
  children,
}: {
  children: EmotionJSX.Element
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Modal  />
        </Providers>
      </body>
    </html>
  )
}
