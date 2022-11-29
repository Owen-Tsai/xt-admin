<template>
  <a-form
    ref="form"
    :model="data"
    :size="ast.formConfig.size"
    :layout="ast.formConfig.layout"
    :label-align="ast.formConfig.labelAlign"
  >
    <template v-for="(item, i) in ast.widgetsConfig" :key="i">
      <template v-if="item.type === 'grid'">
        <a-row
          :align="item.config.align"
          :justify="item.config.justify"
          :gutter="item.config.gutter"
        >
          <a-col
            v-for="(col, j) in item.cols"
            :key="j"
            :span="col.span"
          >
            <form-preview-item
              v-if="col.widgets.length >= 1"
              :widget="col.widgets[0]"
            />
          </a-col>
        </a-row>
      </template>
      <template v-else>
        <form-preview-item :widget="item" />
      </template>
    </template>
  </a-form>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue'
import FormPreviewItem from './s-form-item.vue'
import type { AST } from '@/components/form-designer/types'

defineProps({
  ast: {
    type: Object as PropType<AST>,
    required: true
  }
})

const data = ref({})

const form = ref<any>()

const handleValidate = () => {
  form.value.validate()
}

defineExpose({
  handleValidate
})
</script>
