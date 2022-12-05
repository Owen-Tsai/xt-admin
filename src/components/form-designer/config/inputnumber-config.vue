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
  <a-form-item label="默认值">
    <a-input-number v-model="config.config.defaultValue" allow-clear />
  </a-form-item>
  <a-form-item label="提示数字">
    <a-input v-model="config.config.placeholder" class="mt-2" />
  </a-form-item>
  <a-form-item label="大小">
    <a-select v-model="config.config.size">
      <a-option value="mini">最小</a-option>
      <a-option value="small">小</a-option>
      <a-option value="medium">中</a-option>
      <a-option value="large">大</a-option>
    </a-select>
  </a-form-item>
  <div class="boolean-config mt-4">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否必填</span>
    <a-switch v-model="config.config.required" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否只读</span>
    <a-switch v-model="config.config.readonly" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否清除输入框</span>
    <a-switch v-model="config.config.allowClear" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">是否为错误状态</span>
    <a-switch v-model="config.config.error" />
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  PropType
} from 'vue'
import { IConfigInputNumber } from '../types';

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigInputNumber>,
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
