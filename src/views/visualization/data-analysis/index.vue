<template>
  <main class="px-6 pb-4">
    <ContentDistribution />

    <PubliCanalysis />

    <BigData />
  </main>
</template>

<script lang="ts" setup>
import ContentDistribution from './widgets/content-distribution.vue';
import PubliCanalysis from './widgets/publi-canalysis.vue';
import BigData from './widgets/big-data.vue';
</script>
