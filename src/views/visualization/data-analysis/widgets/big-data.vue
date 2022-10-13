<template>
  <a-card class="mt-2">
    <base-echart :options="options" :height="600" />
  </a-card>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from 'vue';
import { EChartsOption } from 'echarts';
import { TableColumnData } from '@arco-design/web-vue';
import BaseEchart from '@/echats'

const xAxis = ref<string[]>([

]);
const options = computed<EChartsOption>(() => ({
  dataZoom: [
    {
      type: 'slider',
      start: 0,
      end: 100,
      left: 'center',
      bottom: 10
    },
    {
      start: 0,
      end: 100,
      left: 'center',
      bottom: 10
    }
  ],
  xAxis: {
    type: 'category',
    data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00',]
  },
  yAxis: [{
    type: 'value',
    name: '',
    axisLabel: {
      show: true,
      interval: 'auto',
      formatter: '{value} %'// 纵坐标百分比
    }
  }],
  title: {
    text: '内容时段分析'
  },
  legend: {
    data: ['纯文本', '视频类', '图文类'],
    icon: 'circle',
    left: 'center',
    bottom: '10%',
  },
  grid: {
    containLabel: true,
    bottom: '20%',
    top: '10%',
    left: 0,
    right: 0
  },
  series: [
    {
      symbol: 'none',
      smooth: true,
      data: [
        10, 20, 100, 30, 20, 35, 15, 25, 66, 75, 50, 60
      ],
      type: 'line',
      name: '纯文本'
    },
    {
      symbol: 'none',
      smooth: true,
      data: [
        15, 25, 66, 100, 50, 60, 10, 20, 40, 30, 20, 35,
      ],
      name: '图文类',
      type: 'line',
    },
    {
      symbol: 'none',
      smooth: true,
      data: [
        10, 20, 40, 30, 75, 50, 100, 20, 35, 15, 25, 66,
      ],
      name: '视频类',
      type: 'line',
    },
  ]
}))
</script>

<style lang="scss" scoped>

</style>
