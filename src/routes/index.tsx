import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Briefcase,
  Code2,
  Compass,
  Download,
  Github,
  Globe,
  GraduationCap,
  Headphones,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Send,
  Settings,
  Sparkles,
  Twitter,
  X,
  Zap,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phil Heart Jude B. Atmosfera — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Phil Heart Jude B. Atmosfera — a passionate 4th-year Information Technology student and web developer showcasing projects, academic accomplishments, and skills.",
      },
      { property: "og:title", content: "Phil Heart Jude B. Atmosfera — Portfolio" },
      {
        property: "og:description",
        content:
          "Premium personal portfolio showcasing academic projects, core skills, education, and ways to get in touch.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Focus" },
  { href: "#portfolio", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);
      const sections = NAV.map((n) => document.getElementById(n.href.slice(1)));
      const y = window.scrollY + 140;
      for (const s of sections) {
        if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <Nav
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        scrolled={scrolled}
        active={active}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio_ />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {showTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav({
  navOpen,
  setNavOpen,
  scrolled,
  active,
}: {
  navOpen: boolean;
  setNavOpen: (v: boolean) => void;
  scrolled: boolean;
  active: string;
}) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-3 transition-all sm:px-6 ${
            scrolled ? "glass-strong shadow-card" : ""
          }`}
        >
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.65_0.18_235)] font-display text-base font-bold text-primary-foreground">
              P
            </span>
            <span className="truncate font-display text-base font-semibold sm:text-lg">
              Phil<span className="text-primary">.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === n.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
                {active === n.href.slice(1) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary animate-glow-pulse" />
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Hire me <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
          <button
            className="grid h-10 w-10 place-items-center rounded-xl glass lg:hidden"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {navOpen && (
          <div className="mt-2 glass-strong rounded-2xl p-3 lg:hidden animate-reveal">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setNavOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === n.href.slice(1)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5"
                }`}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-[oklch(0.5_0.18_235)]/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div className="animate-reveal">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
            Open to internships & entry-level roles
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient-accent">Phil Heart Jude</span>
            <br />
            <span className="text-gradient">B. Atmosfera</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-primary sm:text-xl">
            4th Year IT Student · Aspiring Software Engineer
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A passionate Information Technology student dedicated to building high-quality,
            accessible web applications. I combine core software principles, modern frameworks, 
            and a design-minded approach to solve complex problems and create impactful digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="#" className="transition-colors hover:text-primary"><Github className="h-5 w-5" /></a>
            <a href="#" className="transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="transition-colors hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <span className="h-px w-12 bg-border" />
            <span className="text-xs uppercase tracking-widest">Follow</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-reveal">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/40 to-[oklch(0.5_0.18_235)]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-2 shadow-glow animate-float">
            <img
              src={portrait}
              alt="Portrait of Phil Heart Jude B. Atmosfera"
              width={896}
              height={1152}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-2">
              <div className="glass-strong rounded-2xl p-3">
                <div className="text-2xl font-bold text-primary">4th</div>
                <div className="text-xs text-muted-foreground">Year IT Student</div>
              </div>
              <div className="glass-strong rounded-2xl p-3">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const stats = [
    { label: "Academic Standing", value: "4th Year" },
    { label: "Projects Completed", value: "10+" },
    { label: "IT Internships", value: "1" },
    { label: "Certifications", value: "3+" },
  ];
  return (
    <Section id="about" eyebrow="About Me" title="Learning, building, and solving real problems">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="glass rounded-3xl p-8 sm:p-10 shadow-card">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm a 4th-year Information Technology student at the University of the Philippines
            with a deep interest in software engineering and web development. Through my coursework
            and self-directed projects, I've developed a solid foundation in building responsive user 
            interfaces, modeling robust databases, and creating efficient backend services.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            My development process is detail-oriented and collaborative. I care about structure, 
            performance, database security, and user experience. I am always eager to learn new 
            technologies and practices to expand my toolkit and build systems that are both 
            reliable and scalable.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["React / TypeScript", "Node.js / Express", "SQL & Databases", "UI/UX Prototyping", "Git / GitHub"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="font-display text-2xl font-bold text-gradient-accent sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Skills ---------------- */
function Skills() {
  const groups = [
    {
      icon: Code2,
      title: "Technical Skills",
      items: [
        { name: "React / TypeScript", level: 85 },
        { name: "Node.js & Express", level: 80 },
        { name: "SQL & NoSQL Databases", level: 82 },
      ],
    },
    {
      icon: Sparkles,
      title: "Professional Skills",
      items: [
        { name: "Team Collaboration", level: 90 },
        { name: "Agile Methodologies", level: 82 },
        { name: "Problem Solving", level: 88 },
      ],
    },
    {
      icon: Layers,
      title: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code & Postman", level: 85 },
        { name: "Figma (UI/UX)", level: 78 },
      ],
    },
    {
      icon: GraduationCap,
      title: "Certifications",
      items: [
        { name: "AWS Cloud Practitioner", level: 100 },
        { name: "Google UX Design", level: 100 },
        { name: "freeCodeCamp Responsive Web", level: 100 },
      ],
    },
  ];
  return (
    <Section id="skills" eyebrow="Skills" title="A solid technical and academic toolkit">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="glass rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <g.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{g.title}</h3>
            <div className="mt-5 space-y-4">
              {g.items.map((it) => (
                <div key={it.name}>
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-foreground/90">{it.name}</span>
                    <span className="text-primary">{it.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-[oklch(0.65_0.18_235)]"
                      style={{ width: `${it.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    { icon: Code2, title: "Frontend Development", desc: "Building responsive, component-based user interfaces with React, Tailwind CSS, and TypeScript." },
    { icon: Layers, title: "Backend Development", desc: "Designing RESTful APIs, routing mechanisms, and server-side logic using Node.js and Express." },
    { icon: Settings, title: "Database Systems", desc: "Modeling schemas, writing optimized queries, and managing data with PostgreSQL, MySQL, and MongoDB." },
    { icon: Sparkles, title: "UI/UX Prototyping", desc: "Creating interactive wireframes, user journeys, and component library designs in Figma." },
    { icon: Zap, title: "Git & Team Collaboration", desc: "Working in agile environments with Git branching strategies, pull request reviews, and GitHub workflows." },
    { icon: Headphones, title: "Technical Troubleshooting", desc: "Debugging application bugs, optimizing web page loading, and resolving package configuration issues." },
  ];
  return (
    <Section id="services" eyebrow="Focus Areas" title="My core development skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/20" />
            <div className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-[oklch(0.5_0.18_235)]/20 text-primary">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1"
              >
                Let's Collaborate <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Portfolio ---------------- */
const PROJECTS = [
  { img: project1, title: "EcoCycle Portal", desc: "A peer-to-peer waste recycling scheduling portal built for communities as an IT capstone project.", cat: "Web", tech: ["React", "Node.js", "MongoDB", "Express"] },
  { img: project2, title: "PinasEats Tracker", desc: "A React Native street food vendor map tracker and reviewer companion app.", cat: "Mobile", tech: ["React Native", "Expo", "Firebase"] },
  { img: project3, title: "StudyHub UI Kit", desc: "Interactive wireframes, layout grids, and visual design systems for a student collaboration hub.", cat: "Design", tech: ["Figma", "UI/UX"] },
  { img: project4, title: "Taskify Kanban Board", desc: "A collaborative workspace task management system with live charts and priority columns.", cat: "Web", tech: ["React", "TypeScript", "PostgreSQL", "Tailwind"] },
  { img: project5, title: "Smart Library Registry", desc: "A secure library checkout registry with QR code verification and automated return alerts.", cat: "Web", tech: ["PHP", "MySQL", "Tailwind"] },
  { img: project6, title: "Atmosfera Portfolio", desc: "Glassmorphism portfolio frontend layout featuring custom theme tokens and responsive cards.", cat: "Design", tech: ["React", "TanStack Start", "Tailwind"] },
];
function Portfolio_() {
  const cats = ["All", "Web", "Mobile", "Design"];
  const [filter, setFilter] = useState("All");
  const items = PROJECTS.filter((p) => filter === "All" || p.cat === filter);
  return (
    <Section id="portfolio" eyebrow="Portfolio" title="Academic & Personal Projects">
      <div className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === c
                ? "bg-primary text-primary-foreground shadow-glow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-3xl glass transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
              <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-medium text-primary">
                {p.cat}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View Project <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" aria-label="GitHub" className="ml-auto text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Experience ---------------- */
function Experience() {
  const jobs = [
    {
      role: "IT Developer Intern",
      org: "TechSolutions Inc.",
      time: "Jan 2025 — Apr 2025",
      points: [
        "Developed responsive front-end dashboard panels using React and Tailwind CSS.",
        "Collaborated with developers to design and test custom RESTful API integrations.",
        "Participated in active sprint cycles, code peer-reviews, and GitHub merge requests.",
      ],
    },
    {
      role: "IT Capstone Project Lead",
      org: "University of the Philippines",
      time: "Sept 2024 — Present",
      points: [
        "Led a team of 4 developers in creating a peer-to-peer community recycling portal.",
        "Designed the system architecture, SQL relational schema, and React context structure.",
        "Oversaw sprint schedules, user testing, and project documentation deliverables.",
      ],
    },
    {
      role: "VP of Technology / Lead Developer",
      org: "UP Association of IT Students",
      time: "Sept 2023 — July 2024",
      points: [
        "Maintained and optimized the tech organization's web portal codebase.",
        "Organized and mentored 50+ freshman students in Git workflows and HTML/CSS bootcamps.",
        "Conducted UI workshops and technical troubleshooting reviews.",
      ],
    },
  ];
  return (
    <Section id="experience" eyebrow="Experience" title="My academic & practical background">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent sm:left-1/2" />
        <div className="space-y-10">
          {jobs.map((j, i) => (
            <div
              key={j.role}
              className={`grid sm:grid-cols-2 sm:gap-10 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`relative pl-12 sm:pl-0 ${i % 2 ? "sm:text-left" : "sm:text-right"}`}>
                <span className="absolute left-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-primary shadow-glow sm:left-auto sm:right-[-10px] sm:top-6 sm:[&]:left-auto" style={i % 2 ? { right: "auto", left: "-10px" } : undefined}>
                  <span className="h-2 w-2 rounded-full bg-background" />
                </span>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{j.time}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{j.role}</h3>
                <div className="text-sm text-muted-foreground">{j.org}</div>
              </div>
              <div className="mt-3 pl-12 sm:mt-0 sm:pl-0">
                <div className="glass rounded-2xl p-5">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {j.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Education ---------------- */
function Education() {
  const edu = [
    { degree: "BS in Information Technology", school: "University of the Philippines", year: "2022 — Present", note: "Expected Graduation: 2026" },
    { degree: "Frontend Developer Program", school: "freeCodeCamp Academy", year: "2024", note: "Completed Responsive Design & JavaScript modules" },
    { degree: "Cloud Architecture Foundations", school: "AWS Academy / Coursera", year: "2024", note: "AWS Certified Cloud Practitioner preparation" },
  ];
  return (
    <Section id="education" eyebrow="Education" title="My academic & learning path">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {edu.map((e) => (
          <div key={e.degree} className="glass rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">{e.year}</div>
            <h3 className="mt-1 font-display text-lg font-semibold">{e.degree}</h3>
            <div className="text-sm text-muted-foreground">{e.school}</div>
            <div className="mt-3 text-xs text-muted-foreground">{e.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    { name: "Dr. Elena Santos", role: "Capstone Project Advisor", quote: "Phil demonstrated exceptional technical design and project leadership during his capstone project. His dedication to clean code and database architecture is highly commendable." },
    { name: "Engr. Roberto Diaz", role: "Internship Supervisor, TechSolutions", quote: "As an intern, Phil was proactive, quick to grasp complex backend concepts, and integrated seamlessly with our engineering team. He has a very promising career ahead." },
    { name: "Kyla Reyes", role: "Capstone Development Partner", quote: "Working alongside Phil was a great experience. He structured our Git workflow, helped model the database, and was always ready to jump in and pair-program when anyone got stuck." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <Section id="testimonials" eyebrow="Recommendations" title="Feedback from mentors & peers">
      <div className="relative mx-auto max-w-3xl overflow-hidden glass-strong rounded-3xl p-8 sm:p-12 shadow-card">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/15" />
        <div className="relative min-h-[180px]">
          {items.map((t, idx) => (
            <div
              key={t.name}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
              }`}
            >
              <p className="font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.5_0.18_235)] font-display font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-primary" : "w-4 bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const cards = [
    { icon: Mail, label: "Email", value: "phil.atmosfera@up.edu.ph" },
    { icon: Phone, label: "Phone", value: "+63 912 345 6789" },
    { icon: MapPin, label: "Location", value: "Manila, Philippines" },
    { icon: Globe, label: "GitHub Pages", value: "philatmosfera.github.io" },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          {cards.map((c) => (
            <div key={c.label} className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-glow">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="truncate font-medium">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="glass aspect-[16/9] overflow-hidden rounded-2xl grid-bg relative">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <MapPin className="mx-auto h-8 w-8 text-primary animate-glow-pulse" />
                <div className="mt-2 text-sm font-medium">Manila, Philippines</div>
                <div className="text-xs text-muted-foreground">Map embed placeholder</div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="glass-strong rounded-3xl p-6 sm:p-8 shadow-card"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" placeholder="Your full name" />
            <Field label="Email" placeholder="you@email.com" type="email" />
          </div>
          <div className="mt-4">
            <Field label="Subject" placeholder="What's this about?" />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about your project…"
              className="w-full resize-none rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            {sent ? "Message sent ✓" : (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        required
        {...props}
        className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border pt-16 pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.65_0.18_235)] font-display font-bold text-primary-foreground">
              P
            </span>
            <span className="font-display text-lg font-semibold">
              Phil<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            4th-year IT student building modern, accessible web applications. Open to internships and entry-level developer roles.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition-colors hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-display font-semibold">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.slice(0, 4).map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display font-semibold">More</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.slice(4).map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>
            ))}
            <li><a href="#" className="hover:text-primary">Resume</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Phil Heart Jude B. Atmosfera. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------------- Section wrapper ---------------- */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Settings className="h-3 w-3" /> {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
