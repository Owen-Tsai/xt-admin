<template>
  <a-form-item label="字段名称">
    <a-input v-model="config.config.label" allow-clear />
  </a-form-item>
  <a-form-item label="滑动步长">
    <a-input-number v-model="config.config.step" />
  </a-form-item>
  <a-form-item label="宽度">
    <a-input
      v-model="config.config.width"
      placeholder="输入含单位(%/px)的数值"
      allow-clear
    />
  </a-form-item>
  <a-form-item label="滑动输入条方向">
    <a-select v-model="config.config.direction">
      <a-option value="horizontal">水平方向</a-option>
      <a-option value="vertical">垂直方向</a-option>
    </a-select>
  </a-form-item>
  <div class="boolean-config mt-4">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否显示刻度线</span>
    <a-switch v-model="config.config.showTicks" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否显示输入框</span>
    <a-switch v-model="config.config.showInput" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">是否开启范围选择</span>
    <a-switch v-model="config.config.range" />
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { IConfigSlider } from '../types';

const emit = defineEmits(['update:widgetConfig']);
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigSlider>,
    required: true,
  },
});
const config = computed({
  get: () => props.widgetConfig,
  set: (val) => {
    emit('update:widgetConfig', val);
  },
});
</script>

<style lang="scss" scoped></style>
