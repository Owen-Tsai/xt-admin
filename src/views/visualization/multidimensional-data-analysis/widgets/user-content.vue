<template>
  <div class="basis-1/4 bg-white p-5 mr-4">
    <h2 class="text-base mb-3">用户留存趋势</h2>
    <div class="num-father mb-1">
      <span class="text-2xl leading-7 mr-3">2,000</span>
      <span class="text-sm leading-5" style="color: rgb(245,63,63);">200<icon-arrow-fall /></span>
    </div>
    <base-echart
      :options="options1"
      :height="127"
    />
  </div>
  <div class="basis-1/4 bg-white p-5 mr-4">
    <h2 class="text-base mb-3">用户留存量</h2>
    <div class="num-father mb-1">
      <span class="text-2xl leading-7 mr-3">3,000</span>
      <span class="text-sm leading-5" style="color: rgb(0,180,42);">300<icon-arrow-rise /></span>
    </div>
    <base-echart
      :options="options"
      :height="127"
    />
  </div>
  <div class="basis-1/4 bg-white p-5 mr-4">
    <h2 class="text-base mb-3">内容消费趋势</h2>
    <div class="num-father mb-1">
      <span class="text-2xl leading-7 mr-3">4,000</span>
      <span class="text-sm leading-5" style="color: rgb(0,180,42);">400<icon-arrow-rise /></span>
    </div>
    <base-echart
      :options="options2"
      :height="127"
    />
  </div>
  <div class="basis-1/4 bg-white p-5">
    <h2 class="text-base mb-3">内容消费量</h2>
    <div class="num-father mb-1">
      <span class="text-2xl leading-7 mr-3">5,000</span>
      <span class="text-sm leading-5" style="color: rgb(245,63,63);">500<icon-arrow-fall /></span>
    </div>
    <base-echart
      :options="options3"
      :height="127"
    />
  </div>
</template>

<script setup lang="ts">
import { EChartsOption } from 'echarts';
import { computed, ref } from 'vue';
import BaseEchart from '@/echats'
import { getDataAnalysis } from '@/api/data-analysis';
import { IAnalysis } from '@/api/business';

// import PieEchart from '@/components/echats/pie-echart.vue';
const options = computed<EChartsOption>(() => ({
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  xAxis: {
    type: 'category',
    show: false,
  },
  yAxis: {
    show: false,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{c}',
  },
  series: {
    cursor: 'auto',
    emphasis: {
      disabled: true
    },
    name: 'total',
    data: [
      { value: 252 },
      { value: 213 },
      { value: 211 },
      { value: 222 },
      { value: 155 },
      { value: 200 },
      { value: 177 },
      { value: 123 },
      { value: 111 },
      { value: 144 },
      { value: 122 },
      { value: 155 },
    ],
    type: 'bar',
    barWidth: 10,
    barGap: 0,
    barCategoryGap: '50%',
    itemStyle: {
      color(params: any) {
        const colorList = ['#86DF6C', '#468DFF', '#86DF6C', '#468DFF', '#86DF6C', '#468DFF', '#86DF6C', '#468DFF', '#86DF6C', '#468DFF', '#86DF6C', '#468DFF']
        return colorList[params.dataIndex]
      },
    },
  },
}))
const options1 = computed<EChartsOption>(() => ({
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  xAxis: {
    type: 'category',
    show: false,
  },
  yAxis: {
    show: false,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    cursor: 'default',
    formatter: '{c}',
  },
  series: [
    {
      cursor: 'default',
      symbol: 'none',
      emphasis: {
        disabled: true
      },
      name: '2001',
      data: [
        { value: 123 },
        { value: 111 },
        { value: 144 },
        { value: 122 },
        { value: 155 },
        { value: 166 },
        { value: 100 },
        { value: 211 },
        { value: 222 },
        { value: 155 },
        { value: 200 },
        { value: 177 },
      ],
      type: 'line',
      showSymbol: false,
      smooth: true,
      lineStyle: {
        color: '#4080FF',
        width: 2,
      },
    },
  ],
}
))
const options2 = computed<EChartsOption>(() => ({
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  xAxis: {
    type: 'category',
    show: false,
  },
  yAxis: {
    show: false,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    formatter: '{c}',
  },
  series: [
    {
      cursor: 'default',
      symbol: 'none',
      emphasis: {
        disabled: true
      },
      name: '2001',
      data: [
        { value: 252 },
        { value: 213 },
        { value: 211 },
        { value: 222 },
        { value: 155 },
        { value: 200 },
        { value: 177 },
        { value: 123 },
        { value: 111 },
        { value: 144 },
        { value: 122 },
        { value: 155 },
      ],
      type: 'line',
      showSymbol: false,
      smooth: true,
      lineStyle: {
        color: '#4080FF',
        width: 2,
      },
    },
  ],
}
))
const options3 = computed<EChartsOption>(() => ({
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  xAxis: {
    type: 'category',
    show: false,
  },
  yAxis: {
    show: false,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{c}',
  },
  series: {
    cursor: 'auto',
    emphasis: {
      disabled: true
    },
    name: 'total',
    data: [
      { value: 252 },
      { value: 213 },
      { value: 211 },
      { value: 222 },
      { value: 155 },
      { value: 200 },
      { value: 177 },
      { value: 123 },
      { value: 111 },
      { value: 144 },
      { value: 122 },
      { value: 155 },
    ],
    type: 'bar',
    barWidth: 10,
    barGap: 0,
    barCategoryGap: '50%',
    itemStyle: {
      color(params: any) {
        const colorList = ['#86DF6C', '#468DFF', '#86DF6C', '#468DFF', '#86DF6C', '#468DFF', '#86DF6C', '#468DFF', '#86DF6C', '#468DFF', '#86DF6C', '#468DFF']
        return colorList[params.dataIndex]
      },
    },
  },
}
))
</script>

<style lang="scss" scoped>

</style>
