<template>
  <main class="px-6 pb-4 relative">
    <s-navs :navs="['menu.form', 'menu.form.advanced-form']" />

    <div class="s-section">
      <div class="items-center">
        <h2 class="text-lg">高级表单</h2>
        <div class="font-light text-sm mt-4">高级表单常见于一次性输入和提交大批量数据的场景。</div>
      </div>
    </div>

    <div class="s-section mt-4">
      <warehouse ref="form1" />
    </div>

    <div class="s-section mt-4">
      <task ref="form2" />
    </div>

    <div class="s-section mt-4 mb-14">
      <member />
    </div>

    <div class="fixed bottom-0 w-full left-0 border-t">
      <div class="w-full bg-white text-right px-6 py-3">
        <a-space>
          <a-button @click="reset">重置</a-button>
          <a-button
            html-type="submit"
            type="primary"
            @click="submit"
          >提交</a-button>
        </a-space>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  provide
} from 'vue'
import warehouse from './widgets/warehouse.vue'
import task from './widgets/task.vue'
import member from './widgets/member.vue'
// import attachmentsForm from './widgets/attachments.vue'

const form1 = ref<any>()
const form2 = ref<any>()
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

const submit = () => {
  form1.value.handleValidate?.()
  form2.value.handleValidate?.()
}
const reset = () => {
  form1.value.resetForm?.()
  form2.value.resetForm?.()
}
</script>
<style lang="scss" scoped>
::v-deep .arco-form-item-message {
  font-size: 14px;
}
</style>
