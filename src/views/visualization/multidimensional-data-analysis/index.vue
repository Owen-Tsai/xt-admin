<template>
  <main class="px-6 pb-4">
    <s-navs :navs="['menu.data-visualization', 'menu.data-visualization.multidimensional-data-analysis']" />

    <div class="flex">
      <data-overview />
      <div class="basis-1/3 bg-white p-5">
        <user-actions />
        <type-distribution />
      </div>
    </div>

    <div class="flex mt-4">
      <user-content />
    </div>

    <div class="s-section mt-4">
      <publish-source />
    </div>
  </main>
</template>

<script setup lang="ts">
import dataOverview from './widgets/data-overview.vue';
import userActions from './widgets/user-actions.vue';
import typeDistribution from './widgets/type-distribution.vue';
import userContent from './widgets/user-content.vue';
import publishSource from './widgets/publish-source.vue';
</script>

<style lang="scss" scoped>

</style>
