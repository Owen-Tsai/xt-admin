<template>
  <a-breadcrumb class="navs">
    <a-breadcrumb-item>
      <icon-apps />
    </a-breadcrumb-item>
    <a-breadcrumb-item
      v-for="(item) in navs"
      :key="item"
    >
      {{ item }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  navs: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.navs {
  @apply my-4;
  :deep(.arco-breadcrumb-item) {
    @apply text-gray-600;
    &:last-child {
      @apply text-gray-800;
    }
  }
}
</style>
