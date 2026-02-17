import AnimatedSection from "../animation/AnimatedSection";
import { clientOrgs } from "../../data/clients";

export default function ClientLogos() {
  return (
    <section className="bg-white py-12 lg:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-xs font-body font-semibold tracking-wide uppercase text-slate-400 mb-8">
            Vertrouwd door meer dan 100 organisaties
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14">
            {clientOrgs.slice(0, 8).map((org) => (
              <img
                key={org.name}
                src={org.logo}
                alt={org.name}
                className="h-8 lg:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
