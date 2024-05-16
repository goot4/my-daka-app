import {ProjectData} from "@/lib/data"

export class Analysis {
  sortedLogs: { date: number, description:string }[];
  constructor(projectData: ProjectData) {
    this.sortedLogs = projectData.logs.toSorted((a,b)=>
      a.date - b.date).map(log => {
        return { date: log.date, description: log.description }
    })
    console.log(this.sortedLogs.map(log=> {
      return { date:new Date(log.date), description:log.description}
      })
    )
  }


  static timesForToday( project: ProjectData ) {
    let today = this.timeStampInDay(new Date().getTime())
    console.log(today)
    let count=0
    project.logs.forEach((log)=> {
      console.log(this.timeStampInDay(log.date))
      if(this.timeStampInDay(log.date)===today){
        count++
      }
    })
    return count
  }

  isEmpty() {
    return this.sortedLogs.length === 0;
  }
  startDate(): Date {
    return new Date(this.sortedLogs[0].date)
  }
  finalDate(): Date {
    return new Date(this.sortedLogs[this.sortedLogs.length-1].date)
  }
  totalDays(): number {
    let count=0
    let cur = -1
    this.sortedLogs.forEach((log)=> {
      if(cur !== Analysis.timeStampInDay(log.date)){
        count++
        cur = Analysis.timeStampInDay(log.date)
      }
    })
    return count
  }
  highestStreak(): number {
    let maxCount= 1, count = 1, cur = -1
    this.sortedLogs.forEach((log)=> {
      if(cur === Analysis.timeStampInDay(log.date)){
        return
      }
      if(cur + 1 === Analysis.timeStampInDay(log.date)){
        cur = Analysis.timeStampInDay(log.date)
        count++
        return
      }
      maxCount = maxCount>count? maxCount:count
      count = 1
      cur = Analysis.timeStampInDay(log.date)
    })
    return maxCount
  }
  timesForMonth(year:number, monthIndex:number): number {
    let count=0
    this.sortedLogs.forEach((log)=>{
      if(new Date(log.date).getFullYear()===year && new Date(log.date).getMonth()===monthIndex){
        count++
      }
    })
    return count
  }
  timesForDate(date: Date): number {
    let count=0
    this.sortedLogs.forEach((log)=> {
      if(Analysis.timeStampInDay(log.date)===Analysis.timeStampInDay(date.getTime())){
        count++
      }
    })
    return count
  }

  // Helper
  static timeStampInDay(timeStamp: number){
    return Math.floor(timeStamp/(24*60*60*1000))
  }
}