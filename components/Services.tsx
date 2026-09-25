import { SERVICES } from "@/lib/content";
import ServiceRow from "@/components/ServiceRow";

export default function Services() {
  return (
    <section id="services" className="bg-surface py-16 max-sm:py-12">
      <div className="mx-auto max-w-page px-7 max-sm:px-5">
        <div className="mb-7">
          <h2 className="font-display text-[clamp(2.05rem,4vw,2.85rem)] font-extrabold text-ink">
            Services
          </h2>
        </div>
        <div className="border-t border-line">
          {SERVICES.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
