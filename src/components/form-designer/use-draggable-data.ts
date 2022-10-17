import type { FormWidgetsConfig, LayoutWidgetsConfig } from './types'

export const layoutFields: LayoutWidgetsConfig[] = [
  {
    type: 'grid',
    name: '栅格布局',
    config: {
      gutter: 0,
      justify: 'start',
      align: 'start'
    }
  }
]
export const basicFields: FormWidgetsConfig[] = [
  {
    type: 'input',
    name: '输入框',
    config: {
      width: '100%',
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
  {
    type: 'select',
    name: '下拉选择器',
    config: {
      width: '100%',
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
]
