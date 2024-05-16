import {ProjectData} from "@/lib/data";
import {Analysis} from "@/lib/analysis";
import {format} from "date-fns";


export default function StatisticsNumbers({analysis}: {analysis: Analysis}){
  if(analysis.isEmpty()){
    return (
      <h2>无数据</h2>
    )
  }

  const now = new Date()
  const startDate = analysis.startDate()
  const finalDate = analysis.finalDate()
  const totalDays = analysis.totalDays()
  const highestStreak = analysis.highestStreak()
  const timesThisMonth = analysis.timesForMonth(now.getFullYear(),now.getMonth())

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