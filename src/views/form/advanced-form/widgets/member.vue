<template>
  <h2 class="font-light text-base">成员管理</h2>
  <a-divider style="margin: 16px 0;" />
  <a-table :data="data" style="margin-top: 20px">
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
            <a-button @click="handleEdit(rowIndex)">操作</a-button>
          </div>
          <div v-else>
            <a-button @click="determine(rowIndex)">确定</a-button>
            <a-popconfirm content="你确定要删除吗？" @ok="delet(rowIndex)">
              <a-button>删除</a-button>
            </a-popconfirm>
            <a-button @click="cancel">取消</a-button>
          </div>
        </template>
      </a-table-column>
    </template>
  </a-table>

  <a-button
    style="width: 100%; margin-top: 16px; margin-bottom: 8px"
    type="dashed"
    icon="plus"
    @click="add"
  >新增成员</a-button>
  <!-- fixed footer toolbar -->
  <footer-tool-bar>
    <a-button
      type="primary"
      @click="primary"
    >提交</a-button>
  </footer-tool-bar>
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
const qing = () => {
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
    // qing()
  }
}
const delet = (rowIndex: number) => {
  editLine.value = undefined
  data.splice(rowIndex, 1)
}
const cancel = () => {
  // operation.value = false
  editLine.value = undefined
  qing()
}
const determine = (rowIndex: number) => {
  // operation.value = false
  editLine.value = undefined
  data[rowIndex] = { ...edittedData.value }
  qing()
}
const add = () => {
  if (editLine.value >= 0) {
    Notification.info('只可以编辑一项')
  } else {
    data.push({ name: '', number: '', department: '' })
    // operation.value = true
    editLine.value = data.length - 1
    // qing()
  }
}
const primary = () => {
  Notification.info('提交成功')
}
</script>
