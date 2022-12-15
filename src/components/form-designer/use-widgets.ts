import { provide, ref, computed, Ref } from 'vue'
import { cloneDeep } from 'lodash'
import { generateUID } from '@/utils'
import { getWidgetByUID, removeWidgetByUID } from './utils'
import { AST, WidgetsConfig, FormDesignerContext, contextSymbol } from './types'

// widget actions injected to widget-form-items
export const useWidgetActions = (ast: Ref<AST>) => {
  const selectedUID = ref<string>('')
  const selectedWidget = computed(() =>
    getWidgetByUID(ast.value.widgetsConfig, selectedUID.value)
  )

  const setSelectedUID = (uid: string) => {
    selectedUID.value = uid
  }

  const cloneWidgetConfigFromRaw = (config: WidgetsConfig) => {
    const uid = generateUID()
    config.uid = uid
    return cloneDeep(config)
  }

  const removeWidget = (idx: number, uid: string) => {
    removeWidgetByUID(ast.value.widgetsConfig, idx, uid)
  }

  const duplicateWidget = (idx: number) => {
    const newWidgetConfig = { ...ast.value.widgetsConfig[idx] }
    ast.value.widgetsConfig.splice(idx, 0, newWidgetConfig)
  }

  const addWidget = (widget: WidgetsConfig, idx?: number) => {
    if (!idx) {
      ast.value.widgetsConfig.push(widget)
    } else {
      ast.value.widgetsConfig.splice(idx, 0, widget)
    }
  }

  provide<FormDesignerContext>(contextSymbol, {
    selectedUID,
    setSelectedUID,
    addWidget,
    removeWidget,
    duplicateWidget,
    ast,
  })

  return { cloneWidgetConfigFromRaw, selectedWidget }
}

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
        widgets: [],
      },
      {
        span: 12,
        widgets: [],
      },
    ],
    uid: '',
    config: {
      width: '100%',
      gutter: 16,
      justify: 'start',
      align: 'start',
    },
  },
  tab: {
    type: 'tab',
    name: '标签页',
    uid: '',
    panes: [
      {
        name: '标签页1',
        widgets: [],
      },
      {
        name: '标签页2',
        widgets: [],
      },
    ],
    config: {
      type: 'line',
      width: '100%',
    },
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
      required: false,
      showWordLimit: false,
    },
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
      optionsType: 'fixed',
      indeterminate: false,
      options: [
        { label: '选项1', value: 0 },
        { label: '选项2', value: 1 },
        { label: '选项3', value: 3 },
      ],
    },
  },
  inputNumber: {
    type: 'inputNumber',
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
      size: 'medium',
    },
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
      optionsType: 'fixed',
      options: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' },
      ],
    },
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
        { label: '选项3', value: '3' },
      ],
    },
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
      width: '100%',
    },
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
      disabled: false,
    },
  },
  textArea: {
    type: 'textarea',
    name: '文本域',
    uid: '',
    config: {
      label: '文本域',
      width: '100%',
      placeholder: '',
      disabled: false,
      maxLength: 0,
      showWordLimit: false,
      allowClear: false,
      autoSize: false,
      value: '',
    },
  },
  cascader: {
    type: 'cascader',
    name: '级联选择器',
    uid: '',
    config: {
      label: '级联选择器',
      width: '100%',
      placeholder: '',
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
          ],
        },
      ],
    },
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
    },
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
    },
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
      placeholder: '',
    },
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
    },
  },
}

export const fields = Object.values(fieldsMap)
