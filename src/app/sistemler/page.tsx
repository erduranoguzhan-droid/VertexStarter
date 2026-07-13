import type { Metadata } from "next";
import { getDict } from "@/lib/i18n";
import { ProgramTrack } from "@/components/program-track";
import { JsonLd } from "@/components/json-ld";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  const p = t.programs.pages.systems;
  return { title: p.title, description: p.sub };
}

export default async function SystemsPage() {
  const { locale, t } = await getDict();
  const p = t.programs.pages.systems;
  const schema = [
    serviceSchema({ name: p.title, description: p.sub, path: "/sistemler", locale }),
    breadcrumbSchema([{ name: p.title, path: "/sistemler" }], locale),
  ];
  return (
    <>
      <JsonLd data={schema} />
      <ProgramTrack track="systems" />
    </>
  );
}
