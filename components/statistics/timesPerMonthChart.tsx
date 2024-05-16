
import ReactECharts from 'echarts-for-react';
import {Analysis} from "@/lib/analysis";

export default function TimesPerMonthChart({analysis}: {analysis: Analysis}) {
  const year = new Date().getFullYear()
  const monthIndexes = [0, 1, 2, 3, 4, 5, 6,7,8,9,10,11]
  const monthLabels = monthIndexes.map(index => (index+1).toString())
  const timesPerMonth = monthIndexes.map(monthIndex => {
    const times = analysis.timesForMonth(year, monthIndex)
    return times===0? null : times
  })
  const option = {
    xAxis: {
      type: 'category',
      name: '月份',
      data: monthLabels,
    },
    yAxis: {
      type: 'value',
      name: '次数',
    },
    series: [
      {
        data: timesPerMonth,
        type: 'line'
      }
    ]
  }

  return (
    <div className={"flex flex-col w-full border-t-2 pt-2"}>
      <h2 className={"mx-4 text-xl"}>年度统计 <span className={"float-right text-base"}>{year}</span></h2>
      <ReactECharts className={""} option={option} />
    </div>
  )
}