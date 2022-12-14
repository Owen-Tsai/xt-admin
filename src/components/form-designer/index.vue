<template>
  <div class="">
    <a-layout class="h-full">
      <a-layout-sider :width="240">
        <div class="m-4">
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
        <a-divider />
        <div class="m-4">
          <div class="font-bold">操作</div>
          <a-space direction="vertical" class="mt-4 w-full">
            <a-button type="outline" long :disabled="copied" @click="copy()">
              {{ copied ? '已复制' : '复制 AST 源码' }}
            </a-button>
            <a-button type="outline" long @click="showDataSourceEditor">
              编辑数据源
            </a-button>
            <a-button type="primary" long @click="showPreview">
              预览表单
            </a-button>
          </a-space>
        </div>
      </a-layout-sider>
      <a-layout-content class="bg-gray-50 p-4">
        <!-- insert widget-form -->
        <widget-form v-model:ast="ast" />
      </a-layout-content>
      <a-layout-sider :width="240">
        <div class="h-full">
          <div class="flex">
            <div
              class="panel-tab"
              :class="{ active: activeTab === 0 }"
              @click="activeTab = 0"
            >
              表单配置
            </div>
            <div
              class="panel-tab"
              :class="{ active: activeTab !== 0 }"
              @click="activeTab = 1"
            >
              控件配置
            </div>
          </div>
          <a-scrollbar class="h-full overflow-auto">
            <div class="p-4 pb-16">
              <config-panel-form
                v-show="activeTab === 0"
                :config="ast.formConfig"
              />
              <div v-show="activeTab !== 0">
                <config-panel-widget
                  v-if="selectedWidget !== undefined"
                  v-model:widget-config="selectedWidget"
                />
              </div>
            </div>
          </a-scrollbar>
        </div>
      </a-layout-sider>
    </a-layout>

    <a-modal v-model:visible="previewVisible" fullscreen>
      <template #title>表单预览</template>
      <s-form :ast="ast" />
    </a-modal>

    <a-modal v-model:visible="dataSourceEditorVisible">
      <template #title>数据源编辑</template>
      <data-src-editor v-model:config="ast.dataSources" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable'
import SForm from '../s-form/index.vue'
import { fields, useWidgetActions } from './use-widgets'
import WidgetForm from './widget-form.vue'
import ConfigPanelForm from './config-panel-form.vue'
import ConfigPanelWidget from './config-panel-widget.vue'
import DataSrcEditor from './data-source-editor.vue'
import { useFormDesigner, useFormDesignerActions } from './use-form-designer'
// imported type used in template incorrectly throws warning
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { WidgetsConfig } from './types'

const activeTab = ref(1)

const { ast } = useFormDesigner()
const {
  copied,
  copy,
  dataSourceEditorVisible,
  previewVisible,
  showDataSourceEditor,
  showPreview,
} = useFormDesignerActions(ast)

const { selectedWidget, cloneWidgetConfigFromRaw } = useWidgetActions(ast)
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
:deep(.arco-layout-sider-children) {
  @apply overflow-hidden;
}
:deep(.arco-scrollbar),
:deep(.arco-scrollbar-container) {
  height: 100%;
}
</style>
