export type Language = "id" | "en";

export type Campus = {
  id: string;
  name: string;
  region: string;
  coeFocus: string;
  status: "active" | "candidate";
};

export type Expert = {
  id: string;
  name: string;
  expertise: string[];
  skkniStatus: "certified" | "in-progress";
  campusId: string;
  headline: string;
  availability: "open" | "limited";
  bioShort: string;
  contactEmail: string;
  contactPhone: string;
};

export type Talent = {
  id: string;
  name: string;
  competency: string[];
  cyberRangeExp: string;
  campusId: string;
  headline: string;
  availability: "ready" | "selective";
  bioShort: string;
  contactEmail: string;
  contactPhone: string;
};

export type Knowledge = {
  id: string;
  title: string;
  category: "regulation" | "curriculum" | "scenario";
  tags: string[];
  campusId: string | "national";
  summary: string;
};

export type FilterContextState = {
  campusId: string | "all";
  region: string | "all";
  lang: Language;
};
