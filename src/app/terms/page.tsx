import { SectionContainer } from "@/components/ui/section-container"

export default function TermsPage() {
    return (
        <main className="min-h-screen pb-20">
            <SectionContainer className="py-12 prose prose-slate max-w-4xl mx-auto">
                <h1>Terms of Service</h1>
                <p>Last updated: January 1, 2026</p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using the Indira Hospital website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                </p>

                <h2>2. Medical Disclaimer</h2>
                <p>
                    The content provided on this website is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>

                <h2>3. Accounts</h2>
                <p>
                    When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </p>

                <h2>4. Intellectual Property</h2>
                <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Indira Hospital and its licensors.
                </p>

                <h2>5. Appointment Booking</h2>
                <p>
                    Online appointments are subject to confirmation. While we strive to adhere to the schedule, emergency cases may take priority.
                </p>
            </SectionContainer>
        </main>
    )
}
