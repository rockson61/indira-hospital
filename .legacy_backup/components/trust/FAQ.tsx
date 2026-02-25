import { ModernCard } from "@/components/ui/modern-card"
import { HelpCircle, Tag, Plus, Minus } from "lucide-react"
import { Accordion, AccordionItem } from "@heroui/react"
import { Alert } from "@/components/ui/alert"

const faqs = [
  {
    question: "What dental services do you offer?",
    answer:
      "We offer comprehensive dental care including <a href='https://www.mouthhealthy.org/all-topics-a-z/general-dentistry' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>general dentistry</a> (cleanings, fillings), <a href='https://www.aae.org/patients/root-canal-treatment/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>root canal treatment</a>, <a href='https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/dental-implants' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>dental implants</a>, <a href='https://www.aaoinfo.org/orthodontic-treatment/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>orthodontics</a> (braces, Invisalign), <a href='https://www.mouthhealthy.org/all-topics-a-z/cosmetic-dentistry' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>cosmetic dentistry</a>, and emergency dental care. Our state-of-the-art facility is equipped to handle all your dental needs.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend regular check-ups every 6 months for optimal oral health. However, some patients may need more frequent visits depending on their specific dental conditions or ongoing treatments.",
  },
  {
    question: "Do you handle dental emergencies?",
    answer:
      "Yes, we provide 24/7 emergency dental care. Common emergencies we handle include severe toothache, broken teeth, lost fillings, and other acute dental problems requiring immediate attention.",
  },
  {
    question: "What payment options do you accept?",
    answer:
      "We accept most major insurance providers and offer flexible payment plans. Our team will work with you to create a payment plan that fits your budget and ensure you get the care you need.",
  },
  {
    question: "Is root canal treatment painful?",
    answer:
      "With modern techniques and anesthesia, root canal treatment is typically not painful. You might experience some discomfort after the procedure, but this can be managed with over-the-counter pain relievers. Dr. Rockson Samuel ensures patient comfort throughout the treatment.",
  },
  {
    question: "What are the signs that I might need a root canal?",
    answer:
      "Signs that you might need a root canal include severe toothache, prolonged sensitivity to hot or cold, darkening of the tooth, swelling or tenderness in nearby gums, and a persistent pimple on the gums. If you experience these symptoms, it's important to consult Dr. Rockson Samuel promptly.",
  },
  {
    question: "How much do dental implants cost in Vellore?",
    answer:
      "The cost of dental implants in Vellore can vary depending on factors such as the number of implants needed and any additional procedures required. At Indira Dental Clinic, a single tooth implant typically ranges from ₹25,000 to ₹45,000. We offer free consultations to provide you with an accurate estimate based on your specific needs.",
  },
  {
    question: "Do you offer teeth whitening services?",
    answer:
      "Yes, we offer professional teeth whitening services. Our in-office whitening procedure can significantly brighten your smile in just one visit. We also provide take-home whitening kits for those who prefer to whiten their teeth gradually at home under our guidance.",
  },
  {
    question: "What types of braces do you offer?",
    answer:
      "We offer various types of braces to suit different needs and preferences. These include traditional metal braces, ceramic braces (which are less visible), and clear aligners like Invisalign. During your consultation, Dr. Rockson Samuel will recommend the best option based on your specific orthodontic needs and lifestyle.",
  },
  {
    question: "How can I maintain good oral hygiene between dental visits?",
    answer:
      "To maintain good oral hygiene between dental visits, brush your teeth twice a day with fluoride toothpaste, floss daily, use an antiseptic mouthwash, eat a balanced diet, limit sugary snacks and drinks, and avoid tobacco products. If you have specific dental conditions, we'll provide you with additional personalized care instructions.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          <Alert variant="secondary">Have a question not listed here? Contact us at 070106 50063</Alert>
          <Alert variant="primary">Free dental consultation available every Sunday morning</Alert>
        </div>
        <div className="max-w-3xl mx-auto">
          <ModernCard className="bg-card/80 dark:bg-black/40 backdrop-blur-md">
            <Accordion
              selectionMode="single"
              variant="splitted"
              itemClasses={{
                base: "group-[.is-splitted]:px-4 group-[.is-splitted]:bg-transparent group-[.is-splitted]:shadow-none data-[open=true]:bg-primary/5",
                title: "text-base font-medium",
                trigger: "py-4",
                indicator: "text-primary",
                content: "text-muted-foreground pb-6"
              }}
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  aria-label={faq.question}
                  title={
                    <div className="flex items-start gap-4 text-left">
                      <HelpCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <span className="text-base font-medium">{faq.question}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <Tag className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Dental Care, Vellore</span>
                        </div>
                      </div>
                    </div>
                  }
                  indicator={({ isOpen }) => (isOpen ? <Minus className="rotate-90" /> : <Plus />)}
                >
                  <div className="pl-9">
                    <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </ModernCard>
        </div>
      </div>
    </section>
  )
}
