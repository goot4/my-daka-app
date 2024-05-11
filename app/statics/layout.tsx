
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";


export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <section className={"flex flex-col items-center"}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild><Button className={"text-2xl my-8"} variant={"outline"}>选择项目</Button></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {children}
    </section>
  )
}