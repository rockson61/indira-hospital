import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight, Clock, Smile, Shield, Award } from "lucide-react"

interface InvisalignInfoProps {
  location?: string
}

export default function InvisalignInfo({ location = "Vellore" }: InvisalignInfoProps) {
  return (
    <div className="my-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Invisalign Clear Aligners in {location}</h2>
        <p className="text-lg text-muted-foreground dark:text-muted-foreground/70 max-w-3xl mx-auto">
          The modern, nearly invisible way to straighten your teeth without metal braces. Our {location} clinic is an
          authorized Invisalign provider offering personalized treatment plans.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="/dental-clinic-vellore.jpg"
            alt={`Invisalign clear aligners treatment in ${location}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Why Choose Invisalign?</h3>

          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <span className="font-medium">Nearly Invisible</span> - Transparent aligners that are barely noticeable
                when worn
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <span className="font-medium">Removable</span> - Take them out for eating, drinking, brushing, and
                special occasions
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <span className="font-medium">Comfortable</span> - No metal brackets or wires that can irritate your
                mouth
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <span className="font-medium">Effective</span> - Treats a wide range of dental issues including
                crowding, spacing, and bite problems
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <span className="font-medium">Predictable</span> - Advanced 3D technology shows your treatment plan and
                expected results before you start
              </div>
            </li>
          </ul>

          <div className="pt-4">
            <Button size="lg" className="group">
              Book Invisalign Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="process" className="mb-12">
        <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto">
          <TabsTrigger value="process">Treatment Process</TabsTrigger>
          <TabsTrigger value="comparison">Vs. Traditional Braces</TabsTrigger>
          <TabsTrigger value="faq">Common Questions</TabsTrigger>
        </TabsList>

        <TabsContent value="process" className="mt-6">
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold mb-2">Initial Consultation</h4>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground/70">
                  Comprehensive examination to determine if Invisalign is right for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold mb-2">Digital Scanning</h4>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground/70">
                  3D digital scan of your teeth to create your custom treatment plan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold mb-2">Custom Aligners</h4>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground/70">
                  Receive your custom-made clear aligners and instructions for use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">4</span>
                </div>
                <h4 className="font-semibold mb-2">Regular Check-ups</h4>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground/70">
                  Monitor progress and receive new sets of aligners every few weeks.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="mt-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 border-b-2">Feature</th>
                  <th className="p-3 border-b-2 text-primary">Invisalign</th>
                  <th className="p-3 border-b-2">Traditional Braces</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b font-medium">Appearance</td>
                  <td className="p-3 border-b text-center">Clear, nearly invisible</td>
                  <td className="p-3 border-b text-center">Metal brackets and wires</td>
                </tr>
                <tr>
                  <td className="p-3 border-b font-medium">Comfort</td>
                  <td className="p-3 border-b text-center">Smooth plastic, no sharp edges</td>
                  <td className="p-3 border-b text-center">Can irritate cheeks and gums</td>
                </tr>
                <tr>
                  <td className="p-3 border-b font-medium">Removable</td>
                  <td className="p-3 border-b text-center">Yes, for eating and cleaning</td>
                  <td className="p-3 border-b text-center">No, fixed to teeth</td>
                </tr>
                <tr>
                  <td className="p-3 border-b font-medium">Food Restrictions</td>
                  <td className="p-3 border-b text-center">None</td>
                  <td className="p-3 border-b text-center">Many (hard, sticky foods)</td>
                </tr>
                <tr>
                  <td className="p-3 border-b font-medium">Oral Hygiene</td>
                  <td className="p-3 border-b text-center">Easy - remove to brush and floss</td>
                  <td className="p-3 border-b text-center">Challenging - special tools needed</td>
                </tr>
                <tr>
                  <td className="p-3 border-b font-medium">Office Visits</td>
                  <td className="p-3 border-b text-center">Every 6-8 weeks</td>
                  <td className="p-3 border-b text-center">Every 4 weeks</td>
                </tr>
                <tr>
                  <td className="p-3 border-b font-medium">Treatment Time</td>
                  <td className="p-3 border-b text-center">6-18 months (case dependent)</td>
                  <td className="p-3 border-b text-center">18-24 months (average)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">How long do I need to wear Invisalign aligners each day?</h4>
              <p className="text-muted-foreground dark:text-muted-foreground/70">
                For optimal results, you should wear your Invisalign aligners for 20-22 hours per day, removing them
                only for eating, drinking (except water), and cleaning.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Is Invisalign treatment painful?</h4>
              <p className="text-muted-foreground dark:text-muted-foreground/70">
                Most patients experience mild discomfort for a few days when starting a new set of aligners. This
                pressure is a sign that the aligners are working to move your teeth.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">How do I clean my Invisalign aligners?</h4>
              <p className="text-muted-foreground dark:text-muted-foreground/70">
                Clean your aligners by brushing them gently with a soft toothbrush and lukewarm water. Invisalign also
                offers a specialized cleaning system. Avoid hot water as it can warp the plastic.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">How much does Invisalign cost in {location}?</h4>
              <p className="text-muted-foreground dark:text-muted-foreground/70">
                Invisalign treatment in {location} typically ranges from ₹50,000 to ₹1,50,000 depending on the
                complexity of your case. We offer flexible payment plans to make treatment more affordable.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Can Invisalign fix all orthodontic issues?</h4>
              <p className="text-muted-foreground dark:text-muted-foreground/70">
                Invisalign can treat most common orthodontic issues, including crowding, spacing, and mild to moderate
                bite problems. Very complex cases might require traditional braces or a combination approach.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Treatment Duration</h3>
            <p className="text-muted-foreground dark:text-muted-foreground/70">
              Most Invisalign treatments are completed in 6-18 months, depending on your specific needs.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Smile className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p className="text-muted-foreground dark:text-muted-foreground/70">
              Over 12 million smiles transformed worldwide with the Invisalign system.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
            <p className="text-muted-foreground dark:text-muted-foreground/70">
              We're committed to your satisfaction with additional refinement aligners if needed to achieve your desired
              results.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Smile?</h3>
          <p className="text-foreground/80 dark:text-muted-foreground/50 mb-4 md:mb-0">
            Schedule your Invisalign consultation at our {location} clinic today.
          </p>
        </div>
        <Button size="lg" className="whitespace-nowrap">
          Book Free Consultation
        </Button>
      </div>
    </div>
  )
}

export function WhyInvisalignExpensive() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Why Is Invisalign Expensive?</h2>

      <div className="space-y-4">
        <p>
          Invisalign treatment represents a significant investment in your dental health and appearance. While the cost
          may seem high initially, there are several factors that contribute to the pricing of Invisalign treatment:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-muted dark:bg-gray-800 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Advanced Technology
            </h3>
            <p className="text-muted-foreground dark:text-muted-foreground/70">
              Invisalign utilizes proprietary 3D computer imaging technology and SmartTrack® material that's been
              researched and tested for over 8 years. The precision engineering behind each aligner requires
              sophisticated software and manufacturing processes.
            </p>
          </div>

          <div className="bg-muted dark:bg-gray-800 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Customized Treatment
            </h3>
            <p className="text-muted-foreground dark:text-muted-foreground/70">
              Each Invisalign treatment is completely customized to the individual patient. Your aligners are designed
              specifically for your teeth based on the treatment plan created by your dentist using Invisalign's
              ClinCheck® software.
            </p>
          </div>

          <div className="bg-muted dark:bg-gray-800 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Professional Expertise
            </h3>
            <p className="text-muted-foreground dark:text-muted-foreground/70">
              Invisalign providers undergo specialized training to offer this treatment. The cost includes the dentist's
              expertise in planning and monitoring your treatment, ensuring optimal results and addressing any issues
              that arise.
            </p>
          </div>

          <div className="bg-muted dark:bg-gray-800 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Ongoing Support
            </h3>
            <p className="text-muted-foreground dark:text-muted-foreground/70">
              Your Invisalign treatment includes regular check-ups and adjustments, as well as refinements if needed.
              This continuous care ensures your treatment stays on track and achieves the desired outcome.
            </p>
          </div>
        </div>

        <p>
          Despite the cost, many patients find Invisalign to be a worthwhile investment due to its aesthetic advantages,
          comfort, and convenience compared to traditional braces. Additionally, the long-term benefits of properly
          aligned teeth include improved oral health, easier cleaning, and reduced risk of dental problems.
        </p>

        <p>
          At our clinic in Vellore, we strive to make Invisalign treatment more affordable through flexible payment
          plans and periodic special offers. We also provide transparent pricing with no hidden costs, ensuring you
          understand exactly what your investment covers.
        </p>
      </div>
    </div>
  )
}
