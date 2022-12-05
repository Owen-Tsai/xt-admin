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
    <span class="label">可选值</span>
    <a-tabs>
      <a-tab-pane key="fixed" title="固定值">
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
      </a-tab-pane>
      <a-tab-pane key="remote" title="从接口获取">
        <a-select v-model="config.config.optionsUrl" placeholder="选择一个数据源">
          <a-option
            v-for="(item, i) in ctx?.ast.value.dataSources"
            :key="i"
            :value="item.url"
          >{{ item.name }}</a-option>
        </a-select>
      </a-tab-pane>
    </a-tabs>
  </div>
  <div class="boolean-config">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否必填</span>
    <a-switch v-model="config.config.required" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否为半选状态</span>
    <a-switch v-model="config.config.indeterminate" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">是否为选中状态</span>
    <a-switch v-model="config.config.defaultChecked" />
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  PropType,
  inject,
} from 'vue'
import {
  IConfigCheckbox,
  FormDesignerContext,
  contextSymbol
} from '../types';

const ctx = inject<FormDesignerContext>(contextSymbol)
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
