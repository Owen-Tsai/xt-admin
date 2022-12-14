import type { Ref } from 'vue'

export type InputEvent = 'input' | 'change' | 'focus' | 'blur'

export type ItemSlot = {
  element: WidgetsConfig
  index: number
}

export interface FormConfig {
  size: 'mini' | 'small' | 'medium' | 'large'
  layout: 'horizontal' | 'vertical'
  labelAlign: 'left' | 'right'
}

export interface DataSourceConfig {
  key: string
  name: string
  url: string
}

export type DataSourceType = 'fixed' | 'remote'

export interface IOptInput {
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  label?: string
  width?: string
  allowClear?: boolean
  maxLength?: number
  showWordLimit?: boolean
  defaultValue?: string
  placeholder?: string
}

export interface IOptSelect {
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  label?: string
  width?: string
  allowClear?: boolean
  allowSearch?: boolean
  allowCreate?: boolean
  limit?: number
  placeholder?: string
  defaultValue?: string
  optionsType: DataSourceType
  options: Array<{
    label?: string
    value?: string
  }>
  optionsUrl?: string
}

export interface IOptRadio {
  required?: boolean
  label: string
  disabled?: boolean
  type: 'radio' | 'button'
  width?: string
  direction?: 'vertical' | 'horizontal'
  defaultValue?: string
  optionsType: DataSourceType
  options: Array<{
    label?: string
    value?: string
  }>
  optionsUrl?: string
}

export interface IOptSwitch {
  width?: string
  required?: boolean
  defaultChecked?: boolean
  type?: 'circle' | 'round' | 'line'
  size?: 'small' | 'medium'
  checkedValue?: string | number | boolean
  uncheckedValue?: string | number | boolean
  disabled?: boolean
  loading?: boolean
  label?: string
}

export interface IOptSlider {
  required?: boolean
  label: string
  defaultValue?: number | [number, number]
  step?: number
  min?: number
  marks?: Record<number, string>
  max?: number
  direction?: 'horizontal' | 'vertical'
  disabled?: boolean
  showTicks?: boolean
  showInput?: boolean
  range?: boolean
  width?: string
}

export interface IOptDatePicker {
  required?: boolean
  label: string
  allowClear?: boolean
  readonly?: boolean
  error?: boolean
  size?: 'mini' | 'small' | 'medium' | 'large'
  disabled?: boolean
  showTime?: boolean
  mode?: 'date' | 'year' | 'quarter' | 'month' | 'week'
  width?: string
}

export interface IOptRate {
  required?: boolean
  label: string
  count?: number
  defaultValue?: number
  allowHalf?: boolean
  grading?: boolean
  readonly?: boolean
  disabled?: boolean
  color?: string | Record<string, string>
  width?: string
}

export interface IOptInputNumber {
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  label?: string
  width?: string
  allowClear?: boolean
  defaultValue?: number
  placeholder?: string
  precision?: number
  max?: number
  min?: number
  size?: 'mini' | 'small' | 'medium' | 'large'
  error?: boolean
  step?: boolean
}

export interface IOptCheckbox {
  width?: string
  max?: number
  label?: string
  required?: boolean
  defaultValue?: string | number | boolean
  disabled?: boolean
  direction?: 'vertical' | 'horizontal'
  value?: string | number
  indeterminate?: boolean
  defaultChecked?: boolean
  optionsType: DataSourceType
  optionsUrl?: string
  options?: Array<{
    label?: string
    value?: number
  }>
}

export interface IOptTimePicker {
  required?: boolean
  label?: string
  type?: 'time' | 'time-range'
  defaultValue?: string | number | Date | Array<string | number | Date>
  disabled?: boolean
  allowClear?: boolean
  readonly?: boolean
  error?: boolean
  size?: 'mini' | 'small' | 'medium' | 'large'
  placeholder?: string
  width?: string
  style?: string
}

export interface IOptGrid {
  width?: string
  gutter: number
  justify: 'start' | 'center' | 'end' | 'space-around' | 'space-between'
  align: 'start' | 'center' | 'end' | 'stretch'
}

export type IOptTab = {
  width?: string
  type: 'line' | 'card' | 'card-gutter' | 'text' | 'rounded' | 'capsule'
  size?: 'mini' | 'small' | 'medium' | 'large'
}

export interface IOptCascader {
  required?: boolean
  label?: string
  width?: string
  placeholder?: string
  defaultValue?:
    | string
    | number
    | Record<string, any>
    | (
        | string
        | number
        | Record<string, any>
        | (string | number | Record<string, any>)[]
      )[]
    | undefined
  disabled?: boolean
  allowSearch?: boolean
  allowClear?: boolean
  multiple?: boolean
  checkStrictly?: boolean
  expandTrigger?: 'click' | 'hover'
  options: Array<{
    label?: string
    value?: number | string
    children?: IOptCascaderChildren[]
  }>
}

export interface IOptinTextarea {
  required?: boolean
  label?: string
  width?: string
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  showWordLimit?: boolean
  allowClear?: boolean
  autoSize?: boolean
  value?: string
}

export interface IOptCascaderChildren {
  label?: string
  value?: number | string
  children?: IOptCascaderChildren[]
}

export type IConfigCol = {
  span: number
  widgets: Exclude<WidgetsConfig, IConfigGrid>[]
}

export type IConfigTabPane = {
  name: string
  widgets: Exclude<WidgetsConfig, IConfigTab>[]
}

export interface IOptUpload {
  required?: boolean
  label: string
  action?: string
  disabled?: boolean
  multiple?: boolean
  limit?: number
  width?: string
  draggable?: boolean
  withcredentials?: boolean
  autoUpload?: boolean
  showFileList?: boolean
  showRemoveButton?: boolean
  showRetryButton?: boolean
  showCancelButton?: boolean
  showUploadButton?: boolean
  download?: boolean
  showLink?: boolean
  imagePreview?: boolean
}

export interface IOptTextarea {
  width?: string
  rows?: number
  limit?: number
  placeholder?: string
}

export type IConfigGrid = {
  width?: string
  type: 'grid'
  name: string
  uid: string
  config: IOptGrid
  cols: Array<IConfigCol>
}

export type IConfigTab = {
  type: 'tab'
  name: string
  uid: string
  config: IOptTab
  panes: Array<IConfigTabPane>
}

export type IConfigInput = {
  type: 'input'
  name: string
  uid: string
  config: IOptInput & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigSelect = {
  type: 'select'
  name: string
  uid: string
  config: IOptSelect & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigInputNumber = {
  type: 'inputNumber'
  name: string
  uid: string
  config: IOptInputNumber & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigCheckbox = {
  type: 'checkbox'
  name: string
  uid: string
  config: IOptCheckbox & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigRadio = {
  type: 'radio'
  name: string
  uid: string
  config: IOptRadio & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigSwitch = {
  type: 'switch'
  name: string
  uid: string
  config: IOptSwitch & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigSlider = {
  type: 'slider'
  name: string
  uid: string
  config: IOptSlider & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigCascader = {
  type: 'cascader'
  name: string
  uid: string
  config: IOptCascader & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigTextarea = {
  type: 'textarea'
  name: string
  uid: string
  config: IOptinTextarea & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigDatePicker = {
  type: 'date-picker'
  name: string
  uid: string
  config: IOptDatePicker & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigRate = {
  type: 'rate'
  name: string
  uid: string
  config: IOptRate & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigTimePicker = {
  type: 'time-picker'
  name: string
  uid: string
  config: IOptTimePicker & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type IConfigUpload = {
  type: 'upload'
  name: string
  uid: string
  config: IOptUpload & {
    rules?: string
    trigger?: InputEvent | InputEvent[]
  }
}

export type WidgetsConfig =
  | IConfigInput
  | IConfigSelect
  | IConfigGrid
  | IConfigTab
  | IConfigRadio
  | IConfigSlider
  | IConfigSwitch
  | IConfigDatePicker
  | IConfigRate
  | IConfigTimePicker
  | IConfigCascader
  | IConfigTextarea
  | IConfigUpload
  | IConfigInputNumber
  | IConfigCheckbox

export type AllowedNestedWidget =
  | Exclude<WidgetsConfig, IConfigGrid>
  | Exclude<WidgetsConfig, IConfigTab>

export type AST = {
  formConfig: FormConfig
  widgetsConfig: WidgetsConfig[]
  dataSources: DataSourceConfig[]
}

export type FormDesignerContext = {
  selectedUID: Ref<string>
  setSelectedUID: (uid: string) => void
  addWidget: (widget: WidgetsConfig, idx?: number) => void
  removeWidget: (index: number, uid: string) => void
  duplicateWidget: (index: number) => void
  ast: Ref<AST>
}

export const contextSymbol = Symbol('formDesignerContext')
