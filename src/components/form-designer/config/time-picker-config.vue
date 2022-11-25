<template>
  <a-form-item label="字段名称">
    <a-input v-model="config.config.label" allow-clear />
  </a-form-item>
  <a-form-item label="宽度">
    <a-input
      v-model="config.config.width"
      placeholder="输入含单位(%/px)的数值"
      allow-clear
    />
  </a-form-item>
  <a-form-item label="选择器类型">
    <a-select v-model="config.config.type">
      <a-option value="time">时间输入器</a-option>
      <a-option value="time-range">范围选择器</a-option>
    </a-select>
  </a-form-item>
  <a-form-item label="按钮尺寸">
    <a-select v-model="config.config.size">
      <a-option value="mini">迷你</a-option>
      <a-option value="small">小</a-option>
      <a-option value="medium">中</a-option>
      <a-option value="large">大</a-option>
    </a-select>
  </a-form-item>
  <a-form-item label="提示文案">
    <a-input v-model="config.config.placeholder" />
  </a-form-item>
  <div class="flex justify-between items-center mb-2">
    <span>是否禁用</span>
    <a-switch
      v-model="config.config.disabled"
    />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否允许清除</span>
    <a-switch v-model="config.config.allowClear" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否为只读</span>
    <a-switch v-model="config.config.readonly" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否为错误状态</span>
    <a-switch v-model="config.config.error" />
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { IConfigTimePicker } from '../types'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigTimePicker>,
    required: true
  }
})
const config = computed({
  get: () => props.widgetConfig,
  set: (val) => {
    emit('update:widgetConfig', val)
  }
})
</script>

<style lang="scss" scoped>
.arco-picker{
  width: 100%;
}
</style>
