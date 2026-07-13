import type { Metadata } from "next";
import { getDict } from "@/lib/i18n";
import { ProgramTrack } from "@/components/program-track";
import { JsonLd } from "@/components/json-ld";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  const p = t.programs.pages.advisory;
  return { title: p.title, description: p.sub };
}

export default async function AdvisoryPage() {
  const { locale, t } = await getDict();
  const p = t.programs.pages.advisory;
  const schema = [
    serviceSchema({ name: p.title, description: p.sub, path: "/danismanlik", locale }),
    breadcrumbSchema([{ name: p.title, path: "/danismanlik" }], locale),
  ];
  return (
    <>
      <JsonLd data={schema} />
      <ProgramTrack track="advisory" />
    </>
  );
}
