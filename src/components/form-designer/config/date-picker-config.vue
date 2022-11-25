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
  <a-form-item label="按钮尺寸">
    <a-select v-model="config.config.size">
      <a-option value="mini">迷你</a-option>
      <a-option value="small">小</a-option>
      <a-option value="medium">中</a-option>
      <a-option value="large">大</a-option>
    </a-select>
  </a-form-item>
  <a-form-item label="宽度">
    <a-input
      v-model="config.config.width"
      placeholder="输入含单位(%/px)的数值"
      allow-clear
    />
  </a-form-item>
  <div class="flex justify-between items-center mb-2">
    <span>是否允许清除</span>
    <a-switch
      v-model="config.config.allowClear"
    />
  </div>
  <div class="boolean-config mt-4 mb-4">
    <span class="label !mb-0 mr-4">是否为只读</span>
    <a-switch v-model="config.config.readonly" />
  </div>
  <div class="boolean-config mt-4 mb-4">
    <span class="label !mb-0 mr-4">是否为错误状态</span>
    <a-switch v-model="config.config.error" />
  </div>
  <div class="boolean-config mt-4 mb-4">
    <span class="label !mb-0 mr-4">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="boolean-config mt-4 mb-4">
    <span class="label !mb-0 mr-4">是否增加时间选择</span>
    <a-switch v-model="config.config.showTime" />
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { IConfigDatePicker } from '../types'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigDatePicker>,
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

</style>
