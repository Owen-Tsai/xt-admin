<template>
  <a-form-item label="字段标识">
    <a-input v-model="config.uid" allow-clear />
  </a-form-item>
  <a-form-item label="字段标签">
    <a-input v-model="config.config.label" allow-clear />
  </a-form-item>
  <a-form-item label="宽度">
    <a-input
      v-model="config.config.width"
      placeholder="输入含单位(%/px)的数值"
      allow-clear
    />
  </a-form-item>
  <a-form-item label="模式">
    <a-select v-model="config.config.modeSelection" default-value="date">
      <a-option value="date">日期选择</a-option>
      <a-option value="week">周选择</a-option>
      <a-option value="month">月份选择</a-option>
      <a-option value="quarter">季度选择</a-option>
      <a-option value="year">年份选择</a-option>
      <a-option value="date-range">日期范围选择</a-option>
      <a-option value="week-range">周范围选择</a-option>
      <a-option value="month-range">月份范围选择</a-option>
      <a-option value="quarter-range">季度范围选择</a-option>
      <a-option value="year-range">年份范围选择</a-option>
    </a-select>
  </a-form-item>
  <div class="boolean-config">
    <span class="label">允许清除</span>
    <a-switch v-model="config.config.allowClear" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否只读</span>
    <a-switch v-model="config.config.readonly" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">允许选择时间</span>
    <a-switch v-model="config.config.showTime" />
  </div>
  <a-form-item label="自定义校验规则">
    <a-textarea
      v-model="config.config.rules"
      :auto-size="{ minRows: 4, maxRows: 6 }"
    />
  </a-form-item>
  <a-form-item label="校验触发时机">
    <a-select v-model="config.config.trigger" :allow-search="false" multiple>
      <a-option
        v-for="opt in inputEventNames"
        :key="opt"
        :value="opt"
        :label="opt"
      />
    </a-select>
  </a-form-item>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { IConfigDatePicker } from '../types'
import { inputEventNames } from '../utils'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigDatePicker>,
    required: true,
  },
})
const config = computed({
  get: () => props.widgetConfig,
  set: (val) => {
    emit('update:widgetConfig', val)
  },
})
</script>

<style lang="scss" scoped></style>
