<template>
  <a-form-item label="字段名称">
    <a-input v-model="config.config.label" allow-clear />
  </a-form-item>
  <a-form-item label="开关类型">
    <a-select v-model="config.config.type">
      <a-option value="circle">圆</a-option>
      <a-option value="round">框</a-option>
      <a-option value="line">线</a-option>
    </a-select>
  </a-form-item>
  <a-form-item label="开关大小">
    <a-select v-model="config.config.size">
      <a-option value="small">小</a-option>
      <a-option value="medium">大</a-option>
    </a-select>
  </a-form-item>
  <div class="boolean-config">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否为加载状态</span>
    <a-switch v-model="config.config.loading" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">默认选中状态</span>
    <a-switch v-model="config.config.defaultChecked" />
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
import { IConfigSwitch } from '../types'
import { inputEventNames } from '../utils'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigSwitch>,
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
