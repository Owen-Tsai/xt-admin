<template>
  <a-grid
    :col-gap="16"
    class="panel"
    :cols="23"
  >
    <a-grid-item :span="5">
      <div class="data-item">
        <img src="@/assets/dashboard-icon-1.svg">
        <div class="flex-grow">
          <a-skeleton v-if="isLoading">
            <a-skeleton-line :rows="2" :widths="['100%']" />
          </a-skeleton>
          <a-statistic
            v-else
            title="入库人才总量"
            :value="data?.talent"
            animation
          >
            <template #suffix>人</template>
          </a-statistic>
        </div>
      </div>
    </a-grid-item>
    <a-grid-item :span="1">
      <a-divider class="divider" direction="vertical" />
    </a-grid-item>
    <a-grid-item :span="5">
      <div class="data-item">
        <img src="@/assets/dashboard-icon-2.svg">
        <div class="flex-grow">
          <a-skeleton v-if="isLoading">
            <a-skeleton-line :rows="2" :widths="['100%']" />
          </a-skeleton>
          <a-statistic
            v-else
            title="发放资金总数"
            :value="data?.fund"
            animation
          >
            <template #suffix>万元</template>
          </a-statistic>
        </div>
      </div>
    </a-grid-item>
    <a-grid-item :span="1">
      <a-divider class="divider" direction="vertical" />
    </a-grid-item>
    <a-grid-item :span="5">
      <div class="data-item">
        <img src="@/assets/dashboard-icon-3.svg">
        <div class="flex-grow">
          <a-skeleton v-if="isLoading">
            <a-skeleton-line :rows="2" :widths="['100%']" />
          </a-skeleton>
          <a-statistic
            v-else
            title="月服务人数"
            :value="data?.consultation"
            animation
          >
            <template #suffix>人次</template>
          </a-statistic>
        </div>
      </div>
    </a-grid-item>
    <a-grid-item :span="1">
      <a-divider class="divider" direction="vertical" />
    </a-grid-item>
    <a-grid-item :span="5">
      <div class="data-item">
        <img src="@/assets/dashboard-icon-4.svg">
        <div class="flex-grow">
          <a-skeleton v-if="isLoading">
            <a-skeleton-line :rows="2" :widths="['100%']" />
          </a-skeleton>
          <a-statistic
            v-else
            title="数据仓库余量"
            :value="data?.storage"
            animation
          >
            <template #suffix>%</template>
          </a-statistic>
        </div>
      </div>
    </a-grid-item>
  </a-grid>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  getDashboardData,
  DataPanelItem
} from '@/api/dashboard'
import useLoading from '@/hooks/use-loading'

const data = ref<DataPanelItem>()
const { isLoading, setLoading } = useLoading(true)

getDashboardData().then((res) => {
  data.value = res.data
  setLoading(false)
})
</script>

<style lang="scss" scoped>
.data-item {
  @apply flex items-center;

  img {
    @apply mr-4;
  }
}
:deep(.arco-statistic) {
  line-height: unset;
}
.divider {
  height: 60px;
}
</style>
