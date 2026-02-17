import CountUp from "../animation/CountUp";
import AnimatedSection from "../animation/AnimatedSection";

export default function StatsBar() {
  const stats = [
    { value: 10, suffix: "+", label: "Jaar Ervaring" },
    { value: 100, suffix: "+", label: "Tevreden Klanten" },
    { value: 5, suffix: "", label: "Geïntegreerde Modules" },
    { label: "24/7", sublabel: "Online Toegang", isText: true },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center relative after:hidden lg:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-px after:bg-slate-200 last:after:hidden"
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-2">
                  {stat.isText ? (
                    <span>{stat.label}</span>
                  ) : (
                    <CountUp
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  )}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  {stat.isText ? stat.sublabel : stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
