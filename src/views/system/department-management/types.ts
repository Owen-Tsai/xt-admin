import mitt from 'mitt'

const emitter = mitt()
export default emitter

export type InformationData = {
  departName?: string
  superior?: string
  orgCode?: string
  isLeaf: boolean
  description?: string
  departOrder?: number
  mobile?: string
  fax?: string
  address?: string
  memo?: string
}
