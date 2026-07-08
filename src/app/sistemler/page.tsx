import type { Metadata } from "next";
import { getDict } from "@/lib/i18n";
import { ProgramTrack } from "@/components/program-track";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  const p = t.programs.pages.systems;
  return { title: p.title, description: p.sub };
}

export default function SystemsPage() {
  return <ProgramTrack track="systems" />;
}
