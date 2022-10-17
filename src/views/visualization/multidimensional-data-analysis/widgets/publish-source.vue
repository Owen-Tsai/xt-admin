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
import BaseEchart from '@/echats'
import { getDataAnalysis } from '@/api/data-analysis';
import { IAnalysis } from '@/api/business';

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
          value: [148564],
          name: 'UGC原创',
          itemStyle: {
            color: '#249EFF',
          },
        },
        {
          value: [334271],
          name: '国外网站',
          itemStyle: {
            color: '#846BCE',
          },
        },
        {
          value: [445694],
          name: '转载文章',
          itemStyle: {
            color: '#21CCFF',
          },
        },
        {
          value: [445694],
          name: '行业报告',
          itemStyle: {
            color: '#86DF6C',
          },
        },
        {
          value: [445694],
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
          value: [148564],
          name: 'UGC原创',
          itemStyle: {
            color: '#249EFF',
          },
        },
        {
          value: [334271],
          name: '国外网站',
          itemStyle: {
            color: '#846BCE',
          },
        },
        {
          value: [445694],
          name: '转载文章',
          itemStyle: {
            color: '#21CCFF',
          },
        },
        {
          value: [445694],
          name: '行业报告',
          itemStyle: {
            color: '#0E42D2',
          },
        },
        {
          value: [445694],
          name: '其他',
          itemStyle: {
            color: '#86DF6C',
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
          value: [148564],
          name: 'UGC原创',
          itemStyle: {
            color: '#249EFF',
          },
        },
        {
          value: [334271],
          name: '国外网站',
          itemStyle: {
            color: '#846BCE',
          },
        },
        {
          value: [445694],
          name: '转载文章',
          itemStyle: {
            color: '#21CCFF',
          },
        },
        {
          value: [445694],
          name: '行业报告',
          itemStyle: {
            color: '#0E42D2',
          },
        },
        {
          value: [445694],
          name: '其他',
          itemStyle: {
            color: '#86DF6C',
          },
        },
      ],
    },
  ],
}
))
</script>

<style lang="scss" scoped>

</style>
