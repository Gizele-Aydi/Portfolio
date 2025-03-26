"use client"

import "./globals.css"
import { useState, useEffect } from "react"
import { Raleway } from "next/font/google"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoadingScreen from "../components/LoadingScreen"
import type React from "react"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" className={`scroll-smooth ${raleway.variable}`}>
      <body className={`font-raleway bg-background text-text`}>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        )}
      </body>
    </html>
  )
}

