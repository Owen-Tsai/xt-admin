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
        span: 12,
        widgets: []
      },
      {
        span: 12,
        widgets: []
      }
    ],
    uid: '',
    config: {
      gutter: 16,
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
  },
  radio: {
    type: 'radio',
    name: '单选框',
    uid: '',
    config: {
      label: '单选框',
      disabled: false,
      direction: 'vertical',
      defaultValue: undefined,
      type: 'radio',
      width: '100%',
      size: 'mini',
      options: [
        { label: '男', value: 0 },
        { label: '女', value: 1 },
      ]
    }
  },
  slider: {
    type: 'slider',
    name: '滑动输入条',
    uid: '',
    config: {
      label: '滑动输入条',
      defaultValue: undefined,
      step: 1,
      min: 0,
      marks: '',
      max: 100,
      direction: 'horizontal',
      disabled: false,
      showTicks: false,
      showInput: false,
      range: false,
      width: '200px',
    }
  },
  switch: {
    type: 'switch',
    name: '开关',
    uid: '',
    config: {
      label: '开关',
      width: '100%',
      defaultChecked: false,
      type: 'circle',
      size: 'medium',
      checkedValue: true,
      uncheckedValue: false,
      disabled: false,
    }
  }
}

export const fields = Object.values(fieldsMap)

export const findWidgetWithUID = (widgets: WidgetsConfig[], uid: string) => {
  for (let i = 0; i < widgets.length; i++) {
    const widget = widgets[i]
    if (widget.uid === uid) {
      return widget
    }
    if (widget.type === 'grid' && widget.cols.length > 0) {
      for (let j = 0; j < widget.cols.length; j++) {
        const subWidgets = widget.cols[j].widgets
        for (let k = 0; k < subWidgets.length; k++) {
          if (subWidgets[k].uid === uid) {
            return subWidgets[k]
          }
        }
      }
    }
  }

  return undefined
}
