<template>
  <a-form :model="config" layout="vertical">
    <a-form-item v-if="config.type !== 'grid'" label="标签">
      <a-input v-model="config.config.label" />
    </a-form-item>
    <a-form-item v-if="config.type !== 'grid' && config.type !== 'radio' " label="宽度">
      <a-input v-model="config.config.width" />
    </a-form-item>
    <radio-config v-if="config.type === 'radio'" v-model:widgetConfig="config" />
    <slider-config v-if="config.type === 'slider'" v-model:widgetConfig="config" />
    <switch-config v-if="config.type === 'switch'" v-model:widgetConfig="config" />
    <cascader-config v-if="config.type === 'cascader'" v-model:widgetConfig="config" />
    <textarea-config v-if="config.type === 'textarea'" v-model:widgetConfig="config" />
    <date-picker-config v-if="config.type === 'date-picker'" v-model:widgetConfig="config" />
    <rate-config v-if="config.type === 'rate'" v-model:widgetConfig="config" />
    <time-picker-config v-if="config.type === 'time-picker'" v-model:widgetConfig="config" />
    <grid-config v-if="config.type === 'grid'" v-model:widgetConfig="config" />
    <!-- <a-form-item   label="默认值">
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
    <a-collapse class="ast-pre">
      <a-collapse-item key="json" header="控件配置 JSON">
        <pre>{{ config }}</pre>
      </a-collapse-item>
    </a-collapse>
  </a-form>
</template>

<script lang="ts" setup>
import {
  PropType,
  computed,
} from 'vue'
import {
  WidgetsConfig
} from './types'
import radioConfig from './config/radio-config.vue'
import sliderConfig from './config/slider-config.vue'
import switchConfig from './config/switch-config.vue'
import cascaderConfig from './config/cascader-config.vue'
import textareaConfig from './config/textarea-config.vue'
import datePickerConfig from './config/date-picker-config.vue'
import rateConfig from './config/rate-config.vue'
import timePickerConfig from './config/time-picker-config.vue'

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

<style lang="scss" scoped>
.label {
  @apply block text-sm mb-2;
  color: var(--color-text-2);
}
</style>
