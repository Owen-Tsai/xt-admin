<template>
  <main class="px-6 pb-4 relative">
    <s-navs :navs="['menu.form', 'menu.form.dynamic']" />
    <div class="s-section">
      <s-form :ast="ast" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import {
  ref, PropType,
  computed
} from 'vue'
import SForm from '@/components/s-form/index.vue'
import type { AST } from '@/components/form-designer/types'

const ast = ref<AST>({
  // formConfig: {
  //   labelAlign: 'right',
  //   layout: 'vertical',
  //   size: 'medium'
  // },
  formConfig: { 'labelAlign': 'right', 'layout': 'vertical', 'size': 'medium' },
  'dataSources': [],
  'widgetsConfig': [{
    'type': 'grid',
    'name': '栅格布局',
    'cols': [{
      'span': 12,
      'widgets': [{
        'type': 'input',
        'name': '输入框',
        'uid': 'C4jAY7sv',
        'config': {
          'width': '100%', 'label': '输入框', 'allowClear': false, 'defaultValue': '', 'disabled': false, 'placeholder': '', 'readonly': false, 'required': false, 'showWordLimit': false
        }
      }]
    }, {
      'span': 12,
      'widgets': [{
        'type': 'input',
        'name': '输入框',
        'uid': 'EQ388PD7',
        'config': {
          'width': '100%', 'label': '输入框', 'allowClear': false, 'defaultValue': '', 'disabled': false, 'placeholder': '', 'readonly': false, 'required': false, 'showWordLimit': false
        }
      }]
    }],
    'uid': 'YovOqu8P',
    'config': {
      'width': '100%', 'gutter': 16, 'justify': 'start', 'align': 'start'
    }
  }, {
    'type': 'grid',
    'name': '栅格布局',
    'cols': [{
      'span': 12,
      'widgets': [{
        'type': 'select',
        'name': '下拉选择器',
        'uid': '48u95FsX',
        'config': {
          'width': '100%', 'label': '下拉选择器', 'allowClear': false, 'allowCreate': false, 'allowSearch': false, 'disabled': false, 'limit': 0, 'placeholder': '', 'readonly': false, 'required': false, 'optionsType': 'fixed', 'options': [{ 'label': '选项1', 'value': '1' }, { 'label': '选项2', 'value': '2' }, { 'label': '选项3', 'value': '3' }]
        }
      }]
    }, {
      'span': 12,
      'widgets': [{
        'type': 'select',
        'name': '下拉选择器',
        'uid': '7AbckRit',
        'config': {
          'width': '100%', 'label': '下拉选择器', 'allowClear': false, 'allowCreate': false, 'allowSearch': false, 'disabled': false, 'limit': 0, 'placeholder': '', 'readonly': false, 'required': false, 'optionsType': 'fixed', 'options': [{ 'label': '选项1', 'value': '1' }, { 'label': '选项2', 'value': '2' }, { 'label': '选项3', 'value': '3' }]
        }
      }]
    }],
    'uid': 'JZjxkili',
    'config': {
      'width': '100%', 'gutter': 16, 'justify': 'start', 'align': 'start'
    }
  }, {
    'type': 'grid',
    'name': '栅格布局',
    'cols': [{
      'span': 12,
      'widgets': [{
        'type': 'radio',
        'name': '单选框',
        'uid': 'rx8OpY8K',
        'config': {
          'label': '单选框', 'disabled': false, 'direction': 'horizontal', 'defaultValue': '0', 'type': 'radio', 'width': '100%', 'optionsType': 'fixed', 'options': [{ 'label': '选项0', 'value': '0' }, { 'label': '选项1', 'value': '1' }, { 'label': '选项2', 'value': '2' }, { 'label': '选项3', 'value': '3' }]
        }
      }]
    }, {
      'span': 12,
      'widgets': [{
        'type': 'checkbox',
        'name': '复选框',
        'uid': 'TNofahTr',
        'config': {
          'label': '复选框', 'width': '100%', 'defaultChecked': false, 'disabled': false, 'direction': 'horizontal', 'indeterminate': false, 'options': [{ 'label': '选项1', 'value': 0 }, { 'label': '选项2', 'value': 1 }, { 'label': '选项3', 'value': 3 }]
        }
      }]
    }],
    'uid': 'U9Gp92B2',
    'config': {
      'width': '100%', 'gutter': 16, 'justify': 'start', 'align': 'start'
    }
  }, {
    'type': 'grid',
    'name': '栅格布局',
    'cols': [{
      'span': 12,
      'widgets': [{
        'type': 'date-picker',
        'name': '日期选择器',
        'uid': 'hKdO0IYn',
        'config': {
          'label': '日期选择器', 'width': '100%', 'allowClear': true, 'readonly': false, 'error': false, 'size': 'medium', 'disabled': false, 'showTime': false
        }
      }]
    }, {
      'span': 12,
      'widgets': [{
        'type': 'time-picker',
        'name': '时间选择器',
        'uid': 'MwBa8YJK',
        'config': {
          'label': '时间选择器', 'width': '100%', 'type': 'time', 'disabled': false, 'allowClear': true, 'readonly': false, 'error': false, 'size': 'medium', 'placeholder': '请选择时间'
        }
      }]
    }],
    'uid': 'MeLyUjm2',
    'config': {
      'width': '100%', 'gutter': 16, 'justify': 'start', 'align': 'start'
    }
  }],
})
// const previewVisible = ref(true)
// const source = computed(() => JSON.stringify(ast.value))
// const data = ref({})
</script>
