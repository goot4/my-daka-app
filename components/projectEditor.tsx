'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Trash2 } from 'lucide-react';
import {Button} from "@/components/ui/button";

import * as React from "react";
import {Input} from "@/components/ui/input";
import {ChangeEvent} from "react";
import {ProjectData} from "@/lib/data";

interface Props {
  project: ProjectData,
  renameHandler: (project: ProjectData, newName: string) => void
  projectDeleteHandler: (project: ProjectData) => void
}

export default function ProjectEditor({project, renameHandler, projectDeleteHandler}: Props) {
  const [projectName, setProjectName] = React.useState("");

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
    setProjectName(event.target.value)
  }
  const enterDrawerHandler = () =>{
    setProjectName(project.name)
  }
  const submitHandler = ()=>{
    console.log('重命名'+ projectName)
    renameHandler(project, projectName)
  }
  const deleteHandler = () => {
    projectDeleteHandler(project)
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button onClick={enterDrawerHandler} className={"mx-4"}>
          编辑: {project.name}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{project.name}</DrawerTitle>
          <DrawerDescription>编辑打卡项目</DrawerDescription>
          <Button variant={"destructive"} size={"icon"} className={"absolute top-10 right-4"} onClick={deleteHandler}><Trash2 /></Button>
        </DrawerHeader>
        <div className={"flex flex-col items-center mx-4 space-y-4"}>
          <label className={"place-self-start"}>打卡项目重命名</label>
          <Input value={projectName} onChange={nameChangeHandler} placeholder={"输入打卡项目名称"}/>
        </div>

        <DrawerFooter>
          <DrawerClose asChild><Button onClick={submitHandler} disabled={projectName===''}>确定</Button></DrawerClose>
          <DrawerClose asChild><Button variant="outline">取消</Button></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  )
}