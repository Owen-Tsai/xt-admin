<template>
  <div>
    <span>提示内容</span>
    <a-input v-model="config.config.placeholder" class="mt-2" />
  </div>
  <div class="flex mt-2 mb-2">
    <span class="w-2/3 block">是否禁用</span>
    <a-switch
      v-model="config.config.disabled"
    />
  </div>
  <div>
    <span>最大数字</span>
    <a-input-number v-model="config.config.maxLength" class="mt-2" />
  </div>
  <div class="flex mt-2 mb-2">
    <span class="w-2/3 block">是否显示字数统计</span>
    <a-switch
      v-model="config.config.showWordLimit"
    />
  </div>
  <div class="flex mt-2 mb-2">
    <span class="w-2/3 block">是否允许清空文本域</span>
    <a-switch
      v-model="config.config.allowClear"
    />
  </div>
  <div class="flex mt-2 mb-2">
    <span class="w-2/3 block">是否让文本框自适应内容高度</span>
    <a-switch
      v-model="config.config.autoSize"
    />
  </div>
  <div class=" mt-2 mb-2">
    <span class=" block">内容</span>
    <a-textarea
      :model-value="config.config.value"
      class="mt-2"
    />
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  PropType
} from 'vue'
import { IConfigTextarea } from '../types';

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigTextarea>,
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
