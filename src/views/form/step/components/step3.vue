<template>
  <a-result
    title="操作成功"
    status="success"
    class="res"
  >
    <div class="information">
      <a-row>
        <a-col :sm="8" :xs="24">付款账户:</a-col>
        <a-col :sm="16" :xs="24">111223</a-col>
      </a-row>
      <a-row>
        <a-col :sm="8" :xs="24">收款账户:</a-col>
        <a-col :sm="16" :xs="24">www.taobao.com</a-col>
      </a-row>
      <a-row>
        <a-col :sm="8" :xs="24">收款人姓名:</a-col>
        <a-col :sm="16" :xs="24">xiaoming</a-col>
      </a-row>
      <a-row>
        <a-col :sm="8" :xs="24">转账金额:</a-col>
        <a-col :sm="16" :xs="24"><span class="money">500</span>元</a-col>
      </a-row>
    </div>
    <template #extra>
      <a-button type="primary" @click="sendMsgToParent">再转一笔</a-button>
      <a-button class="ml-2">查看账单</a-button>
    </template>
  </a-result>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';

const loading = ref(false)
const changeable:any = inject('changeable')
// const changeable = () => '2'
const sendMsgToParent = () => {
  changeable.childMsg(1)
}
</script>
    <style lang="scss" scoped>
      .information {
        line-height: 22px;
      }
      .ant-row:not(:last-child) {
          margin-bottom: 24px;
        }
      .money {
        font-family: "Helvetica Neue",sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 14px;
      }
      .res{
        max-width: 560px
      }
    </style>
