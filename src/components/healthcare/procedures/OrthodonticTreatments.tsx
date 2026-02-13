import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OrthodonticTreatments() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Orthodontic Treatments</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Traditional Braces</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Metal brackets and wires gradually align teeth over time.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Effective for complex alignment issues</li>
                <li>Suitable for all ages</li>
                <li>More affordable than other options</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Invisalign</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Clear, removable aligners that straighten teeth discreetly.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Nearly invisible treatment</li>
                <li>Removable for eating and cleaning</li>
                <li>Comfortable and convenient</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ceramic Braces</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Similar to traditional braces but with tooth-colored brackets.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Less noticeable than metal braces</li>
                <li>Effective for complex cases</li>
                <li>Suitable for adults and teens</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
