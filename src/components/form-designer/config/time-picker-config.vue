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
  <a-form-item label="提示文案">
    <a-input v-model="config.config.placeholder" />
  </a-form-item>
  <a-form-item label="格式">
    <a-input v-model="config.config.format" />
  </a-form-item>
  <!-- <a-form-item label="步长">
    <a-input v-model="config.config.step" />
  </a-form-item> -->
  <div class="boolean-config">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">允许清除</span>
    <a-switch v-model="config.config.allowClear" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">是否只读</span>
    <a-switch v-model="config.config.readonly" />
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
import { IConfigTimePicker } from '../types'
import { inputEventNames } from '../utils'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigTimePicker>,
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

<style lang="scss" scoped>
.arco-picker {
  width: 100%;
}
</style>
