import axios from 'axios'
import type { IOption } from '@/types'

// eslint-disable-next-line import/prefer-default-export
export const getDepts = () => axios.get<IOption[]>('/api/dept/getDepts')
