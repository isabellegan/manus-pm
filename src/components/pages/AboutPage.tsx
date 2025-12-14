import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function AboutPage() {
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);

  const journey = [
    {
      phase: "Growing Up Between Worlds",
      years: "1990s - 2000s",
      location: "Toronto · Montreal · Singapore",
      icon: "🌏",
      description:
        "Childhood split between three cities, three cultures. Learning to code-switch between English, French, and Mandarin. Understanding that \"home\" isn't a place — it's a collection of perspectives.",
    },
    {
      phase: "Finding My Rhythm",
      years: "2015 - 2019",
      location: "University of Waterloo",
      icon: "🚣‍♀️",
      description:
        "Varsity rowing taught me about trust, precision, and 5 AM discipline. Coxswaining an eight-person boat meant learning to lead without ego. Computer Science gave me the language to build things.",
    },
    {
      phase: "Building & Learning",
      years: "2020 - 2023",
      location: "Remote · Toronto · SF",
      icon: "⚡",
      description:
        "From ML research to AI product to strategy consulting. Each role taught me a different dialect: the language of code, the language of business, the language of users. VC fellowships showed me how investors think.",
    },
    {
      phase: "Exploring the Edges",
      years: "Ongoing",
      location: "Trails · Mountains · Water",
      icon: "🏔️",
      description:
        "Trekking Peru, walking 780km across Spain, backcountry hiking in the Rockies. These aren't escapes from work — they're extensions of it. The trail teaches you what the office can't: pace, persistence, perspective.",
    },
  ];

  const interests = [
    {
      title: "AI & Machine Learning",
      subtitle:
        "Building intelligent systems that feel intuitive, not intrusive",
      image:
        "https://images.unsplash.com/photo-1655891709738-a48aad482a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1hY2hpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjUzNzMwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Product Design & Strategy",
      subtitle: "Crafting experiences that solve real human problems",
      image:
        "https://images.unsplash.com/photo-1765376260887-e4b5b3029862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY1Mzk2MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Neuroscience & Human Behavior",
      subtitle: "Understanding how people think, learn, and make decisions",
      image:
        "https://images.unsplash.com/photo-1647613561332-3d88a6a0048e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJvc2NpZW5jZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NTM5NjMyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Systems Thinking",
      subtitle: "Seeing the connections and patterns that shape our world",
      image:
        "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW1zJTIwbmV0d29yayUyMGNvbm5lY3Rpb25zfGVufDF8fHx8MTc2NTM5NjMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Endurance Sports",
      subtitle: "Learning discipline, resilience, and mental toughness",
      image:
        "https://images.unsplash.com/photo-1560338080-85a0f3f89bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJhdGhvbiUyMHJ1bm5pbmclMjBlbmR1cmFuY2V8ZW58MXx8fHwxNzY1Mzk2MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Languages & Culture",
      subtitle: "Exploring how language shapes thought and communication",
      image:
        "https://images.unsplash.com/photo-1763733595120-3580a4bd389e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGRpdmVyc2l0eSUyMHdvcmxkfGVufDF8fHx8MTc2NTM5NjMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Travel & Adventure",
      subtitle: "Seeking new perspectives through exploration",
      image:
        "https://images.unsplash.com/photo-1553053473-2e0089556b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmF2ZWwlMjBiYWNrcGFja3xlbnwxfHx8fDE3NjUzOTYzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Writing & Storytelling",
      subtitle: "Making sense of the world through words and narratives",
      image:
        "https://images.unsplash.com/photo-1612907527100-f02bb2b26b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwam91cm5hbCUyMG5vdGVib29rfGVufDF8fHx8MTc2NTM5NjMyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const nextInterest = () => {
    setCurrentInterestIndex((prev) => (prev + 1) % interests.length);
  };

  const prevInterest = () => {
    setCurrentInterestIndex(
      (prev) => (prev - 1 + interests.length) % interests.length
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Hero */}
      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl mb-6">About Isabelle</h1>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a builder, product thinker, and perpetual learner at the
                intersection of technology and humanity.
              </p>
              <p className="text-muted-foreground mb-6">
                My work spans AI product development, strategy consulting, and
                ML research — but the throughline is always the same: building
                technology that empowers people rather than overwhelming them.
              </p>
              <p className="text-muted-foreground">
                When I'm not shipping products or advising startups, you'll find
                me on the water (rowing), on the trail (trekking), or deep in a
                book about systems, neuroscience, or human behavior.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--soft-blue)] to-[var(--forest-green)] opacity-20 rounded-2xl transform -rotate-3" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609373066983-cee8662ea93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjE3Njc1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mountain adventure"
                className="rounded-2xl w-full h-[500px] object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Story - Interactive Timeline */}
      <section className="px-6 lg:px-12 mb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">My Story</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                From growing up between worlds to building products that bridge
                them
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line on desktop, hidden on mobile */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--soft-blue)] via-[var(--forest-green)] to-[var(--deep-navy)]" />

              <div className="space-y-12">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="relative md:ml-20"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15 + 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="hidden md:block absolute -left-[4.5rem] top-0 w-16 h-16 rounded-full bg-white border-4 border-[var(--forest-green)] shadow-lg flex items-center justify-center text-2xl z-10"
                    >
                      {item.icon}
                    </motion.div>

                    {/* Content card */}
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                      }}
                      className="bg-white rounded-2xl p-8 shadow-md border border-border hover:border-[var(--forest-green)] transition-all"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="md:hidden text-4xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3 className="text-2xl">{item.phase}</h3>
                            <div className="flex flex-col md:items-end">
                              <span className="text-sm px-3 py-1 bg-[var(--forest-green)]/10 text-[var(--forest-green)] rounded-full inline-block w-fit mt-2 md:mt-0">
                                {item.years}
                              </span>
                              <span className="text-sm text-muted-foreground mt-1">
                                {item.location}
                              </span>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I'm Exploring - Carousel */}
      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">What I'm Exploring</h2>
            <p className="text-lg text-muted-foreground mb-12">
              The sidequests and rabbit holes that keep me curious
            </p>

            {/* Desktop: 3-card carousel */}
            <div className="hidden md:block relative">
              <div className="grid grid-cols-3 gap-6">
                {[0, 1, 2].map((offset) => {
                  const index =
                    (currentInterestIndex + offset) % interests.length;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                      onClick={() => setCurrentInterestIndex(index)}
                    >
                      <div className="relative h-80">
                        <ImageWithFallback
                          src={interests[index].image}
                          alt={interests[index].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          className={`absolute inset-0 transition-all ${
                            offset === 0
                              ? "bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                              : "bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/50"
                          }`}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3
                              className={`text-white mb-2 transition-all ${
                                offset === 0
                                  ? "text-2xl"
                                  : "text-xl group-hover:text-2xl"
                              }`}
                            >
                              {interests[index].title}
                            </h3>
                            <p
                              className={`text-white/80 transition-all ${
                                offset === 0
                                  ? "text-base opacity-100"
                                  : "text-sm opacity-80 group-hover:opacity-100"
                              }`}
                            >
                              {interests[index].subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Buttons - Desktop */}
              <button
                onClick={prevInterest}
                className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[var(--forest-green)] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextInterest}
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[var(--forest-green)] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Mobile: Single card carousel */}
            <div className="md:hidden relative">
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  key={currentInterestIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <ImageWithFallback
                    src={interests[currentInterestIndex].image}
                    alt={interests[currentInterestIndex].title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-6">
                    {/* Navigation Buttons - Mobile (Top) */}
                    <div className="flex justify-between">
                      <button
                        onClick={prevInterest}
                        className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                      >
                        <ChevronLeft
                          size={20}
                          className="text-[var(--forest-green)]"
                        />
                      </button>
                      <button
                        onClick={nextInterest}
                        className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                      >
                        <ChevronRight
                          size={20}
                          className="text-[var(--forest-green)]"
                        />
                      </button>
                    </div>

                    {/* Content */}
                    <div>
                      <motion.h3
                        className="text-2xl text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {interests[currentInterestIndex].title}
                      </motion.h3>
                      <motion.p
                        className="text-base text-white/90 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {interests[currentInterestIndex].subtitle}
                      </motion.p>
                      <motion.div
                        className="flex items-center gap-2 text-white/70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <span className="text-sm">
                          {currentInterestIndex + 1} / {interests.length}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {interests.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentInterestIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentInterestIndex
                      ? "bg-[var(--forest-green)] w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-2"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
