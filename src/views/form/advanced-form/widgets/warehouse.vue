<template>
  <h2 class="font-light text-base">仓库管理</h2>
  <a-divider style="margin: 16px 0;" />
  <a-form
    ref="form"
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
        <a-form-item
          label="仓库域名"
          field="domainName"
          :rules="[{required:true,message:'请输入'}]"
        >
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
        <a-form-item
          label="仓库管理员"
          field="management"
          :rules="[{required:true,message:'请选择管理员'}]"
        >
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
        <a-form-item
          label="审批人"
          field="approver"
          :rules="[{required:true,message:'请选择审批员'}]"
        >
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
        <a-form-item
          label="生效日期"
          field="date"
        >
          <a-range-picker
            style="width: 100%"
          />
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
          label="仓库类型"
          field="type"
          :rules="[{required:true,message:'请选择仓库类型'}]"
        >
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
    <!-- <a-button @click="handleValidate">Submit</a-button> -->
  </a-form>
</template>

<script lang="ts" setup>
import {
  reactive,
  ref
} from 'vue'

const form = ref<any>()

const formData = reactive({
  warehouseName: '',
  domainName: undefined,
  management: undefined,
  approver: undefined,
  date: '',
  type: undefined,
})

const handleValidate = () => {
  form.value.validate()
}
const resetForm = () => {
  formData.warehouseName = '';
  formData.domainName = undefined;
  formData.management = undefined;
  formData.approver = undefined;
  formData.date = '';
  formData.type = undefined
}

defineExpose({
  handleValidate,
  resetForm
})
</script>
