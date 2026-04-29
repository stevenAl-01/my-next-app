import { notFound } from "next/navigation";

import { TalentProfile } from "@/components/site/talent-profile";
import { talents } from "@/data/coe-data";
import { getCampusById, getRegionByCampusId, getTalentById } from "@/data/coe-helpers";

export const dynamicParams = false;

export function generateStaticParams() {
  return talents.map((talent) => ({ id: talent.id }));
}

export default async function TalentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const talent = getTalentById(id);

  if (!talent) {
    notFound();
  }

  const campus = getCampusById(talent.campusId);
  const avatarIndex = talents.findIndex((item) => item.id === talent.id) + 30;

  return (
    <TalentProfile
      talent={talent}
      campusName={campus?.name ?? talent.campusId}
      region={getRegionByCampusId(talent.campusId)}
      avatarIndex={avatarIndex}
    />
  );
}
