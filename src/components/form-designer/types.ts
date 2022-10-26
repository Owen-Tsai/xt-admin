import type { Ref } from 'vue'

export type ItemSlot = {
  element: WidgetsConfig,
  index: number
}

export interface FormConfig {
  size: 'mini' | 'small' | 'medium' | 'large',
  layout: 'horizontal' | 'vertical',
  labelAlign: 'left' | 'right'
}

export interface DataSourcesConfig {
  name: string,
  url: string
}

export interface IOptInput {
  required?: boolean,
  disabled?: boolean,
  readonly?: boolean,
  label?: string,
  width?: string,
  allowClear?: boolean,
  maxLength?: number,
  showWordLimit?: boolean,
  defaultValue?: string,
  placeholder?: string
}

export interface IOptSelect {
  required?: boolean,
  disabled?: boolean,
  readonly?: boolean,
  label?: string,
  width?: string,
  allowClear?: boolean,
  allowSearch?: boolean,
  allowCreate?: boolean,
  limit?: number,
  placeholder?: string,
  defaultValue?: string | number | Record<string, unknown>,
  options?: Array<{
    label?: string,
    value?: string | number | Record<string, unknown>
  }>
}

export interface IOptTextarea {
  width?: string,
  rows?: number,
  limit?: number,
  placeholder?: string
}

export interface IOptGrid {
  gutter?: number,
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between',
  align?: 'start' | 'center' | 'end' | 'stretch',
}

export type IConfigCol = {
  span?: number,
  widgets: Exclude<WidgetsConfig, IConfigGrid>[]
}

export type IConfigGrid = {
  type: 'grid',
  name: string,
  uid: string,
  config: IOptGrid,
  cols: Array<IConfigCol>
}

export type IConfigInput = {
  type: 'input',
  name: string,
  uid: string,
  config: IOptInput
}

export type IConfigSelect = {
  type: 'select',
  name: string,
  uid: string,
  config: IOptSelect
}

export type WidgetsConfig = IConfigInput | IConfigSelect | IConfigGrid

export type AST = {
  formConfig: FormConfig,
  widgetsConfig: WidgetsConfig[],
  dataSources: DataSourcesConfig[]
}

export type FormDesignerContext = {
  selectedUID: Ref<string>,
  setSelectedUID: (uid: string) => void,
  addWidget: (widget: WidgetsConfig, idx?: number) => void,
  removeWidget: (index: number) => void,
  duplicateWidget: (index: number) => void
}

export const contextSymbol = Symbol('formDesignerContext')
