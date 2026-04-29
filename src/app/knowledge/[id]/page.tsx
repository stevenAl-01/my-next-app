import { notFound } from "next/navigation";

import { KnowledgeDetail } from "@/components/site/knowledge-detail";
import { knowledgeItems } from "@/data/coe-data";
import { getCampusById, getKnowledgeById } from "@/data/coe-helpers";

export const dynamicParams = false;

export function generateStaticParams() {
  return knowledgeItems.map((item) => ({ id: item.id }));
}

export default async function KnowledgeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getKnowledgeById(id);

  if (!item) {
    notFound();
  }

  const campus = item.campusId === "national" ? null : getCampusById(item.campusId);

  return (
    <KnowledgeDetail
      item={item}
      campusName={item.campusId === "national" ? "Nasional" : campus?.name ?? item.campusId}
    />
  );
}
