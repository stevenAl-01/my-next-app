import type { Campus, Expert, Knowledge, Talent } from "@/types/coe";

export const campuses: Campus[] = [
  {
    id: "itb",
    name: "Institut Teknologi Bandung",
    region: "Jawa Barat",
    coeFocus: "SOC & Critical Infrastructure Security",
    status: "active",
  },
  {
    id: "its",
    name: "Institut Teknologi Sepuluh Nopember",
    region: "Jawa Timur",
    coeFocus: "Digital Forensic & Incident Response",
    status: "active",
  },
  {
    id: "ugm",
    name: "Universitas Gadjah Mada",
    region: "DI Yogyakarta",
    coeFocus: "Governance, Risk, and Cyber Policy",
    status: "active",
  },
  {
    id: "unhas",
    name: "Universitas Hasanuddin",
    region: "Sulawesi Selatan",
    coeFocus: "Maritime Cyber Resilience",
    status: "candidate",
  },
  {
    id: "unud",
    name: "Universitas Udayana",
    region: "Bali",
    coeFocus: "Cyber Talent Development & Drill",
    status: "candidate",
  },
];

export const experts: Expert[] = [
  {
    id: "exp-01",
    name: "Dr. Arif Pratama",
    expertise: ["SOC", "Threat Intelligence"],
    skkniStatus: "certified",
    campusId: "itb",
    headline: "Lead instructor for SOC operations and campus cyber monitoring.",
    availability: "open",
    bioShort:
      "Membantu kampus membangun kesiapan blue team, monitoring, dan playbook respons awal.",
    contactEmail: "arif.pratama@coe-cyber.id",
    contactPhone: "+62 812-9000-0100",
  },
  {
    id: "exp-02",
    name: "Ir. Nadya Kurnia",
    expertise: ["Digital Forensic", "Incident Handling"],
    skkniStatus: "certified",
    campusId: "its",
    headline: "Specialist for forensic workflow and university incident handling.",
    availability: "limited",
    bioShort:
      "Berfokus pada investigasi insiden, prosedur forensik digital, dan pendampingan drill insiden kampus.",
    contactEmail: "nadya.kurnia@coe-cyber.id",
    contactPhone: "+62 812-9000-0200",
  },
  {
    id: "exp-03",
    name: "Prof. Dimas Yulianto",
    expertise: ["Cyber Audit", "Risk Management"],
    skkniStatus: "in-progress",
    campusId: "ugm",
    headline: "Advisor for cyber governance, compliance mapping, and risk strategy.",
    availability: "open",
    bioShort:
      "Menghubungkan tata kelola kampus, peta risiko, dan kebutuhan kepatuhan ke kerangka implementasi CoE.",
    contactEmail: "dimas.yulianto@coe-cyber.id",
    contactPhone: "+62 812-9000-0300",
  },
  {
    id: "exp-04",
    name: "Rina Maheswari, M.T.",
    expertise: ["OT Security", "Crisis Simulation"],
    skkniStatus: "certified",
    campusId: "unhas",
    headline: "Facilitator for OT security readiness and crisis simulation design.",
    availability: "limited",
    bioShort:
      "Membawa pengalaman simulasi krisis siber dan ketahanan infrastruktur operasional ke konteks perguruan tinggi.",
    contactEmail: "rina.maheswari@coe-cyber.id",
    contactPhone: "+62 812-9000-0400",
  },
  {
    id: "exp-05",
    name: "Fajar Wibowo, M.Kom.",
    expertise: ["Cyber Drill", "Blue Team Operations"],
    skkniStatus: "in-progress",
    campusId: "unud",
    headline: "Coach for cyber drill execution and operational blue team mentoring.",
    availability: "open",
    bioShort:
      "Mendampingi penguatan talent readiness melalui cyber drill, tabletop, dan simulasi operasional tim kampus.",
    contactEmail: "fajar.wibowo@coe-cyber.id",
    contactPhone: "+62 812-9000-0500",
  },
];

export const talents: Talent[] = [
  {
    id: "tal-01",
    name: "Aulia Rahman",
    competency: ["Network Defense", "SIEM Monitoring"],
    cyberRangeExp: "National Cyber Drill 2025",
    campusId: "itb",
    headline: "Ready for SOC monitoring, detection triage, and campus security operations.",
    availability: "ready",
    bioShort:
      "Talenta dengan fokus pada monitoring, alert triage, dan penguatan operasi keamanan jaringan kampus.",
    contactEmail: "aulia.rahman@talent-cyber.id",
    contactPhone: "+62 813-7000-0110",
  },
  {
    id: "tal-02",
    name: "Shinta Lestari",
    competency: ["Digital Forensic", "Memory Analysis"],
    cyberRangeExp: "Cyber Range ITS 2025",
    campusId: "its",
    headline: "Strong fit for forensic support, memory analysis, and evidence handling.",
    availability: "selective",
    bioShort:
      "Memiliki kesiapan awal untuk investigasi digital forensik dan analisis artefak insiden pada skenario kampus.",
    contactEmail: "shinta.lestari@talent-cyber.id",
    contactPhone: "+62 813-7000-0210",
  },
  {
    id: "tal-03",
    name: "Yoga Prakoso",
    competency: ["IT Governance", "Compliance Mapping"],
    cyberRangeExp: "BSSN University Challenge 2025",
    campusId: "ugm",
    headline: "Suitable for governance support, policy mapping, and cyber compliance work.",
    availability: "ready",
    bioShort:
      "Menggabungkan pemahaman tata kelola TI dan pemetaan kepatuhan untuk kebutuhan institusi pendidikan.",
    contactEmail: "yoga.prakoso@talent-cyber.id",
    contactPhone: "+62 813-7000-0310",
  },
  {
    id: "tal-04",
    name: "Nur Aisyah",
    competency: ["Incident Coordination", "Crisis Communication"],
    cyberRangeExp: "Maritime Cyber Tabletop Exercise",
    campusId: "unhas",
    headline: "Prepared for crisis coordination and incident communication support.",
    availability: "selective",
    bioShort:
      "Berpengalaman pada latihan koordinasi insiden dan komunikasi krisis dalam skenario lintas tim.",
    contactEmail: "nur.aisyah@talent-cyber.id",
    contactPhone: "+62 813-7000-0410",
  },
  {
    id: "tal-05",
    name: "Komang Saputra",
    competency: ["Penetration Testing", "Vulnerability Assessment"],
    cyberRangeExp: "Regional Cyber Drill Bali 2025",
    campusId: "unud",
    headline: "Ready for vulnerability assessment and controlled security testing support.",
    availability: "ready",
    bioShort:
      "Mampu mendukung pemetaan kerentanan, validasi kontrol, dan latihan pengujian keamanan terarah.",
    contactEmail: "komang.saputra@talent-cyber.id",
    contactPhone: "+62 813-7000-0510",
  },
];

export const knowledgeItems: Knowledge[] = [
  {
    id: "kn-01",
    title: "Ringkasan Implementasi UU PDP untuk Perguruan Tinggi",
    category: "regulation",
    tags: ["UU PDP", "Data Governance"],
    campusId: "national",
    summary:
      "Ringkasan eksekutif untuk membantu kampus memahami prioritas kepatuhan data pribadi dalam tata kelola institusi.",
  },
  {
    id: "kn-02",
    title: "Template Kurikulum OBE Keamanan Siber",
    category: "curriculum",
    tags: ["OBE", "APTIKOM", "SKKNI"],
    campusId: "ugm",
    summary:
      "Template kurikulum kolaboratif untuk mempercepat penyelarasan outcome pembelajaran dengan kebutuhan industri dan nasional.",
  },
  {
    id: "kn-03",
    title: "Skenario Simulasi Serangan Ransomware Kampus",
    category: "scenario",
    tags: ["Cyber Drill", "Incident Response"],
    campusId: "its",
    summary:
      "Skenario latihan yang memandu alur eskalasi, koordinasi, dan pengambilan keputusan saat insiden ransomware terjadi.",
  },
  {
    id: "kn-04",
    title: "Panduan SOC Akademik untuk Infrastruktur Kritis",
    category: "curriculum",
    tags: ["SOC", "Critical Infrastructure"],
    campusId: "itb",
    summary:
      "Panduan pembentukan SOC akademik untuk lingkungan kampus yang memiliki kebutuhan pemantauan dan respon insiden terstruktur.",
  },
  {
    id: "kn-05",
    title: "Modul Krisis Siber Sektor Maritim",
    category: "scenario",
    tags: ["Maritime", "Crisis Management"],
    campusId: "unhas",
    summary:
      "Modul simulasi berbasis kasus untuk memperkenalkan dinamika pengelolaan krisis siber pada sektor prioritas regional.",
  },
];

export const regions = Array.from(new Set(campuses.map((campus) => campus.region)));
