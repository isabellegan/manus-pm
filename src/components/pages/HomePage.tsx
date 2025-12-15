import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
// import homeImage from "../../assets/speaking-rbc.png";
import homeImage from "../../assets/twin-peaks.jpg";
import peruImage from "../../assets/machu-picchu.jpg";
import caminoImage from "../../assets/camino-de-santiago.jpg";
import germanyImage from "../../assets/neuschwanstein-castle.jpg";
import rowingImage from "../../assets/rowing-eight.jpg";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const experiences = [
    {
      title: "Strategy Consulting",
      company: "SAP",
      location: "Toronto, Canada",
      description:
        "Guided enterprise clients through digital transformation, translating business challenges into technology solutions.",
      period: "2023 - Present",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    },
    {
      title: "AI Product",
      company: "Train Fitness",
      location: "Remote",
      description:
        "Built AI-powered fitness experiences, transforming how users engage with personalized training.",
      period: "2023",
      logo: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&h=200&fit=crop",
    },
    {
      title: "Product",
      company: "Wave Connect",
      location: "Remote",
      description:
        "Designed and shipped communication tools connecting distributed teams across time zones.",
      period: "2022",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop",
    },
    {
      title: "Prompt Engineering",
      company: "Ecomtent",
      location: "Remote",
      description:
        "Pioneered AI content generation workflows for e-commerce at scale.",
      period: "2022",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop",
    },
    {
      title: "ML Research",
      company: "WAT.ai",
      location: "Waterloo, Canada",
      description:
        "Researched neural network architectures and contributed to open-source ML frameworks.",
      period: "2021 - 2022",
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
    },
    {
      title: "VC Fellowships",
      company: "Pear VC, RippleX, DRF",
      location: "San Francisco, Remote",
      description:
        "Evaluated early-stage startups, building frameworks for product-market fit assessment.",
      period: "2021 - 2023",
      logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=200&fit=crop",
    },
  ];

  const adventures = [
    {
      image: peruImage,
      title: "Lares Trek to Machu Picchu",
      location: "Peru",
      capturedBy: "me",
      article: "machu-picchu",
    },
    {
      image: caminoImage,
      title: "Camino de Santiago",
      location: "Spain",
      capturedBy: "me",
      article: "camino-santiago",
    },
    {
      image: germanyImage,
      title: "My First Solo Backpacking Trip",
      location: "Germany & Czech Republic",
      capturedBy: "me",
      article: "canadian-rockies",
    },

    {
      image: rowingImage,
      title: "Varsity Rowing",
      location: "University of Waterloo",
      capturedBy: "Barry McClusky",
      article: "rowing",
    },
  ];

  return (
    <div className="min-h-screen pb-8">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12 min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--warm-neutral)] via-white to-[#e3f2f5] opacity-60 -z-10" />

        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div {...fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-[var(--forest-green)]/10 text-[var(--forest-green)] rounded-full text-sm mb-6 border border-[var(--forest-green)]/20">
                {/* Making things · Asking questions · Chasing trails  */}
                Crafting systems · Pushing limits · Staying curious
              </span>
            </motion.div>

            <motion.h1
              {...fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
            >
              Building technology that puts people first
            </motion.h1>

            <motion.p
              {...fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              {/* I’m Isabelle. I build AI products, train as an endurance athlete,
              and believe the best technology feels like magic. */}
              I’m Isabelle, an endurance athlete who works with AI systems and
              believes the best technology feels like magic.
            </motion.p>

            <motion.div {...fadeInUp} className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("work")}
                className="px-6 py-3 bg-[var(--forest-green)] text-white rounded-lg hover:bg-[var(--deep-navy)] transition-all flex items-center gap-2 group"
              >
                Explore my work
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="px-6 py-3 border border-border rounded-lg hover:border-[var(--forest-green)] hover:text-[var(--forest-green)] transition-all"
              >
                Discover my story
                {/* Read my story */}
                {/* See my story */}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">🌏 How I Got Here</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Growing up across Singapore, Toronto, and Montreal taught me
                  to adapt quickly and notice patterns in how people and systems
                  change with context.
                  {/* I grew up in Singapore, Toronto, and Montreal, constantly
                  adapting to new cultures and ways of thinking. Over time, I
                  learned to observe people and systems, noticing underlying
                  patterns and what tends to work across contexts. */}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  I study Cognitive Science & Computing at the University of
                  Waterloo, where that early curiosity now guides my focus on
                  how technology interacts with humans.
                  {/* I study Cognitive Science and Computing at the University of
                  Waterloo, where that early curiosity now shapes my focus on
                  how systems think, respond, and interact with humans.  */}
                  {/* Now, I study Cognitive Science and Computing at the University
                  of Waterloo, drawn to questions about how systems think,
                  respond, and interact with humans.  */}
                  {/* I now study Cognitive Science and Computing at the University
                  of Waterloo, where I’m drawn to questions about how systems
                  think, respond, and interact with humans. */}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Along the way, I’ve spent time around startups and venture
                  teams, learning how ideas become companies and how products
                  evolve under real constraints.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Varsity rowing and marathon training have shaped how I
                  approach consistency, feedback, and adjustment, a mindset I
                  carry well beyond sport.
                  {/* Alongside school, I’m on the varsity rowing team and training
                  for a marathon, which has shaped how I think about
                  consistency, feedback, and adjustment. It’s a mindset I carry
                  well beyond sport. */}
                  {/* Alongside school, I’m on the varsity rowing
                  team and preparing for a marathon. Training has shaped how I
                  think about consistency, feedback, and adjustment. It’s an
                  approach I carry well beyond sport and into the rest of my
                  life. */}
                </motion.p>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--soft-blue)] to-[var(--forest-green)] opacity-10 rounded-2xl transform rotate-3" />
                <ImageWithFallback
                  src={homeImage}
                  alt="Isabelle speaking to 500+ students and professionals at RBC"
                  className="rounded-2xl w-full h-[288px] object-cover shadow-lg"
                />
              </motion.div>
              {/* Anchored to right top */}
              {/* <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--soft-blue)] to-[var(--forest-green)] opacity-10 rounded-2xl transform rotate-3" />
                <ImageWithFallback
                  src={homeImage}
                  alt="Isabelle speaking to 500+ students and professionals at RBC"
                  className="rounded-2xl w-full object-cover shadow-lg"
                  style={{ height: "288px", objectPosition: "right top" }}
                />
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-12">💼 Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="relative flex gap-6 pb-8 last:pb-0 cursor-default"
                >
                  {/* Logo */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08 + 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="flex-shrink-0 w-16 h-16 rounded-xl bg-white border-2 border-border overflow-hidden shadow-sm"
                  >
                    <ImageWithFallback
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="flex-1 pl-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h4 className="text-lg">{exp.title}</h4>
                        <p className="text-[var(--forest-green)]">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life Outside Work */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">🗺️ Life Outside Work</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
              Most of my time away from a screen is spent moving. Early mornings
              on the water, full days on the trail, long runs through new
              cities. I'm happiest chasing experiences that change how I see the
              world :)
              {/* I believe the best product builders are also explorers. Whether
              I'm coxing a rowing crew at sunrise, trekking ancient trails, or
              running through new cities, I'm constantly learning about
              resilience, teamwork, and the power of showing up. */}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {adventures.map((adventure, index) => (
                <motion.button
                  key={index}
                  onClick={() => onNavigate(`writing-${adventure.article}`)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer text-left"
                >
                  <ImageWithFallback
                    src={adventure.image}
                    alt={adventure.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                    {/* <div className="text-white">
                      <h4 className="text-lg mb-1">{adventure.title}</h4>
                      <p className="text-sm text-white/80">
                        {adventure.location}
                      </p> */}
                    <div className="text-white w-full">
                      <h4 className="text-lg mb-1">{adventure.title}</h4>
                      <div className="flex justify-between items-center text-sm text-white/80">
                        <span>{adventure.location}</span>
                        <span>Captured by {adventure.capturedBy}</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
