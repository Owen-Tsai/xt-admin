import type {
  WidgetsConfig
} from './types'

/**
 * input
 * input-number
 * select
 * checkbox-group
 * radio-group
 * slider
 * switch
 * cascader
 * date-picker
 * rate
 * textarea
 * time-picker
 * upload
 */

export const fieldsMap: Record<string, WidgetsConfig> = {
  grid: {
    type: 'grid',
    name: '栅格布局',
    cols: [
      {
        span: 24,
        widgets: []
      }
    ],
    uid: '',
    config: {
      gutter: 0,
      justify: 'start',
      align: 'start'
    }
  },
  input: {
    type: 'input',
    name: '输入框',
    uid: '',
    config: {
      width: '100%',
      label: '输入框',
      allowClear: false,
      defaultValue: '',
      disabled: false,
      maxLength: 0,
      placeholder: '',
      readonly: false,
      required: false,
      showWordLimit: false
    }
  },
  select: {
    type: 'select',
    name: '下拉选择器',
    uid: '',
    config: {
      width: '100%',
      label: '下拉选择器',
      allowClear: false,
      allowCreate: false,
      allowSearch: false,
      disabled: false,
      limit: 0,
      placeholder: '',
      readonly: false,
      required: false,
      options: [
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
        { label: '选项3', value: 3 }
      ]
    }
  }
}

export const fields = Object.values(fieldsMap)
