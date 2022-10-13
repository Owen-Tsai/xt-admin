import axios from 'axios'
import type { IAnalysis, ITableList, ISeriesData } from './business'

export const getDataAnalysis = () => axios.get<IAnalysis[]>('/api/get-data-analysis')
export const getTableList = () => axios.get<ITableList[]>('/api/get-data-table-list')
export const getXTime = () => axios.get<any[]>('/api/get-x-time')
export const getSeriesData = () => axios.get<ISeriesData>('/api/get-series-data')
export const getBigSeriesData = () => axios.get<ISeriesData>('/api/get-big-series-data')
