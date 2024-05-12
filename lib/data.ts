
export type UserData = {
  id: string;
  projects: ProjectData[];
}
export type ProjectData = {
  id: string;
  name: string;
  logs: { date: Date; log:string }[];
}

export const mockData: UserData = {
  id: "mock",
  projects: [
    {
      id: 'yujia',
      name: '瑜伽',
      logs: [
        {date: new Date(2024,4,7), log: ''},
        {date: new Date(2024,4,8), log: ''},
        {date: new Date(2024,4,9), log: ''},
        {date: new Date(2024,4,10), log: ''},
        {date: new Date(2024,5,1), log: 'some content'},
        {date: new Date(2024,5,1), log: 'other content'},
        {date: new Date(2024,5,10), log: 'other content'},
        {date: new Date(2024,5,11), log: 'other content'},
      ]
    },
    {
      id: 'project 1',
      name: 'Project 1',
      logs: [
        {date: new Date(2024,4,7), log: ''},
        {date: new Date(2024,5,1), log: 'some content'}]
    },
  ]
}

export const getData = function (){
  if(localStorage.getItem('userData') === null){
    localStorage.setItem('userData', JSON.stringify(mockData))
  }
  const data : UserData = JSON.parse(localStorage.getItem('userData')!)
  return data
}

export const saveData = function (data:UserData){
  localStorage.setItem('userData', JSON.stringify(data))
}