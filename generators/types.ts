export type InputType = 'input'
  | 'select'
  | 'select-remote'
  | 'cascader'
  | 'date'
  | 'date-range'
  | 'month'
  | 'year'
  | 'quarter'
  | 'week'
  | 'date-time'
  | 'password'
  | 'textarea'
  | 'number'

export type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type ColConfig = {
  [key in BreakPoint]?: number
}

export interface GeneratorConfig {
  file?: string,
  col?: number | ColConfig,
  layout?: 'horizontal' | 'vertical',
  labelAlign?: 'left' | 'right',
  size?: 'mini' | 'small' | 'medium' | 'large'
}
