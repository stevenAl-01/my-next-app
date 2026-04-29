"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Moon, ShieldCheck, Sun, X } from "lucide-react";

import { BrandMark } from "@/components/site/brand-mark";
import { useSiteContext } from "@/context/site-context";
import { cn } from "@/lib/utils";

const navConfig = [
  { href: "/", key: "home" },
  { href: "/coe-network", key: "network" },
  { href: "/experts", key: "experts" },
  { href: "/talents", key: "talents" },
  { href: "/knowledge", key: "knowledge" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { lang, setLang, theme, setTheme, dict } = useSiteContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const dark = theme === "dark";

  return (
    <div className="min-h-screen bg-[var(--app-bg)] text-[var(--app-fg)] transition-colors">
      <header className="sticky top-0 z-50 border-b border-[var(--app-border)] bg-[var(--app-header)]/95 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 lg:px-6">
          <div className="mb-3 flex items-center justify-between rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-2 text-xs text-[var(--app-muted)]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              <span>{lang === "id" ? "Inisiatif Ketahanan Siber Nasional" : "National Cyber Resilience Initiative"}</span>
            </div>
            <span className="hidden sm:inline">{lang === "id" ? "Pilot website untuk kemitraan kampus" : "Sales-ready pilot for campus partnership"}</span>
          </div>

          <div className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/8 bg-black/10 px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <BrandMark className="h-11 w-11" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">Cyber CoE Consortium</p>
                <h1 className="font-heading text-lg font-semibold">{dict.appName}</h1>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navConfig.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition",
                      active ? "text-cyan-300" : "text-[var(--app-fg)]/80 hover:text-cyan-200",
                    )}
                  >
                    {dict.nav[item.key]}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <button
                onClick={() => setTheme(dark ? "light" : "dark")}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-white/5 px-4 py-2 text-xs font-semibold"
              >
                {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {dark ? dict.common.darkMode : dict.common.lightMode}
              </button>
              <button
                onClick={() => setLang(lang === "id" ? "en" : "id")}
                className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200 hover:bg-cyan-400/20"
              >
                {lang === "id" ? "EN" : "ID"}
              </button>
              <Link
                href="/coe-network"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-cyan-500/20"
              >
                {lang === "id" ? "Mulai Jelajahi" : "Explore Now"}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--app-border)] bg-white/5 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen ? (
            <div className="mt-4 space-y-3 rounded-3xl border border-[var(--app-border)] bg-[var(--app-surface)] p-4 lg:hidden">
              <nav className="space-y-2">
                {navConfig.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-xl px-3 py-2 text-sm transition",
                        active ? "bg-cyan-300 text-slate-950" : "text-[var(--app-fg)] hover:bg-white/5",
                      )}
                    >
                      {dict.nav[item.key]}
                    </Link>
                  );
                })}
              </nav>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTheme(dark ? "light" : "dark")}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-white/5 px-4 py-2 text-xs font-semibold"
                >
                  {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  {dark ? dict.common.darkMode : dict.common.lightMode}
                </button>
                <button
                  onClick={() => setLang(lang === "id" ? "en" : "id")}
                  className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200 hover:bg-cyan-400/20"
                >
                  {lang === "id" ? "EN" : "ID"}
                </button>
                <Link
                  href="/coe-network"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-950"
                >
                  {lang === "id" ? "Explore" : "Explore"}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-6">{children}</main>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-8 pt-6 lg:px-6">
        <div className="rounded-[2rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BrandMark className="h-11 w-11" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">Cyber CoE Consortium</p>
                  <h2 className="font-heading text-lg font-semibold">{dict.appName}</h2>
                </div>
              </div>
              <p className="max-w-md text-sm text-[var(--app-muted)]">
                {lang === "id"
                  ? "Platform presentasi untuk menunjukkan bagaimana kampus dapat membangun Center of Excellence ketahanan siber yang strategis, kolaboratif, dan siap berdampak."
                  : "A presentation platform showing how campuses can build strategic, collaborative, impact-driven cyber resilience Centers of Excellence."}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-[var(--app-fg)]">{lang === "id" ? "Navigasi" : "Navigation"}</h3>
              <div className="space-y-2 text-sm text-[var(--app-muted)]">
                {navConfig.map((item) => (
                  <Link key={item.href} href={item.href} className="block hover:text-cyan-200">
                    {dict.nav[item.key]}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-[var(--app-fg)]">{lang === "id" ? "Nilai Utama" : "Core Value"}</h3>
              <div className="space-y-2 text-sm text-[var(--app-muted)]">
                <p>{lang === "id" ? "Penguatan reputasi kampus" : "Campus reputation uplift"}</p>
                <p>{lang === "id" ? "Pipeline expert dan talent" : "Expert and talent pipeline"}</p>
                <p>{lang === "id" ? "Kolaborasi nasional" : "National collaboration"}</p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-[var(--app-fg)]">{lang === "id" ? "Kontak" : "Contact"}</h3>
              <div className="space-y-2 text-sm text-[var(--app-muted)]">
                <p>hello@cyber-consortium.id</p>
                <p>+62 811-9000-2026</p>
                <p>{lang === "id" ? "Jakarta, Indonesia" : "Jakarta, Indonesia"}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 text-sm text-[var(--app-muted)] lg:flex-row lg:items-center lg:justify-between">
            <p>{dict.common.conceptualDisclaimer}</p>
            <p>{lang === "id" ? "Cyber CoE Consortium Pilot 2026" : "Cyber CoE Consortium Pilot 2026"}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
