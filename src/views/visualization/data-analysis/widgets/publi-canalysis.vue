<template>
  <a-card class="mt-2">
    <div class="flex">
      <div class="w-3/5">
        <base-echart :options="options" :height="500" />
      </div>
      <div class="w-2/5">
        <a-card
          class="general-card"
          :header-style="{ paddingBottom: '14px' }"
          title="热门作者榜单"
        >
          <a-table
            :data="data"
            :columns="columns"
          />
        </a-card>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { EChartsOption } from 'echarts';
import { TableColumnData } from '@arco-design/web-vue';
import BaseEchart from '@/components/echart.vue'
import { getSeriesData, getTableList, getXTime } from '@/api/data-analysis';
import { ISeriesData } from '@/api/business';

const store = ref()
const seriesdata = ref<ISeriesData>()
const options = computed<EChartsOption>(() => ({
  title: {
    text: '内容时段分析'
  },
  color: ['#2f75ff', '#0db6ff', '#87e3ff'],
  tooltip: {
    confine: true,
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '5%',
    right: '4%',
    bottom: '15%',
    top: '10%',
  },
  legend: {
    icon: 'circle',
    orient: 'horizontal',
    left: 'center',
    top: 'bottom',
    itemWidth: 12,
    itemHeight: 12,
    formatter: ['{a|{name}}'].join('\n'),
    textStyle: {
      fontSize: 12,
      color: '#6A93B9',
      height: 8,
      rich: {
        a: {
          verticalAlign: 'bottom',
        },
      },
    },
    data: ['纯文本', '视频类', '图文类'],
  },
  xAxis: {
    type: 'category',
    data: store.value,
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.45)',
      },
    },
    axisLabel: {
      // interval:0,
      fontSize: 8,
      color: '#6A93B9',
    },
  },
  yAxis: {
    type: 'value',
    // min: 0,
    // minInterval: 1,
    nameTextStyle: {
      fontSize: 12,
      color: '#BAE7FF',
      align: 'center',
    },
    axisLine: { show: false },
    axisTick: { show: false },
    splitArea: { show: false },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.15)',
        // type: 'dashed', // dotted 虚线
      },
    },
    axisLabel: {
      formatter(value: any) {
        let val
        if (value >= 1000) {
          val = `${value / 1000}k`;
        } else if (value < 1000) {
          value = val;
        }
        return val
      },
      fontSize: 12,
      color: '#6A93B9',
      fontFamily: 'Bebas',
    },
  },
  series: [
    {
      name: '图文类', type: 'bar', barWidth: 10, stack: 'total', data: seriesdata.value?.Graphic
    },
    {
      name: '视频类', type: 'bar', barWidth: 10, stack: 'total', data: seriesdata.value?.Writing
    },
    {
      name: '纯文本', type: 'bar', barWidth: 10, stack: 'total', data: seriesdata.value?.Video
    }
  ]
}))
const data = ref<any[]>();
const columns:TableColumnData[] = [
  {
    title: '排名',
    dataIndex: 'key',
  },
  {
    title: '作者',
    dataIndex: 'name',
  },
  {
    title: '内容量',
    dataIndex: 'address',
    sortable: {
      sortDirections: ['ascend', 'descend']
    }
  },
  {
    title: '点击量',
    dataIndex: 'salary',
    sortable: {
      sortDirections: ['ascend', 'descend']
    }
  },
];

getTableList().then((res) => {
  // console.log(res);
  data.value = res.data
})
getXTime().then((res) => {
  // console.log(res);
  store.value = res.data
  // console.log(store.value);
})
getSeriesData().then((res) => {
  // console.log(res);
  seriesdata.value = res.data
  // console.log(seriesdata.value.Writing);
})
</script>

<style lang="scss" scoped>

</style>
