import Link from "next/link"
import "@/app/globals.css"
import ServiceCard from "../Services/Services-Card";
import ServiceData from "../Services/Services.json"
export function Industries() {
  return (
    (<section className="gradient-background">
      <div className="py-12 md:py-20 lg:py-24 container flex flex-col gap-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white-color">OUR <span className="text-[#61BB46]">SERVICES</span></h2>
        </div>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ServiceData.servicesData.slice(0, 4).map((data, index) => (
              <ServiceCard key={index} data={data} />
            ))}
        </div>
        <div className="flex items-center justify-center">
          <Link className="bg-[#61BB46] font-bold rounded-lg px-8 py-3 hover:bg-[#53aa38] transition-all text-white" href="/services">See All</Link>
        </div>
      </div>
    </section>)
  );
}
