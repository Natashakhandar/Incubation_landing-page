import { useEffect, useMemo, useState } from 'react'

const navLinks = ['Home', 'Programs', 'Startups', 'Partners', 'Events', 'Contact']

const stats = [
  { value: '90+', label: 'Startups Supported' },
  { value: '₹50Cr+', label: 'Revenue Generated' },
  { value: '200+', label: 'Jobs Created' },
]

const features = [
  {
    title: 'Founder-Focused Guidance',
    description:
      'Strategic support from validation to market fit, designed to reduce noise and accelerate meaningful progress.',
  },
  {
    title: 'Enterprise & Pilot Access',
    description:
      'Connect with industry partners and institutions that can unlock pilots, early traction, and market visibility.',
  },
  {
    title: 'Execution Frameworks',
    description:
      'Structured milestones, review checkpoints, and operator playbooks to help teams scale with clarity.',
  },
]

const programs = [
  {
    title: 'Pre-Incubation Launchpad',
    description: 'Problem validation, customer discovery, and MVP strategy for idea and prototype-stage founders.',
    duration: '6 Weeks',
    eligibility: 'Idea stage and student founders',
  },
  {
    title: 'Growth Acceleration Track',
    description: 'Scale programs for startups with early traction, focusing on pilots, GTM, and investor readiness.',
    duration: '12 Weeks',
    eligibility: 'Early revenue startups',
  },
  {
    title: 'Sector Innovation Labs',
    description: 'Domain mentorship and ecosystem connects in deeptech, healthtech, agri-tech, and climate.',
    duration: 'Ongoing',
    eligibility: 'Teams with validated prototypes',
  },
]

const partnerLogos = ['SINE IIT Bombay', 'TiE Nagpur', 'GAME', 'STPI', 'BioNEST']

const sectors = ['Manufacturing', 'Healthcare', 'Edutech', 'Energy', 'Agriculture', 'Logistics']

const startups = [
  {
    name: 'AgriPulse',
    industry: 'AgriTech',
    description: 'Precision crop intelligence platform for smallholder farms and FPOs.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'MediDock',
    industry: 'HealthTech',
    description: 'Remote diagnostics workflow connecting regional clinics to specialist networks.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'VoltGrid',
    industry: 'Energy',
    description: 'Smart energy optimization and load intelligence for manufacturing SMEs.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'EduForge',
    industry: 'EdTech',
    description: 'Outcome-first learning analytics and mentorship workflows for institutions.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
  },
]

const events = [
  {
    date: '16 APR 2026',
    title: 'Demo Night: DeepTech Founders',
    description: 'Startup teams pitch live prototypes to mentors, strategic partners, and visiting investors.',
  },
  {
    date: '29 APR 2026',
    title: 'Startup Policy & Grants Desk',
    description: 'Hands-on sessions for grant opportunities, compliance, and funding pathways.',
  },
  {
    date: '08 MAY 2026',
    title: 'Founder Office Hours',
    description: '1:1 advisory slots with operators, domain experts, and growth mentors.',
  },
]

const testimonials = [
  {
    quote:
      'The program gave us a sharp operating rhythm and direct access to decision-makers. We moved from pilots to signed deployments faster than expected.',
    name: 'Ritika Sharma',
    role: 'Founder, AgriPulse',
  },
  {
    quote:
      'What impressed us most was the quality of mentorship and practical execution support. Every review cycle translated into tangible growth.',
    name: 'Aman Jha',
    role: 'Co-Founder, VoltGrid',
  },
]

function useReveal() {
  const [visible, setVisible] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((previous) => {
          const next = new Set(previous)
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.dataset.revealId) {
              next.add(entry.target.dataset.revealId)
            }
          })
          return next
        })
      },
      { threshold: 0.16 },
    )

    const nodes = document.querySelectorAll('[data-reveal-id]')
    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return visible
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p> : null}
    </div>
  )
}

function Navbar({ isDark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden   bg-cyan-300/10 shadow-[0_0_20px_rgba(30,64,175,0.26)]">
            <img src="/image.png" alt="Incubation Center logo" className=" object-cover" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">Incubation Center</span>
            <span className="block text-xs text-slate-400">Innovation support ecosystem</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/20 hover:shadow-[0_0_24px_rgba(30,64,175,0.34)]"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
          </button>

          <a
            href="#apply"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/20 hover:shadow-[0_0_24px_rgba(30,64,175,0.34)]"
          >
            Apply Now
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero({ mouse }) {
  const panelGlow = useMemo(
    () => ({
      transform: `translate3d(${(mouse.x - window.innerWidth / 2) * 0.02}px, ${(mouse.y - 300) * 0.02}px, 0)`,
    }),
    [mouse.x, mouse.y],
  )

  return (
    <section id="home" className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-20 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-reveal-id="hero-copy" className="transition duration-700 data-[visible=false]:translate-y-5" data-visible="true">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">Innovation Platform</p>
          <h1 className="mt-4 max-w-2xl bg-gradient-to-r from-cyan-300 via-blue-300 to-blue-700 bg-[length:220%_220%] bg-clip-text text-5xl font-bold leading-[0.98] tracking-tight text-transparent animate-pulse sm:text-7xl lg:text-[5.25rem]">
            Central India’s Innovation Center
          </h1>
          <p className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-white/95 sm:text-3xl lg:text-4xl">
            Incubein Foundation
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {sectors.map(sector => (
              <span key={sector} className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur-md">
                {sector}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            We help founders turn ideas into scalable businesses through mentorship, infrastructure, strategic partnerships, and funding pathways.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-700 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(30,64,175,0.45)]"
            >
              Apply Now
            </a>
            <a
              href="#programs"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(30,64,175,0.28)]"
            >
              Explore Programs
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/16 to-blue-800/24 blur-3xl" style={panelGlow} />
          <article className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/5 p-6 shadow-[0_20px_90px_rgba(9,18,48,0.55)] backdrop-blur-2xl sm:p-7">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/25 blur-2xl" />
            <div className="absolute -bottom-10 -left-4 h-24 w-24 rounded-full bg-blue-800/24 blur-2xl" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Mentor Network</p>
                <p className="mt-2 text-lg font-semibold text-white">180+ Experts</p>
                <div className="mt-4 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Pilot Access</p>
                <p className="mt-2 text-lg font-semibold text-white">47 Active Pilots</p>
                <div className="mt-4 flex items-end gap-1.5">
                  <span className="h-5 w-3 rounded-t bg-cyan-300/80" />
                  <span className="h-8 w-3 rounded-t bg-blue-300/80" />
                  <span className="h-11 w-3 rounded-t bg-blue-700/80" />
                  <span className="h-7 w-3 rounded-t bg-violet-300/80" />
                </div>
              </div>
              <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-black/35 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Funding Funnel</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-lg font-semibold text-white">₹65Cr+ mobilized across incubated ventures</p>
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function AboutSection({ reveal }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Overview"
        title="Built for practical startup growth"
        description="A high-performance incubation platform that combines mentoring depth, ecosystem access, and execution discipline for founders."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article
          data-reveal-id="stats-card"
          className={`rounded-[1.75rem] border border-white/12 bg-white/5 p-6 shadow-[0_16px_60px_rgba(9,18,48,0.5)] backdrop-blur-2xl transition duration-700 ${
            reveal.has('stats-card') ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="text-sm leading-7 text-slate-300">
            We support founders through every critical stage: validation, prototyping, pilot execution, fundraising, and scale-readiness.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/35 p-4">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              data-reveal-id={`feature-${index}`}
              className={`rounded-2xl border border-white/12 bg-white/5 p-5 shadow-[0_16px_44px_rgba(9,18,48,0.45)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10 hover:shadow-[0_0_36px_rgba(30,64,175,0.24)] ${
                reveal.has(`feature-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-300/35 to-blue-700/25" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramsSection({ reveal }) {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Programs"
        title="Tracks tailored for every startup stage"
        description="Choose the program that aligns with your current maturity, market context, and scaling objective."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {programs.map((program, index) => (
          <article
            key={program.title}
            data-reveal-id={`program-${index}`}
            className={`rounded-[1.7rem] border border-white/12 bg-white/5 p-6 shadow-[0_16px_56px_rgba(9,18,48,0.48)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(30,64,175,0.28)] ${
              reveal.has(`program-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                Program {index + 1}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Cohort</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{program.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{program.description}</p>
            <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-400">Duration</span>
                <span className="font-semibold text-slate-100">{program.duration}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-400">Eligibility</span>
                <span className="text-right font-semibold text-slate-100">{program.eligibility}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PartnersSection() {
  return (
    <section id="partners" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Partners"
        title="Backed by a trusted innovation ecosystem"
        description="Our incubation network is strengthened by institutional and ecosystem collaborators."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {partnerLogos.map((partner) => (
          <div
            key={partner}
            className="group rounded-2xl border border-white/12 bg-white/5 p-5 text-center shadow-[0_14px_40px_rgba(9,18,48,0.42)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/10 hover:shadow-[0_0_34px_rgba(30,64,175,0.25)]"
          >
            <p className="text-sm font-semibold tracking-wide text-slate-100">{partner}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function StartupsSection({ reveal }) {
  return (
    <section id="startups" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Portfolio"
        title="Startups building high-impact solutions"
        description="A snapshot of incubated ventures across key sectors with measurable market traction."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {startups.map((startup, index) => (
          <article
            key={startup.name}
            data-reveal-id={`startup-${index}`}
            className={`group overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/5 shadow-[0_18px_56px_rgba(9,18,48,0.48)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1.5 hover:border-cyan-300/35 hover:shadow-[0_0_36px_rgba(30,64,175,0.26)] ${
              reveal.has(`startup-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={startup.image}
                alt={`${startup.name} startup workspace`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full border border-cyan-300/25 bg-black/55 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-xl">
                {startup.industry}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{startup.name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{startup.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function EventsSection({ reveal }) {
  return (
    <section id="events" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Events"
        title="Upcoming founder and ecosystem sessions"
        description="Curated experiences for networking, learning, and investor-facing momentum."
      />

      <div className="space-y-4">
        {events.map((event, index) => (
          <article
            key={event.title}
            data-reveal-id={`event-${index}`}
            className={`flex flex-col gap-5 rounded-2xl border border-white/12 bg-white/5 p-5 shadow-[0_14px_44px_rgba(9,18,48,0.44)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(30,64,175,0.25)] sm:flex-row sm:items-center sm:justify-between ${
              reveal.has(`event-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{event.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{event.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">{event.description}</p>
            </div>
            <a
              href="#apply"
              className="inline-flex w-fit items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition duration-300 hover:bg-cyan-300/20 hover:shadow-[0_0_26px_rgba(30,64,175,0.3)]"
            >
              Register
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function TestimonialsSection({ reveal }) {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Testimonials"
        title="Founder stories from our incubation cohorts"
        description="Insights from startups that scaled faster with structured support from our ecosystem."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((item, index) => (
          <figure
            key={item.name}
            data-reveal-id={`testimonial-${index}`}
            className={`rounded-[1.7rem] border border-white/12 bg-white/5 p-6 shadow-[0_14px_46px_rgba(9,18,48,0.44)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/10 ${
              reveal.has(`testimonial-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <blockquote className="text-lg leading-8 text-slate-200">“{item.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                {item.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </span>
              <span>
                <span className="block font-semibold text-white">{item.name}</span>
                <span className="block text-sm text-slate-400">{item.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section id="apply" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-gradient-to-br from-cyan-400/18 via-blue-500/10 to-blue-800/16 p-8 shadow-[0_0_70px_rgba(30,64,175,0.2)] backdrop-blur-2xl sm:p-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
        <div className="relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Call To Action</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Join the Next Generation of Innovators
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Apply to our incubation platform and build with mentorship, partnerships, and execution systems that create compounding growth.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/15 px-7 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/25 hover:shadow-[0_0_32px_rgba(30,64,175,0.36)]"
          >
            Apply for Incubation
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactSection({ reveal }) {
  const contactItems = [
    {
      key: 'location',
      title: 'Location',
      value: 'Innovation District, Central India, Nagpur 440001',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-cyan-300" aria-hidden="true">
          <path d="M12 21C16 16.8 18 13.7 18 10.5C18 7.46 15.54 5 12.5 5C9.46 5 7 7.46 7 10.5C7 13.7 9 16.8 12 21Z" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12.5" cy="10.5" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      key: 'phone',
      title: 'Phone',
      value: '+91 98765 43210',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-cyan-300" aria-hidden="true">
          <path d="M6 4H9L10.5 8.2L8.8 9.8C9.8 11.9 11.4 13.5 13.5 14.5L15.1 12.8L19.3 14.3V17.7C19.3 18.4 18.7 19 18 19C11.4 19 6 13.6 6 7C6 6.3 6.6 5.7 7.3 5.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      key: 'email',
      title: 'Email',
      value: 'hello@incubationcenter.org',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-cyan-300" aria-hidden="true">
          <path d="M4 7.5C4 6.67 4.67 6 5.5 6H18.5C19.33 6 20 6.67 20 7.5V16.5C20 17.33 19.33 18 18.5 18H5.5C4.67 18 4 17.33 4 16.5V7.5Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 8L12 13L19 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-10 h-2.5 w-2.5 rounded-full bg-blue-300/70" />
        <div className="absolute left-[30%] top-24 h-2 w-2 rounded-full bg-cyan-300/70" />
        <div className="absolute left-[20%] bottom-16 h-2.5 w-2.5 rounded-full bg-sky-300/70" />
        <div className="absolute right-[18%] top-14 h-2 w-2 rounded-full bg-blue-300/70" />
        <div className="absolute right-[8%] bottom-20 h-2.5 w-2.5 rounded-full bg-cyan-300/70" />

        <div className="absolute left-[10%] top-[3.1rem] h-px w-24 rotate-[20deg] bg-blue-300/25" />
        <div className="absolute left-[22%] top-[5.9rem] h-px w-28 -rotate-[38deg] bg-cyan-300/25" />
        <div className="absolute right-[16%] top-[4.2rem] h-px w-28 rotate-[22deg] bg-blue-300/25" />
        <div className="absolute right-[12%] bottom-[5.4rem] h-px w-32 -rotate-[16deg] bg-cyan-300/25" />
      </div>

      <SectionHeader
        eyebrow="Contact"
        title="Contact Us"
        description="Reach out to our incubation team for partnerships, applications, and startup support queries."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <article
              key={item.key}
              data-reveal-id={`contact-card-${index}`}
              className={`group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/12 bg-white/5 p-5 shadow-[0_14px_44px_rgba(9,18,48,0.42)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/10 hover:shadow-[0_0_34px_rgba(30,64,175,0.25)] ${
                reveal.has(`contact-card-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <span className="relative mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-[linear-gradient(160deg,rgba(59,130,246,0.18),rgba(9,14,23,0.75))] shadow-[0_0_24px_rgba(30,64,175,0.25)]">
                {item.icon}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">{item.value}</p>
              </div>
            </article>
          ))}
        </div>

        <form
          data-reveal-id="contact-form"
          className={`relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/5 p-5 shadow-[0_16px_54px_rgba(9,18,48,0.48)] backdrop-blur-2xl transition duration-700 sm:p-7 ${
            reveal.has('contact-form') ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          aria-label="Contact form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/65 to-transparent" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/85">Send us a message</p>

          <div className="space-y-4">
            <label className="block">
              <span className="sr-only">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition duration-300 hover:border-white/20 focus:border-cyan-300/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]"
              />
            </label>

            <label className="block">
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition duration-300 hover:border-white/20 focus:border-cyan-300/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]"
              />
            </label>

            <label className="block">
              <span className="sr-only">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition duration-300 hover:border-white/20 focus:border-cyan-300/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]"
              />
            </label>

            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition duration-300 hover:border-white/20 focus:border-cyan-300/40 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-[0_0_26px_rgba(30,64,175,0.45)] transition duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-cyan-400 hover:shadow-[0_0_40px_rgba(30,64,175,0.62)]"
          >
            <span aria-hidden="true">➤</span>
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.95fr_0.95fr] lg:px-10">
        <section>
          <h3 className="text-lg font-semibold text-white">Incubation Center</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
            Supporting founders with infrastructure, ecosystem access, and growth frameworks to build high-impact companies.
          </p>
          <div className="mt-4 space-y-1 text-sm text-slate-400">
            <p>Address: Innovation District, Nagpur, India</p>
            <p>Email: hello@incubationcenter.org</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition duration-300 hover:text-cyan-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Social</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            {['LinkedIn', 'X / Twitter', 'Instagram', 'YouTube'].map((social) => (
              <li key={social}>
                <a href="#" className="transition duration-300 hover:text-cyan-200">
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500 sm:px-8 lg:px-10">
        © 2026 Incubation Center. All rights reserved.
      </div>
    </footer>
  )
}

function App() {
  const reveal = useReveal()
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : true
  })
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [time, setTime] = useState(0)

  useEffect(() => {
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const onMove = (event) => setMouse({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime((value) => value + 0.035)
    }, 30)

    return () => window.clearInterval(timer)
  }, [])

  const blobOne = useMemo(
    () => ({
      transform: `translate3d(${Math.sin(time * 1.1) * 24}px, ${Math.cos(time * 0.9) * 22}px, 0)`,
    }),
    [time],
  )

  const blobTwo = useMemo(
    () => ({
      transform: `translate3d(${Math.cos(time * 0.8) * 28}px, ${Math.sin(time * 1.2) * 24}px, 0)`,
    }),
    [time],
  )

  const blobThree = useMemo(
    () => ({
      transform: `translate3d(${Math.sin(time * 0.7) * 18}px, ${Math.cos(time * 1.1) * 26}px, 0)`,
    }),
    [time],
  )

  const cursorGlow = useMemo(
    () => ({
      transform: `translate3d(${mouse.x - 96}px, ${mouse.y - 96}px, 0)`,
    }),
    [mouse.x, mouse.y],
  )

  const meshDriftOne = useMemo(
    () => ({
      transform: `translate3d(${Math.sin(time * 0.45) * 10}px, ${Math.cos(time * 0.35) * 8}px, 0)`,
    }),
    [time],
  )

  const meshDriftTwo = useMemo(
    () => ({
      transform: `translate3d(${Math.cos(time * 0.38) * 12}px, ${Math.sin(time * 0.42) * 9}px, 0)`,
    }),
    [time],
  )

  return (
    <div className={`relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#040507] via-[#05070c] to-[#050507] text-slate-100 selection:bg-cyan-300/30 selection:text-white isolate ${isDark ? '' : 'theme-light'}`}>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.16),transparent_26%),radial-gradient(circle_at_20%_80%,rgba(30,64,175,0.2),transparent_24%)]" />
        <div className="absolute inset-0 opacity-26 bg-[linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.2]' : 'opacity-[0.05]'} bg-[linear-gradient(126deg,transparent_0%,rgba(34,211,238,0.22)_48%,transparent_52%),linear-gradient(62deg,transparent_0%,rgba(59,130,246,0.2)_44%,transparent_50%),linear-gradient(-34deg,transparent_0%,rgba(37,99,235,0.18)_46%,transparent_54%)]`} />
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.9)_2px,transparent_3px),radial-gradient(circle_at_72%_28%,rgba(34,211,238,0.95)_2px,transparent_3px),radial-gradient(circle_at_38%_74%,rgba(37,99,235,0.92)_2px,transparent_3px),radial-gradient(circle_at_84%_76%,rgba(59,130,246,0.9)_2px,transparent_3px)]" />

        <svg
          className={`absolute inset-0 h-full w-full ${isDark ? 'opacity-[0.28]' : 'opacity-[0.05]'}`}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          style={meshDriftOne}
          aria-hidden="true"
        >
          <g stroke="rgba(56,189,248,0.34)" strokeWidth="1.4">
            <path d="M80 150 L260 90 L410 220 L620 160 L780 290" />
            <path d="M260 90 L320 280 L530 360 L690 250" />
            <path d="M980 120 L1120 80 L1240 220 L1360 160" />
            <path d="M900 340 L1070 280 L1220 380 L1360 320" />
            <path d="M200 620 L390 540 L560 660 L720 580" />
            <path d="M760 670 L940 590 L1110 700 L1310 620" />
          </g>
          <g fill="rgba(56,189,248,0.95)">
            <circle cx="80" cy="150" r="2.2" />
            <circle cx="260" cy="90" r="2.6" />
            <circle cx="410" cy="220" r="2.4" />
            <circle cx="620" cy="160" r="2.5" />
            <circle cx="780" cy="290" r="2.3" />
            <circle cx="980" cy="120" r="2.3" />
            <circle cx="1120" cy="80" r="2.5" />
            <circle cx="1240" cy="220" r="2.3" />
            <circle cx="200" cy="620" r="2.2" />
            <circle cx="390" cy="540" r="2.6" />
            <circle cx="560" cy="660" r="2.4" />
            <circle cx="1110" cy="700" r="2.5" />
          </g>
        </svg>

        <svg
          className={`absolute inset-0 h-full w-full ${isDark ? 'opacity-[0.24]' : 'opacity-[0.05]'}`}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          style={meshDriftTwo}
          aria-hidden="true"
        >
          <g stroke="rgba(34,211,238,0.34)" strokeWidth="1.35">
            <path d="M120 420 L300 350 L470 470 L640 410 L810 520" />
            <path d="M840 500 L1020 430 L1170 560 L1360 500" />
            <path d="M640 410 L700 560 L860 640 L1020 560" />
          </g>
          <g fill="rgba(34,211,238,0.92)">
            <circle cx="120" cy="420" r="2.1" />
            <circle cx="300" cy="350" r="2.3" />
            <circle cx="470" cy="470" r="2.2" />
            <circle cx="640" cy="410" r="2.4" />
            <circle cx="810" cy="520" r="2.3" />
            <circle cx="1020" cy="430" r="2.2" />
            <circle cx="1170" cy="560" r="2.3" />
            <circle cx="1360" cy="500" r="2.2" />
          </g>
        </svg>

        <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" style={blobOne} />
        <div className="absolute right-[10%] top-[24%] h-80 w-80 rounded-full bg-blue-400/18 blur-3xl" style={blobTwo} />
        <div className="absolute bottom-[8%] left-[36%] h-72 w-72 rounded-full bg-blue-800/18 blur-3xl" style={blobThree} />
        <div className="absolute h-48 w-48 rounded-full bg-blue-700/18 blur-3xl transition-transform duration-150 mix-blend-screen" style={cursorGlow} />
        <div className="absolute h-24 w-24 rounded-full border border-blue-400/30 bg-blue-600/14 blur-2xl transition-transform duration-150 mix-blend-screen" style={{ transform: `translate3d(${mouse.x - 48}px, ${mouse.y - 48}px, 0)` }} />

      </div>

      <div className="relative z-10">
        <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
        <main>
          <Hero mouse={mouse} />
          <AboutSection reveal={reveal} />
          <ProgramsSection reveal={reveal} />
          <PartnersSection />
          <StartupsSection reveal={reveal} />
          <EventsSection reveal={reveal} />
          <TestimonialsSection reveal={reveal} />
          <CtaSection />
          <ContactSection reveal={reveal} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
