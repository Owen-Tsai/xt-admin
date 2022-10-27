<template>
  <a-form :model="config" layout="vertical">
    <a-form-item v-if="config.type !== 'grid'" label="标签">
      <a-input v-model="config.config.label" />
    </a-form-item>
    <a-form-item v-if="config.type !== 'grid'" label="宽度">
      <a-input v-model="config.config.width" />
    </a-form-item>
    <template v-if="config.type === 'grid'">
      <a-form-item label="栅格间距">
        <a-input-number v-model="config.config.gutter" />
      </a-form-item>
      <a-form-item label="水平排列方式">
        <a-select v-model="config.config.justify">
          <a-option value="start">左对齐</a-option>
          <a-option value="center">居中</a-option>
          <a-option value="end">左对齐</a-option>
          <a-option value="space-around">均匀分布</a-option>
          <a-option value="space-between">两端对齐</a-option>
        </a-select>
      </a-form-item>
    </template>
    <!-- <a-form-item label="默认值">
    </template>
      <a-input v-model="config.config.defaultValue" />
    </a-form-item>
    <a-form-item label="占位文字">
      <a-input v-model="config.config.placeholder" />
    </a-form-item>
    <a-divider />
    <a-form-item label="是否只读">
      <a-switch v-model="config.config.readonly" />
    </a-form-item>
    <a-form-item label="是否必填">
      <a-switch v-model="config.config.required" />
    </a-form-item>
    <a-form-item label="是否禁用">
      <a-switch v-model="config.config.disabled" />
    </a-form-item>
    <a-divider />
    <a-form-item label="是否显示清空按钮">
      <a-switch v-model="config.config.allowClear" />
    </a-form-item>
    <a-form-item label="最长字符数限制">
      <a-input-number v-model="config.config.maxLength" mode="button" />
    </a-form-item>
    <a-form-item label="是否显示字符数限制">
      <a-switch v-model="config.config.showWordLimit" />
    </a-form-item> -->
  </a-form>
</template>

<script lang="ts" setup>
import {
  PropType,
  computed
} from 'vue'
import { WidgetsConfig } from './types'

const props = defineProps({
  widgetConfig: {
    type: Object as PropType<WidgetsConfig>,
    required: true
  }
})

const emit = defineEmits(['update:widgetConfig'])

const config = computed({
  get: () => props.widgetConfig,
  set: (val) => {
    emit('update:widgetConfig', val)
  }
})
</script>
