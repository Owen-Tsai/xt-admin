<template>
  <a-form :model="config" layout="vertical">
    <a-form-item v-if="config.type !== 'grid'" label="标签">
      <a-input v-model="config.config.label" />
    </a-form-item>
    <a-form-item v-if="config.type !== 'grid'" label="宽度">
      <a-input v-model="config.config.width" />
    </a-form-item>
    <template v-if="config.type === 'grid'">
      <div class="mb-6">
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
    <a-collapse>
      <a-collapse-item key="json" header="控件配置 JSON">
        <pre>{{ config }}</pre>
      </a-collapse-item>
    </a-collapse>
  </a-form>
</template>

<script lang="ts" setup>
import {
  PropType,
  computed
} from 'vue'
import { sumBy } from 'lodash'
import { IConfigGrid, WidgetsConfig } from './types'

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
.label {
  @apply block text-sm mb-2;
  color: var(--color-text-2);
}
</style>
