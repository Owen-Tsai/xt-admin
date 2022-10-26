<template>
  <div class="basis-1/4 bg-white p-5 mr-4">
    <h2 class="text-base mb-3">{{ numberList?.[0].name }}</h2>
    <div class="num-father mb-1">
      <span class="text-2xl leading-7 mr-3">{{ numberList?.[0].odd }}</span>
      <span class="text-sm leading-5">
        <a-statistic
          :value="numberList?.[0].edd"
          :value-style="iscolre(0)"
        >
          <template #prefix>
            <icon-arrow-fall v-if="numberList?.[0].isgrowth === true" />
            <icon-arrow-rise v-else />
          </template>
        </a-statistic></span>
    </div>
    <base-echart
      :options="options1"
      :height="127"
    />
  </div>
  <div class="basis-1/4 bg-white p-5 mr-4">
    <h2 class="text-base mb-3">{{ numberList?.[1].name }}</h2>
    <div class="num-father mb-1">
      <span class="text-2xl leading-7 mr-3">{{ numberList?.[1].odd }}</span>
      <span class="text-sm leading-5">
        <a-statistic
          :value="numberList?.[1].edd"
          :value-style="iscolre(1)"
        >
          <template #prefix>
            <icon-arrow-fall v-if="numberList?.[1].isgrowth === true" />
            <icon-arrow-rise v-else />
          </template>
        </a-statistic></span>
    </div>
    <base-echart
      :options="options"
      :height="127"
    />
  </div>
  <div class="basis-1/4 bg-white p-5 mr-4">
    <h2 class="text-base mb-3">{{ numberList?.[2].name }}</h2>
    <div class="num-father mb-1">
      <span class="text-2xl leading-7 mr-3">{{ numberList?.[2].odd }}</span>
      <span class="text-sm leading-5">
        <a-statistic
          :value="numberList?.[2].edd"
          :value-style="iscolre(2)"
        >
          <template #prefix>
            <icon-arrow-fall v-if="numberList?.[2].isgrowth === true" />
            <icon-arrow-rise v-else />
          </template>
        </a-statistic></span>
    </div>
    <base-echart
      :options="options2"
      :height="127"
    />
  </div>
  <div class="basis-1/4 bg-white p-5">
    <h2 class="text-base mb-3">{{ numberList?.[3].name }}</h2>
    <div class="num-father mb-1">
      <span class="text-2xl leading-7 mr-3">{{ numberList?.[3].odd }}</span>
      <span class="text-sm leading-5">
        <a-statistic
          :value="numberList?.[3].edd"
          :value-style="iscolre(3)"
        >
          <template #prefix>
            <icon-arrow-fall v-if="numberList?.[3].isgrowth === true" />
            <icon-arrow-rise v-else />
          </template>
        </a-statistic></span>
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
import {
  getDataUserContent, getDataChartList, getDataChart1List, getDataChart2List, getDataChart3List
} from '@/api/multidimensional-data-analysis';
import { IUserContent, IChartData } from '@/api/business';

const chartList = ref<IChartData[]>()
const chartList1 = ref<IChartData[]>()
const chartList2 = ref<IChartData[]>()
const chartList3 = ref<IChartData[]>()
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
    data: chartList.value,
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
      data: chartList1.value,
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
      data: chartList2.value,
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
    data: chartList3.value,
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

const numberList = ref<IUserContent[]>()

// const testStr = ref('')
getDataUserContent().then((res) => {
  numberList.value = res.data
})
getDataChartList().then((res) => {
  // console.log(res)
  chartList.value = res.data
})
getDataChart1List().then((res) => {
  // console.log(res)
  chartList1.value = res.data
})
getDataChart2List().then((res) => {
  // console.log(res)
  chartList2.value = res.data
})
getDataChart3List().then((res) => {
  // console.log(res)
  chartList3.value = res.data
})

const iscolre = (val: number) => {
  if (numberList.value?.[val].isgrowth === true) {
    return { color: 'red' }
  }
  return { color: 'green' }
}
</script>

<style lang="scss" scoped>
*{
  ::v-deep .arco-statistic-value {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  ::v-deep .arco-statistic-value-integer {
    @apply text-sm
  }
}
</style>
