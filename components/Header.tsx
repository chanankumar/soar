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
            <h1 className="font-weight-bold text-color font-600 fs-3 page-title hide-small-screen">{getPageTitle()}</h1>
            <div className={styles.headerActions}>
              <div className = "flex flex-row small-screen-container">
            <h1 className="font-weight-bold text-color font-600 fs-3 page-title show-small-screen small-screen-overview ml-15">{getPageTitle()}</h1>
              <form onSubmit={handleSearch} className={styles.searchForm + " ml-10 hide-small-screen"}>
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
              <Notifications notifications={[
                { id: 1, message: "Your card payment of $120 to Netflix was successful", read: false },
                { id: 2, message: "You received a PayPal payment of $800", read: false },
                { id: 3, message: "Your bank account balance is below $1000", read: true },
                { id: 4, message: "New login detected from Chrome browser", read: true },
                { id: 5, message: "Your weekly spending report is ready", read: false }
              ]} />
              <Avatar className={styles.avatar + " toggle-background-color"}>
                <AvatarImage src="/images/image10.jpg" alt="User avatar" />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
            </div>
            <form onSubmit={handleSearch} className={styles.searchForm + " ml-10 show-small-screen"}>
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
          </div>
          </motion.div>
    )
}

