"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  GraduationCap,
  Handshake,
  Layers3,
  NotebookPen,
  Radar,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import { useSiteContext } from "@/context/site-context";
import { MarqueeGallery } from "@/components/site/marquee-gallery";

const galleryImages = [
  "https://images.pexels.com/photos/3760851/pexels-photo-3760851.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

export default function Home() {
  const { dict, lang } = useSiteContext();

  const marqueeImagesA = galleryImages;
  const marqueeImagesB = [galleryImages[2], galleryImages[3], galleryImages[4], galleryImages[0], galleryImages[1]];

  const metrics =
    lang === "id"
      ? [
          { value: "5+", label: "Kampus Inisiasi CoE" },
          { value: "12", label: "Expert Prioritas Nasional" },
          { value: "120+", label: "Talent Siap Kurasi" },
        ]
      : [
          { value: "5+", label: "Initiating Campuses" },
          { value: "12", label: "Priority Experts" },
          { value: "120+", label: "Curated Talents" },
        ];

  const coePoints =
    lang === "id"
      ? [
          {
            title: "Center of Excellence (CoE) Siber itu apa?",
            text: "Pusat unggulan kampus yang mengintegrasikan pendidikan, riset, dan pengabdian di bidang ketahanan siber.",
          },
          {
            title: "Fungsi utama",
            text: "Mesin kolaborasi kampus–pemerintah–industri untuk menghasilkan solusi keamanan siber yang nyata dan terukur.",
          },
        ]
      : [
          {
            title: "What is a CoE?",
            text: "A campus hub that integrates education, research, and impact programs in cyber resilience.",
          },
          {
            title: "Why it matters",
            text: "A collaboration engine across campus, government, and industry to deliver measurable cybersecurity outcomes.",
          },
        ];

  const valuePoints =
    lang === "id"
      ? [
          {
            icon: Star,
            title: "Reputasi Naik",
            text: "Perkuat posisi kampus sebagai pusat talenta dan inovasi siber.",
          },
          {
            icon: NotebookPen,
            title: "OBE-SKKNI Siap",
            text: "Percepat kesiapan kurikulum yang selaras kebutuhan nasional.",
          },
          {
            icon: Handshake,
            title: "Mitra Strategis",
            text: "Buka peluang kemitraan dengan pemerintah dan industri digital.",
          },
          {
            icon: Layers3,
            title: "Pipeline Terukur",
            text: "Bangun pipeline expert dan talenta untuk program lintas pihak.",
          },
        ]
      : [
          {
            icon: Star,
            title: "Stronger Reputation",
            text: "Position campus as a cyber talent and innovation hub.",
          },
          {
            icon: NotebookPen,
            title: "OBE-SKKNI Ready",
            text: "Accelerate curriculum alignment with national needs.",
          },
          {
            icon: Handshake,
            title: "Strategic Partners",
            text: "Open collaboration with government and digital industry.",
          },
          {
            icon: Layers3,
            title: "Measurable Pipeline",
            text: "Expert and talent pipeline ready for national programs.",
          },
        ];

  const pillars =
    lang === "id"
      ? [
          {
            icon: Globe,
            title: "Jejaring Nasional",
            text: "Menghubungkan kampus lintas wilayah ke dalam peta CoE siber yang lebih terkoordinasi.",
          },
          {
            icon: Users,
            title: "Expert & Talent Pipeline",
            text: "Menyediakan talent pool dan expert pool yang mudah dipahami oleh mitra kampus maupun industri.",
          },
          {
            icon: GraduationCap,
            title: "Kurikulum Berdampak",
            text: "Mendorong kesiapan OBE, SKKNI, dan kurikulum kolaboratif yang lebih relevan.",
          },
          {
            icon: ShieldCheck,
            title: "Kesiapan Ketahanan Siber",
            text: "Membingkai CoE sebagai pusat kesiapan, latihan, dan kolaborasi strategis kampus.",
          },
        ]
      : [
          {
            icon: Globe,
            title: "National Network",
            text: "Connect campuses across regions into a more coordinated cyber CoE map.",
          },
          {
            icon: Users,
            title: "Expert & Talent Pipeline",
            text: "Provide talent and expert pools that are easier for campus and industry partners to understand.",
          },
          {
            icon: GraduationCap,
            title: "Impactful Curriculum",
            text: "Advance OBE, SKKNI, and collaborative curriculum readiness.",
          },
          {
            icon: ShieldCheck,
            title: "Cyber Resilience Readiness",
            text: "Frame CoE as a readiness, drill, and strategic collaboration hub.",
          },
        ];

  const trustPoints =
    lang === "id"
      ? ["Untuk Kampus", "Untuk Mitra Pemerintah", "Untuk Industri Digital"]
      : ["For Campuses", "For Government Partners", "For Digital Industry"];

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="anim-fade-up relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_24%),linear-gradient(145deg,#020617_0%,#0f172a_38%,#082f49_100%)] p-8 shadow-2xl shadow-cyan-900/20 lg:p-10">
        <div className="anim-float absolute -right-20 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="anim-float absolute bottom-0 right-20 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              {dict.landing.badge}
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {dict.landing.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              {dict.landing.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/coe-network"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
              >
                {dict.landing.ctaNetwork}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/experts"
                className="rounded-full border border-slate-500 bg-slate-800/40 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50"
              >
                {dict.landing.ctaExperts}
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-base text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-cyan-300/20 bg-slate-950/55 p-4 backdrop-blur-sm lg:hidden">
              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-cyan-300/20 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">National CoE Radar</p>
                  <div className="mt-4 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/15 bg-[radial-gradient(circle,rgba(103,232,249,0.12)_0%,transparent_60%)]">
                    <Radar className="h-12 w-12 text-cyan-300" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-2xl border border-cyan-300/20 bg-slate-900/85 p-4">
                    <p className="text-xs text-cyan-200">
                      {lang === "id" ? "Kesiapan Kolaborasi" : "Collaboration Readiness"}
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-white">92%</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {lang === "id"
                        ? "Indikator ringkas untuk presentasi dan koordinasi lintas kampus/mitra."
                        : "A compact indicator for cross-campus/partner coordination."}
                    </p>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {trustPoints.map((item, index) => (
                      <div key={item} className="rounded-2xl border border-white/8 bg-white/5 p-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">0{index + 1}</p>
                        <p className="mt-1 text-sm font-medium text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[420px] lg:block">
            <div className="absolute inset-0 rounded-[1.75rem] border border-cyan-300/20 bg-slate-950/50 backdrop-blur-sm" />
            <div className="absolute left-6 top-6 rounded-2xl border border-cyan-300/20 bg-slate-900/80 p-4 shadow-xl shadow-cyan-950/30">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">National CoE Radar</p>
              <div className="mt-4 flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/15 bg-[radial-gradient(circle,rgba(103,232,249,0.12)_0%,transparent_60%)]">
                <Radar className="h-16 w-16 text-cyan-300" />
              </div>
            </div>
            <div className="absolute right-6 top-12 w-48 rounded-2xl border border-cyan-300/20 bg-slate-900/85 p-4 shadow-xl">
              <p className="text-xs text-cyan-200">{lang === "id" ? "Kesiapan Kolaborasi" : "Collaboration Readiness"}</p>
              <p className="mt-1 text-3xl font-semibold text-white">92%</p>
              <p className="mt-2 text-xs text-slate-400">
                {lang === "id"
                  ? "Indikator ringkas untuk presentasi dan koordinasi lintas kampus/mitra."
                  : "A compact indicator for cross-campus/partner coordination."}
              </p>
            </div>
            <div className="absolute bottom-8 left-10 right-10 rounded-3xl border border-cyan-300/15 bg-slate-900/85 p-5 shadow-2xl shadow-cyan-950/20">
              <div className="grid gap-3 sm:grid-cols-3">
                {trustPoints.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/5 p-3">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">0{index + 1}</p>
                    <p className="mt-1 text-sm font-medium text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="anim-fade-up rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-5 lg:p-6">
        <div className="grid gap-3 md:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-[var(--app-muted)]">{pillar.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="anim-fade-up grid min-w-0 gap-3 sm:gap-4 lg:grid-cols-2 lg:items-stretch">
        <article className="flex h-full min-w-0 max-w-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-4 sm:p-5 lg:rounded-[1.75rem] lg:p-6">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
              {lang === "id" ? "Apa Itu CoE" : "What is CoE"}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-tight max-[380px]:text-lg sm:text-2xl md:text-3xl">
              {lang === "id"
                ? "Pusat unggulan kampus untuk ketahanan siber"
                : "A campus center of excellence for cyber resilience"}
            </h3>
          </div>
          <div className="grid min-w-0 flex-1 content-start gap-3">
            {coePoints.map((point) => (
              <article
                key={point.title}
                className="group relative min-w-0 max-w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 transition hover:border-cyan-300/30 sm:rounded-[1.5rem] sm:p-5"
              >
                <div className="pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
                <h4 className="text-base font-semibold text-[var(--app-fg)] sm:text-lg">{point.title}</h4>
                <p className="mt-2 break-words text-sm leading-6 text-[var(--app-muted)] sm:text-base sm:leading-7">{point.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link href="/coe-network" className="toolbar-primary w-full max-w-full justify-center gap-2 break-words text-center sm:w-auto">
              {lang === "id" ? "Buka Peta CoE" : "Open CoE Map"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/knowledge" className="toolbar-action w-full max-w-full justify-center gap-2 break-words text-center sm:w-auto">
              {lang === "id" ? "Lihat Knowledge" : "View Knowledge"}
            </Link>
          </div>
        </article>

        <article className="flex min-w-0 max-w-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-4 sm:p-5 lg:h-full lg:rounded-[1.75rem] lg:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
            {lang === "id" ? "Representasi Kampus" : "Campus Representation"}
          </p>
          <h3 className="mt-2 text-xl font-semibold leading-tight max-[380px]:text-lg sm:text-2xl md:text-3xl">
            {lang === "id"
              ? "Gambaran ekosistem yang siap berkolaborasi"
              : "A collaboration-ready ecosystem"}
          </h3>
          <div className="mt-4 min-w-0 max-w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 sm:rounded-[1.5rem]">
            <div className="relative min-w-0 max-w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[var(--app-surface)] to-transparent sm:w-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[var(--app-surface)] to-transparent sm:w-10" />
              <div className="space-y-2 p-1 sm:p-1.5">
                <MarqueeGallery
                  images={marqueeImagesA}
                  alt="Ecosystem"
                  className=""
                  tileClassName="h-[4.25rem] w-[7rem] rounded-[1rem] sm:h-[5rem] sm:w-[8.5rem] sm:rounded-[1.1rem] lg:h-[5.5rem] lg:w-[clamp(8.5rem,11.5vw,11rem)] lg:rounded-[1.25rem]"
                />
                <MarqueeGallery
                  images={marqueeImagesB}
                  reverse
                  className="opacity-95"
                  tileClassName="h-[4.25rem] w-[7rem] rounded-[1rem] sm:h-[5rem] sm:w-[8.5rem] sm:rounded-[1.1rem] lg:h-[5.5rem] lg:w-[clamp(8.5rem,11.5vw,11rem)] lg:rounded-[1.25rem]"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex min-w-0 max-w-full gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:pb-0">
            <div className="min-w-[10.5rem] rounded-[1.1rem] border border-white/10 bg-white/5 p-3 sm:min-w-0 sm:rounded-[1.25rem] sm:p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">01</p>
              <p className="mt-2 text-sm font-semibold text-[var(--app-fg)] sm:text-base">
                {lang === "id" ? "Kolaborasi Lintas Kampus" : "Cross-campus Collaboration"}
              </p>
            </div>
            <div className="min-w-[10.5rem] rounded-[1.1rem] border border-white/10 bg-white/5 p-3 sm:min-w-0 sm:rounded-[1.25rem] sm:p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">02</p>
              <p className="mt-2 text-sm font-semibold text-[var(--app-fg)] sm:text-base">
                {lang === "id" ? "Drill dan Mentoring" : "Drill and Mentoring"}
              </p>
            </div>
            <div className="min-w-[10.5rem] rounded-[1.1rem] border border-white/10 bg-white/5 p-3 sm:min-w-0 sm:rounded-[1.25rem] sm:p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">03</p>
              <p className="mt-2 text-sm font-semibold text-[var(--app-fg)] sm:text-base">
                {lang === "id" ? "Kesiapan Talenta" : "Talent Readiness"}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="anim-fade-up grid gap-4 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
            {lang === "id" ? "Proposisi Nilai Institusi" : "Institution Value Proposition"}
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            {lang === "id"
              ? "Empat pilar manfaat utama bagi seluruh pemangku kepentingan."
              : "Four core benefit pillars for all stakeholders."}
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {valuePoints.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 transition hover:border-cyan-300/30"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold text-[var(--app-fg)]">{item.title}</h4>
                      <p className="mt-1 text-base leading-6 text-[var(--app-muted)]">{item.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
            {lang === "id" ? "Mulai Dari Sini" : "Start Here"}
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            {lang === "id"
              ? "Tiga jalur cepat untuk eksplorasi"
              : "Three quick paths to explore"}
          </h3>
          <div className="mt-5 grid gap-3">
            <article className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/30">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {lang === "id" ? "Peta Jejaring" : "Network Map"}
              </p>
              <p className="mt-2 text-base text-[var(--app-muted)]">
                {lang === "id"
                  ? "Lihat kampus per wilayah dan akses jalur ke expert/talent."
                  : "Browse campuses by region and jump to experts/talents."}
              </p>
              <div className="mt-3">
                <Link href="/coe-network" className="toolbar-action gap-2">
                  {lang === "id" ? "Buka CoE Network" : "Open CoE Network"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            <article className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/30">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {lang === "id" ? "Cari Expert/Talent" : "Find Experts/Talents"}
              </p>
              <p className="mt-2 text-base text-[var(--app-muted)]">
                {lang === "id"
                  ? "Filter cepat untuk pelatihan, pendampingan, atau rekrutmen."
                  : "Quick filters for training, mentoring, or recruitment."}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link href="/experts" className="toolbar-primary gap-2">
                  {lang === "id" ? "Lihat Expert" : "View Experts"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/talents" className="toolbar-action gap-2">
                  {lang === "id" ? "Lihat Talent" : "View Talents"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            <article className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/30">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {lang === "id" ? "Library Resource" : "Resource Library"}
              </p>
              <p className="mt-2 text-base text-[var(--app-muted)]">
                {lang === "id"
                  ? "Regulasi, kurikulum, dan skenario latihan untuk adopsi cepat."
                  : "Regulations, curriculum, and exercise scenarios for fast adoption."}
              </p>
              <div className="mt-3">
                <Link href="/knowledge" className="toolbar-action gap-2">
                  {lang === "id" ? "Buka Knowledge" : "Open Knowledge"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </article>
      </section>

      <section className="anim-fade-up rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_30%),linear-gradient(145deg,rgba(8,47,73,0.85),rgba(2,6,23,0.95))] p-6 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="mt-2 text-3xl font-semibold text-white">
              {lang === "id"
                ? "Tunjukkan bagaimana CoE kampus Anda bisa masuk ke jejaring nasional."
                : "Show how your campus CoE can join the national network."}
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              {lang === "id"
                ? "Jelajahi jejaring CoE untuk melihat peluang kolaborasi, penguatan kurikulum, dan kesiapan talenta siber."
                : "Explore the CoE network to uncover collaboration, curriculum, and cyber talent opportunities."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/coe-network"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950"
            >
              {dict.landing.ctaNetwork}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/experts"
              className="rounded-full border border-cyan-300/30 bg-white/8 px-5 py-2 text-sm font-semibold text-white"
            >
              {lang === "id" ? "Lihat Pool Expert" : "View Expert Pool"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
