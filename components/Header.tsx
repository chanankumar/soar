'use client'

import { useState } from 'react'
import { Search, Settings, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import { Notifications } from '@/components/notifications'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'
import { useRouter } from 'next/router'
import { useSearch } from './search-context'

export function Header() {
  const { searchTerm, setSearchTerm } = useSearch()

  const pathname = usePathname();
  const getPageTitle = () => {
    switch (pathname) {
      case '/dashboard':
        return 'Overview'
      case '/transactions':
        return 'Transactions'
      case '/accounts':
        return 'Accounts'
      case '/investments':
        return 'Investments'
      case '/cards':
        return 'Credit Cards'
      case '/loans':
        return 'Loans'
      case '/settings':
        return 'Settings'
      default:
        return 'Dashboard'
    }
  }
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchTerm)
  }
    return (
      <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.dashboardHeader}
          >
            <h1 className="font-weight-bold text-color font-600 fs-3 page-title">{getPageTitle()}</h1>
            <div className={styles.headerActions}>
            <form onSubmit={handleSearch} className={styles.searchForm + " ml-10"}>
              <Search className={styles.searchIcon} aria-hidden="true" />
              {/* <span className={styles.searchFormTitle}>Search:</span> */}
              <Input 
                className={styles.searchInput + " toggle-background-color"}
                placeholder="Search for something" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search dashboard"
              />
              {searchTerm && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={styles.clearButton}
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </form>
              <ThemeToggle />
              <Link href="/settings">
                <Button className="bg-icon toggle-background-color hide-small-screen" size="icon" variant="ghost" aria-label="Open settings">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
              <Notifications notifications={[]} />
              <Avatar className={styles.avatar + " toggle-background-color"}>
                <AvatarImage src="/images/image10.jpg" alt="User avatar" />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
    )
}

