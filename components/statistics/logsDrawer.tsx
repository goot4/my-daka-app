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

export default function LogsDrawer({project}: {project: ProjectData}) {
  return (
    <Drawer>
      <DrawerTrigger asChild><Button className={"mx-4"}>打卡日志</Button></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>打卡日志</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>

        {project.logs.map((log, index)=>{
          return (
            <p key={index} className={"border-2"}>{log.description}</p>
          )
        })}

        <DrawerFooter>

        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}