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
  <a-form-item label="评分的总数">
    <a-input-number v-model="config.config.count" />
  </a-form-item>
  <div class="boolean-config">
    <span class="label">是否允许半选</span>
    <a-switch v-model="config.config.allowHalf" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否开启笑脸分级</span>
    <a-switch v-model="config.config.grading" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否为只读</span>
    <a-switch v-model="config.config.readonly" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <a-form-item label="自定义校验规则">
    <a-textarea v-model="config.config.rules" :auto-size="{ minRows: 4, maxRows: 6 }" />
  </a-form-item>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { IConfigRate } from '../types'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigRate>,
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
