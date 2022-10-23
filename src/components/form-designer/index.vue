<template>
  <div class="">
    <a-layout class="h-full">
      <a-layout-sider :width="240">
        <div class="p-4">
          <div class="font-bold">组件</div>
          <draggable
            :list="fields"
            :group="{ name: 'widgets', pull: 'clone', put: false }"
            item-key="type"
            :sort="false"
            :clone="cloneWidgetConfigFromRaw"
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
      <a-layout-content class="bg-gray-50 px-8 py-6">
        <!-- insert widget-form -->
        <widget-form v-model:ast="ast" />
      </a-layout-content>
      <a-layout-sider :width="240">
        <div class="flex">
          <div
            class="panel-tab"
            :class="{ active: activeTab === 0 }"
            @click="activeTab = 0"
          >表单配置</div>
          <div
            class="panel-tab"
            :class="{ active: activeTab !== 0 }"
            @click="activeTab = 1"
          >控件配置</div>
        </div>
        <div class="p-4">
          <config-panel-form
            v-show="activeTab === 0"
            :config="ast.formConfig"
          />
          <div v-show="activeTab !== 0">
            <config-panel-widget
              v-if="ast.widgetsConfig.length > 0"
              v-model:widget-config="ast.widgetsConfig[selectedIndex]"
            />
            当前选择的组件 {{ selectedIndex }} 的配置：
            {{ ast.widgetsConfig[selectedIndex] }}
          </div>
        </div>
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
import ConfigPanelForm from './config-panel-form.vue'
import ConfigPanelWidget from './config-panel-widget.vue'
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
  widgetsConfig: []
})

const cloneWidgetConfigFromRaw = (config: WidgetsConfig) => ({
  name: config.name,
  type: config.type,
  config: { ...config.config }
})

const activeTab = ref(0)

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

const setSelectedIndex = (idx: number) => {
  selectedIndex.value = idx
}

provide<FormDesignerContext>(contextSymbol, {
  selectedIndex,
  setSelectedIndex,
  addWidget,
  removeWidget,
  duplicateWidget
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
.panel-tab {
  @apply w-1/2 text-center py-4 first:border-r border-b bg-slate-100 text-gray-600 cursor-pointer;
  &.active {
    @apply bg-white text-blue-500;
  }
}
</style>
