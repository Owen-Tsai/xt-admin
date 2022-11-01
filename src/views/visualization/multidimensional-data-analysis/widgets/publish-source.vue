<template>
  <h2 class="text-base mb-4">内容发布来源</h2>
  <base-echart
    :options="options"
    :height="300"
  />
</template>

<script setup lang="ts">
import { EChartsOption } from 'echarts';
import { computed, ref } from 'vue';
import BaseEchart from '@/components/echart.vue'
// import { getrandom } from '@/api/data-analysis';
// import { IAnalysis } from '@/api/business';
import { getPublish, getPublish1, getPublish2 } from '@/api/multidimensional-data-analysis';

// const pieList =
const value = ref<any[]>()
const value1 = ref<any[]>()
const value2 = ref<any[]>()
const options = computed<EChartsOption>(() => ({
  legend: {
    left: 'center',
    data: ['UGC原创', '国外网站', '转载文章', '行业报告', '其他'],
    bottom: 0,
    icon: 'circle',
    itemWidth: 8,
    textStyle: {
      color: '#4E5969',
    },
    itemStyle: {
      borderWidth: 0,
    },
  },
  tooltip: {
    show: true,
    trigger: 'item',
  },
  graphic: {
    elements: [
      {
        type: 'text',
        left: '13%',
        top: 'center',
        style: {
          fontSize: '14',
          text: '纯文本',
        },
      },
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          fontSize: '14',
          text: '图文类',
        },
      },
      {
        type: 'text',
        left: '83%',
        top: 'center',
        style: {
          fontSize: '14',
          text: '视频类',
        },
      },
    ],
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '60%'],
      center: ['15%', '50%'],
      label: {
        formatter: '{d}% ',
        color: '#4E5969',
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1,
      },
      data: [
        {
          value: value.value?.[0],
          name: 'UGC原创',
          itemStyle: {
            color: '#249EFF',
          },
        },
        {
          value: value.value?.[1],
          name: '国外网站',
          itemStyle: {
            color: '#846BCE',
          },
        },
        {
          value: value.value?.[2],
          name: '转载文章',
          itemStyle: {
            color: '#21CCFF',
          },
        },
        {
          value: value.value?.[3],
          name: '行业报告',
          itemStyle: {
            color: '#86DF6C',
          },
        },
        {
          value: value.value?.[4],
          name: '其他',
          itemStyle: {
            color: '#0E42D2',
          },
        },
      ],
    },
    {
      type: 'pie',
      radius: ['40%', '60%'],
      center: ['50%', '50%'],
      label: {
        formatter: '{d}% ',
        color: '#4E5969',
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1,
      },
      data: [
        {
          value: value1.value?.[0],
          name: 'UGC原创',
          itemStyle: {
            color: '#249EFF',
          },
        },
        {
          value: value1.value?.[1],
          name: '国外网站',
          itemStyle: {
            color: '#846BCE',
          },
        },
        {
          value: value1.value?.[2],
          name: '转载文章',
          itemStyle: {
            color: '#21CCFF',
          },
        },
        {
          value: value1.value?.[3],
          name: '行业报告',
          itemStyle: {
            color: '#86DF6C',
          },
        },
        {
          value: value1.value?.[4],
          name: '其他',
          itemStyle: {
            color: '#0E42D2',
          },
        },
      ],
    },
    {
      type: 'pie',
      radius: ['40%', '60%'],
      center: ['85%', '50%'],
      label: {
        formatter: '{d}% ',
        color: '#4E5969',
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1,
      },
      data: [
        {
          value: value2.value?.[0],
          name: 'UGC原创',
          itemStyle: {
            color: '#249EFF',
          },
        },
        {
          value: value2.value?.[1],
          name: '国外网站',
          itemStyle: {
            color: '#846BCE',
          },
        },
        {
          value: value2.value?.[2],
          name: '转载文章',
          itemStyle: {
            color: '#21CCFF',
          },
        },
        {
          value: value2.value?.[3],
          name: '行业报告',
          itemStyle: {
            color: '#86DF6C',
          },
        },
        {
          value: value2.value?.[4],
          name: '其他',
          itemStyle: {
            color: '#0E42D2',
          },
        },
      ],
    },
  ],
}
))

getPublish().then((res) => {
  // console.log(res)
  value.value = res.data
})
getPublish1().then((res) => {
  // console.log(res)
  value1.value = res.data
})
getPublish2().then((res) => {
  // console.log(res)
  value2.value = res.data
})
</script>

<style lang="scss" scoped>

</style>
