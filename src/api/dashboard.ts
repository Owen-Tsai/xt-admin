import axios from 'axios'

export type DataPanelItem = {
  talent: number,
  fund: number,
  consultation: number,
  storage: number
}

export type TalentChartData = {
  x: string,
  y: number
}[]

export type TodoTableItem = {
  title: string;
  progress: number;
  todo: number
}

export const getDashboardData = () => axios.get<DataPanelItem>('/api/dashboard/get-data')
export const getTalentChartData = () => axios.get<TalentChartData>('/api/dashboard/get-chart-data')
export const getTodoTable = () => axios.get<TodoTableItem[]>('/api/dashboard/get-todo-table')
