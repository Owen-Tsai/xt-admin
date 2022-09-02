<template>
  <div class="px-4">
    <a-alert>从左侧输入框内输入姓名过滤查找，查找结果将对应的人员添加到扶持对象列表内。<b>您可能需要补充额外的信息方可提交。</b></a-alert>
    <div class="my-4 flex items-stretch">
      <div class="w-60 pr-4 mr-4 border-r">
        <a-input-search
          v-model="searchModel"
          placeholder="请输入姓名进行检索"
          @search="getSearchResult"
        />
        <a-empty v-if="filteredList.length <= 0" />
        <a-list v-else :bordered="false">
          <a-list-item
            v-for="(item, i) in filteredList"
            :key="item.id"
            class="list-item hover:bg-gray-50 cursor-pointer"
            @click="updateTableData(i)"
          >
            <a-list-item-meta :title="item.name" :description="item.cardNo">
              <template #avatar>
                <a-avatar>
                  <img :src="item.avatar">
                </a-avatar>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
      <a-table
        :data="tableData"
        row-key="id"
        class="flex-grow"
        :bordered="false"
      >
        <template #columns>
          <a-table-column title="姓名" data-index="name" />
          <a-table-column title="证件号" data-index="cardNo" />
          <a-table-column title="学历" data-index="degree" />
          <a-table-column title="研究领域" data-index="field" />
          <a-table-column title="申请额度" data-index="fund" />
          <a-table-column title="操作" data-index="actions">
            <template #cell="{ record }">
              <a-space>
                <a-button size="small" @click="handleEdit(record)">编辑</a-button>
                <a-button size="small" @click="handleRemove(record)">移除</a-button>
              </a-space>
            </template>
          </a-table-column>
        </template>
        <template #empty>
          <a-empty>没有已添加的扶持对象<br>请从左侧输入框内输入姓名搜索</a-empty>
        </template>
      </a-table>
    </div>

    <a-modal
      v-model:visible="dialogVisible"
      :title="dialogTitle"
      :hide-cancel="dialogReadonly"
      :ok-text="dialogReadonly ? '关闭' : '保存'"
    >
      <a-form :model="form">
        <a-form-item label="姓名">
          <a-input v-model="form.name" readonly />
        </a-form-item>
        <a-form-item label="性别">
          <a-select v-model="form.gender">
            <a-option :value="0">女</a-option>
            <a-option :value="1">男</a-option>
          </a-select>
        </a-form-item>
        <a-form-item label="证件号">
          <a-input v-model="form.cardNo" readonly />
        </a-form-item>
        <a-form-item label="学历">
          <a-select v-model="form.degree">
            <a-option :value="0">高中及以下</a-option>
            <a-option :value="1">大学专科</a-option>
            <a-option :value="2">大学本科</a-option>
            <a-option :value="4">硕士研究生</a-option>
            <a-option :value="5">博士研究生</a-option>
          </a-select>
        </a-form-item>
        <a-form-item label="学位">
          <a-select v-model="form.diploma">
            <a-option :value="0">无</a-option>
            <a-option :value="1">学士</a-option>
            <a-option :value="2">硕士</a-option>
            <a-option :value="4">博士</a-option>
          </a-select>
        </a-form-item>
        <a-form-item label="专业领域">
          <a-select v-model="form.field">
            <a-option :value="0">计算机科学</a-option>
            <a-option :value="1">软件工程</a-option>
            <a-option :value="2">人工智能</a-option>
            <a-option :value="4">通信工程</a-option>
          </a-select>
        </a-form-item>
        <a-form-item label="扶持额度">
          <a-input-number
            v-model="form.fund"
            readonly
            hide-button
            placeholder="系统自动计算，无需填写"
          >
            <template #append>万元</template>
          </a-input-number>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import avatar from '@/assets/avatar-user.png'

type PersonnelData = {
  id?: number,
  avatar?: string,
  name?: string,
  gender?: number,
  cardNo?: string,
  degree?: number | string,
  diploma?: number | string,
  field?: number | string,
  fund?: number,
}

const form = ref<PersonnelData>({})
const tableData = ref<PersonnelData[]>([])

const searchModel = ref('')
const dialogTitle = ref('')
const dialogVisible = ref(false)
const dialogReadonly = ref(false)

const showDialog = (readonly?: boolean) => {
  dialogReadonly.value = !!readonly
  dialogTitle.value = readonly ? '查看' : '编辑'
  dialogVisible.value = true
}

const handleEdit = (row: PersonnelData) => {
  console.log(row)
  form.value = { ...row }
  showDialog()
}
const handleRemove = (row: PersonnelData) => {
  console.log(row)
}

const filteredList = ref<PersonnelData[]>([
  {
    name: '张三',
    cardNo: '370102199001010101',
    avatar
  },
  {
    name: '李四',
    cardNo: '370101199001010001',
    avatar
  }
])

const updateTableData = (idx: number) => {
  tableData.value.push(filteredList.value[idx])
  filteredList.value.splice(idx, 1)
}
const getSearchResult = () => {
  // TODO: send request using searchModel.value
}
</script>

<style lang="scss" scoped>
.list-item {
  :deep(.arco-list-item-meta-description) {
    font-size: 12px;
  }
}
</style>
