<template>
  <div class="p-5">
    <h2 class="text-base mb-4">内容题材分布</h2>
    <base-echart
      :options="options"
      :height="222"
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
  legend: {
    show: true,
    top: 'center',
    right: '0',
    orient: 'vertical',
    icon: 'circle',
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 20,
    textStyle: {
      color: '#4E5969',
    },
  },
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 20,
  },
  radar: {
    center: ['40%', '50%'],
    radius: 80,
    indicator: [
      { name: '国际', max: 6500 },
      { name: '其他', max: 22000 },
      { name: '科技', max: 30000 },
      { name: '财经', max: 38000 },
      { name: '体育', max: 52000 },
      { name: '娱乐', max: 25000 },
    ],
    axisName: {
      color: '#1D2129',
    },
    axisLine: {
      lineStyle: {
        color: '#E5E6EB',
      },
    },
    splitLine: {
      lineStyle: {
        color: '#E5E6EB',
      },
    },
    splitArea: {
      areaStyle: {
        color: [],
      },
    },
  },
  series: [
    {
      type: 'radar',
      areaStyle: {
        opacity: 0.2,
      },
      data: [
        {
          value: [4850, 19000, 19000, 29500, 35200, 20000],
          name: '纯文本',
          symbol: 'none',
          itemStyle: {
            color: '#249EFF',
          },
        },
        {
          value: [2250, 17000, 21000, 23500, 42950, 22000],
          name: '图文类',
          symbol: 'none',
          itemStyle: {
            color: '#313CA9',
          },
        },
        {
          value: [5850, 11000, 26000, 27500, 46950, 18000],
          name: '视频类',
          symbol: 'none',
          itemStyle: {
            color: '#21CCFF',
          },
        },
      ],
    },
  ],
}))
</script>

<style lang="scss" scoped>

</style>
