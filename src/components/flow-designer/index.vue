<template>
  <div class="flex flow-designer-wrapper">
    <div ref="stencilEl" class="w-52 flex-shrink-0 relative" />
    <div id="canvas" ref="canvas" />
    <div ref="configPanelEl" class="w-52 flex-shrink-0 border-l">
      123
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Graph, Addon } from '@antv/x6'
import { setupGraph } from './use-graph-data'

const canvas = ref<HTMLDivElement>()
const stencilEl = ref<HTMLDivElement>()
const configPanelEl = ref<HTMLDivElement>()
const graph = ref<Graph>()

const ast = ref({
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 40, // Number，必选，节点位置的 x 值
      y: 40, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'hello', // String，节点标签
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 160, // Number，必选，节点位置的 x 值
      y: 180, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'world', // String，节点标签
    },
  ],
  edges: [
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node2', // String，必须，目标节点 id
    },
  ],
})

onMounted(() => {
  graph.value = setupGraph(
    canvas.value as HTMLDivElement,
    stencilEl.value as HTMLDivElement
  )

  graph.value.fromJSON(ast.value)
})
</script>

<style lang="scss" scoped>
#canvas {
  height: calc(100vh - 140px);
  @apply flex-grow;
}
</style>
