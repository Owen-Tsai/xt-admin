import type { WidgetsConfig } from './types'

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
      width: '100%',
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
      maxLength: undefined,
      placeholder: '',
      readonly: false,
      required: true,
      showWordLimit: false
    }
  },
  checkbox: {
    type: 'checkbox',
    name: '复选框',
    uid: '',
    config: {
      label: '复选框',
      width: '100%',
      defaultChecked: false,
      disabled: false,
      direction: 'horizontal',
      indeterminate: false,
      options: [
        { label: '选项1', value: 0 },
        { label: '选项2', value: 1 },
        { label: '选项3', value: 3 }
      ]
    }
  },
  inputnumber: {
    type: 'inputnumber',
    name: '数字输入框',
    uid: '',
    config: {
      width: '100%',
      label: '数字输入框',
      allowClear: false,
      readonly: false,
      required: false,
      placeholder: '',
      disabled: false,
      error: false,
      size: 'medium'
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
      required: true,
      optionsType: 'fixed',
      options: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' }
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
      direction: 'horizontal',
      defaultValue: '0',
      type: 'radio',
      width: '100%',
      optionsType: 'fixed',
      options: [
        { label: '选项0', value: '0' },
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' }
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
      defaultChecked: false,
      type: 'circle',
      size: 'medium',
      checkedValue: true,
      uncheckedValue: false,
      disabled: false
    }
  },
  textarea: {
    type: 'textarea',
    name: '文本域',
    uid: '',
    config: {
      label: '文本域',
      width: '100%',
      placeholder: '提示文字',
      disabled: false,
      maxLength: 0,
      showWordLimit: false,
      allowClear: false,
      autoSize: false,
      value: ''
    }
  },
  cascader: {
    type: 'cascader',
    name: '级联选择器',
    uid: '',
    config: {
      label: '级联选择器',
      width: '100%',
      placeholder: '请选择',
      defaultValue: '',
      disabled: false,
      allowSearch: false,
      allowClear: false,
      multiple: false,
      checkStrictly: false,
      expandTrigger: 'click',
      options: [
        {
          value: 'beijing',
          label: 'Beijing',
          children: [
            {
              value: 'chaoyang',
              label: 'ChaoYang',
              children: [
                {
                  value: 'datunli',
                  label: 'Datunli',
                },
              ],
            },
          ]
        }
      ]
    }
  },
  datePicker: {
    type: 'date-picker',
    name: '日期选择器',
    uid: '',
    config: {
      label: '日期选择器',
      width: '100%',
      allowClear: true,
      readonly: false,
      error: false,
      size: 'medium',
      disabled: false,
      showTime: false,
    }
  },
  rate: {
    type: 'rate',
    name: '评分',
    uid: '',
    config: {
      label: '评分',
      width: '100%',
      count: 5,
      allowHalf: false,
      grading: false,
      readonly: false,
      disabled: false,
    }
  },
  timePicker: {
    type: 'time-picker',
    name: '时间选择器',
    uid: '',
    config: {
      label: '时间选择器',
      width: '100%',
      type: 'time',
      disabled: false,
      allowClear: true,
      readonly: false,
      error: false,
      size: 'medium',
      placeholder: '请选择时间',
    }
  },
  upload: {
    type: 'upload',
    name: '上传',
    uid: '',
    config: {
      label: '上传',
      width: '100%',
      action: '',
      disabled: false,
      multiple: false,
      limit: 9,
    }
  },
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
