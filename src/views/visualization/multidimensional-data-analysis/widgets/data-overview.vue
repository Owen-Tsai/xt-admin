<template>
  <div class="basis-2/3 bg-white p-5 mr-5">
    <h2 class="text-base mb-4">数据总览</h2>
    <div class="flex">
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">内容生产量</h6>
        <div class="number-father flex leading-8">
          <div
            class="rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
            style="background-color: rgb(255,228,186); color: rgb(255,125,0);"
          ><icon-edit />
          </div>
          <span class="font-medium" style="font-size: 26px">2,000</span>
        </div>
      </div>
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">内容点击量</h6>
        <div class="number-father flex leading-8">
          <div
            class="rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
            style="background-color: rgb(183,244,236); color: rgb(20,201,201);"
          ><icon-thumb-up />
          </div>
          <span class="font-medium" style="font-size: 26px">3,000</span>
        </div>
      </div>
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">内容曝光量</h6>
        <div class="number-father flex leading-8">
          <div
            class="rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
            style="background-color: rgb(232,243,255); color: rgb(22,93,255);"
          ><icon-heart />
          </div>
          <span class="font-medium" style="font-size: 26px">4,000</span>
        </div>
      </div>
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">活跃用户数</h6>
        <div class="number-father flex leading-8">
          <div
            class="rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
            style="background-color: rgb(245,232,255); color: rgb(114,46,209);"
          ><icon-user />
          </div>
          <span class="font-medium" style="font-size: 26px">5,000</span>
        </div>
      </div>
    </div>
    <base-echart
      :options="options"
      :height="352"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { EChartsOption } from 'echarts';
import BaseEchart from '@/echats'
import { getBigSeriesData } from '@/api/data-analysis';
import { ISeriesData } from '@/api/business';

const bigdata = ref<ISeriesData>()

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
  xAxis: {
    type: 'category',
    offset: 2,
    axisTick: { alignWithLabel: true },
    axisLabel: {
      color: '#4E5969',
    },
    data: ['10-12', '10-11', '10-10', '10-9', '10-8', '10-7', '10-6', '10-5', '10-4', '10-3'],
    axisPointer: {
      show: true,
      lineStyle: {
        color: '#23ADFF',
        width: 2,
      },
    },
  },
  yAxis: [{
    type: 'value',
    name: '',
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      interval: 'auto',
      formatter(value: number, idx: number) {
        if (idx === 0) return String(value);
        return `${value / 1000}k`;
      },
    },
    axisPointer: {
      show: false
    },
  }],
  grid: {
    containLabel: true,
    left: '0',
    right: '4',
    top: '40',
    bottom: '40',
  },
  series: [
    {
      symbol: 'none',
      smooth: true,
      stack: 'Total',
      data: ['300', '600', '400', '500', '30', '70', '400', '200', '400', '600'],
      // data: bigdata.value?.Writing,
      lineStyle: {
        width: 2,
        color: 'purple'
      },
      areaStyle: {
        opacity: 0.1,
        color: 'purple',
      },
      name: '活跃用户数',
      type: 'line',
    },
    {
      symbol: 'none',
      smooth: true,
      stack: 'Total',
      data: ['600', '900', '900', '800', '700', '700', '900', '700', '600', '1000'],
      // data: bigdata.value?.Writing,
      lineStyle: {
        width: 2,
        color: 'green'
      },
      areaStyle: {
        opacity: 0.1,
        color: 'green',
      },
      name: '内容生产量',
      type: 'line',
    },
    {
      symbol: 'none',
      smooth: true,
      stack: 'Total',
      data: ['5000', '2000', '4000', '1000', '3000', '10000', '7000', '9000', '6000', '8000'],
      // data: bigdata.value?.Graphic,
      lineStyle: {
        width: 2,
        color: 'orange'
      },
      areaStyle: {
        opacity: 0.1,
        color: 'orange',
      },
      name: '内容点击量',
      type: 'line',
    },
    {
      symbol: 'none',
      smooth: true,
      stack: 'Total',
      data: ['5000', '2000', '4000', '1000', '3000', '10000', '7000', '9000', '6000', '8000'],
      lineStyle: {
        width: 2,
        color: 'blue'
      },
      areaStyle: {
        opacity: 0.1,
        color: 'blue',
      },
      type: 'line',
      name: '内容曝光量'
    },
  ]
}))
getBigSeriesData().then((res) => {
  // console.log('res', res);
  bigdata.value = res.data
})
</script>

<style lang="scss" scoped>

</style>
