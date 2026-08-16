import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-zinc-950"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-32 lg:grid-cols-2">

        {/* Left side */}
        <div>
          {/* Status */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1.5 text-xs font-medium text-lime-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-lime-400">
              Rajesh.
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-zinc-300 sm:text-3xl">
            AI/ML Engineer & Software Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build intelligent systems that combine machine learning,
            software engineering, and real-world applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-lime-300"
            >
              View my projects

              <ArrowDown
                size={17}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>

            <a
              href="/resume.pdf"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-lime-400/40 hover:text-lime-400"
            >
              Download resume
            </a>

          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">

            <a
              href="https://github.com/Rajesh-snippet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="#"
              className="text-zinc-500 transition hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:your.email@example.com"
              className="text-zinc-500 transition hover:text-white"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

            <span className="ml-2 text-xs text-zinc-600">
              Assam, India
            </span>

          </div>
        </div>

        {/* Right side */}
        <div className="relative hidden h-[500px] items-center justify-center lg:flex">

          {/* Outer circle */}
          <div className="absolute h-80 w-80 rounded-full border border-lime-400/10" />

          {/* Middle circle */}
          <div className="absolute h-60 w-60 rounded-full border border-lime-400/20" />

          {/* Inner circle */}
          <div className="absolute h-40 w-40 rounded-full border border-lime-400/30 bg-lime-400/5 shadow-[0_0_100px_rgba(163,230,53,0.08)]" />

          {/* Core */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-lime-400/40 bg-zinc-900 text-2xl font-bold text-lime-400 shadow-[0_0_60px_rgba(163,230,53,0.15)]">
            AI
          </div>

          {/* Floating labels */}
          <div className="absolute right-10 top-24 rounded-lg border border-white/10 bg-zinc-900/80 px-4 py-2 text-xs text-zinc-300 backdrop-blur">
            Machine Learning
          </div>

          <div className="absolute bottom-28 left-6 rounded-lg border border-white/10 bg-zinc-900/80 px-4 py-2 text-xs text-zinc-300 backdrop-blur">
            GenAI
          </div>

          <div className="absolute bottom-12 right-20 rounded-lg border border-white/10 bg-zinc-900/80 px-4 py-2 text-xs text-zinc-300 backdrop-blur">
            Software
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;