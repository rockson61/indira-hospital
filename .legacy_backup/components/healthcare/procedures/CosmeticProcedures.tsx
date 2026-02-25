import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CosmeticProcedures() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cosmetic Dental Procedures</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Teeth Whitening</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Professional teeth whitening removes stains and discoloration, giving you a brighter smile.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Effective against coffee, tea, and tobacco stains</li>
                <li>Boosts confidence and self-esteem</li>
                <li>Quick and noticeable results</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dental Veneers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Veneers are thin shells custom-made to cover the front surface of teeth, improving their appearance.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Corrects discoloration, chips, and misalignments</li>
                <li>Provides a natural-looking solution</li>
                <li>Long-lasting and stain-resistant</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dental Bonding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Bonding uses tooth-colored resin to repair chipped, cracked, or misshapen teeth.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cost-effective cosmetic solution</li>
                <li>Minimally invasive procedure</li>
                <li>Can be completed in a single visit</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Comparison of Cosmetic Procedures</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Procedure</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Longevity</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Teeth Whitening</TableCell>
                <TableCell>1-2 hours</TableCell>
                <TableCell>6 months to 2 years</TableCell>
                <TableCell>Removing stains, brightening smile</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dental Veneers</TableCell>
                <TableCell>2-3 visits</TableCell>
                <TableCell>10-15 years</TableCell>
                <TableCell>Comprehensive smile makeovers</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dental Bonding</TableCell>
                <TableCell>30-60 minutes per tooth</TableCell>
                <TableCell>3-10 years</TableCell>
                <TableCell>Minor repairs and cosmetic improvements</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
