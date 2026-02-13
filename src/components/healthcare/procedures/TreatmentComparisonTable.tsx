"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TreatmentData {
  treatment: string
  india_inr: string
  india_usd: string
  usa_inr: string
  usa_usd: string
  uk_inr: string
  uk_usd: string
  australia_inr: string
  australia_usd: string
  savings: string
}

interface TreatmentComparisonTableProps {
  data?: TreatmentData[]
}

export function TreatmentComparisonTable({ data }: TreatmentComparisonTableProps) {
  const defaultData: TreatmentData[] = [
    {
      treatment: "Dental Implant (Single Tooth)",
      india_inr: "₹30,000 - ₹60,000",
      india_usd: "$400 - $800",
      usa_inr: "₹2,25,000 - ₹3,75,000",
      usa_usd: "$3,000 - $5,000",
      uk_inr: "₹1,87,500 - ₹3,37,500",
      uk_usd: "$2,500 - $4,500",
      australia_inr: "₹1,50,000 - ₹3,00,000",
      australia_usd: "$2,000 - $4,000",
      savings: "Up to 85%",
    },
    {
      treatment: "Root Canal Treatment",
      india_inr: "₹7,500 - ₹18,750",
      india_usd: "$100 - $250",
      usa_inr: "₹52,500 - ₹1,12,500",
      usa_usd: "$700 - $1,500",
      uk_inr: "₹45,000 - ₹90,000",
      uk_usd: "$600 - $1,200",
      australia_inr: "₹37,500 - ₹75,000",
      australia_usd: "$500 - $1,000",
      savings: "Up to 80%",
    },
    {
      treatment: "Porcelain Veneers (Per Tooth)",
      india_inr: "₹18,750 - ₹37,500",
      india_usd: "$250 - $500",
      usa_inr: "₹75,000 - ₹1,87,500",
      usa_usd: "$1,000 - $2,500",
      uk_inr: "₹67,500 - ₹1,65,000",
      uk_usd: "$900 - $2,200",
      australia_inr: "₹60,000 - ₹1,50,000",
      australia_usd: "$800 - $2,000",
      savings: "Up to 75%",
    },
    {
      treatment: "Teeth Whitening",
      india_inr: "₹11,250 - ₹22,500",
      india_usd: "$150 - $300",
      usa_inr: "₹37,500 - ₹1,12,500",
      usa_usd: "$500 - $1,500",
      uk_inr: "₹30,000 - ₹90,000",
      uk_usd: "$400 - $1,200",
      australia_inr: "₹30,000 - ₹75,000",
      australia_usd: "$400 - $1,000",
      savings: "Up to 70%",
    },
    {
      treatment: "Full Mouth Rehabilitation",
      india_inr: "₹2,25,000 - ₹4,50,000",
      india_usd: "$3,000 - $6,000",
      usa_inr: "₹18,75,000 - ₹37,50,000",
      usa_usd: "$25,000 - $50,000",
      uk_inr: "₹15,00,000 - ₹33,75,000",
      uk_usd: "$20,000 - $45,000",
      australia_inr: "₹15,00,000 - ₹30,00,000",
      australia_usd: "$20,000 - $40,000",
      savings: "Up to 85%",
    },
  ]

  const treatmentData = data || defaultData

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardTitle>Cost Comparison: India vs. Other Countries</CardTitle>
        <p className="text-sm mt-2">See how much you can save by choosing India for your dental treatments</p>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="inr" className="p-4">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="inr">Indian Rupees (₹)</TabsTrigger>
            <TabsTrigger value="usd">US Dollars ($)</TabsTrigger>
          </TabsList>

          <TabsContent value="inr" className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    Treatment
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    India (₹)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    USA (₹)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    UK (₹)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    Australia (₹)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    Savings
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {treatmentData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted" : "bg-card"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{item.treatment}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground font-bold text-green-600">
                      {item.india_inr}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.usa_inr}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.uk_inr}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.australia_inr}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">{item.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>

          <TabsContent value="usd" className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    Treatment
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    India ($)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    USA ($)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    UK ($)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    Australia ($)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">
                    Savings
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {treatmentData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted" : "bg-card"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{item.treatment}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground font-bold text-green-600">
                      {item.india_usd}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.usa_usd}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.uk_usd}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.australia_usd}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">{item.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
        </Tabs>

        <div className="p-4 bg-muted text-center text-sm text-muted-foreground">
          <p>
            Note: Prices are approximate and may vary based on specific clinic, location, and individual case
            requirements.
          </p>
          <p>Exchange rates: 1 USD = ₹75 INR (approx.)</p>
        </div>
      </CardContent>
    </Card>
  )
}
