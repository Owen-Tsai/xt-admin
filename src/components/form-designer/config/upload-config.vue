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
  <a-form-item label="上传的URL">
    <a-input v-model="config.config.action" />
  </a-form-item>
  <a-form-item label="限制上传文件的数量。0表示不限制">
    <a-input-number v-model="config.config.limit" />
  </a-form-item>
  <div class="boolean-config">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否支持多文件上传</span>
    <a-switch v-model="config.config.multiple" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否支持拖拽上传</span>
    <a-switch v-model="config.config.draggable" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">上传请求是否携带cookie</span>
    <a-switch v-model="config.config.withcredentials" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否自动上传</span>
    <a-switch v-model="config.config.autoUpload" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否显示文件列表</span>
    <a-switch v-model="config.config.showFileList" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否显示删除按钮</span>
    <a-switch v-model="config.config.showRemoveButton" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否显示重试按钮</span>
    <a-switch v-model="config.config.showRetryButton" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否显示取消按钮</span>
    <a-switch v-model="config.config.showCancelButton" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否显示上传按钮</span>
    <a-switch v-model="config.config.showUploadButton" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否在a链接上添加download属性</span>
    <a-switch v-model="config.config.download" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否在a链接上添加download属性</span>
    <a-switch v-model="config.config.download" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">是否使用ImagePreview组件进行预览</span>
    <a-switch v-model="config.config.imagePreview" />
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
import { IConfigUpload } from '../types'
import { inputEventNames } from '../utils'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigUpload>,
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
