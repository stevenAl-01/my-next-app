"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  GraduationCap,
  Radar,
  ShieldCheck,
  Users,
} from "lucide-react";

import { useSiteContext } from "@/context/site-context";

const faces = [
  "https://images.pexels.com/photos/3760851/pexels-photo-3760851.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

export default function Home() {
  const { dict, lang } = useSiteContext();

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
          "Center of Excellence (CoE) adalah pusat unggulan kampus yang mengintegrasikan pendidikan, riset, dan pengabdian dalam bidang ketahanan siber.",
          "CoE menjadi mesin kolaborasi antar kampus, pemerintah, dan industri untuk menghasilkan solusi keamanan siber yang nyata dan terukur.",
        ]
      : [
          "A Center of Excellence (CoE) is a university hub integrating education, research, and impact programs in cyber resilience.",
          "CoE drives collaboration across campuses, government, and industry to deliver measurable cybersecurity outcomes.",
        ];

  const valuePoints =
    lang === "id"
      ? [
          "Meningkatkan reputasi kampus sebagai pusat talenta dan inovasi keamanan siber.",
          "Mempercepat kesiapan kurikulum OBE-SKKNI yang relevan dengan kebutuhan nasional.",
          "Membuka peluang kemitraan strategis dengan instansi pemerintah dan industri digital.",
          "Membangun pipeline expert dan talenta yang siap untuk program nasional.",
        ]
      : [
          "Strengthens campus positioning as a cybersecurity talent and innovation center.",
          "Accelerates OBE-SKKNI curriculum readiness aligned with national priorities.",
          "Unlocks strategic partnerships with public institutions and digital industry.",
          "Builds an expert and talent pipeline ready for national programs.",
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
    <div className="space-y-10">
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
            <p className="mt-4 max-w-2xl text-slate-300">{dict.landing.subtitle}</p>
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
                  <p className="text-sm text-slate-300">{metric.label}</p>
                </div>
              ))}
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
              <p className="text-xs text-cyan-200">Threat Readiness Index</p>
              <p className="mt-1 text-3xl font-semibold text-white">92%</p>
              <p className="mt-2 text-xs text-slate-400">
                {lang === "id"
                  ? "Narasi kesiapan nasional untuk presentasi kampus."
                  : "National readiness narrative for campus presentation."}
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

      <section className="anim-fade-up grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-6">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
              {lang === "id" ? "Narasi Strategis" : "Strategic Narrative"}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              {lang === "id"
                ? "Mengapa kampus perlu CoE ketahanan siber?"
                : "Why do campuses need a cyber resilience CoE?"}
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-[var(--app-muted)]">
            {coePoints.map((point) => (
              <li key={point} className="rounded-2xl border border-white/8 bg-white/4 p-4">
                {point}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
            {lang === "id" ? "Representasi Kampus" : "Campus Representation"}
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            {lang === "id"
              ? "Wajah ekosistem yang siap berkolaborasi"
              : "A collaboration-ready ecosystem"}
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {faces.map((face) => (
              <div key={face} className="overflow-hidden rounded-[1.25rem] border border-white/8">
                <Image
                  src={face}
                  alt="Ecosystem representation"
                  width={400}
                  height={320}
                  unoptimized
                  className="h-40 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="anim-fade-up grid gap-4 md:grid-cols-2">
        <article className="rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
            {lang === "id" ? "Value Untuk Kampus" : "Campus Value"}
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            {lang === "id"
              ? "Empat manfaat paling mudah dipahami pemangku kepentingan"
              : "Four benefits stakeholders can understand quickly"}
          </h3>
          <ul className="mt-5 grid gap-3 text-sm text-[var(--app-muted)]">
            {valuePoints.map((point) => (
              <li key={point} className="rounded-2xl border border-white/8 bg-white/4 p-4">
                {point}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
            {lang === "id" ? "Pilot Outcome" : "Pilot Outcomes"}
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            {lang === "id"
              ? "Apa yang langsung bisa ditunjukkan ke kampus"
              : "What can be shown to campuses immediately"}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-[var(--app-muted)]">
            <li className="rounded-2xl border border-white/8 bg-white/4 p-4">
              {lang === "id"
                ? "Narasi CoE yang lebih mudah dipresentasikan ke pimpinan kampus."
                : "A clearer CoE narrative for campus leadership."}
            </li>
            <li className="rounded-2xl border border-white/8 bg-white/4 p-4">
              {lang === "id"
                ? "Visualisasi pipeline expert dan talent yang lebih meyakinkan."
                : "A more convincing view of expert and talent pipelines."}
            </li>
            <li className="rounded-2xl border border-white/8 bg-white/4 p-4">
              {lang === "id"
                ? "Fondasi diskusi untuk produk kampus lanjutan."
                : "A foundation for a future campus product discussion."}
            </li>
          </ul>
        </article>
      </section>

      <section className="anim-fade-up rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_30%),linear-gradient(145deg,rgba(8,47,73,0.85),rgba(2,6,23,0.95))] p-6 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Closing CTA</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">
              {lang === "id"
                ? "Tunjukkan bagaimana CoE kampus Anda bisa masuk ke jejaring nasional."
                : "Show how your campus CoE can join the national network."}
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              {lang === "id"
                ? "Landing ini dirancang untuk membuka percakapan strategis, bukan hanya menampilkan data."
                : "This landing is designed to open strategic conversations, not just display data."}
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
