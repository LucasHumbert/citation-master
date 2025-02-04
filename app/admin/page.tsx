import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import Link from "next/link";
import {buttonVariants} from "@/src/components/ui/button";
import {prisma} from "@/src/lib/prisma";
import {DeleteCitationButton} from "@/app/admin/citations/delete-citation-button";

export default async function Page() {
  const citations = await prisma.citation.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })

    return (
        <Card>
            <CardHeader>
                <CardTitle>URL: /admin</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {citations.map((citation) => (
                <Card className="p-4 flex items-center justify-between gap-4 flex-1" key={citation.id}>
                  <div className="flex flex-col gap-2">
                    <p>
                      {citation.text}
                    </p>
                    <p>
                      -- {citation.author}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={`/citations/${citation.id}`}
                      className={buttonVariants({size: "sm", variant: "outline"})}
                    >
                      See
                    </Link>
                    <Link
                      href={`/admin/citations/${citation.id}`}
                      className={buttonVariants({size: "sm", variant: "outline"})}
                    >
                      Edit
                    </Link>
                    <DeleteCitationButton id={citation.id} />
                  </div>
                </Card>
              ))}
              <Link
                href="/admin/citations/new"
                className={buttonVariants({size: "lg", variant: "outline"})}
              >
                Create citation
              </Link>
            </CardContent>
        </Card>
    )
}