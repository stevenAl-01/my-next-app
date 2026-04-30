"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, BookOpenText, FileBadge2, RotateCcw, Search, Siren } from "lucide-react";

import { DirectoryCard } from "@/components/site/directory-card";
import { EmptyState } from "@/components/site/empty-state";
import { FilterBar } from "@/components/site/filter-bar";
import { knowledgeItems } from "@/data/coe-data";
import { PageTitle } from "@/components/site/page-title";
import { SummaryStat } from "@/components/site/summary-stat";
import { useSiteContext } from "@/context/site-context";

export default function KnowledgePage() {
  const { dict, campuses, campusNameById, lang } = useSiteContext();
  const [campus, setCampus] = useState("all");
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

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

  const items = knowledgeItems.filter((item) => {
    const byCampus = campus === "all" || item.campusId === "national" || item.campusId === campus;
    const byCategory = category === "all" || item.category === category;
    const byQuery =
      query.length === 0 ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.join(" ").toLowerCase().includes(query.toLowerCase()) ||
      item.contributionType?.toLowerCase().includes(query.toLowerCase()) ||
      item.securityDomain?.toLowerCase().includes(query.toLowerCase());
    return byCampus && byCategory && byQuery;
  });

  return (
    <div>
      <PageTitle title={dict.pages.knowledgeTitle} subtitle={dict.pages.knowledgeSubtitle} />
      <section className="mb-5 grid gap-3 md:grid-cols-3">
        <SummaryStat
          value={items.length}
          label={lang === "id" ? "Dokumen Relevan" : "Relevant Resources"}
          accent={<BookOpenText className="h-5 w-5" />}
        />
        <SummaryStat
          value={items.filter((it) => it.category === "fundamental").length}
          label={categoryMap.fundamental}
          accent={<FileBadge2 className="h-5 w-5" />}
        />
        <SummaryStat
          value={items.filter((it) => it.category === "advanced").length}
          label={categoryMap.advanced}
          accent={<Siren className="h-5 w-5" />}
        />
      </section>

      <FilterBar
        eyebrow={lang === "id" ? "Filter Resource" : "Resource Filters"}
        actions={
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCampus("all");
              setCategory("all");
            }}
            className="toolbar-action"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            {dict.common.reset}
          </button>
        }
      >
        <div className="space-y-2">
          <p className="toolbar-label">{lang === "id" ? "Cari judul, domain, atau tipe kontribusi" : "Search title, domain, or contribution type"}</p>
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
        <div className="grid gap-3 md:grid-cols-2">
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
            <p className="toolbar-label">{dict.labels.category}</p>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="toolbar-select">
              <option value="all">{lang === "id" ? "Semua Kategori" : "All Categories"}</option>
              <option value="fundamental">{categoryMap.fundamental}</option>
              <option value="intermediate">{categoryMap.intermediate}</option>
              <option value="advanced">{categoryMap.advanced}</option>
              <option value="management">{categoryMap.management}</option>
            </select>
          </div>
        </div>
      </FilterBar>

      {items.length === 0 ? (
        <EmptyState
          title={lang === "id" ? "Belum ada resource yang cocok" : "No matching resources found"}
          description={dict.common.noData}
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <DirectoryCard
              key={item.id}
              header={
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="meta-badge">
                      {categoryMap[item.category]}
                    </span>
                    <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-sm text-[var(--app-muted)]">
                      {item.campusId === "national"
                        ? dict.filters.national
                        : campusNameById(item.campusId)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              }
              body={
                <div className="space-y-3">
                  <p className="text-base text-[var(--app-muted)]">{item.summary}</p>
                  <p className="text-sm text-[var(--app-muted)]">
                    {lang === "id" ? "Tipe kontribusi" : "Contribution type"}: {item.contributionType}
                  </p>
                  <p className="text-sm text-[var(--app-muted)]">
                    {dict.labels.tags}: {item.tags.join(" • ")}
                  </p>
                </div>
              }
              footer={
                <div className="flex border-t border-[var(--app-border)] pt-4">
                  <Link
                    href={`/knowledge/${item.id}`}
                    className="toolbar-primary gap-2"
                  >
                    {lang === "id" ? "Lihat Detail" : "View Detail"}
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
