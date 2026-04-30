"use client";

import Link from "next/link";
import { ArrowLeft, BookOpenText, Building2, FileBadge2, ScanSearch, Wrench } from "lucide-react";

import { DetailHero } from "@/components/site/detail-hero";
import { DirectoryCard } from "@/components/site/directory-card";
import { SummaryStat } from "@/components/site/summary-stat";
import { useSiteContext } from "@/context/site-context";
import type { Knowledge } from "@/types/coe";

export function KnowledgeDetail({
  item,
  campusName,
}: {
  item: Knowledge;
  campusName: string;
}) {
  const { dict, lang } = useSiteContext();
  const categoryMap =
    lang === "id"
      ? {
          fundamental: "Fundamental",
          intermediate: "Intermediate",
          advanced: "Advanced",
          management: "Management",
        }
      : {
          fundamental: "Fundamental",
          intermediate: "Intermediate",
          advanced: "Advanced",
          management: "Management",
        };

  return (
    <div className="space-y-6">
      <Link
        href="/knowledge"
        className="inline-flex items-center gap-2 text-sm text-[var(--app-muted)] transition hover:text-cyan-300"
      >
        <ArrowLeft className="h-4 w-4" />
        {lang === "id" ? "Kembali ke library knowledge" : "Back to knowledge library"}
      </Link>

      <DetailHero
        eyebrow={lang === "id" ? "Knowledge detail" : "Knowledge detail"}
        title={item.title}
        subtitle={item.summary}
        meta={
          <>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
              {categoryMap[item.category]}
            </span>
            <span className="rounded-full border border-[var(--app-border)] px-3 py-1 text-xs">
              {campusName}
            </span>
          </>
        }
      />

      <section className="grid gap-3 md:grid-cols-3">
        <SummaryStat
          value={categoryMap[item.category]}
          label={lang === "id" ? "Jenis resource" : "Resource type"}
          accent={<FileBadge2 className="h-5 w-5" />}
        />
        <SummaryStat
          value={item.securityDomain ?? "-"}
          label={lang === "id" ? "Domain keamanan" : "Security domain"}
          accent={<ScanSearch className="h-5 w-5" />}
        />
        <SummaryStat
          value={campusName}
          label={lang === "id" ? "Sumber utama" : "Primary source"}
          accent={<Building2 className="h-5 w-5" />}
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <DirectoryCard
          header={
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                {lang === "id" ? "Ringkasan resource" : "Resource summary"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
            </div>
          }
          body={
            <div className="space-y-4">
              <p className="text-sm leading-7 text-[var(--app-muted)]">{item.summary}</p>
              <p className="text-sm leading-7 text-[var(--app-muted)]">
                {lang === "id"
                  ? "Resource ini diposisikan sebagai inventaris kontribusi intelektual CoE: dapat berupa modul ajar, video, lab guide, maupun skenario cyber range."
                  : "This resource is positioned as part of the CoE intellectual contribution inventory, from teaching modules and videos to lab guides and cyber range scenarios."}
              </p>
            </div>
          }
        />
        <DirectoryCard
          header={
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                {lang === "id" ? "Metadata" : "Metadata"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                {lang === "id" ? "Informasi cepat" : "Quick information"}
              </h2>
            </div>
          }
          body={
            <div className="space-y-4">
              <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {dict.labels.category}
                </p>
                <p className="mt-2 text-sm font-medium">{categoryMap[item.category]}</p>
              </div>
              <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {dict.labels.campus}
                </p>
                <p className="mt-2 text-sm font-medium">{campusName}</p>
              </div>
              <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {lang === "id" ? "Tipe kontribusi" : "Contribution type"}
                </p>
                <p className="mt-2 text-sm font-medium">{item.contributionType ?? "-"}</p>
              </div>
              <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {lang === "id" ? "Kontributor" : "Contributor"}
                </p>
                <p className="mt-2 text-sm font-medium">{item.contributor ?? campusName}</p>
              </div>
              <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {lang === "id" ? "Tanggal update" : "Updated at"}
                </p>
                <p className="mt-2 text-sm font-medium">{item.updatedAt ?? "-"}</p>
              </div>
              <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {lang === "id" ? "Lisensi penggunaan" : "Usage license"}
                </p>
                <p className="mt-2 text-sm font-medium">{item.usageLicense ?? "-"}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {dict.labels.tags}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {lang === "id" ? "Software / tools terkait" : "Related software / tools"}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(item.relatedTools ?? []).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      <Wrench className="mr-1 inline h-3 w-3" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/knowledge"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] px-4 py-2 text-sm transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <BookOpenText className="h-4 w-4" />
                  {lang === "id" ? "Kembali ke semua resource" : "Back to all resources"}
                </Link>
              </div>
            </div>
          }
        />
      </section>
    </div>
  );
}
