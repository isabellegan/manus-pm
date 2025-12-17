import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Coffee,
  Calendar,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "isabelle@example.com",
      href: "mailto:isabelle@example.com",
      description: "Best for thoughtful conversations",
      emoji: "✉️",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/isabelleGan",
      href: "#",
      description: "Let's connect professionally",
      emoji: "💼",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/isabelleGan",
      href: "#",
      description: "Check out my code",
      emoji: "👩‍💻",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@isabelleGan",
      href: "#",
      description: "Quick thoughts & updates",
      emoji: "🐦",
    },
  ];

  const reasons = [
    {
      emoji: "🚀",
      title: "Collaborate on a project",
      description:
        "Building something interesting? I love partnering with ambitious teams on products that matter.",
    },
    {
      emoji: "💡",
      title: "Discuss product strategy",
      description:
        "Need a thinking partner for product decisions, AI implementation, or product-market fit?",
    },
    {
      emoji: "🎤",
      title: "Speaking & workshops",
      description:
        "I speak about product thinking, AI ethics, building for humans, and lessons from endurance sports.",
    },
    {
      emoji: "☕",
      title: "Just say hi",
      description:
        "Fellow builder, adventurer, rower, trekker, or curious human? Always up for a chat!",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero with Image */}
      <section className="px-10 lg:px-16 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl mb-6">
                Let's grab a coffee ☕
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                I'm always up for meeting fellow builders, researchers,
                adventurers, and curious humans.
              </p>
              <p className="text-muted-foreground">
                Whether you want to brainstorm a product idea, discuss AI ethics
                over tea, compare notes on trekking routes, or just say hi — I'd
                genuinely love to hear from you.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1598107112013-c1d5d1e6d160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY2FzdWFsfGVufDF8fHx8MTc2MzAxNjIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Coffee and conversation"
                className="rounded-2xl w-full h-80 object-cover shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Reach Out */}
      <section className="px-10 lg:px-16 mb-24 bg-white py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl mb-3 text-center">
              Good reasons to reach out
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              (But honestly, you don't need a reason — just say hi!)
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[var(--warm-neutral)] rounded-xl hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-3">{reason.emoji}</div>
                  <h4 className="text-lg mb-2">{reason.title}</h4>
                  <p className="text-muted-foreground">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-10 lg:px-16 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-4 text-center">How to reach me</h3>
            <p className="text-center text-muted-foreground mb-12">
              Pick your favorite — I'm active on all of these and typically
              respond within a day or two.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-white border border-border rounded-xl hover:border-[var(--forest-green)] hover:shadow-md transition-all group"
                >
                  <div className="text-3xl">{method.emoji}</div>
                  <div className="flex-1">
                    <h4 className="mb-1">{method.label}</h4>
                    <p className="text-sm text-[var(--forest-green)] mb-1">
                      {method.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="px-10 lg:px-16 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[var(--soft-blue)]/10 to-[var(--forest-green)]/10 p-10 rounded-2xl border border-[var(--forest-green)]/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760561993754-8dcdb1a39487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMHdyaXRpbmclMjBpZGVhc3xlbnwxfHx8fDE3NjMwNDg3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Writing"
                className="w-20 h-20 rounded-lg object-cover hidden md:block"
              />
              <div>
                <h3 className="text-xl mb-4">A note from me 📝</h3>
                <p className="text-muted-foreground mb-4">
                  I genuinely love meeting new people, especially those who are
                  building things, asking hard questions, or exploring the world
                  (literally or metaphorically).
                </p>
                <p className="text-muted-foreground mb-4">
                  I split my time between{" "}
                  <span className="text-[var(--forest-green)]">
                    Toronto and Singapore
                  </span>
                  , but I'm always reachable online. If you're in either city,
                  even better — let's meet for coffee, a walk, or an early
                  morning row.
                </p>
                <p className="text-muted-foreground">
                  I speak{" "}
                  <span className="text-[var(--forest-green)]">
                    English, French, and Mandarin
                  </span>
                  , so feel free to reach out in any of those languages.
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-border/50 grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Response time
                </p>
                <p>Usually 24-48 hours</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Best for</p>
                <p>Product, AI, or adventure talk</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Also open to
                </p>
                <p>Consulting & speaking</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-[var(--forest-green)] italic"
          >
            "The best conversations happen when curiosity meets kindness."
          </motion.p>
        </div>
      </section>
    </div>
  );
}
