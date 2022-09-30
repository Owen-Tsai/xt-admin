import axios from 'axios'
import type { FalseData, UserInfo, Step } from './business'

export const Documents = () => axios.get<FalseData>('/api/get-user-data')
export const getUserInfo = () => axios.get<UserInfo>('/api/get-user-info')
export const getStep = () => axios.get<Step[]>('/api/get-step')
export const getAtPresent = () => axios.get<Step>('/api/at-present')
