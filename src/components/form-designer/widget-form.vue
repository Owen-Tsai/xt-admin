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
          :list="widgetsList"
          v-bind="{
            group: 'widgets',
            ghostClass: 'ghost',
            animation: 200,
            handle: '.drag-handler'
          }"
          class="min-h-full flex-grow"
          :swap-threshold="0.01"
          :item-key="getUUID"
          @end="onDragEnd"
        >
          <template #item="{ element, index }: ItemSlot">
            <template v-if="element.type === 'grid'">
              <a-row
                class="widget-row"
                :class="{ 'is-selected': context?.selectedUID.value === element.uid }"
                :align="element.config.align"
                :justify="element.config.justify"
                :gutter="element.config.gutter"
                @click.self="context?.setSelectedUID(element.uid)"
              >
                <a-col
                  v-for="(col, i) in element.cols"
                  :key="i"
                  :span="col.span || 0"
                >
                  <div class="nested-widget-list">
                    <nested-draggable :nested-list="col.widgets" />
                  </div>
                </a-col>
              </a-row>
            </template>
            <template v-else>
              <widget-form-item
                :widget="element"
                :index="index"
              />
            </template>
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
  ref,
  inject
} from 'vue'
import Draggable from 'vuedraggable'
import NestedDraggable from './nested-draggable.vue'

import {
  AST,
  WidgetsConfig,
  FormDesignerContext,
  IConfigGrid,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ItemSlot,
  contextSymbol
} from './types'
import WidgetFormItem from './widget-form-item.vue'

const props = defineProps({
  ast: {
    type: Object as PropType<AST>,
    required: true
  }
})

// an empty reactive data for form model
const data = ref({})

const emit = defineEmits(['update:ast'])
const context = inject<FormDesignerContext>(contextSymbol)

const isWidgetsEmpty = computed(() => props.ast.widgetsConfig.length === 0)
const widgetsList = ref<WidgetsConfig[]>(props.ast.widgetsConfig)

const onDragEnd = (e: any) => {
  console.log(e)
}

const onChange = (e: any) => {
  console.log(e)
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
.widget-row {
  @apply relative before:absolute before:w-full before:h-full before:top-0 before:left-0 mb-1
    outline-dashed outline-gray-300 outline-1
    hover:outline hover:outline-blue-400 hover:bg-blue-50;

  &.is-selected {
    @apply outline outline-2 outline-blue-400;
  }
}
.nested-widget-list {
  @apply min-h-[50px] p-3;
}
</style>
