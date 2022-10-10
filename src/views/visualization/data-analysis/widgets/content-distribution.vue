<template>
  <s-navs :navs="['menu.data-visualization', 'menu.data-visualization.multidimensional-data-analysis']" />
  <a-card>
    <h2>舆情分析</h2>
    <div class="flex mt-2">
      <div class="w-1/4 flex">
        <div class="w-1/3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div class="w-2/3">
          图
        </div>
      </div>
      <div class="w-1/4">
        <PieEchart :pie-data="categoryGoodsCount" />
      </div>
      <div class="w-1/4">3</div>
      <div class="w-1/4">4</div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PieEchart from '@/components/echats/pie-echart.vue';

const store = [
  { name: '1', value: '2' },
  { name: '3', value: '4' }
]
const categoryGoodsCount = ref(store)
</script>

<style lang="scss" scoped>

</style>
