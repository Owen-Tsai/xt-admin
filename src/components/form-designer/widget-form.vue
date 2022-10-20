<template>
  <div class="container select-none" :class="{ 'empty': isWidgetsEmpty }">
    <div
      v-if="isWidgetsEmpty"
      class="text-2xl text-gray-400"
    >请添加一个组件</div>
    <div v-else class="p-6">
      <a-form
        :model="data"
        :label-align="ast.formConfig.labelAlign"
        :layout="ast.formConfig.layout"
        :size="ast.formConfig.size"
      >
        <draggable
          v-model="widgetsList"
          v-bind="{
            group: 'widgets',
            ghostClass: 'ghost',
            animation: 200,
            handle: '.drag-handler'
          }"
          item-key="type"
        >
          <template #item="{ element, index }: ItemSlot">
            <widget-form-item
              :widget="element"
              :index="index"
              @select="onWidgetSelect(index)"
            />
          </template>
        </draggable>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  PropType,
  computed,
  reactive,
  ref,
  inject
} from 'vue'
import Draggable from 'vuedraggable'
import {
  AST,
  FormWidgetsConfig,
  WidgetsConfig,
  FormDesignerContext,
  contextSymbol
} from './types'
import WidgetFormItem from './widget-form-item.vue'
import { fieldsMap } from './use-draggable-data'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ItemSlot = {
  element: FormWidgetsConfig,
  index: number
}

const props = defineProps({
  ast: {
    type: Object as PropType<AST>,
    required: true
  }
})

const emit = defineEmits(['update:ast'])

const context = inject<FormDesignerContext>(contextSymbol)

const selectedWidget = ref<WidgetsConfig>()
const selectedIndex = ref(-1)

const isWidgetsEmpty = computed(() => props.ast.widgetsConfig.length === 0)
const data = reactive({})
const widgetsList = computed({
  get: () => props.ast.widgetsConfig,
  set: (val) => {
    emit('update:ast', {
      ...props.ast,
      widgetsConfig: val
    })
  }
})

const onWidgetSelect = (idx: number) => {
  selectedWidget.value = props.ast.widgetsConfig[idx]
  selectedIndex.value = idx
}
</script>

<style lang="scss" scoped>
.container {
  @apply my-6 bg-white shadow-sm border;
  min-height: calc(100% - 48px);
}
.empty {
  @apply flex items-center justify-center;
}
</style>
