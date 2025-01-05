import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { Sidebar } from '@/components/sidebar'
import DashboardPage from './dashboard/page'
import SettingsPage from './settings/page'
import CardsPage from './cards/page'
import TransactionsPage from './transactions/page'
import AccountsPage from './accounts/page'
import InvestmentsPage from './investments/page'
import LoansPage from './loans/page'

export default function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  )
}

