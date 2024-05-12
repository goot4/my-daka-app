'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {getData, UserData, ProjectData, mockData, saveData} from "@/lib/data";
import {useEffect, useState} from "react";
import StatisticsNumbers from "@/components/statistics/statisticsNumbers";
import {Calendar} from "@/components/ui/calendar";

export default function Page(){
  const [userData, setUserData] = useState<UserData>(mockData)
  const [selectedProject, setSelectedProject] = useState<ProjectData|undefined>(undefined)

  const projects = userData.projects

  let content;
  if(selectedProject){
    content =  (
      <div className={"flex flex-col items-stretch"}>
        <StatisticsNumbers/>
        <Calendar className={"w-full"}/>
      </div>
      )
  }else{
    content = (<div className={"mt-[30vh]"}>请创建项目之后再查看</div>)
  }

  useEffect(() => {
    const data = getData()
    setUserData(data)
    setSelectedProject(data.projects.length>0? data.projects[0]: undefined)
    console.log(userData)
  }, []);

  return (
    <div className={"flex flex-col items-center"}>
      <Select defaultValue={projects.length>0? projects[0].name: undefined}>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="选择项目" />
          <span>&nbsp;&nbsp;</span>
        </SelectTrigger>
        <SelectContent>
          {projects.map(project => {
            return (<SelectItem key={project.id} value={project.name}>{project.name}</SelectItem>)
          })}
        </SelectContent>
      </Select>

      {content}
    </div>
  )

}