<template>
  <a-form-item label="上传的URL">
    <a-input v-model="config.config.action" />
  </a-form-item>
  <a-form-item label="限制上传文件的数量。0表示不限制">
    <a-input-number v-model="config.config.limit" />
  </a-form-item>
  <div class="flex justify-between items-center mb-2">
    <span>是否禁用</span>
    <a-switch
      v-model="config.config.disabled"
    />
  </div>
  <div class="flex justify-between items-center mb-2">
    <span>是否支持多文件上传</span>
    <a-switch
      v-model="config.config.multiple"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { IConfigUpload } from '../types'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigUpload>,
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
