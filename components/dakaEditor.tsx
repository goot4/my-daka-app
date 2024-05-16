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
import {Button} from "@/components/ui/button";
import {DatePicker} from "@/components/ui/datePicker";
import {Textarea} from "@/components/ui/textarea";

import {ProjectData} from "@/lib/data";
import * as React from "react";
import {ChangeEvent} from "react";

interface Props {
  project: ProjectData,
  dakaHandler: (project: ProjectData, date:Date, description: string)=> void
}
export default function DakaEditor({project, dakaHandler}: Props) {
  const [date, setDate] = React.useState<Date>(new Date())
  const [description, setDescription] = React.useState("")
  const changeDate = (value:Date) => {
    setDate(value)
  }
  const changeLogHandler = (event: ChangeEvent<HTMLTextAreaElement>)=>{
    setDescription(event.target.value)
  }
  const enterDrawerHandler = () =>{
    setDate(new Date())
    setDescription("")
  }
  const submitHandler = ()=>{
    dakaHandler(project, date, description)
  }
  return (
    <Drawer>
      <DrawerTrigger asChild><Button onClick={enterDrawerHandler} className={"grow ml-4 mr-2"}>{project.name}</Button></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{project.name}</DrawerTitle>
          <DrawerDescription>编辑打卡信息</DrawerDescription>
        </DrawerHeader>
        <div className={"flex flex-col items-center mx-4 space-y-4"}>
          <DatePicker date={date} changeDate={changeDate}/>
          <Textarea value={description} onChange={changeLogHandler} placeholder={'这次打卡有什么需要记录的内容吗?'} className={""}/>
        </div>

        <DrawerFooter>
          <DrawerClose asChild><Button onClick={submitHandler}>提交</Button></DrawerClose>
          <DrawerClose asChild><Button variant="outline">取消</Button></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  )
}