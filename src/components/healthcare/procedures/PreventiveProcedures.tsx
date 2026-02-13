import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PreventiveProcedures() {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Dental Cleanings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Dental cleanings are critical for removing plaque and tartar, reducing the risk of cavities and gum
              disease.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reduces periodontal disease risk by up to 35%</li>
              <li>Lowers incidence of tooth decay</li>
              <li>Recommended bi-annually for optimal oral health</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dental Examinations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Regular dental exams are crucial for early detection and prevention of oral health issues.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identifies potential issues before they escalate</li>
              <li>Saves costs in the long run</li>
              <li>Prevents need for extensive dental work</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dental X-Rays</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Dental X-rays provide a comprehensive view of dental structures not visible during standard examinations.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Detects impacted teeth and hidden decay</li>
              <li>Identifies jawbone abnormalities</li>
              <li>Enables early intervention for complex issues</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Effectiveness of Preventive Procedures</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Procedure</TableHead>
                <TableHead>Effectiveness</TableHead>
                <TableHead>Key Benefits</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Dental Cleanings</TableCell>
                <TableCell>Reduces periodontal disease risk by up to 35%</TableCell>
                <TableCell>Lowers incidence of tooth decay, maintains gum health</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dental Examinations</TableCell>
                <TableCell>Crucial for early detection</TableCell>
                <TableCell>Prevents extensive and costly treatments</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dental X-Rays</TableCell>
                <TableCell>Identifies hidden issues</TableCell>
                <TableCell>Enables timely intervention for complex problems</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
