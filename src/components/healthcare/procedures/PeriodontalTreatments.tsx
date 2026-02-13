import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PeriodontalTreatments() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Periodontal Treatments</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Scaling and Root Planing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Deep cleaning procedure to remove tartar and smooth root surfaces.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Treats early to moderate gum disease</li>
                <li>Prevents progression of periodontal disease</li>
                <li>Improves overall gum health</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gum Grafting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Surgical procedure to cover exposed tooth roots.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Reduces tooth sensitivity</li>
                <li>Improves gum appearance</li>
                <li>Protects roots from decay</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Periodontal Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Ongoing care to maintain gum health after treatment.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prevents recurrence of gum disease</li>
                <li>Regular monitoring of gum health</li>
                <li>Customized cleaning schedule</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
