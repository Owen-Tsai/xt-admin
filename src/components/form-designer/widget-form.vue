<template>
  <div class="container select-none">
    <div class="p-6 min-h-full flex-grow flex flex-col">
      <a-form
        :model="data"
        :label-align="ast.formConfig.labelAlign"
        :layout="ast.formConfig.layout"
        :size="ast.formConfig.size"
        class="min-h-full flex-grow flex flex-col"
      >
        <draggable
          v-model="widgetsList"
          v-bind="{
            group: 'widgets',
            ghostClass: 'ghost',
            animation: 200,
            handle: '.drag-handler'
          }"
          class="min-h-full flex-grow"
          :item-key="getUUID"
          @end="onDragEnd"
        >
          <template #item="{ element, index }: ItemSlot">
            <widget-form-item
              :widget="element"
              :index="index"
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
  WidgetsConfig,
  FormDesignerContext,
  IConfigGrid,
  contextSymbol
} from './types'
import WidgetFormItem from './widget-form-item.vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ItemSlot = {
  element: Exclude<WidgetsConfig, IConfigGrid>,
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

const onDragEnd = ({ newIndex }: { newIndex: number }) => {
  (context as FormDesignerContext).selectedIndex.value = newIndex
}

const getUUID = () => Symbol('widget')
</script>

<style lang="scss" scoped>
.container {
  @apply bg-white flex flex-col shadow-sm border min-h-full;
}
.empty {
  @apply flex items-center justify-center;
}
</style>
