import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EndodonticProcedures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Endodontic Procedures</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Root Canal Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Procedure to save a severely damaged or infected tooth.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Relieves tooth pain</li>
                <li>Preserves natural tooth</li>
                <li>Prevents spread of infection</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Apicoectomy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Surgical procedure to remove infected tissue at the root tip.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Alternative when root canal therapy fails</li>
                <li>Saves tooth from extraction</li>
                <li>Treats persistent infections</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pulp Capping</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Procedure to protect exposed pulp and promote healing.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Preserves tooth vitality</li>
                <li>Minimally invasive treatment</li>
                <li>Prevents need for root canal in some cases</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
