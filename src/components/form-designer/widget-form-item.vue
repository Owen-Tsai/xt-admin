<template>
  <a-form-item
    :label="widget.config.label || widget.name"
    :required="widget.config.required"
    class="group wrapper bg-white"
    :class="{ 'is-selected': isSelected }"
    @click="onWidgetSelect"
  >
    <template v-if="widget.type === 'input'">
      <a-input
        :default-value="widget.config.defaultValue"
        :placeholder="widget.config.placeholder"
        :allow-clear="widget.config.allowClear"
        :max-length="widget.config.maxLength"
        :show-word-limit="widget.config.showWordLimit"
        :readonly="widget.config.readonly"
        :disabled="widget.config.disabled"
        :style="{ width: widget.config.width }"
      />
    </template>
    <template v-if="widget.type === 'select'">
      <a-select
        :allow-clear="widget.config.allowClear"
        :allow-create="widget.config.allowCreate"
        :allow-search="widget.config.allowSearch"
        :multiple="widget.config.limit !== undefined && widget.config.limit > 0"
        :limit="widget.config.limit"
        :placeholder="widget.config.placeholder"
      >
        <a-option
          v-for="(opt, i) in widget.config.options"
          :key="i"
          :value="opt.value"
        >{{ opt.label }}</a-option>
      </a-select>
    </template>
    <template v-if="(widget as any).type === 'grid'">
      <div class="text-red-500 font-bold">栅格布局不可嵌套，请移除此控件</div>
    </template>

    <!-- drag handler -->
    <button
      v-show="isSelected"
      class="absolute top-0 left-0 action-icon cursor-move drag-handler"
    >
      <s-icon :name="DragMove" :size="16" />
    </button>
    <!-- delete -->
    <button
      v-show="isSelected"
      class="absolute bottom-0 right-0 action-icon"
      @click="context.removeWidget(index, widget.uid)"
    >
      <s-icon :name="DeleteBinFill" :size="16" />
    </button>
  </a-form-item>
</template>

<script lang="ts" setup>
import {
  PropType,
  inject,
  computed
} from 'vue'
import {
  DragMove,
  DeleteBinFill
} from '@salmon-ui/icons'
import {
  WidgetsConfig,
  IConfigGrid,
  FormDesignerContext,
  contextSymbol
} from './types'

const props = defineProps({
  widget: {
    type: Object as PropType<Exclude<WidgetsConfig, IConfigGrid>>,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const context = inject(contextSymbol) as FormDesignerContext

const isSelected = computed(() => context.selectedUID.value === props.widget.uid)

const onWidgetSelect = () => {
  context.setSelectedUID(props.widget.uid)
}
</script>

<style lang="scss" scoped>
.action-icon {
  @apply inline-flex items-center justify-center h-6 w-6 bg-blue-400 text-white;
}
.wrapper {
  @apply relative p-2 before:absolute before:w-full before:h-full before:top-0 before:left-0 mb-0
    outline-dashed outline-gray-300 outline-1
    hover:outline hover:outline-blue-400 hover:bg-blue-50;

  &.is-selected {
    @apply outline outline-2 outline-blue-400;
  }
}
</style>
