<template>
  <div>
    <a-form
      :model="form"
      class="pt-8"
      :style="{width:'450px'}"
    >
      <a-alert closable>确认转账后，资金将直接打入对方账户，无法退回。</a-alert>
      <a-form-item
        label="付款账户"
        class="mt-6"
      >
        111112222333
      </a-form-item>
      <a-form-item
        label="收款账户"
        class="stepFormText"
      >
        www.taobao.com
      </a-form-item>
      <a-form-item
        label="收款人姓名"
        class="stepFormText"
      >
        xiaoming
      </a-form-item>
      <a-form-item
        label="转账金额"
        class="stepFormText"
      >
        5000
      </a-form-item>
      <a-divider />
      <a-form-item
        label="支付密码"
        class="stepFormText"
      >
        <a-input-password
          :style="{width:'200px'}"
          :invisible-button="false"
          placeholder="请输入支付密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          @click="sendMsgToParent"
        >提交</a-button>
        <a-button class="ml-4" @click="sendMsgToParent1">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, inject } from 'vue';

const form = reactive({
  name: '',
  post: '',
})
const changeable:any = inject('changeable1')
const sendMsgToParent = () => {
  // console.log(1);
  changeable.childMsg(3)
}
// const changeable = () => '2'
const sendMsgToParent1 = () => {
  // console.log(1);
  changeable.childMsg(1)
}
</script>
<style lang="scss" scoped>
  .arco-alert{
    padding: 16px 15px;
    font-size: 15px;
  }
  .arco-alert-info{
    border: 1px solid #196ad68c;
  }
</style>
