import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";

export function ContactPage() {
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "isabelle@example.com",
      href: "mailto:isabelle@example.com",
      description: "Best for thoughtful conversations",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "isabelleGan",
      href: "#",
      description: "Let's connect professionally",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "isabelleGan",
      href: "#",
      description: "Check out my code",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@isabelleGan",
      href: "#",
      description: "Quick thoughts & updates",
      color: "from-sky-400 to-blue-500",
    },
  ];

  const reasons = [
    {
      emoji: "🚀",
      title: "Building something",
      description:
        "Working on an AI product, need a product thinker, or want to collaborate on something ambitious",
    },
    {
      emoji: "💡",
      title: "Exploring ideas",
      description:
        "Product strategy, AI ethics, user research, or systems thinking conversations",
    },
    {
      emoji: "🎤",
      title: "Speaking & teaching",
      description:
        "Workshops, talks, or teaching about product, AI, building for humans",
    },
    {
      emoji: "🏔️",
      title: "Adventure buddies",
      description: "Rowing crew, trekking partner, or trail recommendations",
    },
    {
      emoji: "☕",
      title: "Just curious",
      description:
        "Fellow builder, researcher, or curious human wanting to chat",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Hero - Split Layout */}
      <section className="px-10 lg:px-16 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Main content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--forest-green)]/10 rounded-full mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Sparkles size={16} className="text-[var(--forest-green)]" />
                  <span className="text-sm text-[var(--forest-green)]">
                    Currently available for projects
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl mb-6">
                  Let's build something
                  <span className="block text-[var(--forest-green)]">
                    together
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  I'm always excited to meet fellow builders, researchers,
                  adventurers, and curious minds.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--soft-blue)]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin
                        size={20}
                        className="text-[var(--forest-green)]"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">Based in</h3>
                      <p className="text-muted-foreground">
                        Toronto & Singapore
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        But always reachable online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--soft-blue)]/20 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[var(--forest-green)]" />
                    </div>
                    <div>
                      <h3 className="mb-1">Response time</h3>
                      <p className="text-muted-foreground">
                        Usually 24-48 hours
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        I read and respond to everything personally
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--soft-blue)]/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles
                        size={20}
                        className="text-[var(--forest-green)]"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1">Languages</h3>
                      <p className="text-muted-foreground">
                        English, French, Mandarin
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Feel free to reach out in any of these
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Contact methods */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 sticky top-32"
              >
                <h3 className="text-xl mb-6">Reach me here</h3>
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={index}
                      href={method.href}
                      onMouseEnter={() => setHoveredMethod(index)}
                      onMouseLeave={() => setHoveredMethod(null)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`block p-6 rounded-2xl border-2 transition-all ${
                        hoveredMethod === index
                          ? "border-[var(--forest-green)] shadow-lg bg-gradient-to-br " +
                            method.color +
                            " bg-opacity-5"
                          : "border-border bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                            hoveredMethod === index
                              ? "bg-gradient-to-br " + method.color
                              : "bg-[var(--warm-neutral)]"
                          }`}
                        >
                          <Icon
                            size={20}
                            className={
                              hoveredMethod === index
                                ? "text-white"
                                : "text-[var(--forest-green)]"
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <h4
                            className={`mb-1 transition-colors ${
                              hoveredMethod === index
                                ? "text-[var(--forest-green)]"
                                : ""
                            }`}
                          >
                            {method.label}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Good Reasons - Bento Grid */}
      <section className="px-10 lg:px-16 mb-24 bg-gradient-to-br from-[var(--soft-blue)]/5 via-white to-[var(--forest-green)]/5 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">
                Good reasons to reach out
              </h2>
              <p className="text-lg text-muted-foreground">
                (But honestly, you don't need a reason — just say hi!)
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  className="relative p-8 bg-white rounded-2xl border-2 border-border hover:border-[var(--forest-green)] transition-all cursor-default overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--soft-blue)]/10 to-[var(--forest-green)]/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform" />

                  <div className="relative">
                    <div className="text-4xl mb-4">{reason.emoji}</div>
                    <h4 className="text-lg mb-3 group-hover:text-[var(--forest-green)] transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal CTA */}
      <section className="px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnJpc2UlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY1Mzk2MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mountain sunrise"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--deep-navy)]/90 via-[var(--forest-green)]/80 to-[var(--soft-blue)]/70" />
            </div>

            {/* Content */}
            <div className="relative p-12 md:p-16 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl mb-6">
                  Let's grab coffee ☕
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl">
                  Whether you want to brainstorm a product idea, discuss AI
                  ethics over tea, compare notes on trekking routes, or just say
                  hi — I'd genuinely love to hear from you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:isabelle@example.com"
                    className="px-8 py-4 bg-white text-[var(--forest-green)] rounded-xl hover:bg-white/90 transition-all shadow-lg"
                  >
                    Send me an email
                  </a>
                  <a
                    href="#"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
