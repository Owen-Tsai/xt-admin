<template>
  <div>
    <a-layout class="h-full">
      <a-layout-sider :width="240">
        <div class="m-4">
          <div class="font-bold">组件</div>
          <div ref="stencilEl" class="stencil-container" />
          <!-- <div class="px-4">
            <a-divider />
            <a-space class="w-full" direction="vertical">
              <a-button long type="outline">复制 AST 源码</a-button>
              <a-button long type="primary">保存流程</a-button>
            </a-space>
          </div> -->
        </div>
      </a-layout-sider>
      <a-layout-content class="p-4 bg-gray-50">
        <div class="h-full w-full bg-white">
          <div id="canvas" ref="canvas" />
        </div>
      </a-layout-content>
      <a-layout-sider :width="240">
        <config-panel :cell="(selectedCell as Cell | null)" />
      </a-layout-sider>
    </a-layout>
  </div>
  <!-- <div class="flex flow-designer-wrapper">
    <div class="w-52 flex-shrink-0 flex flex-col border-r">
      <div ref="stencilEl" class="relative" />
      <div class="px-4">
        <a-divider />
        <a-space class="w-full" direction="vertical">
          <a-button long type="outline">复制 AST 源码</a-button>
          <a-button long type="primary">保存流程</a-button>
        </a-space>
      </div>
    </div>
    <div id="canvas" ref="canvas" />
    <div ref="configPanelEl" class="w-52 flex-shrink-0 border-l">
      <config-panel :cell="(selectedCell as Cell | null)" />
    </div>
  </div> -->
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Graph, Cell } from '@antv/x6'
import { useGraphInit } from './use-graph-data'
import ConfigPanel from './config-panel.vue'

const canvas = ref<HTMLDivElement>()
const stencilEl = ref<HTMLDivElement>()
const configPanelEl = ref<HTMLDivElement>()
const graph = ref<Graph>()

const ast = ref({})
const selectedCell = ref<Cell | null>(null)

onMounted(() => {
  graph.value = useGraphInit(
    canvas.value as HTMLDivElement,
    stencilEl.value as HTMLDivElement
  )

  graph.value.on('selection:changed', ({ selected }) => {
    if (selected.length > 0) {
      if (selected.length === 1) {
        ;[selectedCell.value] = selected
      } else {
        selectedCell.value = null
      }
    } else {
      selectedCell.value = null
    }
  })

  graph.value.fromJSON(ast.value)
})
</script>

<style lang="scss" scoped>
.stencil-container {
  @apply relative h-full;
  min-height: 300px;
}
</style>
