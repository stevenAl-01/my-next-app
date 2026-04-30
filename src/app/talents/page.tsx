"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Building2, MapPinned, Radar, RotateCcw, Search, Sparkles } from "lucide-react";

import { DirectoryCard } from "@/components/site/directory-card";
import { EmptyState } from "@/components/site/empty-state";
import { FilterBar } from "@/components/site/filter-bar";
import { PageTitle } from "@/components/site/page-title";
import { SummaryStat } from "@/components/site/summary-stat";
import { campuses, talents } from "@/data/coe-data";
import { useSiteContext } from "@/context/site-context";

export default function TalentsPage() {
  const { dict, campusNameById, lang } = useSiteContext();
  const [campus, setCampus] = useState("all");
  const [competency, setCompetency] = useState("all");
  const [region, setRegion] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const campusParam = params.get("campus");
    if (campusParam) {
      const frame = window.requestAnimationFrame(() => {
        setCampus(campusParam);
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  const competencies = useMemo(
    () => Array.from(new Set(talents.flatMap((talent) => talent.competency))).sort(),
    [],
  );
  const regions = useMemo(
    () => Array.from(new Set(campuses.map((item) => item.region))).sort(),
    [],
  );

  const items = talents.filter((talent) => {
    const campusRecord = campuses.find((item) => item.id === talent.campusId);
    const campusRegion = campusRecord?.region ?? "";
    const term = query.toLowerCase();
    const byCampus = campus === "all" || talent.campusId === campus;
    const byComp = competency === "all" || talent.competency.includes(competency);
    const byRegion = region === "all" || campusRegion === region;
    const byQuery =
      query.length === 0 ||
      talent.name.toLowerCase().includes(term) ||
      talent.headline.toLowerCase().includes(term) ||
      talent.competency.join(" ").toLowerCase().includes(term) ||
      talent.cyberRangeExp.toLowerCase().includes(term) ||
      (talent.programStudy ?? "").toLowerCase().includes(term) ||
      (talent.careerInterest ?? "").toLowerCase().includes(term) ||
      campusNameById(talent.campusId).toLowerCase().includes(term);

    return byCampus && byComp && byRegion && byQuery;
  });

  const mappedTrainingCount = items.reduce((total, talent) => total + (talent.trainingScores?.length ?? 0), 0);
  const careerInterestSpread = new Set(items.map((item) => item.careerInterest ?? item.competency[0] ?? "")).size;

  return (
    <div>
      <PageTitle title={dict.pages.talentsTitle} subtitle={dict.pages.talentsSubtitle} />

      <section className="mb-6 grid gap-3 md:grid-cols-3">
        <SummaryStat
          value={items.length}
          label={lang === "id" ? "Talent siap dipetakan" : "Talents ready for mapping"}
          accent={<Sparkles className="h-5 w-5" />}
        />
        <SummaryStat
          value={mappedTrainingCount}
          label={lang === "id" ? "Pelatihan terpetakan" : "Mapped trainings"}
          accent={<Radar className="h-5 w-5" />}
        />
        <SummaryStat
          value={careerInterestSpread}
          label={lang === "id" ? "Fokus karier utama" : "Core career interests"}
          accent={<MapPinned className="h-5 w-5" />}
        />
      </section>

      <FilterBar
        eyebrow={lang === "id" ? "Pencarian talent operasional" : "Operational talent search"}
        actions={
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setRegion("all");
              setCampus("all");
              setCompetency("all");
            }}
            className="toolbar-action"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            {dict.common.reset}
          </button>
        }
      >
        <div className="space-y-2">
          <p className="toolbar-label">{lang === "id" ? "Cari nama, kampus, atau kompetensi" : "Search name, campus, or competency"}</p>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--app-muted)]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={dict.filters.searchPlaceholder}
              className="toolbar-control pl-11"
            />
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-3">
          <div className="space-y-2">
            <p className="toolbar-label">{dict.filters.region}</p>
            <select value={region} onChange={(event) => setRegion(event.target.value)} className="toolbar-select">
              <option value="all">{dict.filters.allRegions}</option>
              {regions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <p className="toolbar-label">{dict.filters.campus}</p>
            <select value={campus} onChange={(event) => setCampus(event.target.value)} className="toolbar-select">
              <option value="all">{dict.filters.national}</option>
              {campuses.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <p className="toolbar-label">{dict.labels.competency}</p>
            <select
              value={competency}
              onChange={(event) => setCompetency(event.target.value)}
              className="toolbar-select"
            >
              <option value="all">{lang === "id" ? "Semua Kompetensi" : "All Competencies"}</option>
              {competencies.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </FilterBar>

      {items.length === 0 ? (
        <EmptyState
          title={lang === "id" ? "Belum ada talent yang cocok" : "No talents found"}
          description={dict.common.noData}
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((talent, index) => {
            const campusRecord = campuses.find((item) => item.id === talent.campusId);
            const availabilityLabel =
              talent.availability === "ready"
                ? lang === "id"
                  ? "Siap diprioritaskan"
                  : "Ready to be prioritized"
                : lang === "id"
                  ? "Selektif untuk penempatan"
                  : "Selective for placement";
            return (
              <DirectoryCard
                key={talent.id}
                header={
                  <div className="flex items-start gap-3">
                    <Image
                      src={`https://i.pravatar.cc/160?img=${index + 30}`}
                      alt={talent.name}
                      width={56}
                      height={56}
                      unoptimized
                      className="h-14 w-14 rounded-2xl border border-cyan-300/20 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                        {campusRecord?.region ?? dict.filters.national}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">{talent.name}</h3>
                      <p className="mt-1 line-clamp-2 text-base text-[var(--app-muted)]">{talent.headline}</p>
                    </div>
                  </div>
                }
                body={
                  <div className="space-y-3">
                    <div className="grid gap-3">
                      <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-3 dark:bg-white/5">
                        <p className="type-label">
                          {dict.labels.campus}
                        </p>
                        <p className="mt-2 line-clamp-2 text-base font-medium">{campusNameById(talent.campusId)}</p>
                        <p className="mt-2 line-clamp-2 text-sm text-[var(--app-muted)]">{talent.programStudy}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {talent.competency.map((item) => (
                        <span key={item} className="meta-badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                }
                footer={
                  <div className="flex flex-col gap-3 border-t border-[var(--app-border)] pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-3 text-base text-[var(--app-muted)]">
                      <span className="inline-flex items-center gap-2">
                        <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
                        {talent.masteredScenario}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-cyan-300" />
                        {talent.careerInterest ?? availabilityLabel}
                      </span>
                    </div>
                    <Link
                      href={`/talents/${talent.id}`}
                      className="toolbar-primary gap-2"
                    >
                      {lang === "id" ? "Lihat Profil" : "View Profile"}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
