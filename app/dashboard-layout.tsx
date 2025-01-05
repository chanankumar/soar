import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/Header'
import { SearchProvider } from '@/components/search-context'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SearchProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </div>
    </SearchProvider>
  )
}

