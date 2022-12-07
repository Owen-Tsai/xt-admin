<template>
  <a-form-item label="字段名称">
    <a-input v-model="config.label" allow-clear />
  </a-form-item>
  <a-form-item label="宽度">
    <a-input
      v-model="config.width"
      placeholder="输入含单位(%/px)的数值"
      allow-clear
    />
  </a-form-item>
  <a-form-item label="提示文字">
    <a-input v-model="config.placeholder" allow-clear />
  </a-form-item>
  <a-form-item label="默认值">
    <a-input v-model="config.defaultValue" allow-clear />
  </a-form-item>
  <a-form-item label="输入长度限制">
    <a-input-number v-model="config.maxLength" allow-clear />
  </a-form-item>
  <div class="boolean-config">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.disabled" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否只读</span>
    <a-switch v-model="config.readonly" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否显示输入计数</span>
    <a-switch v-model="config.showWordLimit" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">是否必填</span>
    <a-switch v-model="config.required" />
  </div>
  <a-form-item label="自定义校验规则">
    <a-textarea
      v-model="config.rules"
      :auto-size="{ minRows: 4, maxRows: 6 }"
    />
  </a-form-item>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { merge } from 'lodash'
import type { IConfigInput } from '../types'

const emit = defineEmits(['update:widgetCofnig'])

const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigInput>,
    required: true,
  },
})

const config = computed({
  get: () => props.widgetConfig.config,
  set: (val) => {
    emit('update:widgetCofnig', merge(props.widgetConfig, val))
  },
})
</script>
