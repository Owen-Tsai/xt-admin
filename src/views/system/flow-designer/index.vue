<template>
  <main class="px-6 pb-4 relative">
    <s-navs :navs="['menu.system', 'menu.system.flow-designer']" />

    <div class="s-section">
      <flow-designer />
    </div>
  </main>
</template>

<script lang="ts" setup>
import FlowDesigner from '@/components/flow-designer/index.vue'
</script>
