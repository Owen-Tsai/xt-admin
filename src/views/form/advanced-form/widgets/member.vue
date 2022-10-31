<template>
  <h2 class="font-light text-base">成员管理</h2>
  <a-divider style="margin: 16px 0;" />
  <a-table
    :data="data"
    style="margin-top: 20px"
    :pagination="false"
  >
    <template #columns>
      <a-table-column title="成员姓名">
        <template #cell="{ record, rowIndex }">
          <a-input v-if="editLine === rowIndex" v-model="edittedData.name" />
          <template v-else>{{ record.name }}</template>
        </template>
      </a-table-column>
      <a-table-column title="工号">
        <template #cell="{ record, rowIndex }">
          <a-input v-if="editLine === rowIndex" v-model="edittedData.number" />
          <template v-else>{{ record.number }}</template>
        </template>
      </a-table-column>
      <a-table-column title="所属部门">
        <template #cell="{ record, rowIndex }">
          <a-input v-if="editLine === rowIndex" v-model="edittedData.department" />
          <template v-else>{{ record.department }}</template>
        </template>
      </a-table-column>
      <a-table-column title="操作">
        <template #cell="{ rowIndex }">
          <div v-if="editLine !== rowIndex">
            <span @click="handleEdit(rowIndex)">编辑</span>
          </div>
          <div v-else>
            <span @click="conserve(rowIndex)">保存</span>
            <a-popconfirm content="你确定要删除吗？" @ok="cut(rowIndex)">
              <span>删除</span>
            </a-popconfirm>
            <span @click="cancel">取消</span>
          </div>
        </template>
      </a-table-column>
    </template>
  </a-table>

  <a-button
    style="width: 100%; margin-top: 16px; margin-bottom: 8px"
    type="dashed"
    @click="add"
  >
    <template #icon>
      <icon-plus />
    </template>
    添加一行数据</a-button>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Notification } from '@arco-design/web-vue'
// import { Iname } from '@/types';
import { getFormTab } from '@/api/advanced-form';

const editLine = ref()

const edittedData = ref({
  name: '',
  number: '',
  department: '',
})
const data = reactive<any[]>([]);
getFormTab().then((res) => {
  // console.log(res)
  res.data.forEach((i) => {
    data.push(i)
  })
  // data.push(res.data)
  // data = res.data
  // console.log(data)
})
// assignment(data)
const clear = () => {
  edittedData.value.name = ''
  edittedData.value.number = ''
  edittedData.value.department = ''
}
const handleEdit = (rowIndex: number) => {
  if (editLine.value >= 0) {
    Notification.info('只可以编辑一项')
  } else {
    edittedData.value = { ...data[rowIndex] }
    // operation.value = true
    editLine.value = rowIndex
    // clear()
  }
}
const cut = (rowIndex: number) => {
  editLine.value = undefined
  data.splice(rowIndex, 1)
  clear()
}
const cancel = () => {
  // operation.value = false
  editLine.value = undefined
  clear()
}
const conserve = (rowIndex: number) => {
  // operation.value = false
  editLine.value = undefined
  data[rowIndex] = { ...edittedData.value }
  clear()
}
const add = () => {
  if (editLine.value >= 0) {
    Notification.info('只可以编辑一项')
  } else {
    data.push({ name: '', number: '', department: '' })
    // operation.value = true
    editLine.value = data.length - 1
    // clear()
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .arco-table-th {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      &::before {
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 1.6em;
        background-color: rgba(0,0,0,.06);
        transform: translateY(-50%);
        content: "";
      }
    }
  }
   ::v-deep .arco-table-td {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(4) {
      width: 20%;
    }
    &:nth-child(3) {
      width: 40%;
    }
    &:nth-child(4) {
      span {
        color: #1890ff;
        cursor: pointer;
        margin-right: 10px;
      }
    }
  }
  ::v-deep .arco-table-tr {
    height: 51px;
  }
</style>
