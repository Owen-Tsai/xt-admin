<template>
  <div class="mb-6">
    <a-form-item label="字段名称">
      <a-input v-model="config.name" allow-clear />
    </a-form-item>
    <a-form-item label="宽度">
      <a-input
        v-model="config.config.width"
        allow-clear
      />
    </a-form-item>
    <span class="label">栅格列</span>
    <div>
      <div
        v-for="(col, i) in config.cols"
        :key="i"
        class="flex items-center gap-4 mt-2 first:mt-0"
      >
        <a-input-number v-model="col.span" />
        <a-button status="danger" @click="removeColFromGrid(i)">
          <template #icon>
            <icon-minus />
          </template>
        </a-button>
      </div>
      <a-button
        long
        class="mt-2"
        @click="addColToGrid"
      >
        <template #icon>
          <icon-plus />
        </template>
        增加列
      </a-button>
    </div>
  </div>
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
  <a-form-item label="垂直排列方式">
    <a-select v-model="config.config.align">
      <a-option value="start">顶部对齐</a-option>
      <a-option value="center">居中</a-option>
      <a-option value="end">底部对齐</a-option>
    </a-select>
  </a-form-item>
</template>

<script setup lang="ts">
import {
  computed,
  PropType
} from 'vue'
import { sumBy } from 'lodash'
import { IConfigGrid } from '../types';

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigGrid>,
    required: true
  }
})
const config = computed({
  get: () => props.widgetConfig,
  set: (val) => {
    emit('update:widgetConfig', val)
  }
})
const removeColFromGrid = (index: number) => {
  (config.value as IConfigGrid).cols.splice(index, 1)
}

const addColToGrid = () => {
  const remains = sumBy((config.value as IConfigGrid).cols, (e) => e.span);
  (config.value as IConfigGrid).cols.push({
    span: remains > 0 ? 24 - remains : 0,
    widgets: []
  })
}
</script>

<style lang="scss" scoped>

</style>
