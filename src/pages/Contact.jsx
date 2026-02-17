import { useState } from "react";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import CTASection from "../components/sections/CTASection";
import { siteMetadata } from "../data/siteMetadata";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-xs font-body font-semibold tracking-wide uppercase bg-white/10 text-teal-300 px-4 py-1.5 rounded-full backdrop-blur-sm mb-6"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Neem contact met ons op
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-indigo-200 max-w-2xl"
          >
            Heeft u vragen over MyOrchestra of wilt u een demonstratie
            aanvragen? We horen graag van u.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="bg-white border border-slate-200/60 rounded-2xl p-8 lg:p-12 shadow-card">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                Stuur ons een bericht
              </h2>
              <p className="text-slate-500 mb-8">
                Vul het formulier in en wij nemen zo snel mogelijk contact met u
                op.
              </p>

              {status === "success" ? (
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 mb-2">
                    Bedankt voor uw bericht!
                  </h3>
                  <p className="text-slate-500 text-sm">
                    We nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Naam <span className="text-indigo-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Organisatie
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                        placeholder="Uw organisatie"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        E-mail <span className="text-indigo-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                        placeholder="uw@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                        placeholder="06 1234 5678"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Bericht <span className="text-indigo-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all resize-none"
                      placeholder="Hoe kunnen wij u helpen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold bg-linear-to-r from-indigo-600 to-teal-500 text-white rounded-xl hover:from-indigo-500 hover:to-teal-400 transition-all duration-200"
                  >
                    Verstuur Bericht
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Address card */}
              <div className="bg-surface border border-slate-200/60 rounded-2xl p-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 mb-1">
                      Adres
                    </h3>
                    <p className="text-sm text-slate-500">
                      {siteMetadata.address.street}
                      <br />
                      {siteMetadata.address.postalCode}{" "}
                      {siteMetadata.address.city}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-surface border border-slate-200/60 rounded-2xl p-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 mb-1">
                      Telefoon
                    </h3>
                    <a
                      href={`tel:${siteMetadata.phone.replace(/\s/g, "")}`}
                      className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                      {siteMetadata.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-surface border border-slate-200/60 rounded-2xl p-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 mb-1">
                      E-mail
                    </h3>
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                      {siteMetadata.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
