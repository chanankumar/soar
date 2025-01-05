import { useState } from 'react'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import styles from './notifications.module.css'

interface Notification {
  id: number
  message: string
  read: boolean
}

interface NotificationsProps {
  notifications: Notification[]
}

const dummyNotifications: Notification[] = [
  { id: 1, message: "Your card payment of $120 to Netflix was successful", read: false },
  { id: 2, message: "You received a PayPal payment of $800", read: false },
  { id: 3, message: "Your bank account balance is below $1000", read: true },
  { id: 4, message: "New login detected from Chrome browser", read: true },
  { id: 5, message: "Your weekly spending report is ready", read: false }
]

export function Notifications({ notifications = dummyNotifications }: NotificationsProps) {
  const [localNotifications, setLocalNotifications] = useState(notifications)
  const unreadCount = localNotifications.filter(n => !n.read).length

  const markAsRead = (id: number) => {
    setLocalNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='bg-icon toggle-background-color hide-small-screen'>
          <Button size="icon" variant="ghost" className={styles.notificationButton}>
            <Bell className={styles.bellIcon} />
            {unreadCount > 0 && (
              <span className={styles.unreadBadge}>
                {unreadCount}
              </span>
            )}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent align="end" className={styles.notificationContent}>
        <h3 className={styles.notificationTitle}>Notifications</h3>
        <div className={styles.notificationList}>
          {localNotifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`${styles.notificationItem} ${notification.read ? styles.read : styles.unread}`}
              onClick={() => !notification.read && markAsRead(notification.id)}
            >
              {notification.message}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

