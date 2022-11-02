<template>
  <a-form-item label="排列方式">
    <a-select v-model="config.config.direction">
      <a-option value="horizontal">水平排列</a-option>
      <a-option value="vertical">垂直排列</a-option>
    </a-select>
  </a-form-item>
  <a-form-item label="按钮尺寸">
    <a-select v-model="config.config.size">
      <a-option value="mini">迷你</a-option>
      <a-option value="small">小</a-option>
      <a-option value="medium">中</a-option>
      <a-option value="large">大</a-option>
    </a-select>
  </a-form-item>
  <a-form-item label="单选框类型">
    <a-select v-model="config.config.type">
      <a-option value="radio">圆形</a-option>
      <a-option value="button">按钮</a-option>
    </a-select>
  </a-form-item>
  <div class="mb-2">
    <span>选项</span>
    <div v-for="(item,i) in config.config.options" :key="i">
      <div class="mt-2 flex items-center gap-4">
        <a-input v-model="item.label" class="w-1/3" />
        <a-input-number v-model:number="item.value" class="w-1/3" />
        <a-button
          status="danger"
          class="flex-shrink-0"
          @click="removeColFromRadio(i)"
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
      @click="addColToRadio"
    >
      <template #icon>
        <icon-plus />
      </template>
      增加列
    </a-button>
  </div>
  <a-form-item label="默认选中">
    <a-select v-model="config.config.defaultValue">
      <div v-for="(item, i) in config.config.options" :key="i">
        <a-option :value="item.value">{{ item.label }}</a-option>
      </div>
    </a-select>
  </a-form-item>
  <div class="flex mt-2 mb-2">
    <span class="w-1/3 block">是否禁用</span>
    <a-switch
      v-model="config.config.disabled"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  PropType
} from 'vue'
import { IConfigRadio } from '../types';

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigRadio>,
    required: true
  }
})
const config = computed({
  get: () => props.widgetConfig,
  set: (val) => {
    emit('update:widgetConfig', val)
  }
})
const removeColFromRadio = (index: number) => {
  (config.value as IConfigRadio).config.options?.splice(index, 1)
}
const addColToRadio = () => {
  (config.value as IConfigRadio).config.options?.push({
    label: '',
  })
}
</script>

<style lang="scss" scoped>

</style>
