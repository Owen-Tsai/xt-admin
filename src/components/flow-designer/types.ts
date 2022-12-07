export type FlowFonfig = {
  uid: string
  name: string
  description: string
  allowWithdraw: boolean
  formUid: string
}

export type CellConfig = {
  uid: string
  type: 'start' | 'end' | 'process' | 'cc' | 'gateway'
  condition: string
  label: string
  grahpAttrs: Record<string, any>
  next: Array<CellConfig>
  prev: CellConfig
}
