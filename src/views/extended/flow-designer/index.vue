<template>
  <main>
    <div>
      <flow-designer class="container" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import FlowDesigner from '@/components/flow-designer/index.vue'
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 60px);
}
</style>
