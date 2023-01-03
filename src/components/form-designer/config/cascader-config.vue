<template>
  <a-form-item label="字段名称">
    <a-input v-model="config.label" allow-clear />
  </a-form-item>
  <a-form-item label="宽度">
    <a-input
      v-model="config.width"
      placeholder="输入含单位(%/px)的数值"
      allow-clear
    />
  </a-form-item>
  <div class="mb-4">
    <span class="label">可选值</span>
    <a-tabs v-model:active-key="config.optionsType" type="line" size="mini">
      <a-tab-pane key="fixed" title="固定值">
        <a-textarea
          v-if="typeof config.options === 'string'"
          v-model="config.options"
          :auto-size="{ minRows: 4, maxRows: 8 }"
        />
      </a-tab-pane>
      <a-tab-pane key="remote" title="从接口获取">
        <a-select v-model="config.optionsUrl" placeholder="选择一个数据源">
          <a-option
            v-for="(item, i) in ctx?.ast.value.dataSources"
            :key="i"
            :value="item.url"
          >
            {{ item.name }}
          </a-option>
        </a-select>
      </a-tab-pane>
    </a-tabs>
  </div>

  <a-form-item label="默认值">
    <a-input v-model="config.defaultValue" />
  </a-form-item>
  <div class="boolean-config">
    <span class="label">是否禁用</span>
    <a-switch v-model="config.disabled" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">是否只读</span>
    <a-switch v-model="config.readonly" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">是否必填</span>
    <a-switch v-model="config.required" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">允许搜索</span>
    <a-switch v-model="config.allowSearch" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">允许清除</span>
    <a-switch v-model="config.allowClear" />
  </div>
  <div class="boolean-config mt-4">
    <span class="label">允许多选</span>
    <a-switch v-model="config.multiple" />
  </div>
  <div class="boolean-config my-4">
    <span class="label">严格选择模式</span>
    <a-switch v-model="config.checkStrictly" />
  </div>
  <a-form-item label="自定义校验规则">
    <a-textarea
      v-model="config.rules"
      :auto-size="{ minRows: 4, maxRows: 6 }"
    />
  </a-form-item>
  <a-form-item label="校验触发时机">
    <a-select v-model="config.trigger" :allow-search="false" multiple>
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
import { computed, inject, PropType } from 'vue'
import { merge } from 'lodash'
import { IConfigCascader, FormDesignerContext, contextSymbol } from '../types'
import { inputEventNames } from '../utils'

const ctx = inject<FormDesignerContext>(contextSymbol)

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigCascader>,
    required: true,
  },
})
const config = computed({
  get: () => props.widgetConfig.config,
  set: (val) => {
    emit('update:widgetConfig', merge(props.widgetConfig, val))
  },
})
</script>

<style lang="scss" scoped></style>
