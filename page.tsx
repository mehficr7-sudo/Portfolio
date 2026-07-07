"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  Download,
  Mail,
  ArrowRight,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Sparkles,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Languages,
  Send,
  ChevronDown,
} from "lucide-react";


/* ---------- Intro Animation ---------- */
function Intro({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0d1117]"
      exit={{ opacity: 0, scale: 1.15, filter: "blur(20px)" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* ambient particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#c8a97e]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -40],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gold streak sweep */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, delay: 0.2 }}
        style={{
          background:
            "radial-gradient(600px 200px at 50% 50%, rgba(200,169,126,0.35), transparent 70%)",
        }}
      />

      <div className="relative flex items-center gap-6">
        {["M", "M"].map((letter, i) => (
          <motion.span
            key={i}
            className="font-display text-[22vw] leading-none md:text-[14rem]"
            initial={{ y: 80, opacity: 0, filter: "blur(30px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1.4,
              delay: 0.4 + i * 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              backgroundImage:
                "linear-gradient(180deg, #f6e6cc 0%, #e8d8c4 30%, #c8a97e 55%, #8a7048 85%, #5c4a2e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 60px rgba(200,169,126,0.35)",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="absolute bottom-16 font-mono text-[10px] tracking-[0.5em] text-[#a8b2c1] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Mohammed Mehfil
      </motion.div>
    </motion.div>
  );
}

/* ---------- Cursor + Particles ---------- */
function GoldCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgba(200,169,126,0.35) 0%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

function AmbientParticles() {
  const particles = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#c8a97e]/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Scroll Progress ---------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 right-0 left-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-[#e8d8c4] via-[#c8a97e] to-[#8a7048]"
    />
  );
}

/* ---------- Nav ---------- */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className={`flex items-center gap-2 rounded-full px-3 py-1.5 transition ${
            scrolled ? "glass" : ""
          }`}
        >
          <span className="font-display text-lg text-gradient-gold">MM</span>
          <span className="hidden font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase sm:inline">
            Mehfil
          </span>
        </a>
        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-xs tracking-wide text-muted-foreground uppercase transition hover:bg-white/5 hover:text-[#e8d8c4]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-[#c8a97e]/40 bg-[#c8a97e]/10 px-4 py-2 text-xs tracking-wide text-[#e8d8c4] uppercase transition hover:bg-[#c8a97e] hover:text-[#0d1117]"
        >
          Let's talk
          <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.header>
  );
}

/* ---------- Reveal ---------- */
function Reveal({
  children,
  delay = 0,
  y = 30,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <Reveal>
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-xs text-[#c8a97e]">{n}</span>
        <div className="divider-gold flex-1 max-w-[80px]" />
        <span className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
          {label}
        </span>
      </div>
    </Reveal>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const roles = ["Data Analyst", "AI & ML Student", "Maths Tutor"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const current = roles[roleIdx];
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (!deleting) {
        i++;
        setTyped(current.slice(0, i));
        if (i === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        i--;
        setTyped(current.slice(0, i));
        if (i === 0) {
          setRoleIdx((r) => (r + 1) % roles.length);
          return;
        }
      }
      timer = setTimeout(tick, deleting ? 45 : 90);
    };
    tick();
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleIdx]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };

  return (
    <section
      id="top"
      ref={containerRef}
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32 pb-20"
    >
      {/* Floating glass cards */}
      <motion.div
        className="glass absolute top-32 right-[8%] hidden h-32 w-48 rounded-2xl p-4 md:block"
        style={{
          x: mouse.x * -20,
          y: mouse.y * -20,
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
          Currently
        </div>
        <div className="mt-2 font-display text-2xl text-gradient-gold">
          Deloitte
        </div>
        <div className="text-xs text-muted-foreground">Data Analyst Intern</div>
      </motion.div>

      <motion.div
        className="glass absolute bottom-24 left-[6%] hidden h-28 w-44 rounded-2xl p-4 lg:block"
        style={{ x: mouse.x * 25, y: mouse.y * 25 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
          Focus
        </div>
        <div className="mt-2 font-display text-xl text-gradient-gold">
          AI & ML
        </div>
        <div className="text-xs text-muted-foreground">Integrated MSc</div>
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c8a97e]/30 bg-[#c8a97e]/5 px-4 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8a97e] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c8a97e]" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#e8d8c4] uppercase">
                Available for opportunities
              </span>
            </div>
          </Reveal>

          <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {"Mohammed".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.8 }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-gradient-gold italic"
            >
              Mehfil
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-muted-foreground/60"
            >
              {" "}M M
            </motion.span>
          </h1>

          <Reveal delay={0.4}>
            <div className="mt-8 flex items-center gap-3 font-mono text-lg text-[#e8d8c4] md:text-xl">
              <span className="h-2 w-2 rounded-full bg-[#c8a97e]" />
              <span>{typed}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-[#c8a97e]"
              >
                |
              </motion.span>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Turning raw numbers into clear stories. I build data workflows,
              teach mathematics, and study intelligent systems — with an obsessive
              eye for detail and clarity.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href="#contact" primary>
                <Mail className="h-4 w-4" /> Contact Me
              </MagneticButton>
              <MagneticButton href="#resume">
                <Download className="h-4 w-4" /> Resume
              </MagneticButton>
              <MagneticButton href="#projects">
                <Sparkles className="h-4 w-4" /> Projects
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Portrait */}
        <Reveal delay={0.4}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <motion.div
              className="absolute inset-0 rounded-[2rem]"
              style={{
                background:
                  "conic-gradient(from 90deg, #c8a97e, #e8d8c4, #8a7048, #c8a97e)",
                filter: "blur(30px)",
                opacity: 0.35,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div
              className="glass relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem]"
              style={{
                transform: `perspective(1000px) rotateY(${mouse.x * 6}deg) rotateX(${mouse.y * -6}deg)`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <img
                src={"/images/mehfil-portrait.jpg"}
                alt="Mohammed Mehfil M M"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-mono text-[10px] tracking-[0.3em] text-[#c8a97e] uppercase">
                  Kochi · India
                </div>
                <div className="mt-1 font-display text-lg text-[#e8d8c4]">
                  Portfolio '26
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}

function MagneticButton({
  href,
  primary,
  children,
}: {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * 0.25,
      y: (e.clientY - (r.top + r.height / 2)) * 0.25,
    });
  };
  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all ${
        primary
          ? "bg-gradient-to-r from-[#e8d8c4] to-[#c8a97e] text-[#0d1117] hover:shadow-[0_0_40px_-5px_rgba(200,169,126,0.6)]"
          : "border border-[#c8a97e]/30 text-[#e8d8c4] hover:border-[#c8a97e]/80 hover:bg-[#c8a97e]/10"
      }`}
    >
      {children}
    </motion.a>
  );
}

/* ---------- About ---------- */
function About() {
  const skills = [
    "Data Analysis",
    "Data Management",
    "Data Cleaning",
    "Data Entry",
    "Python",
  ];
  return (
    <section id="about" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="01" label="About" />
        <div className="grid gap-16 md:grid-cols-[1fr_1.3fr] md:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem]">
              <div
                className="absolute -inset-2 rounded-[2.5rem] opacity-40 blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 180deg, #c8a97e, #8a7048, #e8d8c4, #c8a97e)",
                }}
              />
              <img
                src={"/images/mehfil-casual.jpg"}
                alt="Mohammed Mehfil M M portrait"
                className="relative h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-[#c8a97e]/30" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              A mind for <span className="text-gradient-gold italic">numbers</span>,
              a heart for <span className="text-gradient-gold italic">clarity</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Detail-oriented and motivated, I work at the intersection of{" "}
              <span className="text-[#e8d8c4]">data</span>,{" "}
              <span className="text-[#e8d8c4]">mathematics</span>, and{" "}
              <span className="text-[#e8d8c4]">artificial intelligence</span>.
              I clean messy datasets, extract meaning, and translate it into
              decisions people can actually use. When I'm not analysing, I teach —
              because explaining ideas is the fastest way to sharpen them.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-full border border-[#c8a97e]/25 bg-white/[0.02] px-4 py-1.5 text-xs tracking-wide text-[#e8d8c4]"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */
function Education() {
  const items = [
    {
      year: "2024 — Current",
      title: "Integrated MSc Computer Science (AI & ML)",
      place: "Bharata Mata College, Thrikkakara",
    },
    {
      year: "Foundation",
      title: "Bachelor's in Computer Science (AI & ML)",
      place: "Bharata Mata College",
    },
  ];
  return (
    <section id="education" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="02" label="Education" />
        <Reveal>
          <h2 className="mb-16 font-display text-4xl md:text-5xl">
            Academic <span className="text-gradient-gold italic">path</span>
          </h2>
        </Reveal>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-[#c8a97e]/60 via-[#c8a97e]/20 to-transparent md:left-1/2" />
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div
                className={`relative mb-12 grid gap-4 md:grid-cols-2 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div className="absolute left-4 -translate-x-1/2 md:left-1/2">
                  <div className="glow-gold h-3 w-3 rounded-full bg-[#c8a97e]" />
                </div>
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 transition hover:border-[#c8a97e]/50">
                    <div className="mb-2 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-[#c8a97e] uppercase">
                      <GraduationCap className="h-3 w-3" /> {it.year}
                    </div>
                    <h3 className="font-display text-xl">{it.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{it.place}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
function Experience() {
  const jobs = [
    {
      role: "Data Analyst Intern",
      company: "Deloitte",
      period: "2026 — Current",
      tasks: [
        "Excel Analysis",
        "SQL",
        "Python",
        "Data Cleaning",
        "Trend Analysis",
        "Team Collaboration",
      ],
    },
    {
      role: "Maths Tutor",
      company: "Smart Up Ventures Pvt Ltd",
      period: "2024 — Current",
      tasks: [
        "Problem Solving",
        "Mathematical Concepts",
        "Critical Thinking",
        "Teaching",
      ],
    },
  ];
  return (
    <section id="experience" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="03" label="Experience" />
        <Reveal>
          <h2 className="mb-16 font-display text-4xl md:text-5xl">
            Where I've <span className="text-gradient-gold italic">worked</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.15}>
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition duration-500 hover:-translate-y-1 hover:border-[#c8a97e]/60">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#c8a97e]/10 blur-3xl transition group-hover:bg-[#c8a97e]/20" />
                <div className="flex items-start justify-between">
                  <Briefcase className="h-6 w-6 text-[#c8a97e]" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                    {job.period}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{job.role}</h3>
                <div className="mt-1 text-[#e8d8c4]">{job.company}</div>
                <div className="my-6 divider-gold" />
                <ul className="flex flex-wrap gap-2">
                  {job.tasks.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition hover:bg-[#c8a97e]/15 hover:text-[#e8d8c4]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  const tech = [
    { name: "Data Analysis", level: 92 },
    { name: "Statistical Modelling", level: 82 },
    { name: "Data Visualization", level: 88 },
    { name: "Excel", level: 95 },
    { name: "SQL", level: 85 },
    { name: "Python", level: 84 },
    { name: "Data Validation", level: 90 },
    { name: "Project Management", level: 78 },
  ];
  const soft = [
    "Communication",
    "Team Collaboration",
    "Problem Solving",
    "Technical Analysis",
    "Time Management",
    "Lesson Planning",
  ];
  return (
    <section id="skills" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="04" label="Skills" />
        <Reveal>
          <h2 className="mb-16 font-display text-4xl md:text-5xl">
            Craft & <span className="text-gradient-gold italic">toolkit</span>
          </h2>
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass rounded-3xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <Code2 className="h-4 w-4 text-[#c8a97e]" />
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Technical
              </span>
            </div>
            <div className="space-y-5">
              {tech.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.05}>
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="font-mono text-[#c8a97e]">{s.level}%</span>
                    </div>
                    <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-[#e8d8c4] to-[#c8a97e]"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-[#c8a97e]" />
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Soft skills
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {soft.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="cursor-default rounded-2xl border border-[#c8a97e]/20 bg-white/[0.02] px-4 py-2 text-sm text-[#e8d8c4] transition hover:border-[#c8a97e]/60 hover:bg-[#c8a97e]/10"
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <div className="mt-10">
              <div className="mb-4 flex items-center gap-3">
                <Languages className="h-4 w-4 text-[#c8a97e]" />
                <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
                  Languages
                </span>
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="font-display text-2xl text-gradient-gold">Malayalam</div>
                  <div className="text-xs text-muted-foreground">Native</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-gradient-gold">English</div>
                  <div className="text-xs text-muted-foreground">Professional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  const projects = [
    {
      title: "Student Progression Management System",
      tag: "Django",
      desc: "A full-stack platform to track student academic journeys, generate reports, and streamline institutional workflows.",
    },
    {
      title: "Data Analysis Dashboard",
      tag: "Power BI · Excel",
      desc: "Interactive dashboards turning multi-source datasets into decision-ready visual stories.",
    },
    {
      title: "AI Knowledge Base Chatbot",
      tag: "OpenAI · Pinecone · n8n",
      desc: "Retrieval-augmented chatbot that answers from a private vector knowledge base with citations.",
    },
    {
      title: "Mathematics Learning Platform",
      tag: "EdTech",
      desc: "Structured lesson planning and adaptive practice for learners — built from real tutoring experience.",
    },
  ];
  return (
    <section id="projects" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="05" label="Projects" />
        <Reveal>
          <h2 className="mb-16 font-display text-4xl md:text-5xl">
            Selected <span className="text-gradient-gold italic">work</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  tag,
  desc,
  index,
}: {
  title: string;
  tag: string;
  desc: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x, y });
  };
  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x * 8}deg) rotateX(${tilt.y * -8}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="glass group relative h-full overflow-hidden rounded-3xl p-8"
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${(tilt.x + 0.5) * 100}% ${(tilt.y + 0.5) * 100}%, rgba(200,169,126,0.15), transparent 50%)`,
          }}
        />
        <div className="mb-6 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#161b22] to-[#0d1117]">
          <span className="font-display text-6xl text-gradient-gold opacity-40 transition group-hover:scale-110 group-hover:opacity-70">
            0{index + 1}
          </span>
        </div>
        <div className="mb-2 font-mono text-[10px] tracking-[0.3em] text-[#c8a97e] uppercase">
          {tag}
        </div>
        <h3 className="font-display text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {desc}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-wide text-[#e8d8c4] uppercase transition group-hover:gap-3">
          View case <ArrowRight className="h-3 w-3" />
        </div>
      </motion.div>
    </Reveal>
  );
}

/* ---------- Certifications ---------- */
function Certifications() {
  const certs = [
    { title: "Data Analysis", body: "Analytical foundations and applied practice." },
    { title: "Teaching", body: "Pedagogy and structured lesson delivery." },
    { title: "Artificial Intelligence", body: "Fundamentals of AI systems and models." },
  ];
  return (
    <section id="certifications" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="06" label="Certifications" />
        <Reveal>
          <h2 className="mb-16 font-display text-4xl md:text-5xl">
            Signed & <span className="text-gradient-gold italic">certified</span>
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-6">
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(200,169,126,0.12), transparent 60%)",
                  }}
                />
                <Award className="mb-4 h-6 w-6 text-[#c8a97e]" />
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="relative px-5 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionLabel n="07" label="Contact" />
        <Reveal>
          <h2 className="mb-4 font-display text-5xl md:text-6xl">
            Let's build something{" "}
            <span className="text-gradient-gold italic">meaningful</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-12 max-w-xl text-muted-foreground">
            Open to internships, freelance data projects, and tutoring
            collaborations. Drop a message — I read every one.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.2}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass space-y-5 rounded-3xl p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@domain.com" />
              </div>
              <Field label="Subject" placeholder="What's this about?" />
              <div>
                <label className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me a bit about your project…"
                  className="w-full resize-none rounded-2xl border border-[#c8a97e]/20 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-[#c8a97e]/60 focus:bg-white/[0.04]"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8d8c4] to-[#c8a97e] px-6 py-3 text-sm font-medium text-[#0d1117] transition hover:shadow-[0_0_40px_-5px_rgba(200,169,126,0.6)]"
              >
                Send message
                <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="glass flex h-full flex-col justify-between gap-8 rounded-3xl p-8">
              <div className="space-y-5">
                <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="hello@mehfil.dev" />
                <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+91 · Available on request" />
                <ContactRow icon={<MapPin className="h-4 w-4" />} label="Based in" value="Kochi, India" />
              </div>
              <div>
                <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  Elsewhere
                </div>
                <div className="flex gap-3">
                  <SocialBtn icon={<Github className="h-4 w-4" />} label="GitHub" />
                  <SocialBtn icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
                  <SocialBtn icon={<Mail className="h-4 w-4" />} label="Email" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#c8a97e]/20 bg-white/[0.02] px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-[#c8a97e]/60 focus:bg-white/[0.04]"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#c8a97e]/25 text-[#c8a97e]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          {label}
        </div>
        <div className="mt-1 truncate text-[#e8d8c4]">{value}</div>
      </div>
    </div>
  );
}

function SocialBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-[#c8a97e]/25 text-[#e8d8c4] transition hover:-translate-y-0.5 hover:border-[#c8a97e]/70 hover:bg-[#c8a97e]/10"
    >
      {icon}
    </a>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-[#c8a97e]/10 px-5 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <motion.div
          className="font-display text-6xl text-gradient-gold"
          animate={{
            textShadow: [
              "0 0 20px rgba(200,169,126,0.2)",
              "0 0 40px rgba(200,169,126,0.5)",
              "0 0 20px rgba(200,169,126,0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          MM
        </motion.div>
        <p className="max-w-md text-sm text-muted-foreground">
          Designed & Developed by{" "}
          <span className="text-[#e8d8c4]">Mohammed Mehfil M M</span>
        </p>
        <div className="divider-gold w-40" />
        <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}

/* ---------- Root ---------- */
function Portfolio() {
  const [introDone, setIntroDone] = useState(false);
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [introDone]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence>
        {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      <ScrollProgress />
      <GoldCursor />
      <AmbientParticles />

      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none fixed inset-0 z-0"
      >
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#c8a97e]/[0.05] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-[#e8d8c4]/[0.04] blur-[120px]" />
      </motion.div>

      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
