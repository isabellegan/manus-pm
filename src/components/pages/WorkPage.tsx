import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";

export function WorkPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = [
    "Product",
    "AI/ML",
    "Strategy",
    "Venture Capital",
    "Research",
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const experiences = [
    {
      title: "Strategy Consulting",
      company: "SAP",
      period: "2023 - Present",
      description: "Guiding enterprise clients through digital transformation",
      highlights: [
        "Led AI roadmaps for Fortune 500 companies",
        "Designed frameworks (40% adoption increase)",
      ],
      tags: ["Strategy", "AI/ML"],
      image:
        "https://images.unsplash.com/photo-1599669447518-dc6a124d5c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc2MzAyNTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "AI Product",
      company: "Train Fitness",
      period: "2023",
      description: "Building AI-powered personalized fitness experiences",
      highlights: [
        "Shipped ML workout engine (50K+ users)",
        "Built conversational AI (3x engagement)",
      ],
      tags: ["AI/ML", "Product"],
      image:
        "https://images.unsplash.com/photo-1653053151898-a6c774c54b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHBsYW50c3xlbnwxfHx8fDE3NjMwNDk3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Product",
      company: "Wave Connect",
      period: "2022",
      description: "Connecting distributed teams across time zones",
      highlights: [
        "Launched async features (60% less meetings)",
        "Led user research across 3 continents",
      ],
      tags: ["Product"],
      image:
        "https://images.unsplash.com/photo-1604398268794-23f66a5ba381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBuYXR1cmFsfGVufDF8fHx8MTc2MzA0OTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Prompt Engineering",
      company: "Ecomtent",
      period: "2022",
      description: "Pioneering AI content generation for e-commerce",
      highlights: [
        "Built frameworks (85% quality improvement)",
        "Created A/B testing pipeline for AI content",
      ],
      tags: ["AI/ML"],
      image:
        "https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2ZmZWUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyOTUyMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "ML Research",
      company: "WAT.ai",
      period: "2021 - 2022",
      description: "Exploring neural networks and open-source ML",
      highlights: [
        "Researched attention mechanisms",
        "Contributed to OSS (10K+ developers)",
      ],
      tags: ["Research", "AI/ML"],
      image:
        "https://images.unsplash.com/photo-1628017975048-74768e00219e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjI5ODUyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "VC Fellowships",
      company: "Pear VC, RippleX, DRF",
      period: "2021 - 2023",
      description: "Evaluating early-stage startups and frameworks",
      highlights: [
        "Evaluated 200+ seed companies",
        "Built PMF framework (adopted widely)",
      ],
      tags: ["Venture Capital"],
      image:
        "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MzA0OTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const projects = [
    {
      title: "AI Ethics Framework",
      type: "Research & Framework",
      description:
        "Developing practical guidelines for building AI products that respect user agency and privacy",
      status: "In Progress",
      url: "https://example.com/ai-ethics",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    },
    {
      title: "Product Thinking Workshop",
      type: "Education",
      description:
        "Teaching university students how to build products that solve real problems",
      status: "Active",
      url: "https://example.com/workshop",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    },
    {
      title: "Adventure Log",
      type: "Personal Project",
      description:
        "Documenting lessons from long-distance trekking and endurance sports",
      status: "Ongoing",
      url: "https://example.com/adventure-log",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    },
  ];

  // Filter experiences based on selected tags
  const filteredExperiences =
    selectedTags.length === 0
      ? experiences
      : experiences.filter((exp) =>
          exp.tags.some((tag) => selectedTags.includes(tag))
        );

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="px-10 lg:px-16 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">Work & Experience</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              From strategy consulting to AI product development, from VC
              evaluation to ML research — each role has taught me a different
              lens for building technology that serves people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Detail */}
      <section className="px-10 lg:px-16 mb-24">
        <div className="max-w-7xl mx-auto">
          {/* Tag Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex flex-wrap gap-3"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full border-2 transition-all cursor-pointer ${
                  selectedTags.includes(tag)
                    ? "bg-[var(--forest-green)] text-white border-[var(--forest-green)]"
                    : "bg-white text-muted-foreground border-border hover:border-[var(--forest-green)] hover:text-[var(--forest-green)]"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl mb-1">{exp.title}</h3>
                  <p className="text-[var(--forest-green)] mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-[var(--forest-green)] mt-0.5">
                          →
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[var(--warm-neutral)] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Projects */}
      <section className="px-10 lg:px-16 mb-24 bg-gradient-to-br from-[var(--soft-blue)]/20 to-[var(--forest-green)]/10 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Side Projects & Initiatives
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Beyond full-time work, I'm always exploring new ideas and giving
              back to the community.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-border hover:border-[var(--forest-green)] hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-2 py-1 bg-[var(--forest-green)] text-white rounded-full">
                        {project.status}
                      </span>
                    </div>
                    <h4 className="text-lg mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.type}
                    </p>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-12">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg mb-4 text-[var(--forest-green)]">
                  Product & Strategy
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Product strategy & roadmapping</li>
                  <li>User research & testing</li>
                  <li>Product-market fit evaluation</li>
                  <li>Go-to-market strategy</li>
                  <li>Stakeholder alignment</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg mb-4 text-[var(--forest-green)]">
                  AI & Technology
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Machine learning product design</li>
                  <li>Prompt engineering & LLMs</li>
                  <li>AI ethics & responsible AI</li>
                  <li>Data-informed decision making</li>
                  <li>Technical product management</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg mb-4 text-[var(--forest-green)]">
                  Leadership & Communication
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Cross-functional collaboration</li>
                  <li>Workshop facilitation</li>
                  <li>Mentorship & coaching</li>
                  <li>Strategic storytelling</li>
                  <li>Change management</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
