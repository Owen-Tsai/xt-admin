<template>
  <div>
    <a-form
      :model="form"
      class="pt-8"
      :style="{width:'450px',}"
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
          :style="{width:'200px',}"
          :invisible-button="false"
          placeholder="请输入支付密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          @click="sendMsgToParent"
        >提交</a-button>
        <a-button style="margin-left: 8px" @click="sendMsgToParent1">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive } from 'vue';

export default {
  setup() {
    const form = reactive({
      name: '',
      post: '',
    })
    const handleSubmit = (data) => {
      console.log(data)
    }

    return {
      form,
      handleSubmit
    }
  },
  methods: {
    sendMsgToParent() {
      this.$emit('childMsg1', '3');
    },
    sendMsgToParent1() {
      this.$emit('childMsg3', '1');
    },
  }
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
