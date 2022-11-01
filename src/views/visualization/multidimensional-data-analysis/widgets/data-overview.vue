<template>
  <div class="basis-2/3 bg-white p-5 mr-5">
    <h2 class="text-base mb-4">数据总览</h2>
    <div class="flex">
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">{{ dataList?.[0].name }}</h6>
        <div class="number-father flex leading-8">
          <div
            class="orange rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
          >
            <icon-edit />
          </div>
          <span class="font-medium">{{ dataList?.[0].volume }}</span>
        </div>
      </div>
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">{{ dataList?.[1].name }}</h6>
        <div class="number-father flex leading-8">
          <div
            class="green rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
          >
            <icon-thumb-up />
          </div>
          <span class="font-medium">{{ dataList?.[1].volume }}</span>
        </div>
      </div>
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">{{ dataList?.[2].name }}</h6>
        <div class="number-father flex leading-8">
          <div
            class="blue rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
          >
            <icon-heart />
          </div>
          <span class="font-medium">{{ dataList?.[2].volume }}</span>
        </div>
      </div>
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">{{ dataList?.[3].name }}</h6>
        <div class="number-father flex leading-8">
          <div
            class="purple rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
          >
            <icon-user />
          </div>
          <span class="font-medium">{{ dataList?.[3].volume }}</span>
        </div>
      </div>
    </div>
    <base-echart :options="options" :height="352" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { EChartsOption } from 'echarts';
import BaseEchart from '@/components/echart.vue';
import { getBigSeriesData } from '@/api/data-analysis';
import { DataScreening, IOverviewData, ISeriesData } from '@/api/business';
import {
  getDataListTime,
  getDataScreening,
} from '@/api/multidimensional-data-analysis';

const bigdata = ref<ISeriesData>();
const list = ref<IOverviewData>();
const options = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  xAxis: {
    type: 'category',
    offset: 2,
    axisTick: { alignWithLabel: true },
    axisLabel: {
      color: '#4E5969',
    },
    data: list.value?.XTime,
    axisPointer: {
      show: true,
      lineStyle: {
        color: '#23ADFF',
        width: 2,
      },
    },
  },
  yAxis: [
    {
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
        show: false,
      },
    },
  ],
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
      data: list.value?.Production,
      // data: bigdata.value?.Writing,
      lineStyle: {
        width: 2,
        color: ' rgb(22,93,255)',
      },
      areaStyle: {
        opacity: 0.1,
        color: ' rgb(22,93,255)',
      },
      name: '内容曝光量',
      type: 'line',
    },
    {
      symbol: 'none',
      smooth: true,
      stack: 'Total',
      data: list.value?.Click,
      // data: bigdata.value?.Writing,
      lineStyle: {
        width: 2,
        color: 'rgb(20,201,201)',
      },
      areaStyle: {
        opacity: 0.1,
        color: 'rgb(20,201,201)',
      },
      name: '内容点击量',
      type: 'line',
    },
    {
      symbol: 'none',
      smooth: true,
      stack: 'Total',
      data: list.value?.Exposure,
      // data: bigdata.value?.Graphic,
      lineStyle: {
        width: 2,
        color: 'rgb(255,125,0)',
      },
      areaStyle: {
        opacity: 0.1,
        color: 'rgb(255,125,0)',
      },
      name: '内容生产量',
      type: 'line',
    },
    {
      symbol: 'none',
      smooth: true,
      stack: 'Total',
      data: list.value?.User,
      lineStyle: {
        width: 2,
        color: 'rgb(114,46,209)',
      },
      areaStyle: {
        opacity: 0.1,
        color: 'rgb(114,46,209)',
      },
      type: 'line',
      name: '活跃用户数',
    },
  ],
}));
getBigSeriesData().then((res) => {
  // console.log('res', res);
  bigdata.value = res.data;
});
const dataList = ref<DataScreening[]>();
getDataScreening().then((res) => {
  dataList.value = res.data;
  // console.log(res)
});

getDataListTime().then((res) => {
  // console.log(res)
  list.value = res.data;
});
</script>

<style lang="scss" scoped>
.orange {
  background-color: rgb(255, 228, 186);
  color: rgb(255, 125, 0);
}
.green {
  background-color: rgb(183, 244, 236);
  color: rgb(20, 201, 201);
}
.blue {
  background-color: rgb(232, 243, 255);
  color: rgb(22, 93, 255);
}
.purple {
  background-color: rgb(245, 232, 255);
  color: rgb(114, 46, 209);
}
.font-medium {
  font-size: 26px;
}
</style>
