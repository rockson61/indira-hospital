import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OralSurgery() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Oral Surgery Procedures</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Tooth Extractions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Removal of severely damaged or impacted teeth.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Relieves pain from damaged teeth</li>
                <li>Prepares mouth for orthodontic treatment</li>
                <li>Removes wisdom teeth to prevent complications</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dental Implants</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Surgical placement of artificial tooth roots.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Permanent solution for missing teeth</li>
                <li>Preserves jaw bone structure</li>
                <li>Restores natural look and function</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bone Grafting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Procedure to add bone to the jaw in preparation for dental implants.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Increases bone density for implant support</li>
                <li>Restores jaw structure after tooth loss</li>
                <li>Improves candidacy for dental implants</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
