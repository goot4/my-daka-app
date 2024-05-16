'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {getData, UserData, ProjectData, mockData} from "@/lib/data";
import {useEffect, useState} from "react";
import StatisticsNumbers from "@/components/statistics/statisticsNumbers";
import LogsDrawer from "@/components/statistics/logsDrawer";
import {Analysis} from "@/lib/analysis";
import TimesPerMonthChart from "@/components/statistics/timesPerMonthChart";
import YearHeatmap from "@/components/statistics/yearHeatmap";

export default function Page(){
  const [userData, setUserData] = useState<UserData>(mockData)
  const [selectedProject, setSelectedProject] = useState<ProjectData|undefined>(undefined)

  const projects = userData.projects

  let content;
  if(selectedProject){
    const analysis = new Analysis(selectedProject)
    content =  (
      <div className={"w-full flex flex-col items-center space-y-4"}>
        <StatisticsNumbers analysis={analysis}/>
        <LogsDrawer project={selectedProject}/>
        {/*<TimesPerMonthChart analysis={analysis}/>*/}
        {/*<YearHeatmap analysis={analysis}/>*/}
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
    <div className={"flex flex-col items-center mb-20"}>
      <Select onValueChange={valueChangeHandler} value={selectedProject?.name}>
        <SelectTrigger className="w-fit my-4">
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

  function valueChangeHandler(value: string) {
    setSelectedProject(projects.find(project => project.name===value))
  }

}