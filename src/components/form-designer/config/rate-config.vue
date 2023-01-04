<template>
  <a-form-item label="字段标识">
    <a-input v-model="config.config.id" allow-clear />
  </a-form-item>
  <a-form-item label="字段标签">
    <a-input v-model="config.config.label" allow-clear />
  </a-form-item>
  <a-form-item label="分数上限">
    <a-input-number v-model="config.config.count" />
  </a-form-item>
  <a-form-item label="自定义颜色">
    <a-input v-model="config.config.color" allow-clear />
  </a-form-item>
  <div class="boolean-config">
    <span class="label">允许半选</span>
    <a-switch v-model="config.config.allowHalf" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否只读</span>
    <a-switch v-model="config.config.readonly" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
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
import { IConfigRate } from '../types'
import { inputEventNames } from '../utils'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigRate>,
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
