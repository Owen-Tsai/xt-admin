import axios from 'axios'

export interface BusinessRecord {
  id: number,
  name: string,
  active?: boolean,
  startTime?: string,
  endTime?: string
}

export interface GroupedBusinessRecord {
  name: string,
  items: BusinessRecord[]
}

export const getGroups = async () => axios.get<GroupedBusinessRecord[]>('/api/business/getGroups')
