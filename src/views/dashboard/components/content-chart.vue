<template>
  <a-spin style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: 0 }"
      :body-style="{
        paddingTop: '10px',
      }"
      :title="('内容数据')"
    >
      <template #extra>
        <a-link>{{ ('查看更多') }}</a-link>
      </template>
      <base-echart
        :options="chartOption"
        height="289px"
      />
    </a-card>
  </a-spin>
</template>
<script setup lang="ts">
import { EChartsOption } from 'echarts';
import { computed } from 'vue';
import BaseEchart from '@/echats'

const chartOption = computed<EChartsOption>(() => ({

  xAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    type: 'category',
    data: ['2022-10-07', '2022-10-08', '2022-10-09', '2022-10-10', '2022-10-11', '2022-10-12', '2022-10-13',]
  },
  tooltip: {
  },
  yAxis: [{
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: '#E5E8EF',
      },
    },
    axisLine: {
      show: false,
    },
    type: 'value',
    name: '',
    axisLabel: {
      show: true,
      interval: 'auto',
      formatter: '{value}k'// 纵坐标百分比
    }
  }],
  legend: {
    show: false,
  },
  grid: {
    containLabel: true,
    bottom: '10%',
    top: '10%',
    left: 0,
    right: 0
  },
  axisPointer: {
    show: true,
    lineStyle: {
      color: '#23ADFF',
      width: 2,
    },
  },
  series: [
    {
      axisLine: {
        show: false,
      },
      showSymbol: false,
      smooth: true,
      data: [
        50, 30, 60, 20, 40, 25, 75
      ],
      type: 'line',
      name: '总内容量',
      areaStyle: {
        color: 'rgba(17, 126, 255, 0.16)',
      },
      label: {
        show: true,
      },
    },
  ],
  lineStyle: {
    // 线条样式
    width: 3,
    color: '#0099FF',
    type: 'solid'
  },

}))
</script>
  <style scoped lang="scss"></style>
