import { Hero } from "@/components/sections/Hero";
import { FeaturedDepartments } from "@/components/sections/featured-departments";
import { FeaturedDoctors } from "@/components/sections/featured-doctors";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <WhyChooseUs />
      <FeaturedDepartments />
      <FeaturedDoctors />
      <Testimonials />
      <CTASection />
    </main>
  );
}
