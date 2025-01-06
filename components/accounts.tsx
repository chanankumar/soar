import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Account {
  id: number
  name: string
  balance: number
  accountNumber: string
}

interface AccountsProps {
  accounts: Account[]
}

export function Accounts({ accounts }: AccountsProps) {
  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div key={account.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{account.name}</p>
                <p className="text-sm text-muted-foreground">{account.accountNumber}</p>
              </div>
              <p className="font-semibold">${account.balance.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

