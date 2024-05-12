import {ProjectData} from "@/lib/data";
import {Analysis} from "@/lib/analysis";
import {format} from "date-fns";


export default function StatisticsNumbers({project}: {project: ProjectData}){
  if(project.logs.length === 0 ){
    return (
      <h2>无数据</h2>
    )
  }

  const startDate = Analysis.startDate(project)
  const finalDate = Analysis.finalDate(project)
  const totalDays = Analysis.totalDays(project)
  const highestStreak = Analysis.highestStreak(project)
  const timesThisMonth = Analysis.timesThisMonth(project)

  return (
    <div className={""}>
      <p>开始日期: {format(startDate,"PPP")}</p>
      <p>最后打卡日期: {format(finalDate,"PPP")}</p>
      <p>总天数: {totalDays} 天</p>
      <p>最高连续天数: {highestStreak} 天</p>
      <p>本月打卡: {timesThisMonth} 次</p>
    </div>
  )
}