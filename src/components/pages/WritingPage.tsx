import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import peruImage from "../../assets/machu-picchu.jpg";
import caminoImage from "../../assets/camino-de-santiago.jpg";
import germanyImage from "../../assets/neuschwanstein-castle.jpg";
import rowingImage from "../../assets/rowing-eight.jpg";

interface WritingPageProps {
  onNavigate?: (page: string) => void;
  article?: string;
}

export function WritingPage({ onNavigate, article }: WritingPageProps) {
  // Thinking Out Loud articles data
  const thinkingArticles = [
    {
      id: "ai-feels-human",
      title: "Building AI That Feels Human",
      overview:
        "On the intersection of empathy and automation, and why the best AI products don't feel like AI at all.",
      date: "Dec 2024",
    },
    {
      id: "lessons-trail",
      title: "Lessons from the Trail",
      overview:
        "What long-distance trekking taught me about building products that last. On grit, pace, and the long game.",
      date: "Nov 2024",
    },
    {
      id: "product-market-fit",
      title: "Product-Market Fit is a Feeling",
      overview:
        "Why the best founders know PMF not through metrics, but through a visceral sense that something clicked.",
      date: "Oct 2024",
    },
    {
      id: "ai-ethics",
      title: "The Ethics of Building Fast",
      overview:
        "Moving quickly doesn't mean moving recklessly. How to ship AI products with responsibility baked in.",
      date: "Sep 2024",
    },
    {
      id: "user-research",
      title: "Why User Research Isn't Optional",
      overview:
        "The case for talking to humans before building anything. Real stories from products that listened.",
      date: "Aug 2024",
    },
    {
      id: "systems-thinking",
      title: "Systems Over Solutions",
      overview:
        "How to think in feedback loops, interconnections, and second-order effects. A primer for product builders.",
      date: "July 2024",
    },
  ];

  // Thinking article pages
  if (article === "ai-feels-human") {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => onNavigate?.("writing")}
              className="text-[var(--forest-green)] mb-8 hover:underline cursor-pointer"
            >
              ← Back to Writing
            </button>

            <h1 className="text-4xl md:text-5xl mb-6">
              Building AI That Feels Human
            </h1>
            <p className="text-muted-foreground mb-8">Dec 2024 · 8 min read</p>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                The best AI products don't announce themselves. They don't flash
                "Powered by AI" badges or brag about their algorithms. They just
                work — intuitively, quietly, almost invisibly.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                The Invisible Layer
              </h2>
              <p>
                Think about spell check. It's AI. Always has been. But no one
                thinks of it that way because it's seamlessly integrated into
                the writing experience. It doesn't interrupt, doesn't demand
                attention, doesn't require you to understand how it works. It
                just gently suggests: "Hey, did you mean this?"
              </p>

              <p>
                That's the standard. AI should feel like having a really good
                assistant who knows when to speak up and when to stay quiet.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                Empathy First, Automation Second
              </h2>
              <p>
                The mistake most AI products make is optimizing for automation
                before empathy. They automate the task without understanding the
                human context around it. But tasks don't exist in isolation.
                They exist within workflows, emotions, and cognitive load.
              </p>

              <p>
                Great AI products start by asking: What does this person
                actually need? What are they trying to accomplish? What's
                getting in their way? And then — only then — does the AI step in
                to help.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                The Principles
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Transparency:</strong> Users should understand what
                  the AI is doing, even if they don't understand how.
                </li>
                <li>
                  <strong>Control:</strong> AI should suggest, not dictate. The
                  human always has the final say.
                </li>
                <li>
                  <strong>Forgiveness:</strong> Make it easy to undo, override,
                  or ignore AI suggestions.
                </li>
                <li>
                  <strong>Learning:</strong> The AI should get better with use,
                  adapting to individual preferences.
                </li>
              </ul>

              <p className="mt-12">
                The future of AI isn't robots. It's technology that feels less
                like technology and more like magic. And magic, done right,
                always feels human.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (article === "lessons-trail") {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => onNavigate?.("writing")}
              className="text-[var(--forest-green)] mb-8 hover:underline cursor-pointer"
            >
              ← Back to Writing
            </button>

            <h1 className="text-4xl md:text-5xl mb-6">
              Lessons from the Trail
            </h1>
            <p className="text-muted-foreground mb-8">Nov 2024 · 10 min read</p>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                There's a particular kind of clarity that comes from walking 25
                kilometers a day for weeks. Your world shrinks to the
                essentials: food, water, shelter, and the next step forward.
                Everything else falls away.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                Pace Matters More Than Speed
              </h2>
              <p>
                On long treks, sprinting doesn't work. You burn out by day
                three. The people who finish are the ones who find a sustainable
                pace and stick to it, day after day after day.
              </p>

              <p>
                Product development is the same. It's not about heroic sprints.
                It's about showing up consistently, making progress
                incrementally, and building momentum that compounds over time.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                The Terrain Changes, The Goal Doesn't
              </h2>
              <p>
                On the trail, you encounter rain, altitude, fatigue, blisters.
                The conditions change constantly. But the destination stays the
                same. You adapt your approach without losing sight of where
                you're going.
              </p>

              <p>
                In product work, markets shift, competitors emerge, technology
                evolves. Great teams stay flexible on tactics while remaining
                anchored to their vision.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                Rest is Part of the Work
              </h2>
              <p>
                Experienced hikers know: you rest before you need to. Not after
                you're already exhausted. Prevention beats recovery.
                Sustainability beats burnout.
              </p>

              <p>
                The same applies to building products. Sustainable pace includes
                rest, reflection, and recovery. The teams that last are the ones
                that build that into their rhythm.
              </p>

              <p className="mt-12">
                The trail teaches patience, persistence, and the long view. The
                lessons translate perfectly to product work — if you're willing
                to listen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Adventure article pages (existing ones)
  if (article === "machu-picchu") {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => onNavigate?.("writing")}
              className="text-[var(--forest-green)] mb-8 hover:underline cursor-pointer"
            >
              ← Back to Writing
            </button>

            <h1 className="text-4xl md:text-5xl mb-6">
              Lares Trail to Machu Picchu
            </h1>
            <p className="text-muted-foreground mb-8">
              Peru · 4 days, 3 nights
            </p>

            <ImageWithFallback
              src="https://images.unsplash.com/photo-1730677902503-b9961fef6ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNodSUyMHBpY2NodSUyMHRyYWlsfGVufDF8fHx8MTc2MTc5MjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Machu Picchu"
              className="w-full h-96 object-cover rounded-2xl mb-12 shadow-lg"
            />

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                The Lares Trail isn't the famous one. It doesn't have the name
                recognition of the Inca Trail, and that's exactly why I chose
                it. At 14,000 feet, crossing high-altitude Andean passes, this
                trek taught me more about resilience than any product sprint
                ever could.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                Day 1: Starting Strong
              </h2>
              <p>
                We began in the small village of Lares, known for its thermal
                hot springs. The locals weave alpaca wool with techniques passed
                down through generations. Watching them work reminded me of
                product craftsmanship — patience, precision, and respect for the
                process.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">The Climb</h2>
              <p>
                The second day broke me. Or rather, it would have, if I'd let
                it. At altitude, every step requires intention. Your body
                screams at you to stop. But you learn to negotiate with yourself
                — just ten more steps, just to that next rock, just a little
                further.
              </p>
              <p>
                This is where endurance sports and product building overlap.
                Progress isn't always visible. Sometimes you're just putting one
                foot in front of the other, trusting the process.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                What I Learned
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Pace yourself. Sprints burn you out, whether you're hiking or
                  shipping features.
                </li>
                <li>
                  The team matters. My guide, Juan, knew when to push and when
                  to pause.
                </li>
                <li>
                  Context is everything. What works at sea level doesn't work at
                  14,000 feet.
                </li>
                <li>
                  The view from the top is worth it, but so is the journey
                  getting there.
                </li>
              </ul>

              <p className="mt-12">
                Standing at Machu Picchu on day four, I didn't feel triumphant.
                I felt grateful. Grateful for my body, for the team, for the
                challenge, and for the reminder that the hard things are usually
                the ones worth doing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (article === "camino-santiago") {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => onNavigate?.("writing")}
              className="text-[var(--forest-green)] mb-8 hover:underline cursor-pointer"
            >
              ← Back to Writing
            </button>

            <h1 className="text-4xl md:text-5xl mb-6">Camino de Santiago</h1>
            <p className="text-muted-foreground mb-8">
              Spain · The French Way, 780 km
            </p>

            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563301939-90dd23ea8736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1pbm8lMjBkZSUyMHNhbnRpYWdvJTIwcGF0aHxlbnwxfHx8fDE3NjE3MzMyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Camino de Santiago"
              className="w-full h-96 object-cover rounded-2xl mb-12 shadow-lg"
            />

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                780 kilometers. 35 days. One backpack. The Camino de Santiago is
                less a hike and more a meditation in motion. Every day, you wake
                up, you walk, you reflect, you rest, and you do it all over
                again tomorrow.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">Why Walk?</h2>
              <p>
                People walk the Camino for a thousand different reasons. Some
                for religion, some for adventure, some to escape, some to find.
                I walked it to understand what happens when you strip away
                distractions and just exist with your thoughts for a month.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                The Rhythm
              </h2>
              <p>
                By week two, walking became automatic. My body knew what to do.
                That's when the real work began — the mental work. When you're
                not distracted by technology, meetings, or obligations, you're
                left with yourself. It's uncomfortable at first. Then it's
                liberating.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                The People
              </h2>
              <p>
                The Camino attracts seekers. I met a German engineer rethinking
                his career, a Brazilian artist processing grief, a Korean
                student figuring out what comes after university. We shared
                meals, stories, and silences. Some of my best conversations
                happened with people I'll never see again.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                Lessons for Building
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Consistency beats intensity. Walking 25km a day for a month
                  beats sprinting once.
                </li>
                <li>
                  Community emerges naturally when people share a common path.
                </li>
                <li>
                  Simplicity clarifies everything. You need less than you think
                  you do.
                </li>
                <li>
                  The journey changes you more than reaching the destination.
                </li>
              </ul>

              <p className="mt-12">
                Arriving in Santiago de Compostela felt anticlimactic. The
                cathedral was beautiful, but the real transformation happened
                somewhere around day 15, in a small village whose name I can't
                remember, when I realized I'd stopped running from myself.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (article === "canadian-rockies") {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => onNavigate?.("writing")}
              className="text-[var(--forest-green)] mb-8 hover:underline cursor-pointer"
            >
              ← Back to Writing
            </button>

            <h1 className="text-4xl md:text-5xl mb-6">Canadian Rockies</h1>
            <p className="text-muted-foreground mb-8">
              Canada · Backcountry hiking and reflection
            </p>

            <ImageWithFallback
              src="https://images.unsplash.com/photo-1628620800752-22c87470256d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMHJvY2tpZXMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxNzY2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Canadian Rockies"
              className="w-full h-96 object-cover rounded-2xl mb-12 shadow-lg"
            />

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                The Canadian Rockies are unforgiving. Bears, weather that
                changes in minutes, and the kind of isolation that makes you
                very aware of your own insignificance. This is where I learned
                the difference between being alone and being lonely.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                The Backcountry
              </h2>
              <p>
                Unlike established trails, backcountry hiking means you're
                responsible for everything. Navigation, safety, decisions about
                when to push forward and when to turn back. There's no one to
                ask, no one to blame. Just you, your map, and your judgment.
              </p>
              <p>
                This mirrors product leadership. Sometimes you have all the data
                and still have to make a call. Sometimes the safe choice is the
                wrong choice. Sometimes you have to trust your gut.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                Wildlife & Risk
              </h2>
              <p>
                I saw three bears on this trip. Each encounter reminded me that
                I was a guest in their home. Risk management isn't about
                eliminating risk — it's about respecting it, preparing for it,
                and knowing when the risk is worth taking.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                What the Mountains Teach
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Nature doesn't care about your plans. Adaptability is
                  everything.
                </li>
                <li>
                  Solitude isn't loneliness. Sometimes you need space to hear
                  yourself think.
                </li>
                <li>
                  Preparation beats panic. But over-preparation kills
                  spontaneity.
                </li>
                <li>
                  The reward for taking the harder path is usually a better
                  view.
                </li>
              </ul>

              <p className="mt-12">
                I returned from the Rockies with muddy boots, tired legs, and
                clarity I hadn't felt in months. The mountains don't solve your
                problems, but they remind you what actually matters.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (article === "rowing") {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => onNavigate?.("writing")}
              className="text-[var(--forest-green)] mb-8 hover:underline"
            >
              ← Back to Writing
            </button>

            <h1 className="text-4xl md:text-5xl mb-6">Varsity Rowing</h1>
            <p className="text-muted-foreground mb-8">
              University of Waterloo · Coxswain, Rower, Team Leader
            </p>

            <ImageWithFallback
              src="https://images.unsplash.com/photo-1639107096036-44f1b54bd6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjBib2F0JTIwd2F0ZXJ8ZW58MXx8fHwxNzYxNzkyNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Rowing"
              className="w-full h-96 object-cover rounded-2xl mb-12 shadow-lg"
            />

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                Rowing is the sport of simultaneous precision and power. Eight
                people, one boat, moving in perfect synchronization. As a
                coxswain, I sat at the stern, steering the boat and calling the
                race strategy. I was the only one facing forward, the only one
                who could see where we were going.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                The Role of a Coxswain
              </h2>
              <p>
                People think coxing is just yelling instructions. It's so much
                more. You're the strategist, the motivator, the psychologist,
                and the eyes of the boat. You make split-second decisions while
                reading wind patterns, tracking competitors, and monitoring your
                crew's physical state.
              </p>
              <p>
                This is leadership. You don't row yourself, but the boat doesn't
                move without you.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                5 AM Practices
              </h2>
              <p>
                Rowing means waking up before dawn, every day, in every season.
                You learn what your body can do when your mind wants to quit.
                You learn that showing up is half the battle. You learn that
                teams are built in the quiet, early hours when no one's
                watching.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                Trust & Synchronization
              </h2>
              <p>
                Eight rowers can out-pull a crew of individually stronger
                athletes if they row in sync. Timing beats strength. Cohesion
                beats individual talent. The boat doesn't care about your
                personal best — it cares about how you move together.
              </p>
              <p>
                This translates directly to product teams. Alignment is
                everything. A mediocre strategy executed in unison beats a
                brilliant strategy with misaligned execution.
              </p>

              <h2 className="text-2xl text-foreground mt-12 mb-4">
                Lessons from the Water
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Leadership isn't about being the strongest. It's about making
                  everyone else better.
                </li>
                <li>Feedback loops matter. Adjust early, adjust often.</li>
                <li>
                  You can't see progress stroke by stroke, but over months, the
                  change is undeniable.
                </li>
                <li>The crew that communicates best usually wins.</li>
              </ul>

              <p className="mt-12">
                I still row when I can. There's something meditative about being
                on the water at sunrise, when the world is still quiet and the
                only sound is the synchronized pull of oars. It reminds me why I
                build products — for the moments when everything clicks, and
                you're moving forward together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Main Writing page
  return (
    <div className="min-h-screen pt-32 pb-8">
      <section className="px-10 lg:px-16 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">Writing</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Stories from the trail, the water, and the builder's journey.
              These are the experiences that shaped how I think about products,
              teams, and what it means to build things that last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Thinking Out Loud */}
      <section className="px-10 lg:px-16 bg-[var(--warm-neutral)]/20 py-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-3">Thinking Out Loud</h2>
          <p className="text-muted-foreground mb-12">
            Essays on product, AI, and the craft of building
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thinkingArticles.map((piece, index) => (
              <motion.button
                key={piece.id}
                onClick={() => onNavigate?.(`writing-${piece.id}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 bg-white rounded-xl border-2 border-border hover:border-[var(--forest-green)] transition-all text-left shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs px-2 py-1 bg-[var(--soft-blue)]/20 text-[var(--forest-green)] rounded-full">
                    {piece.date}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[var(--forest-green)]/10 flex items-center justify-center group-hover:bg-[var(--forest-green)] transition-colors">
                    <span className="text-[var(--forest-green)] group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </div>
                <h4 className="text-lg mb-3 group-hover:text-[var(--forest-green)] transition-colors">
                  {piece.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {piece.overview}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Adventures & Experiences */}
      <section className="px-10 lg:px-16 py-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-3">Adventures & Experiences</h2>
          <p className="text-muted-foreground mb-12">
            Stories from the trail, the water, and the mountains
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
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
            ].map((adventure, index) => (
              <motion.button
                key={index}
                onClick={() => onNavigate?.(`writing-${adventure.article}`)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer text-left cursor-pointer"
              >
                <ImageWithFallback
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
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
        </div>
      </section>
    </div>
  );
}
