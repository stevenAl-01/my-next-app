"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Building2, MapPinned, RotateCcw, Search, ShieldCheck } from "lucide-react";

import { DirectoryCard } from "@/components/site/directory-card";
import { EmptyState } from "@/components/site/empty-state";
import { FilterBar } from "@/components/site/filter-bar";
import { PageTitle } from "@/components/site/page-title";
import { SummaryStat } from "@/components/site/summary-stat";
import { campuses, experts, talents } from "@/data/coe-data";
import { useSiteContext } from "@/context/site-context";

export default function CoeNetworkPage() {
  const { dict, lang } = useSiteContext();
  const [region, setRegion] = useState("all");
  const [query, setQuery] = useState("");

  const regions = useMemo(() => Array.from(new Set(campuses.map((campus) => campus.region))), []);
  const items = campuses.filter((campus) => {
    const byRegion = region === "all" || campus.region === region;
    const byQuery =
      query.length === 0 ||
      campus.name.toLowerCase().includes(query.toLowerCase()) ||
      campus.region.toLowerCase().includes(query.toLowerCase());
    return byRegion && byQuery;
  });

  return (
    <div>
      <PageTitle title={dict.pages.networkTitle} subtitle={dict.pages.networkSubtitle} />
      <section className="mb-6 grid gap-4 md:grid-cols-3">
        <SummaryStat
          value={items.length}
          label={lang === "id" ? "Kampus Tersaring" : "Visible Campuses"}
          accent={<Building2 className="h-5 w-5" />}
        />
        <SummaryStat
          value={new Set(items.map((campus) => campus.region)).size}
          label={lang === "id" ? "Wilayah Terwakili" : "Covered Regions"}
          accent={<MapPinned className="h-5 w-5" />}
        />
        <SummaryStat
          value={items.reduce((total, campus) => total + experts.filter((item) => item.campusId === campus.id).length + talents.filter((item) => item.campusId === campus.id).length, 0)}
          label={lang === "id" ? "Node expert dan talent" : "Expert and talent nodes"}
          accent={<ShieldCheck className="h-5 w-5" />}
        />
      </section>

      <FilterBar
        eyebrow={lang === "id" ? "Filter Direktori CoE" : "CoE Directory Filters"}
        actions={
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setRegion("all");
            }}
            className="toolbar-action"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            {dict.common.reset}
          </button>
        }
      >
        <div className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-2">
            <p className="toolbar-label">{lang === "id" ? "Cari kampus atau wilayah" : "Search campus or region"}</p>
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
          <div className="space-y-2">
            <p className="toolbar-label">{dict.filters.region}</p>
            <select
              value={region}
              onChange={(event) => setRegion(event.target.value)}
              className="toolbar-select"
            >
              <option value="all">{dict.filters.allRegions}</option>
              {regions.map((item) => (
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
          title={lang === "id" ? "Belum ada CoE yang cocok" : "No matching CoE found"}
          description={dict.common.noData}
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((campus) => (
            <DirectoryCard
              key={campus.id}
              header={
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="meta-badge">
                      {dict.common.active}
                    </span>
                    <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs text-[var(--app-muted)]">
                      {campus.region}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{campus.name}</h3>
                </div>
              }
              body={
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-3 dark:bg-white/5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                      {lang === "id" ? "Expert tersedia" : "Available experts"}
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      {experts.filter((item) => item.campusId === campus.id).length}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[var(--app-border)] bg-black/10 p-3 dark:bg-white/5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--app-muted)]">
                      {lang === "id" ? "Talent tersedia" : "Available talents"}
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      {talents.filter((item) => item.campusId === campus.id).length}
                    </p>
                  </div>
                </div>
              }
              footer={
                <div className="flex flex-col gap-3 border-t border-[var(--app-border)] pt-4 sm:flex-row">
                  <Link
                    href={`/experts?campus=${campus.id}`}
                    className="toolbar-primary gap-2"
                  >
                    {lang === "id" ? "Lihat Expert" : "View Experts"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/talents?campus=${campus.id}`}
                    className="toolbar-action gap-2"
                  >
                    {lang === "id" ? "Lihat Talent" : "View Talents"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
