import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
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
      title: 'Strategy Consulting',
      company: 'SAP',
      location: 'Toronto, Canada',
      description: 'Guided enterprise clients through digital transformation, translating business challenges into technology solutions.',
      period: '2023 - Present',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
    },
    {
      title: 'AI Product',
      company: 'Train Fitness',
      location: 'Remote',
      description: 'Built AI-powered fitness experiences, transforming how users engage with personalized training.',
      period: '2023',
      logo: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&h=200&fit=crop',
    },
    {
      title: 'Product',
      company: 'Wave Connect',
      location: 'Remote',
      description: 'Designed and shipped communication tools connecting distributed teams across time zones.',
      period: '2022',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop',
    },
    {
      title: 'Prompt Engineering',
      company: 'Ecomtent',
      location: 'Remote',
      description: 'Pioneered AI content generation workflows for e-commerce at scale.',
      period: '2022',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop',
    },
    {
      title: 'ML Research',
      company: 'WAT.ai',
      location: 'Waterloo, Canada',
      description: 'Researched neural network architectures and contributed to open-source ML frameworks.',
      period: '2021 - 2022',
      logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop',
    },
    {
      title: 'VC Fellowships',
      company: 'Pear VC, RippleX, DRF',
      location: 'San Francisco, Remote',
      description: 'Evaluated early-stage startups, building frameworks for product-market fit assessment.',
      period: '2021 - 2023',
      logo: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=200&fit=crop',
    },
  ];

  const adventures = [
    {
      image: 'https://images.unsplash.com/photo-1730677902503-b9961fef6ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNodSUyMHBpY2NodSUyMHRyYWlsfGVufDF8fHx8MTc2MTc5MjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Lares Trail to Machu Picchu',
      location: 'Peru',
      article: 'machu-picchu',
    },
    {
      image: 'https://images.unsplash.com/photo-1563301939-90dd23ea8736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1pbm8lMjBkZSUyMHNhbnRpYWdvJTIwcGF0aHxlbnwxfHx8fDE3NjE3MzMyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Camino de Santiago',
      location: 'Spain',
      article: 'camino-santiago',
    },
    {
      image: 'https://images.unsplash.com/photo-1628620800752-22c87470256d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMHJvY2tpZXMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxNzY2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Canadian Rockies',
      location: 'Canada',
      article: 'canadian-rockies',
    },
    {
      image: 'https://images.unsplash.com/photo-1639107096036-44f1b54bd6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjBib2F0JTIwd2F0ZXJ8ZW58MXx8fHwxNzYxNzkyNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Varsity Rowing',
      location: 'University of Waterloo',
      article: 'rowing',
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
                Making things · Asking questions · Chasing trails
              </span>
            </motion.div>
            
            <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Building technology that puts people first
            </motion.h1>
            
            <motion.p {...fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              I'm Isabelle — I build AI products, trek mountains, and believe the best technology feels like magic, not machinery.
            </motion.p>
            
            <motion.div {...fadeInUp} className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('work')}
                className="px-6 py-3 bg-[var(--forest-green)] text-white rounded-lg hover:bg-[var(--deep-navy)] transition-all flex items-center gap-2 group"
              >
                See My Work
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 border border-border rounded-lg hover:border-[var(--forest-green)] hover:text-[var(--forest-green)] transition-all"
              >
                Get in Touch
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
            <h2 className="text-3xl md:text-4xl mb-6">A bit about me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  I grew up between Toronto, Montreal, and Singapore — which taught me that the best solutions 
                  come from understanding different perspectives. Now I build AI products that feel human, 
                  not robotic.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  When I'm not shipping features, you'll find me on the water (rowing), on the trail (trekking), 
                  or deep in a book about systems thinking. I believe the same principles that make you a good 
                  athlete make you a good builder: discipline, curiosity, and showing up every day.
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
                  src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MTc3OTQxMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Isabelle at work"
                  className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
                />
              </motion.div>
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
                  transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="relative flex gap-6 pb-8 last:pb-0 cursor-default"
                >
                  {/* Logo */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.2, type: "spring", stiffness: 200 }}
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
                        <p className="text-[var(--forest-green)]">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
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
            <h2 className="text-3xl md:text-4xl mb-6">🌍 Life Outside Work</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              I believe the best product builders are also explorers. Whether I'm coxing a rowing crew at sunrise, 
              trekking ancient trails, or running through new cities, I'm constantly learning about resilience, 
              teamwork, and the power of showing up.
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
                    <div className="text-white">
                      <h4 className="text-lg mb-1">{adventure.title}</h4>
                      <p className="text-sm text-white/80">{adventure.location}</p>
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