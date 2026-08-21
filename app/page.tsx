import Header from "@/components/Header"
import Hero from "@/components/Hero"
import PricingTable from "@/components/PricingTable"
import Testimonials from "@/components/Testimonials"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"
import QuoteDrawer from "@/components/QuoteDrawer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PricingTable />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  )
}
