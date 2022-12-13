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
      <a-form ref="form" :model="formData">
        <a-form-item
          field="name"
          label="机构名称:"
          :rules="[{ required: true, message: '机构名称不能为空' }]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formData.name"
            placeholder="请输入机构/部门名称"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="type" label="机构类型:">
          <a-radio-group v-model="formData.type" type="button">
            <a-radio value="radio one" default-checked>公司</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="sort" label="排序:">
          <a-input-number v-model="formData.sort" />
        </a-form-item>
        <a-form-item field="telephone" label="电话:">
          <a-input
            v-model="formData.telephone"
            placeholder="请输入电话"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="fax" label="传真:">
          <a-input
            v-model="formData.fax"
            placeholder="请输入传真"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="address" label="地址:">
          <a-input
            v-model="formData.address"
            placeholder="请输入地址"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="remarks" label="备注:">
          <a-textarea
            v-model="formData.remarks"
            placeholder="请输入备注"
            allow-clear
          />
        </a-form-item>
      </a-form>
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
      <a-form ref="form" :model="formData">
        <a-form-item
          field="name"
          label="机构名称:"
          :rules="[{ required: true, message: '机构名称不能为空' }]"
          :validate-trigger="['change', 'input']"
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
        <a-form-item field="type" label="机构类型:">
          <a-radio-group v-model="formData.type" type="button">
            <a-radio value="radio one" default-checked>部门</a-radio>
            <a-radio value="radio two">岗位</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="sort" label="排序:">
          <a-input-number v-model="formData.sort" />
        </a-form-item>
        <a-form-item field="telephone" label="电话:">
          <a-input
            v-model="formData.telephone"
            placeholder="请输入电话"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="fax" label="传真:">
          <a-input
            v-model="formData.fax"
            placeholder="请输入传真"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="address" label="地址:">
          <a-input
            v-model="formData.address"
            placeholder="请输入地址"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="remarks" label="备注:">
          <a-textarea
            v-model="formData.remarks"
            placeholder="请输入备注"
            allow-clear
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
  <a-input-search class="w-full mb-2" placeholder="按部门名称搜索..." />
  <a-tree
    :checkable="true"
    :check-strictly="true"
    :data="departmentData"
    :default-expanded-keys="['0-0']"
    :default-selected-keys="['0-0']"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { InformationData } from '../types'

const visible1 = ref(false)
const visible2 = ref(false)
const form = ref<any>()

const formData = ref<InformationData>({
  name: '',
  superior: '',
  code: '',
  type: 0,
  sort: 0,
  telephone: '',
  fax: '',
  address: '',
  remarks: '',
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

const departmentData = ref([
  {
    title: '卓尔互动公司',
    key: '0-0',
    children: [
      {
        title: '项目研发部',
        key: '0-0-1',
        children: [
          {
            title: '架构部',
            key: '0-0-1-1',
          },
          {
            title: '项目部',
            key: '0-0-1-2',
          },
          {
            title: '产品部门',
            key: '0-0-1-3',
          },
        ],
      },
      {
        title: '项目核算部',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '北京国炬公司',
    key: '0-1',
    children: [
      {
        title: '航天部门',
        key: '0-1-1',
      },
      {
        title: '研发部',
        key: '0-1-2',
        children: [
          {
            title: '研发一部(JEECG) ',
            key: '0-1-2-1',
          },
          {
            title: '项目研发部 ',
            key: '0-1-2-2',
          },
          {
            title: '研发二部(JEEWX) ',
            key: '0-1-2-3',
          },
        ],
      },
      {
        title: '财务部',
        key: '0-1-3',
        children: [
          {
            title: '出纳科 ',
            key: '0-1-3-1',
          },
          {
            title: '核算科 ',
            key: '0-1-3-2',
          },
        ],
      },
      {
        title: '市场部',
        key: '0-1-4',
        children: [
          {
            title: '客服专员 ',
            key: '0-1-4-1',
          },
          {
            title: '售前顾问 ',
            key: '0-1-4-2',
          },
        ],
      },
    ],
  },
  {
    title: '启云互动',
    key: '0-2',
    children: [
      {
        title: '财务',
        key: '0-2-1',
      },
      {
        title: '销售',
        key: '0-2-2',
      },
    ],
  },
])
</script>
<style lang="scss" scoped></style>
