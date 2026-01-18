import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ScheduleSection } from "@/components/schedule-section"
import { RegistrationForm } from "@/components/registration-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <BenefitsSection />
      <ScheduleSection />
      <RegistrationForm />
      <Footer />
    </main>
  )
}
