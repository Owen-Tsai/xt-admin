<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-base">
        人才引进情况
        <span class="text-xs text-gray-400">（过去 1 年）</span>
      </h2>
      <a-link>查看更多</a-link>
    </div>

    <div class="mt-4">
      <a-spin :loading="isLoading" class="w-full">
        <s-chart :height="290" :option="option" />
      </a-spin>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  EChartsOption,
  graphic
} from 'echarts'
import SChart from '@/components/s-chart.vue'
import useLoading from '@/hooks/use-loading'
import { getTalentChartData } from '@/api/dashboard'

const xAxis = ref<string[]>([])
const chartData = ref<number[]>([])

const { isLoading, setLoading } = useLoading(true)

const option = ref<EChartsOption>({
  grid: {
    right: 0,
    left: 0,
    top: 10,
    bottom: 24,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    offset: 2,
    data: xAxis.value,
    axisLabel: {
      color: '#4E5969'
    },
    axisTick: {
      lineStyle: {
        color: '#E5E8EF'
      }
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: true,
      interval: (idx: number) => {
        if (idx === 0) return false
        return true
      },
      lineStyle: {
        color: '#E5E8EF',
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    axisLabel: {
      formatter: (val: number, idx: number) => {
        if (idx === 0) return `${val}`
        return `${val / 1000}k`
      }
    }
  },
  tooltip: {
    trigger: 'axis',
    className: 's-chart-tooltip'
  },
  series: [
    {
      type: 'line',
      smooth: true,
      data: chartData.value,
      showSymbol: false,
      symbolSize: 14,
      emphasis: {
        focus: 'series',
        itemStyle: {
          borderWidth: 3,
        }
      },
      lineStyle: {
        width: 3,
        color: new graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: 'rgba(30, 231, 255, 1)',
          },
          {
            offset: 0.5,
            color: 'rgba(36, 154, 255, 1)',
          },
          {
            offset: 1,
            color: 'rgba(111, 66, 251, 1)',
          },
        ]),
      },
      areaStyle: {
        opacity: 0.8,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(17, 126, 255, 0.16)',
          },
          {
            offset: 1,
            color: 'rgba(17, 128, 255, 0)',
          },
        ]),
      },
    }
  ]
})

const fetchData = async () => {
  try {
    const { data } = await getTalentChartData()
    data.forEach((el) => {
      chartData.value.push(el.y)
      xAxis.value.push(`2022-${el.x}`)
    })
  } finally {
    setLoading(false)
  }
}

fetchData()
</script>
