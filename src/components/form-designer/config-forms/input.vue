<template>
  <a-form :model="config" layout="vertical">
    <a-form-item label="标签">
      <a-input v-model="config.label" />
    </a-form-item>
    <a-form-item label="宽度">
      <a-input v-model="config.width" />
    </a-form-item>
    <a-form-item label="默认值">
      <a-input v-model="config.defaultValue" />
    </a-form-item>
    <a-form-item label="占位文字">
      <a-input v-model="config.placeholder" />
    </a-form-item>
    <a-divider />
    <a-form-item label="是否只读">
      <a-switch v-model="config.readonly" />
    </a-form-item>
    <a-form-item label="是否必填">
      <a-switch v-model="config.required" />
    </a-form-item>
    <a-form-item label="是否禁用">
      <a-switch v-model="config.disabled" />
    </a-form-item>
    <a-divider />
    <a-form-item label="是否显示清空按钮">
      <a-switch v-model="config.allowClear" />
    </a-form-item>
    <a-form-item label="最长字符数限制">
      <a-input-number v-model="config.maxLength" mode="button" />
    </a-form-item>
    <a-form-item label="是否显示字符数限制">
      <a-switch v-model="config.showWordLimit" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { PropType, reactive, watch } from 'vue'
import { IConfigInput, WidgetsConfig } from '../types'

const emit = defineEmits(['update:activeWidget'])

const props = defineProps({
  activeWidget: {
    type: Object as PropType<WidgetsConfig>,
    required: true
  }
})

const config = reactive((props.activeWidget as IConfigInput).config)

watch(config, (val) => {
  emit('update:activeWidget', {
    type: props.activeWidget.type,
    name: props.activeWidget.name,
    config: val
  })
})
</script>
