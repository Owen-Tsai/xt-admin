import axios from 'axios'
import type { IAnalysis } from './business'

export const getDataAnalysis = () => axios.get<IAnalysis[]>('/api/get-data-analysis')
export const getDocuments = () => axios.get<IAnalysis>('/api/get-user-data')
