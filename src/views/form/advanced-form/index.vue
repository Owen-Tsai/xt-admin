<template>
  <main class="px-6 pb-4 relative">
    <s-navs :navs="['menu.form', 'menu.form.advanced-form']" />

    <div class="s-section">
      <advanced-header />
    </div>

    <div class="s-section mt-4">
      <warehouse />
    </div>

    <div class="s-section mt-4">
      <task />
    </div>

    <div class="s-section mt-4">
      <member />
    </div>

    <div class="footer">
      <a-button type="outline">重置</a-button>
      <a-button type="primary">提交</a-button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  provide
} from 'vue'
import advancedHeader from './widgets/header.vue'
import warehouse from './widgets/warehouse.vue'
import task from './widgets/task.vue'
import member from './widgets/member.vue'
// import attachmentsForm from './widgets/attachments.vue'

const activeTab = ref('0')
const commonProps = reactive({
  // 本条申报条目(记录)的 ID
  id: 1,
  // 申报的类型
  type: 1,
  // 当前操作的类型
  cmd: 'create'
})

provide('commonProps', commonProps)
/**
 * ID of the current business entry should be passed to the
 * children widgets using provide/inject.
 */
</script>
