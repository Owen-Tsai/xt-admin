<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: processSize(width), height: processSize(height) }" />
  </div>
</template>
<script lang="ts" setup>
import {
  ref, onMounted, defineProps, watchEffect,
  PropType
} from 'vue'
import { EChartsOption, ECharts } from 'echarts'
import { processSize } from '@/utils'
import useEchart from '../hooks/useEchart'

// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: 360
  },
  options: {
    type: Object as PropType<EChartsOption>,
    required: true
  }
})

const echartDivRef = ref<HTMLElement>()
const instance = ref<ECharts>()

onMounted(() => {
  const { setOptions, echartInstance } = useEchart(echartDivRef.value as HTMLElement)

  instance.value = echartInstance

  watchEffect(() => {
    setOptions(props.options)
  })
})
defineExpose({
  instance
})
</script>
