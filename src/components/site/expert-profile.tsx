"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BadgeCheck, Building2, Mail, MapPinned, Phone, ShieldCheck } from "lucide-react";

import { DetailHero } from "@/components/site/detail-hero";
import { DirectoryCard } from "@/components/site/directory-card";
import { SummaryStat } from "@/components/site/summary-stat";
import { useSiteContext } from "@/context/site-context";
import type { Expert } from "@/types/coe";

export function ExpertProfile({
  expert,
  campusName,
  region,
  avatarIndex,
}: {
  expert: Expert;
  campusName: string;
  region: string;
  avatarIndex: number;
}) {
  const { dict, lang } = useSiteContext();
  const availabilityLabel =
    expert.availability === "open"
      ? lang === "id"
        ? "Tersedia untuk kolaborasi"
        : "Open for collaboration"
      : lang === "id"
        ? "Kapasitas terbatas"
        : "Limited availability";

  return (
    <div className="space-y-6">
      <Link
        href="/experts"
        className="inline-flex items-center gap-2 text-sm text-[var(--app-muted)] transition hover:accent-text"
      >
        <ArrowLeft className="h-4 w-4" />
        {lang === "id" ? "Kembali ke direktori expert" : "Back to expert directory"}
      </Link>

      <DetailHero
        eyebrow={lang === "id" ? "Profil expert" : "Expert profile"}
        title={expert.name}
        subtitle={expert.headline}
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
              href={`mailto:${expert.contactEmail}`}
              className="toolbar-primary gap-2 text-sm"
            >
              <Mail className="h-4 w-4" />
              {lang === "id" ? "Hubungi Expert" : "Contact Expert"}
            </a>
            <a
              href={`https://wa.me/${expert.contactPhone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="toolbar-action gap-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              {lang === "id" ? "Ajukan Kolaborasi" : "Propose Collaboration"}
            </a>
          </>
        }
      />

      <section className="grid gap-3 md:grid-cols-3">
        <SummaryStat
          value={expert.expertise.length}
          label={lang === "id" ? "Domain keahlian utama" : "Core expertise domains"}
          accent={<ShieldCheck className="h-5 w-5" />}
        />
        <SummaryStat
          value={expert.skkniStatus === "certified" ? "SKKNI" : "ToT"}
          label={lang === "id" ? "Kredensial dominan" : "Primary credential"}
          accent={<BadgeCheck className="h-5 w-5" />}
        />
        <SummaryStat
          value={region}
          label={lang === "id" ? "Wilayah afiliasi" : "Affiliated region"}
          accent={<MapPinned className="h-5 w-5" />}
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <DirectoryCard
          header={
            <div className="flex items-start gap-4">
              <Image
                src={`https://i.pravatar.cc/240?img=${avatarIndex}`}
                alt={expert.name}
                width={88}
                height={88}
                unoptimized
                className="h-[88px] w-[88px] rounded-[1.5rem] border border-cyan-300/20 object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                  {lang === "id" ? "Identitas profesional" : "Professional identity"}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{expert.name}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--app-muted)]">{expert.bioShort}</p>
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
                  {dict.labels.skkni}
                </p>
                  <p className="accent-text mt-2 text-sm font-medium">
                    {expert.skkniStatus === "certified" ? dict.labels.certified : dict.labels.inProgress}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {dict.labels.expertise}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {expert.expertise.map((item) => (
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
                {lang === "id" ? "Akses & kolaborasi" : "Access & collaboration"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                {lang === "id" ? "Siap dipanggil untuk inisiatif prioritas" : "Ready for priority initiatives"}
              </h2>
            </div>
          }
          body={
            <div className="space-y-4">
              <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                  {lang === "id" ? "Status ketersediaan" : "Availability status"}
                </p>
                <p className="accent-text mt-2 text-sm font-medium">{availabilityLabel}</p>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-4 dark:bg-white/5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                    {lang === "id" ? "Afiliasi kampus" : "Campus affiliation"}
                  </p>
                  <div className="mt-3 space-y-3 text-sm text-[var(--app-fg)]">
                    <p className="flex items-start gap-3">
                      <Building2 className="accent-text mt-0.5 h-4 w-4 shrink-0" />
                      <span>{campusName}</span>
                    </p>
                    <p className="flex items-start gap-3 text-[var(--app-muted)]">
                      <MapPinned className="accent-text mt-0.5 h-4 w-4 shrink-0" />
                      <span>{region}</span>
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
                      <span className="break-all">{expert.contactEmail}</span>
                    </p>
                    <p className="flex items-start gap-3 text-[var(--app-fg)]">
                      <Phone className="accent-text mt-0.5 h-4 w-4 shrink-0" />
                      <span>{expert.contactPhone}</span>
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
