
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

import * as React from "react";
import {Input} from "@/components/ui/input";
import {ChangeEvent} from "react";

export default function NewProjectEditor({newProjectSubmittedHandler}:
                                           {newProjectSubmittedHandler: (projectName:string)=>void}) {
  const [projectName, setProjectName] = React.useState("");

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
    setProjectName(event.target.value)
  }
  const enterDrawerHandler = () =>{
    setProjectName('')
  }
  const submitHandler = ()=>{
    newProjectSubmittedHandler(projectName)
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"outline"} onClick={enterDrawerHandler} className={"mx-4"}>
          + 新建打卡项目
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>新建打卡项目</DrawerTitle>
          <DrawerDescription>编辑打卡名称</DrawerDescription>
        </DrawerHeader>
        <div className={"flex flex-col items-center mx-4 space-y-4"}>
          <Input value={projectName} onChange={nameChangeHandler} placeholder={"输入打卡名称"}/>
        </div>

        <DrawerFooter>
          <DrawerClose asChild><Button onClick={submitHandler} disabled={projectName===''}>提交</Button></DrawerClose>
          <DrawerClose asChild><Button variant="outline">取消</Button></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  )
}