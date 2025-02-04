"use client";

import {useState} from "react";
import {Button} from "@/src/components/ui/button";
import {deleteCitationAction} from "@/app/admin/citations/citations.action";
import {useRouter} from "next/navigation";

export function DeleteCitationButton(props: {id: number}) {
  const [isConfirm, setisConfirm] = useState(false)
  const router = useRouter()

  const onDelete = async () => {
    const result = await deleteCitationAction(props.id)

    if (result.message) {
      router.refresh()
    }
  }

  return <Button
    size="sm"
    onClick={() => {
      if (isConfirm) {
        onDelete()
      } else {
        setisConfirm(true)
      }
    }}
    variant={isConfirm ? 'destructive' : 'outline'}
  >
    X
  </Button>
}