"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Award, BadgeCheck, Building2, MapPinned, RotateCcw, Search, ShieldCheck } from "lucide-react";

import { DirectoryCard } from "@/components/site/directory-card";
import { EmptyState } from "@/components/site/empty-state";
import { FilterBar } from "@/components/site/filter-bar";
import { PageTitle } from "@/components/site/page-title";
import { SummaryStat } from "@/components/site/summary-stat";
import { experts } from "@/data/coe-data";
import { campuses } from "@/data/coe-data";
import { useSiteContext } from "@/context/site-context";

export default function ExpertsPage() {
  const { dict, campusNameById, lang } = useSiteContext();
  const [campus, setCampus] = useState("all");
  const [skill, setSkill] = useState("all");
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

  const skills = useMemo(
    () => Array.from(new Set(experts.flatMap((expert) => expert.expertise))).sort(),
    [],
  );
  const regions = useMemo(
    () => Array.from(new Set(campuses.map((item) => item.region))).sort(),
    [],
  );

  const items = experts.filter((expert) => {
    const campusRecord = campuses.find((item) => item.id === expert.campusId);
    const campusRegion = campusRecord?.region ?? "";
    const term = query.toLowerCase();
    const byCampus = campus === "all" || expert.campusId === campus;
    const bySkill = skill === "all" || expert.expertise.includes(skill);
    const byRegion = region === "all" || campusRegion === region;
    const byQuery =
      query.length === 0 ||
      expert.name.toLowerCase().includes(term) ||
      expert.headline.toLowerCase().includes(term) ||
      expert.expertise.join(" ").toLowerCase().includes(term) ||
      (expert.programUnit ?? "").toLowerCase().includes(term) ||
      (expert.certifications ?? []).join(" ").toLowerCase().includes(term) ||
      campusNameById(expert.campusId).toLowerCase().includes(term) ||
      campusRegion.toLowerCase().includes(term);

    return byCampus && bySkill && byRegion && byQuery;
  });

  const certificationCount = items.reduce((total, expert) => total + (expert.certifications?.length ?? 0), 0);
  const expertiseSpread = new Set(items.flatMap((item) => item.expertise)).size;

  return (
    <div>
      <PageTitle title={dict.pages.expertsTitle} subtitle={dict.pages.expertsSubtitle} />

      <section className="mb-6 grid gap-3 md:grid-cols-3">
        <SummaryStat
          value={items.length}
          label={lang === "id" ? "Expert siap kolaborasi" : "Experts ready to collaborate"}
          accent={<ShieldCheck className="h-5 w-5" />}
        />
        <SummaryStat
          value={certificationCount}
          label={lang === "id" ? "Sertifikasi terpetakan" : "Mapped certifications"}
          accent={<BadgeCheck className="h-5 w-5" />}
        />
        <SummaryStat
          value={expertiseSpread}
          label={lang === "id" ? "Bidang spesialisasi utama" : "Core specialization areas"}
          accent={<MapPinned className="h-5 w-5" />}
        />
      </section>

      <FilterBar
        eyebrow={lang === "id" ? "Pencarian expert strategis" : "Strategic expert search"}
        actions={
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setRegion("all");
              setCampus("all");
              setSkill("all");
            }}
            className="toolbar-action"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            {dict.common.reset}
          </button>
        }
      >
        <div className="space-y-2">
          <p className="toolbar-label">{lang === "id" ? "Cari nama, kampus, atau keahlian" : "Search name, campus, or expertise"}</p>
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
            <p className="toolbar-label">{dict.labels.expertise}</p>
            <select value={skill} onChange={(event) => setSkill(event.target.value)} className="toolbar-select">
              <option value="all">{lang === "id" ? "Semua Keahlian" : "All Expertise"}</option>
              {skills.map((item) => (
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
          title={lang === "id" ? "Belum ada expert yang cocok" : "No experts found"}
          description={dict.common.noData}
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((expert, index) => {
            const campusRecord = campuses.find((item) => item.id === expert.campusId);
            const availabilityLabel =
              expert.availability === "open"
                ? lang === "id"
                  ? "Tersedia untuk kolaborasi"
                  : "Open for collaboration"
                : lang === "id"
                  ? "Kapasitas terbatas"
                  : "Limited availability";
            return (
              <DirectoryCard
                key={expert.id}
                header={
                  <div className="flex items-start gap-3">
                    <Image
                      src={`https://i.pravatar.cc/160?img=${index + 12}`}
                      alt={expert.name}
                      width={56}
                      height={56}
                      unoptimized
                      className="h-14 w-14 rounded-2xl border border-cyan-300/20 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                        {campusRecord?.region ?? dict.filters.national}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">{expert.name}</h3>
                      <p className="mt-1 line-clamp-2 text-base text-[var(--app-muted)]">{expert.headline}</p>
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
                        <p className="mt-2 line-clamp-2 text-base font-medium">{campusNameById(expert.campusId)}</p>
                        <p className="mt-2 line-clamp-2 text-sm text-[var(--app-muted)]">{expert.programUnit}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {expert.expertise.map((item) => (
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
                        <Award className="h-4 w-4 text-cyan-300" />
                        {expert.totStatus === "lulus"
                          ? lang === "id"
                            ? "Lulus ToT"
                            : "ToT passed"
                          : lang === "id"
                            ? "Proses ToT"
                            : "ToT in progress"}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-cyan-300" />
                        {availabilityLabel}
                      </span>
                    </div>
                    <Link
                      href={`/experts/${expert.id}`}
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
