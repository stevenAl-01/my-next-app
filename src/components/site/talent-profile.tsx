"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, Building2, Mail, MapPinned, Phone, Radar, Sparkles } from "lucide-react";

import { DetailHero } from "@/components/site/detail-hero";
import { DirectoryCard } from "@/components/site/directory-card";
import { SummaryStat } from "@/components/site/summary-stat";
import { useSiteContext } from "@/context/site-context";
import type { Talent } from "@/types/coe";

export function TalentProfile({
  talent,
  campusName,
  region,
  avatarIndex,
}: {
  talent: Talent;
  campusName: string;
  region: string;
  avatarIndex: number;
}) {
  const { dict, lang } = useSiteContext();
  const availabilityLabel =
    talent.availability === "ready"
      ? lang === "id"
        ? "Siap diprioritaskan"
        : "Ready to be prioritized"
      : lang === "id"
        ? "Selektif untuk penempatan"
        : "Selective for placement";
  const readinessLabel =
    talent.availability === "ready"
      ? lang === "id"
        ? "Siap shortlist"
        : "Shortlist-ready"
      : lang === "id"
        ? "Penempatan selektif"
        : "Selective placement";

  return (
    <div className="space-y-6">
      <Link
        href="/talents"
        className="inline-flex items-center gap-2 text-sm text-[var(--app-muted)] transition hover:accent-text"
      >
        <ArrowLeft className="h-4 w-4" />
        {lang === "id" ? "Kembali ke direktori talent" : "Back to talent directory"}
      </Link>

      <DetailHero
        eyebrow={lang === "id" ? "Profil talent" : "Talent profile"}
        title={talent.name}
        subtitle={talent.headline}
        meta={
          <>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
              {region}
            </span>
            <span className="rounded-full border border-[var(--app-border)] px-3 py-1 text-xs">
              {campusName}
            </span>
            <span className="rounded-full border border-[var(--app-border)] px-3 py-1 text-xs">
              {availabilityLabel}
            </span>
          </>
        }
        actions={
          <>
            <a
              href={`mailto:${talent.contactEmail}`}
              className="toolbar-primary gap-2 text-sm"
            >
              <Mail className="h-4 w-4" />
              {lang === "id" ? "Hubungi Talent" : "Contact Talent"}
            </a>
            <a
              href={`https://wa.me/${talent.contactPhone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="toolbar-action gap-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              {lang === "id" ? "Shortlist Talent" : "Shortlist Talent"}
            </a>
          </>
        }
      />

      <section className="mb-2 grid gap-3 md:grid-cols-3">
        <SummaryStat
          value={talent.competency.length}
          label={lang === "id" ? "Kompetensi terpetakan" : "Mapped competencies"}
          accent={<Sparkles className="h-5 w-5" />}
        />
        <SummaryStat
          value={talent.cyberRangeExp}
          label={lang === "id" ? "Eksposur latihan" : "Training exposure"}
          accent={<Radar className="h-5 w-5" />}
        />
        <SummaryStat
          value={region}
          label={lang === "id" ? "Wilayah asal" : "Region of origin"}
          accent={<MapPinned className="h-5 w-5" />}
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <DirectoryCard
          header={
            <div className="flex items-start gap-4">
              <Image
                src={`https://i.pravatar.cc/240?img=${avatarIndex}`}
                alt={talent.name}
                width={88}
                height={88}
                unoptimized
                className="h-[88px] w-[88px] rounded-[1.5rem] border border-cyan-300/20 object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                  {lang === "id" ? "Profil kontribusi" : "Contribution profile"}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{talent.name}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--app-muted)]">{talent.bioShort}</p>
              </div>
            </div>
          }
          body={
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                    {dict.labels.campus}
                  </p>
                  <p className="mt-2 text-sm font-medium">{campusName}</p>
                </div>
                <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                    {dict.labels.cyberRange}
                  </p>
                  <p className="accent-text mt-2 text-sm font-medium">{talent.cyberRangeExp}</p>
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {dict.labels.competency}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {talent.competency.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        <DirectoryCard
          header={
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                {lang === "id" ? "Akses rekrutmen" : "Recruitment access"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                {lang === "id" ? "Siap masuk shortlist program prioritas" : "Ready for priority shortlists"}
              </h2>
            </div>
          }
          body={
            <div className="space-y-4">
              <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {lang === "id" ? "Kesiapan kontribusi" : "Contribution readiness"}
                </p>
                <p className="accent-text mt-2 text-sm font-medium">{availabilityLabel}</p>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                    {lang === "id" ? "Afiliasi kampus" : "Campus affiliation"}
                  </p>
                  <div className="mt-3 space-y-3 text-sm">
                    <p className="flex items-start gap-3 text-[var(--app-fg)]">
                      <Building2 className="accent-text mt-0.5 h-4 w-4 shrink-0" />
                      <span>{campusName}</span>
                    </p>
                    <p className="flex items-start gap-3 text-[var(--app-muted)]">
                      <MapPinned className="accent-text mt-0.5 h-4 w-4 shrink-0" />
                      <span>{region}</span>
                    </p>
                    <p className="flex items-start gap-3 text-[var(--app-fg)]">
                      <BriefcaseBusiness className="accent-text mt-0.5 h-4 w-4 shrink-0" />
                      <span>{readinessLabel}</span>
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                    {lang === "id" ? "Kontak cepat" : "Quick contact"}
                  </p>
                  <div className="mt-3 space-y-3 text-sm">
                    <p className="flex items-start gap-3 text-[var(--app-fg)]">
                      <Mail className="accent-text mt-0.5 h-4 w-4 shrink-0" />
                      <span className="break-all">{talent.contactEmail}</span>
                    </p>
                    <p className="flex items-start gap-3 text-[var(--app-fg)]">
                      <Phone className="accent-text mt-0.5 h-4 w-4 shrink-0" />
                      <span>{talent.contactPhone}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </section>
    </div>
  );
}
