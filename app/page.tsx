'use client';
import {getData, mockData, saveData, UserData} from "@/lib/data";
import DakaEditor from "@/components/dakaEditor";
import ProjectEditor from "@/components/projectEditor";
import {useEffect, useState} from "react";


export default function Home() {
  const [userData, setUserData] = useState<UserData>(mockData)
  useEffect(() => {
    setUserData(getData())
    console.log(userData)
  }, []);
  return (
    <main className="flex flex-col justify-center items-stretch w-full space-y-4">
      <h1 className={"my-8 text-3xl text-center"}>打卡</h1>
      {userData.projects.map(project => {
        return (<DakaEditor key={project.id} project={project} />)
      })}
      <ProjectEditor/>
    </main>
  );
}
