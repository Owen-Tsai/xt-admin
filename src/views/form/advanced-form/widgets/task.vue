<template>
  <h2 class="font-light text-base">任务管理</h2>
  <a-divider style="margin: 16px 0;" />
  <a-form
    :model="formData"
    layout="vertical"
  >
    <a-row :gutter="24">
      <a-col :span="8">
        <a-form-item
          label="任务名"
          field="taskName"
          :rules="[{required:true,message:'请输入'}]"
          :validate-trigger="['change','input']"
        >
          <a-input v-model="formData.taskName" placeholder="请输入" />
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="任务描述" field="describe">
          <a-input v-model="formData.describe" placeholder="请输入" />
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="执行人" field="executor">
          <a-select v-model="formData.executor" placeholder="请选择">
            <a-option :value="0">付晓晓</a-option>
            <a-option :value="1">周毛毛</a-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="责任人" field="principal">
          <a-select v-model="formData.principal" placeholder="请选择">
            <a-option :value="0">付晓晓</a-option>
            <a-option :value="1">周毛毛</a-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="生效日期" field="date">
          <a-time-picker style="width: 100%" placeholder="提醒时间" />
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="任务类型" field="type">
          <a-select v-model="formData.type" placeholder="请选择任务类型">
            <a-option :value="0">私密</a-option>
            <a-option :value="1">公开</a-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  taskName: '',
  describe: '',
  executor: undefined,
  principal: undefined,
  date: '',
  type: undefined,
})
</script>
