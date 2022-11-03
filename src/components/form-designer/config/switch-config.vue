<template>
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
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { IConfigSwitch } from '../types'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigSwitch>,
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
