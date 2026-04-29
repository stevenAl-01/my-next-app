import { campuses, experts, knowledgeItems, talents } from "@/data/coe-data";

export function getCampusById(id: string) {
  return campuses.find((campus) => campus.id === id) ?? null;
}

export function getExpertById(id: string) {
  return experts.find((expert) => expert.id === id) ?? null;
}

export function getTalentById(id: string) {
  return talents.find((talent) => talent.id === id) ?? null;
}

export function getKnowledgeById(id: string) {
  return knowledgeItems.find((item) => item.id === id) ?? null;
}

export function getRegionByCampusId(campusId: string) {
  return getCampusById(campusId)?.region ?? "";
}
