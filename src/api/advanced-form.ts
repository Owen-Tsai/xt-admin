import axios from 'axios'
import type { IName } from '@/api/business'

// eslint-disable-next-line import/prefer-default-export
export const getFormTab = () => axios.get<IName[]>('/get-from-tab')
