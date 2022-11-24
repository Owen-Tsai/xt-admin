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
  <a-form-item label="提示内容">
    <a-input v-model="config.config.placeholder" allow-clear />
  </a-form-item>
  <a-form-item label="最大数字">
    <a-input-number v-model="config.config.maxLength" allow-clear />
  </a-form-item>
  <a-form-item label="内容">
    <a-textarea
      :model-value="config.config.value"
      class="mt-2"
    />
  </a-form-item>
  <div class="boolean-config mt-4">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否显示字数统计</span>
    <a-switch v-model="config.config.showWordLimit" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否允许清空文本域</span>
    <a-switch v-model="config.config.allowClear" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否让文本框自适应内容高度</span>
    <a-switch v-model="config.config.autoSize" />
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  PropType
} from 'vue'
import { IConfigTextarea } from '../types';

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigTextarea>,
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
