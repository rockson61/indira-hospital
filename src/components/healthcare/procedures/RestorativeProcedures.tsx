import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function RestorativeProcedures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Restorative Dental Procedures</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Dental Fillings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Dental fillings restore teeth damaged by decay, effectively halting its progression.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Restores tooth structure and function</li>
                <li>Prevents further decay</li>
                <li>Available in various materials to match tooth color</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dental Crowns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Crowns act as protective caps for damaged or decayed teeth, restoring their shape and function.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Protects weakened teeth</li>
                <li>Restores tooth shape and size</li>
                <li>Improves appearance of damaged teeth</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dental Bridges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Bridges replace one or more missing teeth, restoring the appearance and function of your smile.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fills gaps left by missing teeth</li>
                <li>Prevents shifting of remaining teeth</li>
                <li>Improves chewing and speaking abilities</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Longevity and Success Rates of Restorative Procedures</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Procedure</TableHead>
                <TableHead>Average Longevity</TableHead>
                <TableHead>Success Rate</TableHead>
                <TableHead>Key Considerations</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Dental Fillings</TableCell>
                <TableCell>5-15 years</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Material choice affects durability and aesthetics</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dental Crowns</TableCell>
                <TableCell>5-15 years (porcelain), 20+ years (metal)</TableCell>
                <TableCell>Very High</TableCell>
                <TableCell>Material impacts aesthetics and function</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dental Bridges</TableCell>
                <TableCell>5-15 years</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Requires healthy adjacent teeth for support</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
