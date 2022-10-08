<template>
  <main class="px-6 pb-4">
    <s-navs :navs="['menu.extended-ability', 'menu.extended-ability.form-designer']" />

    <div class="s-section">
      <h2>创建申报表单</h2>
    </div>

    <div class="s-section !p-0 mt-4">
      <div class="mt-4">
        <form-designer
          class="form-designer-wrapper"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import FormDesigner from '@/components/form-designer/index.vue'
</script>

<style lang="scss" scoped>
.form-designer-wrapper {
  height: calc(100vh - 200px);
}
</style>
