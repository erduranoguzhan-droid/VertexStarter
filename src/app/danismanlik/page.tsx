import type { Metadata } from "next";
import { getDict } from "@/lib/i18n";
import { ProgramTrack } from "@/components/program-track";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  const p = t.programs.pages.advisory;
  return { title: p.title, description: p.sub, alternates: { canonical: "/danismanlik" } };
}

export default function AdvisoryPage() {
  return <ProgramTrack track="advisory" />;
}
