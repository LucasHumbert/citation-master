import {Card, CardHeader, CardTitle} from "@/src/components/ui/card";
import {prisma} from "@/src/lib/prisma";

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

  return (
    <div className="min-h-full flex items-center justify-center">
      <Card className="p-4 flex items-center justify-between gap-4 flex-1" key={citation.id}>
        <div className="flex flex-col gap-2">
          <p>
            {citation.text}
          </p>
          <p>
            -- {citation.author}
          </p>
        </div>
      </Card>
    </div>
  )
}