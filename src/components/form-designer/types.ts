import type { Ref } from 'vue'

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
  align?: 'start' | 'center' | 'end' | 'stretch'
}

export type IConfigGrid = {
  type: 'grid',
  name: string,
  config: IOptGrid
}

export type IConfigInput = {
  type: 'input',
  name: string,
  config: IOptInput
}

export type IConfigSelect = {
  type: 'select',
  name: string,
  config: IOptSelect
}

export type WidgetsConfig = IConfigInput | IConfigSelect | IConfigGrid

export type AST = {
  formConfig: FormConfig,
  widgetsConfig: WidgetsConfig[],
  dataSources: DataSourcesConfig[]
}

export type FormDesignerContext = {
  selectedIndex: Ref<number>,
  setSelectedIndex: (idx: number) => void,
  addWidget: (widget: WidgetsConfig, idx?: number) => void,
  removeWidget: (index: number) => void,
  duplicateWidget: (index: number) => void
}

export const contextSymbol = Symbol('formDesignerContext')
