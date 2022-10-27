<template>
  <div class="container select-none">
    <div class="min-h-full flex-grow flex flex-col">
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
          class="min-h-full flex-grow p-6"
          :swap-threshold="0.01"
          item-key="uid"
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
                  class="relative"
                >
                  <div class="nested-widget-list bg-green-50">
                    <nested-draggable :nested-list="col.widgets" />
                  </div>
                </a-col>
                <button
                  v-show="context?.selectedUID.value === element.uid"
                  class="absolute bottom-0 right-0 action-icon"
                  @click="context?.removeWidget(index, element.uid)"
                >
                  <s-icon :name="DeleteBinFill" :size="16" />
                </button>
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
import { DeleteBinFill } from '@salmon-ui/icons'
import NestedDraggable from './nested-draggable.vue'
import {
  AST,
  WidgetsConfig,
  FormDesignerContext,
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

const context = inject<FormDesignerContext>(contextSymbol)

const isWidgetsEmpty = computed(() => props.ast.widgetsConfig.length === 0)
const widgetsList = ref<WidgetsConfig[]>(props.ast.widgetsConfig)

const onDragEnd = (e: any) => {
  console.log(e)
}
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
    outline-dashed outline-gray-300 outline-1 p-3
    hover:outline hover:outline-blue-400 hover:bg-blue-50;

  &.is-selected {
    @apply outline outline-2 outline-blue-400;
  }
}
.widget-col {
  @apply relative before:absolute before:w-full before:h-full before:top-0 before:left-0
    outline-dashed outline-gray-300 outline-1 p-3
    hover:outline hover:outline-blue-400 hover:bg-blue-50;

  &.is-selected {
    @apply outline outline-2 outline-blue-400;
  }
}
.nested-widget-list {
  @apply min-h-[24px];
}
.action-icon {
  @apply inline-flex items-center justify-center h-6 w-6 bg-blue-400 text-white;
}
</style>
