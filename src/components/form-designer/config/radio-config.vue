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
  <a-form-item label="排列方式">
    <a-select v-model="config.config.direction">
      <a-option value="horizontal">水平排列</a-option>
      <a-option value="vertical">垂直排列</a-option>
    </a-select>
  </a-form-item>
  <a-form-item label="单选框类型">
    <a-select v-model="config.config.type">
      <a-option value="radio">圆形</a-option>
      <a-option value="button">按钮</a-option>
    </a-select>
  </a-form-item>
  <a-form-item label="默认选中">
    <a-select
      v-model="config.config.defaultValue"
      allow-clear
      allow-create
    >
      <a-option
        v-for="(item, i) in config.config.options"
        :key="i"
        :value="item.value"
      >{{ item.label }}</a-option>
    </a-select>
  </a-form-item>
  <div class="mb-4">
    <span class="label">选项</span>
    <a-tabs>
      <a-tab-pane key="fixed" title="固定值">
        <div v-for="(item,i) in config.config.options" :key="i">
          <div class="mt-2 flex items-center gap-2">
            <a-input v-model="item.label" class="w-1/3" />
            <a-input v-model="item.value" class="w-1/3" />
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
  <div class="boolean-config my-4">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.config.disabled" />
  </div>
</template>

<script lang="ts" setup>
import {
  inject,
  computed,
  PropType
} from 'vue'
import {
  IConfigRadio,
  FormDesignerContext,
  contextSymbol
} from '../types'

const emit = defineEmits(['update:widgetConfig'])
const ctx = inject<FormDesignerContext>(contextSymbol)

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
