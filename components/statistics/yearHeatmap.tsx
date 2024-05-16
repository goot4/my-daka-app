import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import {Analysis} from "@/lib/analysis";

export default function YearHeatmap({analysis}: {analysis: Analysis}) {
  const year = new Date().getFullYear()
  const yearLabel = year.toString()
  const getVirtualData = (year:string) => {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
      const date = new Date(time)
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        analysis.timesForDate(date)
      ]);
    }
    return data;
  }
  const option = {
    title: {
      top: 30,
      left: 'center',
      text: '2024 每日打卡统计'
    },
    tooltip: {
      position: 'top',
      formatter: function(p: any) {
        const format = echarts.time.format(p.data[0], '{yyyy}-{MM}-{dd}', false);
        return format + ': ' + p.data[1] + '次';
      }
    },
    visualMap: {
      min: 0,
      max: 100,
      type: 'piecewise',
      pieces: [
        {min:1, max:1},
        {min:2, max:2},
        {min:2, max:100, label: '>2'},
      ],
      orient: 'horizontal',
      left: 'center',
      top: 65,
    },
    calendar: {
      orient: 'vertical',
      range: yearLabel,
      left: 'center',
      top: 130,
      cellSize: [40, 'auto'],
      bottom: 10,
      yearLabel: {show: false},
      monthLabel: {
        nameMap: 'ZH',
      },
      dayLabel: {
        nameMap: 'ZH',
      }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtualData(yearLabel)
    },
  }

  return (
    <div className={"w-full"}>
      <ReactECharts style={{height:'1500px'}} option={option} />
    </div>

  )
}