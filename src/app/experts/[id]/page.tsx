import { notFound } from "next/navigation";

import { ExpertProfile } from "@/components/site/expert-profile";
import { experts } from "@/data/coe-data";
import { getCampusById, getExpertById, getRegionByCampusId } from "@/data/coe-helpers";

export const dynamicParams = false;

export function generateStaticParams() {
  return experts.map((expert) => ({ id: expert.id }));
}

export default async function ExpertDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const expert = getExpertById(id);

  if (!expert) {
    notFound();
  }

  const campus = getCampusById(expert.campusId);
  const avatarIndex = experts.findIndex((item) => item.id === expert.id) + 12;

  return (
    <ExpertProfile
      expert={expert}
      campusName={campus?.name ?? expert.campusId}
      region={getRegionByCampusId(expert.campusId)}
      avatarIndex={avatarIndex}
      campusContactEmail={campus?.contactEmail}
      campusContactPhone={campus?.contactPhone}
    />
  );
}
