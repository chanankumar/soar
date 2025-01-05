import { Inter } from 'next/font/google'
import './globals.css'
import { metadata } from './metadata'
import DashboardLayout from './dashboard-layout'
import { ThemeProvider } from 'next-themes'
import { SearchProvider } from '@/components/search-context'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <SearchProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              <DashboardLayout>{children}</DashboardLayout>
          </ThemeProvider>
        </SearchProvider>
      </body>
    </html>
  )
}

