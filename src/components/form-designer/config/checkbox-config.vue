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
  <div class="mb-4">
    <span class="label">选项</span>
    <div v-for="(item, i) in config.config.options" :key="i">
      <div class="mt-2 flex items-center gap-2">
        <a-input v-model="item.label" class="w-1/3" />
        <a-input-number v-model="item.value" class="w-1/3" />
        <a-button
          status="danger"
          class="flex-shrink-0"
          @click="remove(i)"
        >
          <template #icon>
            <icon-minus />
          </template>
        </a-button>
      </div>
    </div>
    <a-button
      long
      class="mt-2"
      @click="add"
    >
      <template #icon>
        <icon-plus />
      </template>
      增加列
    </a-button>
  </div>
  <div class="flex justify-between items-center mb-2 p-2">
    <span>是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="flex justify-between items-center mb-2 p-2">
    <span>是否必填</span>
    <a-switch v-model="config.config.required" />
  </div>
  <div class="flex justify-between items-center mb-2 p-2">
    <span>是否为半选状态</span>
    <a-switch v-model="config.config.indeterminate" />
  </div>
  <div class="flex justify-between items-center mb-2 p-2">
    <span>是否为选中状态</span>
    <a-switch v-model="config.config.defaultchecked" />
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  PropType
} from 'vue'
import { IConfigCheckbox } from '../types';

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigCheckbox>,
    required: true
  }
})
const config = computed({
  get: () => props.widgetConfig,
  set: (val) => {
    emit('update:widgetConfig', val)
  }
})
const remove = (index: number) => {
  (config.value as IConfigCheckbox).config.options?.splice(index, 1)
}
const add = () => {
  (config.value as IConfigCheckbox).config.options?.push({
    label: '',
  })
}
</script>

<style lang="scss" scoped>

</style>
