"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { campuses } from "@/data/coe-data";
import type { Campus, Language } from "@/types/coe";

type ThemeMode = "dark" | "light";

type Dictionary = {
  appName: string;
  nav: {
    home: string;
    network: string;
    experts: string;
    talents: string;
    knowledge: string;
  };
  filters: {
    campus: string;
    region: string;
    national: string;
    allRegions: string;
    searchPlaceholder: string;
  };
  common: {
    active: string;
    candidate: string;
    noData: string;
    conceptualDisclaimer: string;
    reset: string;
    darkMode: string;
    lightMode: string;
  };
  landing: {
    badge: string;
    title: string;
    subtitle: string;
    ctaNetwork: string;
    ctaExperts: string;
    pillarsTitle: string;
    pillars: {
      network: string;
      experts: string;
      talents: string;
      knowledge: string;
    };
  };
  pages: {
    networkTitle: string;
    networkSubtitle: string;
    expertsTitle: string;
    expertsSubtitle: string;
    talentsTitle: string;
    talentsSubtitle: string;
    knowledgeTitle: string;
    knowledgeSubtitle: string;
  };
  labels: {
    campus: string;
    region: string;
    focus: string;
    status: string;
    expertise: string;
    competency: string;
    skkni: string;
    certified: string;
    inProgress: string;
    cyberRange: string;
    category: string;
    tags: string;
  };
};

const dictionary: Record<Language, Dictionary> = {
  id: {
    appName: "Konsorsium Ketahanan Siber",
    nav: {
      home: "Beranda",
      network: "CoE Network",
      experts: "Expert",
      talents: "Talent",
      knowledge: "Knowledge",
    },
    filters: {
      campus: "Kampus",
      region: "Daerah",
      national: "Nasional",
      allRegions: "Semua Daerah",
      searchPlaceholder: "Cari nama, keahlian, atau kata kunci...",
    },
    common: {
      active: "Aktif",
      candidate: "Kandidat",
      noData: "Belum ada data yang sesuai filter ini.",
      conceptualDisclaimer:
        "Konten dan data pada website ini disusun untuk menggambarkan ekosistem jejaring CoE secara terstruktur.",
      reset: "Reset Filter",
      darkMode: "Mode Gelap",
      lightMode: "Mode Terang",
    },
    landing: {
      badge: "Jejaring Nasional CoE Siber",
      title: "Masa Depan Ketahanan Siber Kampus Dimulai dari CoE",
      subtitle:
        "Platform ini dirancang sebagai bentuk dukungan Velsicuro terhadap Pertahanan Siber pada aspek SDM. Fokus utamanya adalah menjembatani kebutuhan antara penyelenggara negara, sektor industri, dan dunia pendidikan secara integratif.",
      ctaNetwork: "Lihat Peta CoE",
      ctaExperts: "Lihat Expert",
      pillarsTitle: "Empat Pilar Platform",
      pillars: {
        network: "Pemetaan kampus CoE lintas daerah secara strategis.",
        experts: "Direktori instruktur, dosen, dan mentor siber tersertifikasi.",
        talents: "Talenta mahasiswa/lulusan siap misi ketahanan siber nasional.",
        knowledge: "Pusat resource regulasi, kurikulum OBE, dan skenario drill.",
      },
    },
    pages: {
      networkTitle: "CoE Network Explorer",
      networkSubtitle: "Temukan jaringan kampus berdasarkan wilayah, status, dan fokus CoE.",
      expertsTitle: "Pool of Experts",
      expertsSubtitle: "Temukan expert untuk pelatihan, ToT, dan pendampingan program kampus.",
      talentsTitle: "Pool of Talents",
      talentsSubtitle: "Akses talenta siber kampus yang siap untuk kebutuhan instansi dan industri.",
      knowledgeTitle: "Pool of Knowledge",
      knowledgeSubtitle: "Repository regulasi, kurikulum, dan skenario untuk percepatan implementasi CoE.",
    },
    labels: {
      campus: "Kampus",
      region: "Daerah",
      focus: "Fokus CoE",
      status: "Status",
      expertise: "Keahlian",
      competency: "Kompetensi",
      skkni: "Status SKKNI",
      certified: "Tersertifikasi",
      inProgress: "Proses Sertifikasi",
      cyberRange: "Pengalaman Cyber Range/Drill",
      category: "Kategori",
      tags: "Tag",
    },
  },
  en: {
    appName: "Cyber Resilience Consortium",
    nav: {
      home: "Home",
      network: "CoE Network",
      experts: "Experts",
      talents: "Talents",
      knowledge: "Knowledge",
    },
    filters: {
      campus: "Campus",
      region: "Region",
      national: "National",
      allRegions: "All Regions",
      searchPlaceholder: "Search name, expertise, or keyword...",
    },
    common: {
      active: "Active",
      candidate: "Candidate",
      noData: "No data matches this filter.",
      conceptualDisclaimer:
        "The content and data on this website are structured to illustrate the CoE network ecosystem.",
      reset: "Reset Filters",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
    },
    landing: {
      badge: "National Cyber CoE Network",
      title: "The Future of Campus Cyber Resilience Starts with CoE",
      subtitle:
        "This platform demonstrates how universities can build structured, measurable CoEs ready to collaborate with government and industry.",
      ctaNetwork: "Explore CoE Map",
      ctaExperts: "Meet Experts",
      pillarsTitle: "Four Platform Pillars",
      pillars: {
        network: "Strategic cross-region CoE campus mapping.",
        experts: "Directory of certified lecturers, trainers, and mentors.",
        talents: "Mission-ready student and graduate cyber talents.",
        knowledge: "Resource hub for regulations, OBE curriculum, and drill scenarios.",
      },
    },
    pages: {
      networkTitle: "CoE Network Explorer",
      networkSubtitle: "Discover campus networks by region, status, and CoE focus.",
      expertsTitle: "Pool of Experts",
      expertsSubtitle: "Find experts for training, ToT, and campus program mentorship.",
      talentsTitle: "Pool of Talents",
      talentsSubtitle: "Access cyber talents ready to support public and industry needs.",
      knowledgeTitle: "Pool of Knowledge",
      knowledgeSubtitle: "Repository for regulations, curriculum, and scenarios to accelerate CoE implementation.",
    },
    labels: {
      campus: "Campus",
      region: "Region",
      focus: "CoE Focus",
      status: "Status",
      expertise: "Expertise",
      competency: "Competency",
      skkni: "SKKNI Status",
      certified: "Certified",
      inProgress: "In Progress",
      cyberRange: "Cyber Range/Drill Experience",
      category: "Category",
      tags: "Tags",
    },
  },
};

type SiteContextType = {
  campuses: Campus[];
  lang: Language;
  theme: ThemeMode;
  dict: Dictionary;
  setLang: (value: Language) => void;
  setTheme: (value: ThemeMode) => void;
  campusNameById: (campusId: string) => string;
};

const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("id");
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const value: SiteContextType = {
    campuses,
    lang,
    theme,
    dict: dictionary[lang],
    setLang,
    setTheme,
    campusNameById: (id: string) => campuses.find((campus) => campus.id === id)?.name ?? id,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSiteContext() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteContext must be used within SiteProvider");
  }
  return context;
}
