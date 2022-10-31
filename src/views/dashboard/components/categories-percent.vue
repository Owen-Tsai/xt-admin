<template>
  <a-spin style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{
        padding: '20px',
      }"
    >
      <template #title>
        {{ ('内容类型占比') }}
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
import BaseEchart from '@/echats'

const chartOption = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item'
  },
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
