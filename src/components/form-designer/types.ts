import { DatePicker } from '@arco-design/web-vue'
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
export interface IOptRadio {
  required?: boolean,
  label: string,
  disabled?: boolean | string | number,
  type: 'radio' | 'button',
  width?: string,
  size?: 'mini' | 'small' | 'medium' | 'large',
  direction?: 'vertical' | 'horizontal',
  defaultValue?:string | number,
  options?: Array<{
    label?: string,
    value?: number | string
  }>
}
export interface IOptSwitch {
  width?: string,
  required?:boolean,
  defaultChecked?: boolean,
  type?: 'circle' | 'round' | 'line',
  size?: 'small' | 'medium',
  checkedValue?: string | number | boolean,
  uncheckedValue?: string | number | boolean,
  disabled?: boolean,
  label?: string
}
export interface IOptSlider {
  required?: boolean,
  label: string,
  defaultValue?: number | [number, number],
  step?: number,
  min?: number,
  marks?: Record<number, string>,
  max?: number,
  direction?: 'horizontal' | 'vertical',
  disabled?: boolean,
  showTicks?: boolean,
  showInput?: boolean,
  range?: boolean,
  width?: string,
}
export interface IOptDatePicker {
  required?: boolean,
  label: string,
  allowClear?: boolean,
  readonly?: boolean,
  error?: boolean,
  size?: 'mini' | 'small' | 'medium' | 'large',
  disabled?: boolean,
  showTime?: boolean,
  mode?: 'date' | 'year' | 'quarter' | 'month' | 'week',
  width?: string,
}
export interface IOptRate {
  required?: boolean,
  label: string,
  count?: number,
  defaultValue?: number,
  allowHalf?: boolean,
  grading?: boolean,
  readonly?: boolean,
  disabled?: boolean,
  color?: string | Record<string, string>,
  width?: string,
}
export interface IOptTextarea {
  width?: string,
  rows?: number,
  limit?: number,
  placeholder?: string
}
export interface IOptTimePicker {
  required?: boolean,
  label: string,
  type?: 'time' | 'time-range',
  defaultValue?: string | number | Date | Array<string | number | Date>,
  disabled?: boolean,
  allowClear?: boolean,
  readonly?: boolean,
  error?: boolean,
  size?: 'mini' | 'small' | 'medium' | 'large',
  placeholder?: string,
  width?: string,
}

export interface IOptGrid {
  gutter: number,
  justify: 'start' | 'center' | 'end' | 'space-around' | 'space-between',
  align: 'start' | 'center' | 'end' | 'stretch',
}
export interface IOptCascader {
  required?: boolean,
  label?: string,
  width?: string,
  placeholder?: string,
  defaultValue?: string | number | Record<string, any> | (| string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined,
  disabled?: boolean,
  allowSearch?: boolean,
  allowClear?: boolean,
  multiple?:boolean,
  checkStrictly?: boolean,
  expandTrigger?: 'click' | 'hover',
  options: Array<{
    label?: string,
    value?: number | string,
    children?: IOptCascaderChildren[]
  }>
}
export interface IOptinTextarea {
  required?: boolean,
  label?: string,
  width?: string,
  placeholder?: string,
  disabled?: boolean,
  maxLength?: number,
  showWordLimit?: boolean,
  allowClear?: boolean,
  autoSize?: boolean,
  value?: string
}
export interface IOptCascaderChildren{
  label?: string,
  value?: number | string,
  children?: IOptCascaderChildren[]
}
export type IConfigCol = {
  span: number,
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
export type IConfigRadio = {
  type: 'radio',
  name: string,
  uid: string,
  config: IOptRadio,
}
export type IConfigSwitch = {
  type: 'switch',
  name: string,
  uid: string,
  config: IOptSwitch,
}
export type IConfigSlider = {
  type: 'slider',
  name: string,
  uid: string,
  config: IOptSlider,
}
export type IConfigCascader = {
  type: 'cascader',
  name: string,
  uid: string,
  config: IOptCascader,
}
export type IConfigTextarea = {
  type: 'textarea',
  name: string,
  uid: string,
  config: IOptinTextarea,
}
export type WidgetsConfig = IConfigInput | IConfigSelect | IConfigGrid | IConfigRadio | IConfigSlider | IConfigSwitch | IConfigCascader | IConfigTextarea

export type AST = {
  formConfig: FormConfig,
  widgetsConfig: WidgetsConfig[],
  dataSources: DataSourcesConfig[]
}

export type FormDesignerContext = {
  selectedUID: Ref<string>,
  setSelectedUID: (uid: string) => void,
  addWidget: (widget: WidgetsConfig, idx?: number) => void,
  removeWidget: (index: number, uid: string) => void,
  duplicateWidget: (index: number) => void
}

export const contextSymbol = Symbol('formDesignerContext')
