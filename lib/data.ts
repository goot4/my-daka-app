
export type UserData = {
  id: string;
  projects: ProjectData[];
}
export type ProjectData = {
  id: string;
  name: string;
  logs: { date: number; description:string }[];
}

export const mockData: UserData = {
  id: "mock",
  projects: [
    {
      id: '样例项目',
      name: '样例项目',
      logs: [
        {date: new Date(2024,3,7).getTime(), description: ''},
        {date: new Date(2024,3,8).getTime(), description: ''},
        {date: new Date(2024,3,9).getTime(), description: ''},
        {date: new Date(2024,3,10).getTime(), description: ''},
        {date: new Date(2024,4,1).getTime(), description: 'some content'},
        {date: new Date(2024,4,1).getTime(), description: 'other content'},
        {date: new Date(2024,4,10).getTime(), description: 'other content'},
        {date: new Date(2024,4,11).getTime(), description: 'other content'},
        {date: new Date(2024,5,11).getTime(), description: 'other content'},
        {date: new Date(2024,5,12).getTime(), description: 'other content'},
      ]
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