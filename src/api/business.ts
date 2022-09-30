import axios from 'axios'
import qs from 'query-string'

export interface step {
  atpresent?: number,
  name: string,
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
export interface userinfoshuzus {
  Groupname?: string,
  principal?: string,
  Charactercode?: number | string,
  department: string,
  expirationtime: string | Date,
  describe:string
}
export interface userinfoshuzu {
  uname?: string,
  unamedata?: string | Date,
  Groupname?:string
  Multilayerinformationgroup?: userinfoshuzus[]
}
export interface falsedata {
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

export interface userinfo {
  atpresent: step | number,
  uname?: string,
  membershipnumber?: string | number,
  identitycard?: string | number,
  contactinformation?: number | string,
  contactaddress?: number | string,
  messageblock?: userinfoshuzu[]
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

export const getGroups = async () => axios.get<GroupedBusinessEntry[]>('/api/business/getGroups')
export const getRecords = async (params: PaginationParams) => axios.get<{
  list: BusinessRecord[],
  total: number
}>('/api/business/records', {
  params,
  paramsSerializer: (obj) => qs.stringify(obj)
})
