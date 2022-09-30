<template>
  <div class="w-2/3">
    <div class="font-black text-xl pb-2">
      单号:{{ suiji1?.documents }}
    </div>
    <a-space direction="vertical" size="large">
      <a-descriptions
        align="left"
        :column="2"
      >
        <a-descriptions-item label="创建人">{{ suiji1?.name }}</a-descriptions-item>
        <a-descriptions-item label="订购产品">{{ suiji1?.products }}</a-descriptions-item>
        <a-descriptions-item label="创建时间">{{ suiji1?.creationtime }}</a-descriptions-item>
        <a-descriptions-item label="关联单据">
          <a href="">{{ suiji1?.odd }}</a>
        </a-descriptions-item>
        <a-descriptions-item label="生效日期">{{ suiji1?.effectivedate }}</a-descriptions-item>
        <a-descriptions-item label="备注">{{ suiji1?.remark }}</a-descriptions-item>
      </a-descriptions>
    </a-space>
  </div>
  <div class="w-1/3">
    <div class="h-1/2">
      <a-button-group style="margin-right: 4px;">
        <a-button>操作</a-button>
        <a-button>操作</a-button>
      </a-button-group>
      <a-button type="primary">主操作</a-button>
    </div>
    <div class="h-1/2">
      <a-row class="status-list">
        <a-col :xs="12" :sm="12">
          <div class="text">状态</div>
          <div class="heading">{{ suiji1?.examineapprove }}</div>
        </a-col>
        <a-col :xs="12" :sm="12">
          <div class="text">订单金额</div>
          <div class="heading">¥ {{ suiji1?.money }}</div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Documents } from '@/api/complex';
// import { falsedata } from '@/api/types';

const suiji1 = ref()
Documents().then((res) => {
  // console.log('1', res);
  suiji1.value = res.data
  // console.log(suiji1.value);
})
</script>

<style lang="scss" scoped>
.text {
  color: rgba(0, 0, 0, .45);
}
.heading {
  color: rgba(0, 0, 0, .85);
  font-size: 20px;
}
</style>
