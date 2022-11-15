<template>
  <div class="flex">
    <div ref="aside" class="w-52 flex-shrink-0 border-r relative" />
    <div id="canvas" ref="canvas" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Graph, Addon } from '@antv/x6'

const canvas = ref<HTMLDivElement>()
const aside = ref<HTMLDivElement>()
const graph = ref<Graph>()

const data = ref({
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
  graph.value = new Graph({
    container: canvas.value,
    grid: true,
    mousewheel: {
      enabled: true,
      minScale: 0.5,
      maxScale: 3
    },
    connecting: {
      router: {
        name: 'manhattan',
        args: {
          padding: 1
        }
      },
      connector: {
        name: 'rounded',
        args: {
          radius: 4
        }
      },
      anchor: 'center',
      allowBlank: false
    },
    resizing: true,
    rotating: true,
    selecting: {
      enabled: true,
      rubberband: true,
      showNodeSelectionBox: true,
    },
    snapline: true,
    keyboard: true,
    clipboard: true,
  })

  graph.value.fromJSON(data.value)

  const stencil = new Addon.Stencil({
    title: '流程环节',
    target: graph.value,
    stencilGraphWidth: 200,
    stencilGraphHeight: 180,
    groups: [
      {
        title: '基础流程图',
        name: 'default'
      }
    ]
  })

  const r1 = graph.value.createNode({
    label: '开始',
    width: 80,
    height: 36
  })
  const r2 = graph.value.createNode({
    label: '流转环节',
    width: 80,
    height: 36
  })
  const r3 = graph.value.createNode({
    label: '抄送',
    width: 80,
    height: 36
  })
  const r4 = graph.value.createNode({
    label: '开始',
    width: 80,
    height: 36
  })

  stencil.load([r1, r2, r3, r4], 'default')

  aside.value?.appendChild(stencil.container)
})
</script>

<style lang="scss" scoped>
#canvas {
  height: calc(100vh - 180px);
  @apply flex-grow;
}
</style>
