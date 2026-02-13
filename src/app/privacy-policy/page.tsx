import { SectionContainer } from "@/components/ui/section-container"

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen pb-20">
            <SectionContainer className="py-12 prose prose-slate max-w-4xl mx-auto">
                <h1>Privacy Policy</h1>
                <p>Last updated: January 1, 2026</p>

                <h2>1. Introduction</h2>
                <p>
                    Indira Hospital ("us", "we", or "our") operates the https://indirahospital.com website (the "Service").
                    This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>

                <h2>2. Information Collection and Use</h2>
                <p>
                    We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <h3>Types of Data Collected</h3>
                <ul>
                    <li>Personal Data (Email address, First name and last name, Phone number)</li>
                    <li>Usage Data</li>
                    <li>Cookies and Usage Data</li>
                </ul>

                <h2>3. Use of Data</h2>
                <p>Indira Hospital uses the collected data for various purposes:</p>
                <ul>
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                </ul>

                <h2>4. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us by email: info@indirahospital.com</p>
            </SectionContainer>
        </main>
    )
}
