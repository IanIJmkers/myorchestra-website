import { motion } from "motion/react";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-indigo-950">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-800" />

      {/* Decorative gradient mesh blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Eyebrow - pill style */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-xs font-body font-semibold tracking-wide uppercase bg-white/10 text-teal-300 px-4 py-1.5 rounded-full backdrop-blur-sm mb-8"
          >
            Overzicht &middot; Veiligheid &middot; Efficiency &middot; Impact
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] mb-8"
          >
            Het collectieve geheugen van uw stichting of vereniging op{" "}
            <span className="bg-linear-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
              één veilige plek
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg lg:text-xl text-indigo-200 leading-relaxed max-w-2xl mb-10"
          >
            De enige online kantooromgeving specifiek ontwikkeld voor
            stichtingen en verenigingen. Al uw financiën, projecten, documenten
            en vergaderstukken op één centrale plek.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              href="/Oplossingen/project-administration"
              variant="gradient"
              size="lg"
            >
              Ontdek de Modules
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Neem Contact Op
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
