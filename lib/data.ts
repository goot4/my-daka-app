export type UserData = {
  id: string;
  projects: ProjectData[];
}
export type ProjectData = {
  id: string;
  name: string;
  logs: { date: string; log:string }[];
}

export const mockData: UserData = {
  id: "mock",
  projects: [
    {
      id: 'project 1',
      name: 'Project 1',
      logs: [{date: '2024-04-07', log: ''}, {date: '2024-05-01', log: 'some content'}]
    },
    {
      id: 'yujia',
      name: 'Yujia',
      logs: [{date: '2024-04-07', log: ''}, {date: '2024-05-01', log: 'some content'}]
    },
  ]
}