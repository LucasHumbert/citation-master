import {Card, CardHeader, CardTitle} from "@/src/components/ui/card";
import {prisma} from "@/src/lib/prisma";
import {CitationForm} from "@/app/admin/citations/citation-form";

export default async function Page(props: {
  params: Promise<{
    citationId: string
  }>;
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const params = await props.params
  // const searchParams = await props.searchParams

  const citationId = params.citationId
  const citation = await prisma.citation.findFirst({
    where: {
      id: Number(citationId)
    }
  })

  if (!citation) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>The citation {citationId} doesn&#39;t exist.</CardTitle>
        </CardHeader>
      </Card>
    )
  }

  return <CitationForm citation={citation} />
}