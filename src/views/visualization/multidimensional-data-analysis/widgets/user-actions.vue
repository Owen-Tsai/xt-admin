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
import BaseEchart from '@/echats'
import { getDataAnalysis } from '@/api/data-analysis';
import { IAnalysis } from '@/api/business';

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
    data: ['点赞量', '评论量', '分享量'],
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
    data: [
      { value: 8400 },
      { value: 1700 },
      { value: 2000 }
    ],
    type: 'bar',
    barWidth: 7,
    barGap: '80%',
    barCategoryGap: '50%',
    itemStyle: {
      color: '#4086FF',
      borderRadius: 4,
    },
  },
}))
</script>

<style lang="scss" scoped>

</style>
