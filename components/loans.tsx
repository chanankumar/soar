import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Loan {
  id: number
  name: string
  totalAmount: number
  remainingAmount: number
  monthlyPayment: number
  principalPaid: number
  interestPaid: number
}

interface LoansProps {
  loans: Loan[]
}

export function Loans({ loans }: LoansProps) {
  return (
    <Card>
      <CardContent>
        <div className="space-y-6">
          {loans.map((loan) => (
            <div key={loan.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">{loan.name}</p>
                <p className="text-sm text-muted-foreground">
                  ${loan.remainingAmount.toLocaleString()} / ${loan.totalAmount.toLocaleString()}
                </p>
              </div>
              <Progress value={(loan.remainingAmount / loan.totalAmount) * 100} />
              <div className="flex justify-between text-sm">
                <p>Monthly Payment: ${loan.monthlyPayment}</p>
                <p>Principal Paid: ${loan.principalPaid}</p>
                <p>Interest Paid: ${loan.interestPaid}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

