<template>
  <div class="">
    <a-layout class="h-full">
      <a-layout-sider :width="240">
        <div class="p-4">
          <div class="font-bold">组件</div>
          <draggable
            v-model="fields"
            :group="{ name: 'widgets', pull: 'clone', put: false }"
            item-key="type"
            :sort="false"
            class="drag-section-container"
          >
            <template #item="{ element }: { element: WidgetsConfig }">
              <div class="draggable-item" :data-key="element.type">
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </a-layout-sider>
      <a-layout-content class="bg-gray-50 px-8">
        <!-- insert widget-form -->
        <widget-form v-model:ast="ast" />
      </a-layout-content>
      <a-layout-sider :width="240">
        当前选择的组件的配置：
        {{ ast.widgetsConfig[selectedIndex] }}
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  provide
} from 'vue'
import Draggable from 'vuedraggable'
import { fields } from './use-draggable-data'
import WidgetForm from './widget-form.vue'
import {
  // imported type used in template incorrectly throws warning
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  WidgetsConfig,
  AST,
  FormDesignerContext,
  contextSymbol
} from './types'

const ast = ref<AST>({
  formConfig: {
    labelAlign: 'right',
    layout: 'horizontal',
    size: 'medium'
  },
  dataSources: [],
  widgetsConfig: [{
    name: '姓名',
    type: 'input',
    config: {}
  }, {
    name: '年龄',
    type: 'input',
    config: {}
  }]
})

const removeWidget = (idx: number) => {
  ast.value.widgetsConfig.splice(idx, 1)
}

const duplicateWidget = (idx: number) => {
  const newWidgetConfig = { ...ast.value.widgetsConfig[idx] }
  ast.value.widgetsConfig.splice(idx, 0, newWidgetConfig)
}

const addWidget = (widget: WidgetsConfig, idx?: number) => {
  if (!idx) {
    ast.value.widgetsConfig.push(widget)
  } else {
    ast.value.widgetsConfig.splice(idx, 0, widget)
  }
}

const selectedIndex = ref(0)

provide(contextSymbol, {
  selectedIndex,
  addWidget,
  removeWidget,
  duplicateWidget
} as FormDesignerContext)
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
