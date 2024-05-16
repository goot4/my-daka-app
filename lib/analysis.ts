import {ProjectData} from "@/lib/data"

export class Analysis {
  sortedLogs: { date: Date, description:string }[];
  constructor(projectData: ProjectData) {
    this.sortedLogs = projectData.logs.toSorted((a,b)=>
      a.date - b.date).map(log => {
        return { date: new Date(log.date), description: log.description }
    })
    console.log(this.sortedLogs)
  }

  isEmpty() {
    return this.sortedLogs.length === 0;
  }
  startDate(): Date {
    return this.sortedLogs[0].date
  }
  finalDate(): Date {
    return this.sortedLogs[this.sortedLogs.length-1].date
  }
  totalDays(): number {
    let count=0
    let cur = -1
    this.sortedLogs.forEach((log)=> {
      if(cur !== log.date.getTime()){
        count++
        cur = log.date.getTime()
      }
    })
    return count
  }
  highestStreak(): number {
    let maxCount= 1, count = 1, cur = -1
    this.sortedLogs.forEach((log)=> {
      if(cur === log.date.getTime()){
        return
      }
      if(cur + 24*60*60*1000 === log.date.getTime()){
        cur = log.date.getTime()
        count++
        return
      }
      maxCount = maxCount>count? maxCount:count
      count = 1
      cur = log.date.getTime()
    })
    return maxCount
  }
  timesForMonth(year:number, monthIndex:number): number {
    let count=0
    this.sortedLogs.forEach((log)=>{
      if(log.date.getFullYear()===year && log.date.getMonth()===monthIndex){
        count++
      }
    })
    return count
  }
  timesForDate(date: Date): number {
    let count=0
    this.sortedLogs.forEach((log)=> {
      if(log.date.getTime()===date.getTime()){
        count++
      }
    })
    return count
  }
}