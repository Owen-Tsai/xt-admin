<template>
  <div class="container select-none" :class="{ empty: isWidgetsEmpty }">
    <div
      v-if="isWidgetsEmpty"
      class="text-2xl text-gray-400"
    >请添加一个组件</div>
    <div v-else class="p-6">
      <a-form
        :model="data"
        :label-align="ast.formConfig.labelAlign"
        :layout="ast.formConfig.layout"
        :size="ast.formConfig.size"
      >
        <draggable
          v-model="widgetsList"
          v-bind="{
            group: 'widgets',
            ghostClass: 'ghost',
            animation: 200,
            handle: '.drag-handler'
          }"
          @add="onWidgetAdded"
        >
          <template #item="{ element }">
            <widget-form-item :widget="element" />
          </template>
        </draggable>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  PropType,
  computed,
  reactive
} from 'vue'
import Draggable from 'vuedraggable'
import type { AST, FormWidgetsConfig } from './types'
import WidgetFormItem from './widget-form-item.vue'

const props = defineProps({
  ast: {
    type: Object as PropType<AST>,
    required: true
  }
})

const isWidgetsEmpty = computed(() => props.ast.widgetsConfig.length === 0)
const data = reactive({})
const widgetsList = computed(() => props.ast.widgetsConfig)

const onWidgetAdded = (e: any) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>
.container {
  @apply my-6 bg-white shadow-sm border;
  min-height: calc(100% - 48px);
}
.empty {
  @apply flex items-center justify-center;
}
</style>
