<template>
  <h2 class="font-light text-base">仓库管理</h2>
  <a-divider style="margin: 16px 0;" />
  <a-form
    :model="formData"
    layout="vertical"
  >
    <a-row :gutter="24">
      <a-col :span="8">
        <a-form-item
          label="仓库名"
          field="warehouseName"
          :rules="[{required:true,message:'请输入仓库名称'}]"
        >
          <a-input
            v-model="formData.warehouseName"
            placeholder="请输入仓库名称"
          />
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="仓库域名" field="domainName">
          <a-input
            v-model="formData.domainName"
            placeholder="请输入"
          >
            <template #prepend>
              http://
            </template><template #append>
              .com
            </template>
          </a-input>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="仓库管理员" field="management">
          <a-select
            v-model="formData.management"
            placeholder="请选择管理员"
          >
            <a-option :value="0">付晓晓</a-option>
            <a-option :value="1">周毛毛</a-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="审批人" field="approver">
          <a-select
            v-model="formData.approver"
            placeholder="请选择管理员"
          >
            <a-option :value="0">付晓晓</a-option>
            <a-option :value="1">周毛毛</a-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="生效日期" field="date">
          <a-range-picker
            style="width: 100%"
          />
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="仓库类型" field="type">
          <a-select
            v-model="formData.type"
            placeholder="请选择仓库类型"
          >
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
  warehouseName: '',
  domainName: undefined,
  management: undefined,
  approver: undefined,
  date: '',
  type: undefined,
})
</script>
