import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerDescription, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {ProjectData} from "@/lib/data";
import {format} from "date-fns";

export default function LogsDrawer({project}: {project: ProjectData}) {
  return (
    <Drawer>
      <DrawerTrigger asChild><Button className={"mx-4"}>打卡日志</Button></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>打卡日志</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>

        <div className={"flex flex-col space-y-4"}>
          {project.logs.map((log, index)=>{
            return (
              <p key={index} className={"border-2 p-2"}>
                {log.description}
                <span className={"float-right text-sm"}>{format(log.date, "PPP")}</span>
              </p>
            )
          })}
        </div>
        <DrawerFooter>

        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}