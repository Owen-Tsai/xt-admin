<template>
  <a-layout class="h-full">
    <tool-bar title="表单设计器" />
    <a-layout-content>
      <page-view />
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
import ToolBar from '@/components/tool-bar.vue'
import PageView from './inner-layout.vue'
</script>
