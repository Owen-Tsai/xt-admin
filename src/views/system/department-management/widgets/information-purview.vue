<template>
  <a-tabs>
    <a-tab-pane key="1" title="基本信息">
      <a-form ref="form" :model="formData">
        <a-form-item
          field="name"
          label="机构名称:"
          :rules="[{ required: true, message: '机构名称不能为空' }]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formData.departName"
            placeholder="请输入机构/部门名称"
            allow-clear
          />
        </a-form-item>
        <a-form-item field="superior" label="上级部门:">
          <a-select v-model="formData.superior" disabled />
        </a-form-item>
        <a-form-item field="code" label="机构编码:">
          <a-input v-model="formData.orgCode" disabled />
        </a-form-item>
        <a-form-item field="description" label="机构类型:">
          <a-radio-group v-model="formData.description" type="button">
            <a-radio
              value="company"
              :model-value="true"
              :default-checked="true"
            >
              公司
            </a-radio>
            <a-radio value="department">部门</a-radio>
            <a-radio value="post">岗位</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item field="sort" label="排序:">
          <a-input-number v-model="formData.departOrder" style="width: 88px" />
        </a-form-item>
        <a-form-item field="telephone" label="电话:">
          <a-input
            v-model="formData.mobile"
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
        <a-form-item field="memo" label="备注:">
          <a-textarea
            v-model="formData.memo"
            placeholder="请输入备注"
            allow-clear
          />
        </a-form-item>
      </a-form>
      <a-divider />
      <div class="flex justify-end">
        <a-button class="mr-2" @click="form.resetFields()">
          <template #icon>
            <icon-loop />
          </template>
          重置
        </a-button>
        <a-button type="primary">
          <template #icon>
            <icon-save />
          </template>
          保存
        </a-button>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" title="部门权限">
      <a-tree
        block-node
        :checkable="true"
        :check-strictly="true"
        :data="purviewData"
      />
      <a-divider />
      <div class="flex justify-between">
        <a-dropdown position="top" @select="handleSelect">
          <a-button>
            树操作
            <icon-up />
          </a-button>
          <template #content>
            <a-doption>全部勾选</a-doption>
            <a-doption>取消全选</a-doption>
            <a-doption>展开所有</a-doption>
            <a-doption>收起所有</a-doption>
          </template>
        </a-dropdown>
        <a-button type="primary">
          <template #icon>
            <icon-save />
          </template>
          保存
        </a-button>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import emitter from '../types'
import type { InformationData } from '../types'

const form = ref<any>()

const formData = ref<InformationData>({
  departName: '',
  superior: '',
  orgCode: '',
  isLeaf: true || false,
  description: '',
  departOrder: 0,
  mobile: '',
  fax: '',
  address: '',
  memo: '',
})

emitter.on('detail', (departmentDetail: any) => {
  console.log(departmentDetail.value)
  formData.value = departmentDetail.value
})

const purviewData = ref([
  {
    title: 'Dashboard',
    key: '0-0',
  },
  {
    title: '个人办公',
    key: '0-1',
  },
  {
    title: '工单申请',
    key: '0-2',
  },
])

const handleSelect = () => {
  // console.log(v)
}
</script>
<style lang="scss" scoped>
.arco-dropdown-open .arco-icon-down {
  transform: rotate(180deg);
}
.arco-icon-up {
  margin-left: 10px;
}
</style>
