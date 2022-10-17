<template>
  <div class="">
    <a-layout class="h-full">
      <a-layout-sider :width="240">
        <div class="p-4">
          <div class="font-bold">布局组件</div>
          <draggable
            v-model="layoutFields"
            :group="{ name: 'widgets', pull: 'clone', put: false }"
            item-key="type"
            ghost-class="ghost"
            :sort="false"
            class="drag-section-container"
          >
            <template #item="{ element }: { element: WidgetsConfig }">
              <div class="draggable-item">
                {{ element.name }}
              </div>
            </template>
          </draggable>

          <div class="font-bold">基础表单组件</div>
          <draggable
            v-model="basicFields"
            :group="{ name: 'widgets', pull: 'clone', put: false }"
            item-key="type"
            ghost-class="ghost"
            :sort="false"
            class="drag-section-container"
          >
            <template #item="{ element }: { element: WidgetsConfig }">
              <div class="draggable-item">
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </a-layout-sider>
      <a-layout-content class="bg-gray-50 px-8">
        <!-- insert widget-form -->
        <widget-form :ast="ast" />
      </a-layout-content>
      <a-layout-sider :width="240">123</a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable'
// imported type used in template incorrectly throws warning
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { WidgetsConfig, AST } from './types'
import {
  layoutFields,
  basicFields
} from './use-draggable-data'
import WidgetForm from './widget-form.vue'

const ast = ref<AST>({
  formConfig: {
    labelAlign: 'left',
    layout: 'horizontal',
    size: 'medium'
  },
  dataSources: [],
  widgetsConfig: [{
    name: '姓名',
    type: 'input',
    config: {}
  }]
})
</script>

<style lang="scss" scoped>
.drag-section-container {
  @apply grid grid-cols-2 gap-2 my-4;
}
.draggable-item {
  @apply bg-blue-50 px-2 py-2 text-center inline-block text-xs select-none cursor-move
    border-dashed border border-transparent hover:border-blue-500 hover:text-blue-500;
}
</style>
