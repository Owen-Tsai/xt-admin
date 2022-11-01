<template>
  <a-spin class="spin">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{
        padding: '20px',
      }"
    >
      <template #title>
        内容类型占比
      </template>
      <base-echart
        :options="chartOption"
        :height="308"
        :width="400"
      />
    </a-card>
  </a-spin>
</template>
<script setup lang="ts">
import { EChartsOption } from 'echarts';
import { computed } from 'vue';
import BaseEchart from '@/components/echart.vue'

const chartOption = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item'
  },
  // title: {
  //   text: '内容量',
  //   subtext: '1111',
  //   left: 'center',
  //   y: 'center',
  // },
  color: ['#33CCFF', '#0099FF', '#0066FF'],
  legend: {
    left: 'center',
    y: 'bottom',
    x: 'center',
    icon: 'circle',
    itemHeight: 8,
    textStyle: {
      fontSize: 12
    }
  },
  axisTick: {
    show: false,
  },
  graphic: {
    elements: [
      {
        type: 'text',
        left: '45%',
        top: '33%',
        style: {
          fontSize: '14',
          text: '内容量',
        },
      },
      {
        type: 'text',
        left: '44%',
        top: '43%',
        style: {
          fontSize: '14',
          text: '935,794',
        },
      },
    ],
  },
  series: [
    {
      cursor: 'auto',
      emphasis: {
        disabled: true,
        shadowBlur: 10,
        shadowOffsetX: 0,
      },
      labelLine: {
        show: true,
        length: 50,
      },
      label: {
        show: true,
        // position: 'center'
      },
      type: 'pie',
      center: ['50%', '40%'],
      radius: ['70%', '50%'],
      data: [
        { value: 1048, name: '文本类' },
        { value: 735, name: '图文类' },
        { value: 580, name: '视频类' },
      ]
    }
  ],
}))
</script>

<style lang="scss" scoped>
  .spin{
    width: 100%
  }
</style>
