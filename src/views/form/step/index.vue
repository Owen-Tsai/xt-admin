<template>
  <!-- PageHeader 第二种使用方式 (v-slot) -->
  <main class="px-6 pb-4 relative">
    <s-navs :navs="['menu.form', 'menu.form.step']" />
    <a-card :bordered="false">
      <a-steps
        class="steps"
        changeable
        :current="currentTab"
      >
        <a-step title="填写转账信息" />
        <a-step title="确认转账信息" />
        <a-step title="完成" />
      </a-steps>
      <div class="content">
        <step1 v-if="currentTab == 1" />
        <step2
          v-if="currentTab == 2"
        />
        <step3
          v-if="currentTab == 3"
        />
      </div>
    </a-card>
  </main>
</template>

<script lang="ts" setup>
import {
  provide, ref
} from 'vue';
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'

const currentTab = ref(1)
const childMsg = (n: number) => {
  currentTab.value = n
}
provide('changeable', {
  childMsg
})
provide('changeable1', {
  childMsg
})
</script>
  <style lang="scss" scoped>
  .steps {
      max-width: 750px;
      margin: 16px auto;
    }
    .content{
        display: flex;
        justify-content: center;
    }
  </style>
