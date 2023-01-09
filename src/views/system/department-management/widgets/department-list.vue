<template>
  <div class="my-3">
    <a-button type="primary" class="mr-2" @click="addCompany">
      <template #icon>
        <icon-plus />
      </template>
      新增
    </a-button>
    <a-modal
      :visible="visible1"
      draggable
      @ok="addCompanyOk"
      @cancel="addCompanyCancel"
    >
      <template #title>新增</template>
      <!-- <a-form
        ref="form"
        :model="formData"
      >
        <a-form-item
          field="name"
          label="机构名称:"
          :rules="[{required:true,message:'机构名称不能为空'}]"
          :validate-trigger="['change','input']"
        >
          <a-input
            v-model="formData.name"
            placeholder="请输入机构/部门名称"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="description" label="机构类型:">
          <a-radio-group v-model="formData.description" type="button">
            <a-radio value="radio one" default-checked>公司</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="sort" label="排序:">
          <a-input-number v-model="formData.sort" style="width: 88px" />
        </a-form-item>
        <a-form-item
          field="telephone"
          label="电话:"
        >
          <a-input
            v-model="formData.telephone"
            placeholder="请输入电话"
            allow-clear
          />
        </a-form-item>
        <a-form-item
          field="fax"
          label="传真:"
        >
          <a-input
            v-model="formData.fax"
            placeholder="请输入传真"
            allow-clear
          />
        </a-form-item>
        <a-form-item
          field="address"
          label="地址:"
        >
          <a-input
            v-model="formData.address"
            placeholder="请输入地址"
            allow-clear
          />
        </a-form-item>
        <a-form-item
          field="memo"
          label="备注:"
        >
          <a-textarea
            v-model="formData.memo"
            placeholder="请输入备注"
            allow-clear
          />
        </a-form-item>
      </a-form> -->
    </a-modal>
    <a-button type="primary" @click="addDepartment">
      <template #icon>
        <icon-plus />
      </template>
      添加下级
    </a-button>
    <a-modal
      :visible="visible2"
      draggable
      @ok="addDepartmentOk"
      @cancel="addDepartmentCancel"
    >
      <template #title>新增</template>
      <!-- <a-form
        ref="form"
        :model="formData"
      >
        <a-form-item
          field="name"
          label="机构名称:"
          :rules="[{required:true,message:'机构名称不能为空'}]"
          :validate-trigger="['change','input']"
        >
          <a-input
            v-model="formData.name"
            placeholder="请输入机构/部门名称"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="superior" label="上级部门:">
          <a-select v-model="formData.superior" disabled />
        </a-form-item>
        <a-form-item field="description" label="机构类型:">
          <a-radio-group v-model="formData.description" type="button">
            <a-radio value="radio one" default-checked>部门</a-radio>
            <a-radio value="radio two">岗位</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="sort" label="排序:">
          <a-input-number v-model="formData.sort" style="width: 88px" />
        </a-form-item>
        <a-form-item
          field="telephone"
          label="电话:"
        >
          <a-input
            v-model="formData.telephone"
            placeholder="请输入电话"
            allow-clear
          />
        </a-form-item>
        <a-form-item
          field="fax"
          label="传真:"
        >
          <a-input
            v-model="formData.fax"
            placeholder="请输入传真"
            allow-clear
          />
        </a-form-item>
        <a-form-item
          field="address"
          label="地址:"
        >
          <a-input
            v-model="formData.address"
            placeholder="请输入地址"
            allow-clear
          />
        </a-form-item>
        <a-form-item
          field="memo"
          label="备注:"
        >
          <a-textarea
            v-model="formData.memo"
            placeholder="请输入备注"
            allow-clear
          />
        </a-form-item>
      </a-form> -->
    </a-modal>
  </div>
  <a-input-search
    v-model="searchKey"
    class="w-full mb-2"
    placeholder="按部门名称搜索..."
  />
  <a-tree
    v-model:selected-keys="key"
    :checkable="true"
    :check-strictly="true"
    :data="departmentData"
    @select="getDetails"
  />
</template>

<script lang="ts" setup>
import { IconPlus } from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'
import {
  getDepartment,
  getDepartmentDetail,
  retrievalDepartment,
} from '@/api/department'
import emitter from '../types'
import type { InformationData } from '../types'

const departmentData = ref([])
const visible1 = ref(false)
const visible2 = ref(false)
const form = ref<any>()
const searchKey = ref('')

getDepartment().then((res) => {
  console.log(res)
  departmentData.value = res.data
})

const key = ref()
const formData = ref<InformationData>({
  departName: '',
  superior: '',
  orgCode: '',
  isLeaf: false,
  description: '',
  departOrder: 0,
  mobile: '',
  fax: '',
  address: '',
  memo: '',
})
const addCompany = () => {
  visible1.value = true
}
const addCompanyOk = () => {
  visible1.value = false
}
const addCompanyCancel = () => {
  visible1.value = false
}

const addDepartment = () => {
  visible2.value = true
}
const addDepartmentOk = () => {
  visible2.value = false
}
const addDepartmentCancel = () => {
  visible2.value = false
}
const departmentDetail = ref()
const getDetails = (arco: any, data: any) => {
  // const id = arco[0]
  console.log(data.node.orgCode)
  getDepartmentDetail(data.node.orgCode).then((res) => {
    // console.log(res)
    departmentDetail.value = res.data
    emitter.emit('detail', departmentDetail)
  })
}
// const searchDepartment = () => {
//   retrievalDepartment().then((res) => {
//     console.log(res)
//   })
//   console.log()
// }
</script>
<style lang="scss" scoped></style>
