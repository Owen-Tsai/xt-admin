import axios from 'axios'
import type { Iname } from '@/types'

// eslint-disable-next-line import/prefer-default-export
export const getFormTab = () => axios.get<Iname[]>('/get_from_tab')
