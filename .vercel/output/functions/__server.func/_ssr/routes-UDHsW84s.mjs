import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as ArrowRight, S as ArrowUp, _ as Github, a as Settings, b as CodeXml, c as Phone, d as Mail, f as Linkedin, g as Globe, h as GraduationCap, i as Sparkles, l as Menu, m as Headphones, n as X, o as Send, p as Layers, r as Twitter, s as Quote, t as Zap, u as MapPin, v as Download, x as Briefcase, y as Compass } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-UDHsW84s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var portrait_default = "/assets/portrait-nR39T7b1.jpg";
var project_1_default = "/assets/project-1-DnHD7Ali.jpg";
var project_2_default = "/assets/project-2-Ddwxs7br.jpg";
var project_3_default = "/assets/project-3-CHyIt1Zf.jpg";
var project_4_default = "/assets/project-4-BZshHSsp.jpg";
var project_5_default = "/assets/project-5-DSTzZduP.jpg";
var project_6_default = "/assets/project-6-Ccyvvscx.jpg";
var NAV = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#portfolio",
		label: "Portfolio"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Portfolio() {
	const [navOpen, setNavOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20);
			setShowTop(window.scrollY > 600);
			const sections = NAV.map((n) => document.getElementById(n.href.slice(1)));
			const y = window.scrollY + 140;
			for (const s of sections) if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
				setActive(s.id);
				break;
			}
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
				navOpen,
				setNavOpen,
				scrolled,
				active
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio_, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			showTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Back to top",
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				className: "fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
			})
		]
	});
}
function Nav({ navOpen, setNavOpen, scrolled, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-3 transition-all sm:px-6 ${scrolled ? "glass-strong shadow-card" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "flex min-w-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.65_0.18_235)] font-display text-base font-bold text-primary-foreground",
							children: "P"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate font-display text-base font-semibold sm:text-lg",
							children: ["Phil", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: n.href,
							className: `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === n.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
							children: [n.label, active === n.href.slice(1) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary animate-glow-pulse" })]
						}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105",
							children: ["Hire me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "grid h-10 w-10 place-items-center rounded-xl glass lg:hidden",
						onClick: () => setNavOpen(!navOpen),
						"aria-label": "Toggle menu",
						children: navOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}), navOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 glass-strong rounded-2xl p-3 lg:hidden animate-reveal",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setNavOpen(false),
					className: `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${active === n.href.slice(1) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-white/5"}`,
					children: n.label
				}, n.href))
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 grid-bg opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-[oklch(0.5_0.18_235)]/30 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary animate-glow-pulse" }), "Available for new projects"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl",
							children: [
								"Hi, I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-accent",
									children: "Phil Heart Jude"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "B. Atmosfera"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg font-medium text-primary sm:text-xl",
							children: "Consultant · Developer · Creative Problem Solver"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "A passionate professional dedicated to delivering high-quality work and innovative solutions. I help brands, founders, and teams ship beautiful, reliable digital products that make a difference."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#portfolio",
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105",
									children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10",
									children: "Contact Me"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Resume"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center gap-5 text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "transition-colors hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "transition-colors hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "transition-colors hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-widest",
									children: "Follow"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-md animate-reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/40 to-[oklch(0.5_0.18_235)]/30 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[2rem] glass-strong p-2 shadow-glow animate-float",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: portrait_default,
							alt: "Portrait of Phil Heart Jude B. Atmosfera",
							width: 896,
							height: 1152,
							className: "aspect-[4/5] w-full rounded-[1.5rem] object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-strong rounded-2xl p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-2xl font-bold text-primary",
									children: "5+"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Years exp."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-strong rounded-2xl p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-2xl font-bold text-primary",
									children: "120+"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Projects"
								})]
							})]
						})]
					})]
				})]
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About Me",
		title: "Crafting digital experiences with purpose",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1.3fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-8 sm:p-10 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "I'm a multidisciplinary professional with a deep love for design, technology, and the strategy that ties them together. Over the past few years, I've partnered with startups, agencies, and established brands to ship products that are equal parts beautiful and dependable."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "My approach is collaborative and detail-obsessed — I care about typography, interactions, performance, and the human on the other side of the screen. When I'm not building, I'm learning: new frameworks, new ideas, new ways to make work that feels considered."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							"Design Systems",
							"TypeScript",
							"Strategy",
							"Leadership",
							"Product"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary",
							children: t
						}, t))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [
					{
						label: "Years of Experience",
						value: "5+"
					},
					{
						label: "Projects Completed",
						value: "120+"
					},
					{
						label: "Clients Served",
						value: "60+"
					},
					{
						label: "Certifications",
						value: "12"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-3xl font-bold text-gradient-accent sm:text-4xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Skills",
		title: "A toolkit built for shipping",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					icon: CodeXml,
					title: "Technical Skills",
					items: [
						{
							name: "React / TypeScript",
							level: 95
						},
						{
							name: "Node.js & APIs",
							level: 88
						},
						{
							name: "UI / UX Design",
							level: 90
						}
					]
				},
				{
					icon: Sparkles,
					title: "Professional Skills",
					items: [
						{
							name: "Project Management",
							level: 92
						},
						{
							name: "Client Communication",
							level: 95
						},
						{
							name: "Team Leadership",
							level: 85
						}
					]
				},
				{
					icon: Layers,
					title: "Tools & Software",
					items: [
						{
							name: "Figma & Framer",
							level: 94
						},
						{
							name: "Git & GitHub",
							level: 90
						},
						{
							name: "Notion / Linear",
							level: 88
						}
					]
				},
				{
					icon: GraduationCap,
					title: "Certifications",
					items: [
						{
							name: "AWS Cloud Practitioner",
							level: 100
						},
						{
							name: "Google UX Design",
							level: 100
						},
						{
							name: "Scrum Master (PSM I)",
							level: 100
						}
					]
				}
			].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-lg font-semibold",
						children: g.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-4",
						children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/90",
								children: it.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary",
								children: [it.level, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1.5 overflow-hidden rounded-full bg-white/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-to-r from-primary to-[oklch(0.65_0.18_235)]",
								style: { width: `${it.level}%` }
							})
						})] }, it.name))
					})
				]
			}, g.title))
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "services",
		eyebrow: "Services",
		title: "How I can help you ship",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					icon: Compass,
					title: "Consulting",
					desc: "Strategy sessions, audits, and roadmaps that turn ambition into a plan."
				},
				{
					icon: Briefcase,
					title: "Project Management",
					desc: "End-to-end delivery with clear scope, timelines, and predictable outcomes."
				},
				{
					icon: CodeXml,
					title: "Web Development",
					desc: "Performant, accessible, modern web apps built with React and TypeScript."
				},
				{
					icon: Sparkles,
					title: "Design Services",
					desc: "Brand systems, product UI, and design system work that scales."
				},
				{
					icon: Headphones,
					title: "Technical Support",
					desc: "Ongoing maintenance, monitoring, and white-glove client support."
				},
				{
					icon: Zap,
					title: "Custom Solutions",
					desc: "Tailored automations, integrations, and tools to fit your workflow."
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative overflow-hidden rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:shadow-glow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-[oklch(0.5_0.18_235)]/20 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: s.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1",
							children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			}, s.title))
		})
	});
}
var PROJECTS = [
	{
		img: project_1_default,
		title: "Atlas Analytics",
		desc: "Realtime BI dashboard for a fintech startup.",
		cat: "Web",
		tech: [
			"React",
			"TypeScript",
			"D3"
		]
	},
	{
		img: project_2_default,
		title: "Pulse Mobile",
		desc: "Wellness companion app with personalized goals.",
		cat: "Mobile",
		tech: ["React Native", "Firebase"]
	},
	{
		img: project_3_default,
		title: "Nova Brand System",
		desc: "Identity, guidelines, and design tokens for Nova.",
		cat: "Design",
		tech: ["Figma", "Tokens"]
	},
	{
		img: project_4_default,
		title: "Mercato Commerce",
		desc: "Headless e-commerce platform with custom CMS.",
		cat: "Web",
		tech: [
			"Next.js",
			"Stripe",
			"Sanity"
		]
	},
	{
		img: project_5_default,
		title: "Insight SaaS",
		desc: "Analytics SaaS dashboard for marketing teams.",
		cat: "Web",
		tech: [
			"React",
			"Node",
			"PostgreSQL"
		]
	},
	{
		img: project_6_default,
		title: "Studio Landing",
		desc: "Award-winning landing page for a creative studio.",
		cat: "Design",
		tech: ["Framer", "GSAP"]
	}
];
function Portfolio_() {
	const cats = [
		"All",
		"Web",
		"Mobile",
		"Design"
	];
	const [filter, setFilter] = (0, import_react.useState)("All");
	const items = PROJECTS.filter((p) => filter === "All" || p.cat === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "portfolio",
		eyebrow: "Portfolio",
		title: "Selected work",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 flex flex-wrap gap-2",
			children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setFilter(c),
				className: `rounded-full px-4 py-2 text-sm font-medium transition-all ${filter === c ? "bg-primary text-primary-foreground shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`,
				children: c
			}, c))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group overflow-hidden rounded-3xl glass transition-all hover:-translate-y-1 hover:shadow-glow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[5/4] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							width: 1200,
							height: 800,
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-medium text-primary",
							children: p.cat
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: p.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-1.5",
							children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted-foreground",
								children: t
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary",
								children: ["View Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "GitHub",
								className: "ml-auto text-muted-foreground hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-5 w-5" })
							})]
						})
					]
				})]
			}, p.title))
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		eyebrow: "Experience",
		title: "A career of shipping work I'm proud of",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent sm:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-10",
				children: [
					{
						role: "Senior Consultant & Developer",
						org: "Independent Studio",
						time: "2023 — Present",
						points: ["Lead end-to-end product builds for venture-backed startups.", "Advise founders on product strategy, architecture, and hiring."]
					},
					{
						role: "Product Engineer",
						org: "Northwind Labs",
						time: "2021 — 2023",
						points: ["Shipped flagship dashboard used by 40k+ daily active users.", "Mentored a team of 5 engineers and established design system."]
					},
					{
						role: "UI/UX Designer",
						org: "Lumen Agency",
						time: "2019 — 2021",
						points: ["Designed brand systems and product UI for 20+ clients.", "Led research, prototyping, and front-end implementation."]
					}
				].map((j, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid sm:grid-cols-2 sm:gap-10 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative pl-12 sm:pl-0 ${i % 2 ? "sm:text-left" : "sm:text-right"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-primary shadow-glow sm:left-auto sm:right-[-10px] sm:top-6 sm:[&]:left-auto",
								style: i % 2 ? {
									right: "auto",
									left: "-10px"
								} : void 0,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-background" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-widest text-primary",
								children: j.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-xl font-semibold",
								children: j.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: j.org
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 pl-12 sm:mt-0 sm:pl-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass rounded-2xl p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2 text-sm text-muted-foreground",
								children: j.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), p]
								}, p))
							})
						})
					})]
				}, j.role))
			})]
		})
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "education",
		eyebrow: "Education",
		title: "Always learning, always growing",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					degree: "BSc in Computer Science",
					school: "University of the Philippines",
					year: "2018 — 2022",
					note: "Cum Laude · Dean's Lister"
				},
				{
					degree: "Advanced UI/UX Bootcamp",
					school: "DesignLab",
					year: "2022",
					note: "Capstone project featured"
				},
				{
					degree: "Professional Scrum Master I",
					school: "Scrum.org",
					year: "2023",
					note: "Certified PSM I"
				}
			].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 text-xs font-semibold uppercase tracking-widest text-primary",
						children: e.year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-lg font-semibold",
						children: e.degree
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: e.school
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-xs text-muted-foreground",
						children: e.note
					})
				]
			}, e.degree))
		})
	});
}
function Testimonials() {
	const items = [
		{
			name: "Sarah Chen",
			role: "Founder, Atlas",
			quote: "Phil shipped a product that exceeded our expectations. The eye for detail and care for the end user is on another level."
		},
		{
			name: "Marcus Reyes",
			role: "CTO, Northwind",
			quote: "Reliable, thoughtful, and deeply technical. Phil is the rare partner who can both design and build at a senior level."
		},
		{
			name: "Ana Velasco",
			role: "Head of Design, Lumen",
			quote: "Working with Phil felt like adding a co-founder. Strong opinions, kind delivery, and zero ego."
		}
	];
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((p) => (p + 1) % items.length), 6e3);
		return () => clearInterval(t);
	}, [items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "testimonials",
		eyebrow: "Testimonials",
		title: "Kind words from collaborators",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl overflow-hidden glass-strong rounded-3xl p-8 sm:p-12 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute right-8 top-8 h-16 w-16 text-primary/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[180px]",
					children: items.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `absolute inset-0 transition-all duration-700 ${idx === i ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.5_0.18_235)] font-display font-bold text-primary-foreground",
								children: t.name[0]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: t.role
							})] })]
						})]
					}, t.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex gap-2",
					children: items.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI(idx),
						"aria-label": `Slide ${idx + 1}`,
						className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-4 bg-white/15"}`
					}, idx))
				})
			]
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Contact",
		title: "Let's build something great",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [[
					{
						icon: Mail,
						label: "Email",
						value: "hello@atmosfera.dev"
					},
					{
						icon: Phone,
						label: "Phone",
						value: "+63 900 000 0000"
					},
					{
						icon: MapPin,
						label: "Location",
						value: "Manila, Philippines"
					},
					{
						icon: Globe,
						label: "Website",
						value: "atmosfera.dev"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-medium",
							children: c.value
						})]
					})]
				}, c.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass aspect-[16/9] overflow-hidden rounded-2xl grid-bg relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mx-auto h-8 w-8 text-primary animate-glow-pulse" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm font-medium",
									children: "Manila, Philippines"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Map embed placeholder"
								})
							]
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
					setTimeout(() => setSent(false), 3e3);
				},
				className: "glass-strong rounded-3xl p-6 sm:p-8 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							placeholder: "Your full name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							placeholder: "you@email.com",
							type: "email"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Subject",
							placeholder: "What's this about?"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 5,
							required: true,
							placeholder: "Tell me about your project…",
							className: "w-full resize-none rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]",
						children: sent ? "Message sent ✓" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })] })
					})
				]
			})]
		})
	});
}
function Field({ label, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		required: true,
		...props,
		className: "w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-20 border-t border-border pt-16 pb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.65_0.18_235)] font-display font-bold text-primary-foreground",
							children: "P"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg font-semibold",
							children: ["Phil", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-muted-foreground",
						children: "Building beautiful, reliable digital products with care. Open to new collaborations and full-time opportunities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex items-center gap-3",
						children: [
							Github,
							Linkedin,
							Twitter,
							Mail
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition-colors hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display font-semibold",
					children: "Navigate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: NAV.slice(0, 4).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "hover:text-primary",
						children: n.label
					}) }, n.href))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display font-semibold",
					children: "More"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [NAV.slice(4).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "hover:text-primary",
						children: n.label
					}) }, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-primary",
						children: "Resume"
					}) })]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-12 max-w-7xl border-t border-border px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Phil Heart Jude B. Atmosfera. All rights reserved."
			]
		})]
	});
}
function Section({ id, eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "relative scroll-mt-24 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-12 max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-3 w-3" }),
						" ",
						eyebrow
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: title
					})
				})]
			}), children]
		})
	});
}
//#endregion
export { Portfolio as component };
