'use client'

import { SearchProvider } from '@/components/search-context'
import { ThemeProvider } from '@/components/theme-provider'
import { BrowserRouter as Router } from 'react-router-dom'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SearchProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Router>{children}</Router>
      </ThemeProvider>
    </SearchProvider>
  )
}

