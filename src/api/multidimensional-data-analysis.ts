import axios from 'axios'
import type {
  DataScreening, IOverviewData, IAction, IDistributionData, IUserContent, IChartData
} from './business'

export const getDataScreening = () => axios.get<DataScreening[]>('/api/get-data-screening')
export const getDataListTime = () => axios.get<IOverviewData>('/api/get-data-list-time')
export const getDataAction = () => axios.get<IAction[]>('/api/get-data-action')
export const getDataDistribution = () => axios.get<IDistributionData[]>('/api/get-data-distribution')
export const getDataUserContent = () => axios.get<IUserContent[]>('/api/get-data-user-content')
export const getDataDataDistriList = () => axios.get<IDistributionData[]>('/api/get-data-distri-list')
export const getDataChartList = () => axios.get<IChartData[]>('/api/get-data-chart-list')
export const getDataChart1List = () => axios.get<IChartData[]>('/api/get-data-chart1-list')
export const getDataChart2List = () => axios.get<IChartData[]>('/api/get-data-chart2-list')
export const getDataChart3List = () => axios.get<IChartData[]>('/api/get-data-chart3-list')
export const getPublish = () => axios.get<any[]>('/api/get-data-publish-value')
export const getPublish1 = () => axios.get<any[]>('/api/get-data-publish1-value')
export const getPublish2 = () => axios.get<any[]>('/api/get-data-publish2-value')
