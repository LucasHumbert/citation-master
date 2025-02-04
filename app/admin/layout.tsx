import {PropsWithChildren} from "react";
import {Header} from "@/src/components/ui/header";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      {props.children}
    </div>
  )
}