import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { insurancePlans as insurancePlansData } from "@/lib/data/clinic-config"

const insurancePlans = insurancePlansData;

export function InsuranceCoverage() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Insurance Coverage</h2>
        <div className="border rounded-xl overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>INSURANCE PROVIDER</TableHead>
                <TableHead>COVERAGE LIMIT</TableHead>
                <TableHead>COVERED TREATMENTS</TableHead>
                <TableHead>CASHLESS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {insurancePlans.map((plan, index) => (
                <TableRow key={index} className="border-b border-white/5 last:border-0">
                  <TableCell className="font-medium text-primary">{plan.provider}</TableCell>
                  <TableCell className="text-accent">{plan.coverage}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {plan.treatments.map((treatment, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={plan.cashless === "Yes" ? "text-accent" : "text-secondary"}>{plan.cashless}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
