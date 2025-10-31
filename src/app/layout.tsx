import type React from "react"
import ClientLayout from "./ClientLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gisele Aydi | Portfolio",
  description: "Personal portfolio of Gisele Aydi, an aspiring data scientist and AI engineer",
  icons: {
    icon: "/sources/bunny icon.jpg",
    apple: "/sources/bunny icon.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
