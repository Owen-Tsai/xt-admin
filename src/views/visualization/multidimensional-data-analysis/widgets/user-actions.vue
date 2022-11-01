<template>
  <div class="p-5">
    <h2 class="text-base mb-4">今日转赞评统计</h2>
    <base-echart
      :options="options"
      :height="122"
    /></div>
</template>

<script setup lang="ts">
import { EChartsOption } from 'echarts';
import { computed, ref } from 'vue';
import BaseEchart from '@/components/echart.vue'
import { getDataAction } from '@/api/multidimensional-data-analysis';
// import { IAction } from '@/api/business';

const i = ref<string[]>([])
const g = ref<number[]>([])
const options = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    left: 44,
    right: 20,
    top: 0,
    bottom: 20,
  },
  xAxis: {
    type: 'value',
    show: true,
    axisLabel: {
      show: true,
      interval: 'auto',
      formatter(value: number, idx: number) {
        if (idx === 0) return String(value);
        return `${value / 1000}k`;
      },
    },
    axisLine: {
      show: false,
    },
    axisPointer: {
      show: false
    },
  },
  yAxis: {
    type: 'category',
    show: true,
    axisTick: { alignWithLabel: true },
    data: i.value,
    axisLine: {
      show: false,
    },
  },
  series: {
    cursor: 'auto',
    emphasis: {
      disabled: true
    },
    name: 'total',
    data: g.value,
    type: 'bar',
    barWidth: 10,
    barGap: '80%',
    barCategoryGap: '50%',
    itemStyle: {
      color: '#4086FF',
      borderRadius: 4,
    },
  },
}))
getDataAction().then((res) => {
  res.data.forEach((a) => {
    i.value.push(a.name as string)
    g.value.push(a.share as number)
  })
  // console.log(action.value)
})
</script>

<style lang="scss" scoped>

</style>
