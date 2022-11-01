<template>
  <div class="p-5">
    <h2 class="text-base mb-4">内容题材分布</h2>
    <base-echart
      :options="options as EChartsOption"
      :height="222"
    />
  </div>
</template>

<script setup lang="ts">
import { EChartsOption, RadarComponentOption, RadarSeriesOption } from 'echarts';
import { ref } from 'vue';
import BaseEchart from '@/components/echart.vue'
import { getDataDataDistriList, getDataDistribution } from '@/api/multidimensional-data-analysis';

const options = ref<EChartsOption>({
  tooltip: {
    trigger: 'item',
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
      symbol: 'none',
      data: [],
    },
  ],
})

const loadOptions = async () => {
  const valueData = await getDataDistribution()
  const indicatorData = await getDataDataDistriList();

  (options.value.radar as RadarComponentOption).indicator = indicatorData.data;
  (options.value.series as RadarSeriesOption[])[0].data = valueData.data
}

loadOptions()
</script>

<style lang="scss" scoped>

</style>
