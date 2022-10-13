<template>
  <s-navs :navs="['menu.data-visualization', 'menu.data-visualization.data-analysis']" />

  <a-card class="p-2" title="舆情分析">
    <a-grid
      :cols="24"
      :col-gap="12"
      :row-gap="12"
    >
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }">
        <a-spin style="width:100%">
          <div
            style="background:linear-gradient(180deg, #f1f8fe 0%, #e7f4fe 100%)"
            class="p-2"
          >
            <div class="flex text-center">
              <div class="w-1/3">
                <div class="content">
                  <a-statistic
                    :title="dataList?.[0].name"
                    :value="dataList?.[0].odd"
                    show-group-separator
                  />
                </div>
                <div class=" text-xs">
                  较昨日
                </div>
                <div class="desc">
                  <a-statistic
                    :value="dataList?.[0].edd"
                    :value-style="iscolre(0)"
                  >
                    <template #prefix>
                      <icon-arrow-fall v-if="dataList?.[0].isgrowth === true" />
                      <icon-arrow-rise v-else />
                    </template>
                  </a-statistic>
                </div>
              </div>
              <div class="w-2/3">
                <base-echart
                  :options="options1"
                  :height="127"
                  :width="180"
                />
              </div>
            </div>
          </div>
        </a-spin>
      </a-grid-item>
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }">
        <a-spin style="width:100%">
          <div
            style="background:linear-gradient(180deg, #f3fef1 0%, #e6feee 100%)"
            class="p-2"
          >
            <div class="flex text-center">
              <div class="w-1/3">
                <div class="content">
                  <a-statistic
                    :title="dataList?.[1].name"
                    :value="dataList?.[1].odd"
                    show-group-separator
                  />
                </div>
                <div class=" text-xs">
                  较昨日
                </div>
                <div class="desc">
                  <a-statistic
                    :value="dataList?.[1].edd"
                    :value-style="iscolre(1)"
                  >
                    <template #prefix>
                      <icon-arrow-fall v-if="dataList?.[1].isgrowth === true" />
                      <icon-arrow-rise v-else />
                    </template>
                  </a-statistic>
                </div>
              </div>
              <div class="w-2/3">
                <base-echart
                  :options="options"
                  :height="127"
                  :width="180"
                />
              </div>
            </div>
          </div>
        </a-spin>
      </a-grid-item>
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }">
        <a-spin style="width:100%">
          <div
            style="background:linear-gradient(180deg, #f1f8fe 0%, #e7f4fe 100%)"
            class="p-2"
          >
            <div class="flex text-center">
              <div class="w-1/3">
                <div class="content">
                  <a-statistic
                    :title="dataList?.[2].name"
                    :value="dataList?.[2].odd"
                    show-group-separator
                  />
                </div>
                <div class=" text-xs">
                  较昨日
                </div>
                <div class="desc">
                  <a-statistic
                    :value="dataList?.[2].edd"
                    :value-style="iscolre(2)"
                  >
                    <template #prefix>
                      <icon-arrow-fall v-if="dataList?.[2].isgrowth === true" />
                      <icon-arrow-rise v-else />
                    </template>
                  </a-statistic>
                </div>
              </div>
              <div class="w-2/3">
                <base-echart
                  :options="options2"
                  :height="127"
                  :width="180"
                />
              </div>
            </div>
          </div>
        </a-spin>
      </a-grid-item>
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }">
        <a-spin style="width:100%">
          <div
            style="background:linear-gradient(180deg, #f6f6ff 0%, #ededff 100%)"
            class="p-2"
          >
            <div class="flex text-center">
              <div class="w-1/3">
                <div class="content">
                  <a-statistic
                    :title="dataList?.[3].name"
                    :value="dataList?.[3].odd"
                    show-group-separator
                  />
                </div>
                <div class=" text-xs">
                  较昨日
                </div>
                <div class="desc">
                  <a-statistic
                    :value="dataList?.[3].edd"
                    :value-style="iscolre(3)"
                  >
                    <template #prefix>
                      <icon-arrow-fall v-if="dataList?.[3].isgrowth === true" />
                      <icon-arrow-rise v-else />
                    </template>
                  </a-statistic>
                </div>
              </div>
              <div class="w-2/3">
                <base-echart
                  :options="options3"
                  :height="127"
                  :width="180"
                />
              </div>
            </div>
          </div>
        </a-spin>
      </a-grid-item>
    </a-grid>
  </a-card>
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
    left: 20,
    right: 0,
    top: 20,
    bottom: 0,
  },
  xAxis: {
    type: 'category',
    show: false,
  },
  yAxis: {
    show: false,
  },
  series: {
    cursor: 'auto',
    emphasis: {
      disabled: true
    },
    name: 'total',
    data: [
      { value: 123 },
      { value: 123 },
      { value: 111 },
      { value: 100 },
      { value: 112 },
      { value: 112 },
      { value: 123 },
      { value: 123 },
      { value: 113 },
      { value: 123 },
      { value: 113 },
      { value: 113 },
    ],
    type: 'bar',
    barWidth: 7,
    barGap: '80%',
    barCategoryGap: '50%',
    itemStyle: {
      color(params: any) {
        const colorList = ['#2cab40', '#86df6c', '#2cab40', '#86df6c', '#2cab40', '#86df6c', '#2cab40', '#86df6c', '#2cab40', '#86df6c', '#2cab40', '#86df6c']
        return colorList[params.dataIndex]
      },
    },
  },
}))
const options1 = computed<EChartsOption>(() => ({
  grid: {
    left: 0,
    right: 0,
    top: 10,
    bottom: 0,
  },
  xAxis: {
    type: 'category',
    show: false,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      cursor: 'auto',
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
        color: '#165DFF',
        width: 3,
      },
    },
    {
      cursor: 'auto',
      emphasis: {
        disabled: true
      },
      name: '2002',
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
        color: '#6AA1FF',
        width: 3,
        type: 'dashed',
      },
    },
  ],
}
))
const options2 = computed<EChartsOption>(() => ({
  grid: {
    left: 0,
    right: 0,
    top: 10,
    bottom: 0,
  },
  xAxis: {
    type: 'category',
    show: false,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      cursor: 'auto',
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
        color: '#165DFF',
        width: 3,
      },
    },
    {
      cursor: 'auto',
      emphasis: {
        disabled: true
      },
      name: '2002',
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
        color: '#6AA1FF',
        width: 3,
        type: 'dashed',
      },
    },
  ],
}
))
const options3 = computed<EChartsOption>(() => ({
  color: ['#0cb5ff', '#2164ff', '#9256dc'],
  legend: {
    orient: 'vertical', // 垂直显示
    y: 'bottom', // 延Y轴居中
    x: 'right', // 居右显示
    icon: 'circle',
    itemHeight: 8,
    textStyle: {
      fontSize: 12
    }
  },
  series: [
    {
      cursor: 'auto',
      emphasis: {
        disabled: true,
        shadowBlur: 10,
        shadowOffsetX: 0,
      },
      labelLine: {
        show: false
      },
      label: {
        position: 'inner',
        show: false
      },
      name: 'Access From',
      type: 'pie',
      center: ['40%', '60%'],
      radius: ['40%', '60%'],
      data: [
        { value: 1048, name: '文本类' },
        { value: 735, name: '图文类' },
        { value: 580, name: '视频类' },
      ]
    }
  ],
}
))
const dataList = ref<IAnalysis[]>()

// const testStr = ref('')
getDataAnalysis().then((res) => {
  // console.log(res);
  dataList.value = res.data
  // testStr.value = dataList.value[0].name
  // console.log(dataList.value);
})
const iscolre = (val: number) => {
  if (dataList.value?.[val].isgrowth === true) {
    return { color: 'red' }
  }
  return { color: 'green' }
}
// const categoryGoodsCount = ref(store)
</script>

<style lang="scss" scoped>
*{
  ::v-deep .arco-statistic-value-integer {
    @apply text-xl
  }
  ::v-deep .arco-grid-item{
    //
  }
}
</style>
