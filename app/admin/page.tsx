import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import Link from "next/link";
import {buttonVariants} from "@/src/components/ui/button";
import {prisma} from "@/src/lib/prisma";

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
                <Card className="p-4" key={citation.id}>
                  <p>
                    {citation.text}
                  </p>
                  <p>
                    -- {citation.author}
                  </p>
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