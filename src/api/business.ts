import axios from 'axios'
import qs from 'query-string'

export interface Step {
  atpresent?: number,
  name?: string,
  data?: string|Date,
  title?: string,
  remark?: string,
}
export interface BusinessEntry {
  id: number,
  name: string,
  active?: boolean,
  startTime?: string,
  endTime?: string
}
export interface InfoGroup {
  updateTime: string | Date,
  groupsData: Array<{
    name: string,
    supervisor: string,
    time: string | Date,
    dept: string,
    code: string,
    desc: string
  }>
}

export interface OrderForm {
  name?: string,
  products?: string,
  creationtime?: string | Date,
  odd?: number | string,
  documents?: number | string,
  effectivedate?: string | Date,
  remark?: string,
  money?: string,
  examineapprove?: string
}

export interface UserInfo {
  uname?: string,
  membershipNo?: string | number,
  identityCard?: string | number,
  contactInfo?: number | string,
  address?: string,
  infoGroups?: InfoGroup[]
}
export interface GroupedBusinessEntry {
  name: string,
  items: BusinessEntry[]
}

export interface BusinessRecord {
  seriealNo: string,
  name: string,
  time: string,
  updatedTime?: string,
  category: string,
  status: number
}

export interface PaginationParams {
  current: number,
  pageSize: number
}

export type IName = {
  name: string,
  number: string,
  department:string
}

export interface IAnalysis {
  name: string,
  odd: number,
  edd: number,
  isgrowth: string | number | boolean
}
export interface ITableList {
  name: string,
  salary: number,
  address: number,
  key: number
}
export interface ISeriesData {
  Graphic: [],
  Writing: [],
  Video: [],
}
export const getGroups = async () => axios.get<GroupedBusinessEntry[]>('/api/business/getGroups')
export const getRecords = async (params: PaginationParams) => axios.get<{
  list: BusinessRecord[],
  total: number
}>('/api/business/records', {
  params,
  paramsSerializer: (obj) => qs.stringify(obj)
})
