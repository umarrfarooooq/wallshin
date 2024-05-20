import CompaniesLists from "@/components/Companies/Companies";
import { ContactCompo } from "@/components/Contact-Us-HomePage/ContactComponentHome";
import Hero from "@/components/Main/Hero";
import WhyChooseUs from "@/components/Main/Why-Choose-Us";
import { Industries } from "@/components/Main/industries";

export default function Home() {
  return (
    <>
      <Hero />
      <CompaniesLists />
      <WhyChooseUs />
      <Industries />
      <ContactCompo />
    </>
  );
}
