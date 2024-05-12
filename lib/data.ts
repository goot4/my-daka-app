
export type UserData = {
  id: string;
  projects: ProjectData[];
}
export type ProjectData = {
  id: string;
  name: string;
  logs: { date: Date; description:string }[];
}

export const mockData: UserData = {
  id: "mock",
  projects: [
    {
      id: 'yujia',
      name: '瑜伽',
      logs: [
        {date: new Date(2024,3,7), description: ''},
        {date: new Date(2024,3,8), description: ''},
        {date: new Date(2024,3,9), description: ''},
        {date: new Date(2024,3,10), description: ''},
        {date: new Date(2024,4,1), description: 'some content'},
        {date: new Date(2024,4,1), description: 'other content'},
        {date: new Date(2024,4,10), description: 'other content'},
        {date: new Date(2024,4,11), description: 'other content'},
      ]
    },
    {
      id: 'project 1',
      name: 'Project 1',
      logs: [
        {date: new Date(2024,3,7), description: ''},
        {date: new Date(2024,4,1), description: 'some content'}]
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