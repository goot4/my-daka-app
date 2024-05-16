'use client';
import {getData, mockData, ProjectData, saveData, UserData} from "@/lib/data";
import DakaEditor from "@/components/dakaEditor";
import NewProjectEditor from "@/components/newProjectEditor";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import ProjectEditor from "@/components/projectEditor";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {Analysis} from "@/lib/analysis";


export default function Home() {
  const [userData, setUserData] = useState<UserData>(mockData)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  useEffect(() => {
    setUserData(getData())
    console.log(userData)
  }, []);
  return (
    <main className="flex flex-col justify-center items-stretch w-full space-y-4">
      <h1 className={"my-8 text-3xl text-center"}>打卡</h1>
      <div className={"flex text-center"}>
        <p className={"ml-4 mr-2 grow flex items-center justify-center"}>项目</p>
        <p className={"mr-4"}>今日<br/>打卡</p>
      </div>
      {userData.projects.map(project => {
        if(!isEditing){
          return (
            <div key={project.id} className={"flex flex-row"}>
              <DakaEditor project={project} dakaHandler={dakaHandler}/>
              <Badge className={"mr-4 rounded-md"}>{Analysis.timesForToday(project)}</Badge>
            </div>
          )
        }else{
          return (<ProjectEditor key={project.id} project={project}
                                 renameHandler={projectRenameHandler} projectDeleteHandler={projectDeleteHandler}/>)
        }
      })}
      <Button variant={"outline"} className={"mx-4"}
      onClick={editProjectsHandler}>{isEditing? '完成':'编辑打卡项目'}</Button>
      {!isEditing && <NewProjectEditor newProjectSubmittedHandler={newProjectSubmittedHandler}/>}
    </main>
  );

  function dakaHandler(editedProject: ProjectData, date: Date, description: string) {
    const newLog = { date: date.getTime(), description}
    const updatedUserData: UserData = {
      ...userData,
      projects: userData.projects.map(project =>{
        if(project.id === editedProject.id){
          return {
            ...project,
            logs: [ ...project.logs, newLog]
          }
        }
        return project
      })
    }
    saveData(updatedUserData)
    setUserData(updatedUserData)
  }

  function editProjectsHandler(){
    setIsEditing(!isEditing)
  }

  function projectRenameHandler(editedProject: ProjectData, newName:string){
    // 同名检测
    let exist = false
    userData.projects.forEach(project=>{
      if(project.name === newName && project.id !== editedProject.id){
        exist = true
      }
    })
    if(exist) return alert("同名打卡项目已存在")

    const newProject: ProjectData = {
      id: newName,
      name: newName,
      logs: []
    }
    const updatedUserData: UserData = {
      ...userData,
      projects: userData.projects.map(project=>{
        if(project.id === editedProject.id){
          return newProject
        }
        return project
      })
    }
    saveData(updatedUserData)
    setUserData(updatedUserData)
  }

  function newProjectSubmittedHandler(projectName: string) {
    // 同名检测
    let exist = false
    userData.projects.forEach(project=>{
      if(project.name === projectName){
        exist = true
      }
    })
    if(exist) return alert("同名打卡项目已存在")

    const newProject: ProjectData = {
      id: projectName,
      name: projectName,
      logs: []
    }
    const updatedUserData: UserData = {
      ...userData,
      projects: [ ...userData.projects, newProject ]
    }
    saveData(updatedUserData)
    setUserData(updatedUserData)
  }

  function projectDeleteHandler(deletedProject:ProjectData){
    const updatedUserData: UserData = {
      ...userData,
      projects: userData.projects.filter(project=> project.id !== deletedProject.id)
    }
    saveData(updatedUserData)
    setUserData(updatedUserData)
  }
}
