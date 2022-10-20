import axios from 'axios'
import type {
  DataScreening, IOverviewData, IAction, IDistributionData, IUserContent
} from './business'

export const getDataScreening = () => axios.get<DataScreening[]>('/api/get-data-screening')
export const getDataListTime = () => axios.get<IOverviewData>('/api/get-data-list-time')
export const getDataAction = () => axios.get<IAction[]>('/api/get-data-action')
export const getDataDistribution = () => axios.get<IDistributionData[]>('/api/get-data-distribution')
export const getDataUserContent = () => axios.get<IUserContent[]>('/api/get-data-user-content')
export const getDataDataDistriList = () => axios.get<IDistributionData[]>('/api/get-data-distri-list')
