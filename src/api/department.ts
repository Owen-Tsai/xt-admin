import axios from 'axios'

export const getDepartment = () => axios.get('/sys/sysDepart/queryTreeList')
export const retrievalDepartment = (keyWord: string) =>
  axios.get(`/sys/sysDepart/queryTreeByKeyWord?keyWord=${keyWord}`)
export const editDepartment = () => axios.put('/sys/sysDepart/edit')
export const addDepartment = () => axios.post('/sys/sysDepart/add')
export const getDepartmentDetail = (orgCode: string | number) =>
  axios.get(`/sys/sysDepart/getDepartName?orgCode=${orgCode}`)
