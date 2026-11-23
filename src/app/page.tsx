import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Conditions from "@/components/Conditions";
import Approach from "@/components/Approach";
import Evidence from "@/components/Evidence";
import Services from "@/components/Services";
import Doctor from "@/components/Doctor";
import Audience from "@/components/Audience";
import Insurance from "@/components/Insurance";
import BookingCalendar from "@/components/BookingCalendar";
import Faq from "@/components/Faq";
import QualifyForm from "@/components/QualifyForm";
import Locations from "@/components/Locations";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Conditions />
      <Services />
      <Evidence />
      <Approach />
      <Doctor />
      <Audience />
      <Insurance />
      <BookingCalendar />
      <Faq />
      <QualifyForm />
      <Locations />
      <FinalCta />
    </>
  );
}
