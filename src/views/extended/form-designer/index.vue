<template>
  <main>
    <div>
      <form-designer class="form-designer-wrapper" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import FormDesigner from '@/components/form-designer/index.vue'
</script>

<style lang="scss" scoped>
.form-designer-wrapper {
  height: calc(100vh - 60px);
}
</style>
