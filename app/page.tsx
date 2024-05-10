import { mockData } from "@/lib/data";
import {Button} from "@/components/ui/button";
import DakaEditor from "@/components/dakaEditor";
import ProjectEditor from "@/components/projectEditor";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-stretch w-full space-y-4">
      <h1 className={"my-8 text-3xl text-center"}>打卡</h1>
      {mockData.projects.map(project => {
        return (<DakaEditor key={project.id} project={project} />)
      })}
      <ProjectEditor/>
    </main>
  );
}
