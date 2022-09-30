import axios from 'axios'
import type { falsedata, userinfo } from './business'

export const documents = () => axios.get<falsedata>('/api/get_user_data')
export const getuserinfo = () => axios.get<userinfo>('/api/get_userinfo')
export const getstep = () => axios.get<userinfo>('/api/get_step')
export const getatpresent = () => axios.get<userinfo>('/api/atpresent')
