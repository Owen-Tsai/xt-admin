import type { FieldRule } from '@arco-design/web-vue'

type Tag = 'a-input'
  | 'a-input-number'
  | 'a-input-tag'
  | 'a-textarea'
  | 'a-select'
  | 'a-cascader'
  | 'a-date-picker'
  | 'a-month-picker'
  | 'a-year-picker'
  | 'a-quarter-picker'
  | 'a-week-picker'
  | 'a-range-picker'
  | 'a-uoload'

type CommonBoolAttr = 'required'
  | 'disabled'
  | 'readonly'
  | 'allowClear'

type Prop = {
  [key in CommonBoolAttr]?: boolean;
} & {
  [key: string]: any
}

export type FormItemConfig = {
  tag: Tag,
  label: string,
  field: string
  props?: Prop,
  rule?: FieldRule | FieldRule[]
}

export type FormConfig = {
  cols?: number,
  layout?: 'vertical' | 'horizontal',
  labelAlign?: 'left' | 'right',
  autoLabelWidth?: boolean
}
