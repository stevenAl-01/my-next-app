export type Language = "id" | "en";

export type Campus = {
  id: string;
  name: string;
  region: string;
  coeFocus: string;
  status: "active" | "candidate";
  contactEmail?: string;
  contactPhone?: string;
};

export type Expert = {
  id: string;
  name: string;
  nidnOrNip?: string;
  expertise: string[];
  skkniStatus: "certified" | "in-progress";
  campusId: string;
  headline: string;
  availability: "open" | "limited";
  bioShort: string;
  programUnit?: string;
  certifications?: string[];
  totStatus?: "lulus" | "proses";
  projectExperience?: string;
  profileReference?: string;
  contactEmail: string;
  contactPhone: string;
};

export type Talent = {
  id: string;
  name: string;
  nim?: string;
  competency: string[];
  cyberRangeExp: string;
  campusId: string;
  headline: string;
  availability: "ready" | "selective";
  bioShort: string;
  programStudy?: string;
  academicStatus?: string;
  finalScore?: string;
  trainingScores?: Array<{
    label: string;
    score: string;
  }>;
  internalRanking?: string;
  masteredScenario?: string;
  careerInterest?: string;
  contactEmail: string;
  contactPhone: string;
};

export type Knowledge = {
  id: string;
  title: string;
  category: "fundamental" | "intermediate" | "advanced" | "management";
  tags: string[];
  campusId: string | "national";
  summary: string;
  contributionType?: string;
  contributor?: string;
  securityDomain?: string;
  relatedTools?: string[];
  updatedAt?: string;
  usageLicense?: string;
};

export type FilterContextState = {
  campusId: string | "all";
  region: string | "all";
  lang: Language;
};
