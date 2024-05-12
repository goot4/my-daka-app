import {ProjectData} from "@/lib/data";

// length of logs of projectData must > 0
export class Analysis {
  static startDate(project: ProjectData): Date {
    const log = project.logs.reduce((oldest, current)=>{
      return oldest.date < current.date? oldest: current
    })
    return log.date
  }
  static finalDate(project: ProjectData): Date {
    const log = project.logs.reduce((newest, current)=>{
      return newest.date > current.date? newest: current
    })
    return log.date
  }
  static totalDays(projects: ProjectData): number {

  }
  static highestStreak(projects: ProjectData): number {

  }
  static timesThisMonth(projects: ProjectData): number {

  }
}