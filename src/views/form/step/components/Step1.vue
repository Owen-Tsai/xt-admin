<template>
  <a-form
    class="pt-8 pl-10"
    :model="form"
    :style="{width:'600px'}"
  >
    <a-form-item field="fk" label="付款账户：">
      <a-select :style="{width:'320px'}" placeholder="请选择付款账户">
        <a-option>www.taobao.com</a-option>
        <a-option>www.jingdong.com</a-option>
      </a-select>
    </a-form-item>
    <a-form-item field="sk" label="收款账户：">
      <a-select
        :style="{width:'100px'}"
        placeholder="支付宝"
        :trigger-props="{ autoFitPopupMinWidth: true }"
      >
        <a-option>支付宝</a-option>
        <a-option>微信</a-option>
      </a-select>
      <a-input
        v-model="form.post"
        :style="{width:'220px'}"
        placeholder="请输入收款账户"
        allow-clear
      />
    </a-form-item>
    <a-form-item field="name" label="收款人姓名：">
      <a-input
        :style="{width:'320px'}"
        placeholder="请输入姓名"
        allow-clear
      />
    </a-form-item>
    <a-form-item field="je" label="转账金额：">
      <a-input
        :style="{width:'320px'}"
        placeholder="请输入金额"
        allow-clear
      />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="sendMsgToParent">下一步</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { reactive, inject } from 'vue';

// emits: ['nextStep', 'childMsg'],
const form = reactive({
  name: '',
  post: '',
  isRead: false,
})
const changeable:any = inject('changeable')
// const changeable = () => '2'
const sendMsgToParent = () => {
  changeable.childMsg(2)
}
</script>
