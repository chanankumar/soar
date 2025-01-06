"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, Receipt, Users, LineChart, CreditCard, Landmark, Settings, Shield, Star, Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface SidebarItemProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href: string
  disabled?: boolean
  isActive?: boolean
}

function SidebarItem({ icon: Icon, label, href, disabled, isActive }: SidebarItemProps) {
  return (
    <Link href={disabled ? '#' : href} className='sidebar-menu'>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2",
          disabled && "opacity-30 cursor-not-allowed",
          isActive && "bg-accent text-accent-foreground"
        )}
        disabled={disabled}
      >
        <Icon className="h-4 w-4" />
        {label}
      </Button>
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()

  const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Receipt, label: "Transactions", href: "/transactions" },
    { icon: Users, label: "Accounts", href: "/accounts" },
    { icon: LineChart, label: "Investments", href: "/investments" },
    { icon: CreditCard, label: "Credit Cards", href: "/cards" },
    { icon: Landmark, label: "Loans", href: "/loans" },
    { icon: Star, label: "Services", href: "/services", disabled: true },
    { icon: Shield, label: "My Privileges", href: "/privileges", disabled: true },
    { icon: Settings, label: "Setting", href: "/settings" },
  ]

  return (
    <>
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden sidebar-toggle-button">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="h-full bg-card p-4 space-y-2">
            <div className="flex items-center gap-2 px-2 mb-6">
              <svg width="25" height="30" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.875 0.916687C17.387 0.9167 17.89 1.05147 18.3333 1.30746C18.7767 1.56346 19.1449 1.93164 19.4009 2.37502H21.25C22.0236 2.37502 22.7655 2.68231 23.3124 3.22929C23.8594 3.77627 24.1667 4.51814 24.1667 5.29169V22.7917C24.1667 24.7256 23.3985 26.5802 22.031 27.9477C20.6636 29.3151 18.8089 30.0834 16.875 30.0834H3.75004C2.97649 30.0834 2.23463 29.7761 1.68765 29.2291C1.14066 28.6821 0.833374 27.9402 0.833374 27.1667V5.29169C0.833374 4.51814 1.14066 3.77627 1.68765 3.22929C2.23463 2.68231 2.97649 2.37502 3.75004 2.37502H5.59921C5.85519 1.93164 6.22337 1.56346 6.66675 1.30746C7.11012 1.05147 7.61307 0.9167 8.12504 0.916687H16.875ZM16.6184 11.6777L10.4321 17.8654L8.36858 15.8019C8.09354 15.5362 7.72516 15.3893 7.34279 15.3926C6.96042 15.3959 6.59465 15.5493 6.32426 15.8197C6.05388 16.09 5.90051 16.4558 5.89718 16.8382C5.89386 17.2206 6.04085 17.5889 6.3065 17.864L9.29608 20.855C9.44505 21.0041 9.62193 21.1223 9.8166 21.203C10.0113 21.2836 10.2199 21.3251 10.4307 21.3251C10.6414 21.3251 10.8501 21.2836 11.0447 21.203C11.2394 21.1223 11.4163 21.0041 11.5652 20.855L18.6819 13.7398C18.8173 13.6043 18.9247 13.4435 18.9979 13.2665C19.0712 13.0895 19.1088 12.8998 19.1088 12.7083C19.1087 12.5167 19.0709 12.327 18.9975 12.1501C18.9242 11.9732 18.8167 11.8124 18.6812 11.677C18.5457 11.5416 18.3849 11.4342 18.2079 11.361C18.0309 11.2877 17.8412 11.2501 17.6496 11.2501C17.4581 11.2502 17.2684 11.288 17.0915 11.3614C16.9145 11.4347 16.7538 11.5422 16.6184 11.6777ZM16.1459 3.83335H8.85421C8.68355 3.8333 8.51827 3.8931 8.38716 4.00236C8.25606 4.11161 8.16743 4.2634 8.13671 4.43127L8.12504 4.56252V6.02085C8.12498 6.19152 8.18479 6.35679 8.29405 6.4879C8.4033 6.619 8.55508 6.70763 8.72296 6.73835L8.85421 6.75002H16.1459C16.3165 6.75008 16.4818 6.69027 16.6129 6.58101C16.744 6.47176 16.8327 6.31998 16.8634 6.1521L16.875 6.02085V4.56252C16.8751 4.39186 16.8153 4.22658 16.706 4.09548C16.5968 3.96437 16.445 3.87574 16.2771 3.84502L16.1459 3.83335Z" fill="#232323"/>
              </svg>
              <span className="font-semibold">Soar Task</span>
            </div>
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                disabled={item.disabled}
                isActive={pathname === item.href}
              />
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 border-r bg-card min-h-screen p-4 space-y-2">
        <div className="flex items-center gap-2 px-2 mb-6">
          <svg width="25" height="28" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.875 0.916687C17.387 0.9167 17.89 1.05147 18.3333 1.30746C18.7767 1.56346 19.1449 1.93164 19.4009 2.37502H21.25C22.0236 2.37502 22.7655 2.68231 23.3124 3.22929C23.8594 3.77627 24.1667 4.51814 24.1667 5.29169V22.7917C24.1667 24.7256 23.3985 26.5802 22.031 27.9477C20.6636 29.3151 18.8089 30.0834 16.875 30.0834H3.75004C2.97649 30.0834 2.23463 29.7761 1.68765 29.2291C1.14066 28.6821 0.833374 27.9402 0.833374 27.1667V5.29169C0.833374 4.51814 1.14066 3.77627 1.68765 3.22929C2.23463 2.68231 2.97649 2.37502 3.75004 2.37502H5.59921C5.85519 1.93164 6.22337 1.56346 6.66675 1.30746C7.11012 1.05147 7.61307 0.9167 8.12504 0.916687H16.875ZM16.6184 11.6777L10.4321 17.8654L8.36858 15.8019C8.09354 15.5362 7.72516 15.3893 7.34279 15.3926C6.96042 15.3959 6.59465 15.5493 6.32426 15.8197C6.05388 16.09 5.90051 16.4558 5.89718 16.8382C5.89386 17.2206 6.04085 17.5889 6.3065 17.864L9.29608 20.855C9.44505 21.0041 9.62193 21.1223 9.8166 21.203C10.0113 21.2836 10.2199 21.3251 10.4307 21.3251C10.6414 21.3251 10.8501 21.2836 11.0447 21.203C11.2394 21.1223 11.4163 21.0041 11.5652 20.855L18.6819 13.7398C18.8173 13.6043 18.9247 13.4435 18.9979 13.2665C19.0712 13.0895 19.1088 12.8998 19.1088 12.7083C19.1087 12.5167 19.0709 12.327 18.9975 12.1501C18.9242 11.9732 18.8167 11.8124 18.6812 11.677C18.5457 11.5416 18.3849 11.4342 18.2079 11.361C18.0309 11.2877 17.8412 11.2501 17.6496 11.2501C17.4581 11.2502 17.2684 11.288 17.0915 11.3614C16.9145 11.4347 16.7538 11.5422 16.6184 11.6777ZM16.1459 3.83335H8.85421C8.68355 3.8333 8.51827 3.8931 8.38716 4.00236C8.25606 4.11161 8.16743 4.2634 8.13671 4.43127L8.12504 4.56252V6.02085C8.12498 6.19152 8.18479 6.35679 8.29405 6.4879C8.4033 6.619 8.55508 6.70763 8.72296 6.73835L8.85421 6.75002H16.1459C16.3165 6.75008 16.4818 6.69027 16.6129 6.58101C16.744 6.47176 16.8327 6.31998 16.8634 6.1521L16.875 6.02085V4.56252C16.8751 4.39186 16.8153 4.22658 16.706 4.09548C16.5968 3.96437 16.445 3.87574 16.2771 3.84502L16.1459 3.83335Z" fill="#232323"/>
          </svg>
          <span className="font-semibold">Soar Task</span>
        </div>
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            disabled={item.disabled}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </>
  )
}

