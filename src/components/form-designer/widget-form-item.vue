<template>
  <a-form-item
    :label="widget.config.label || widget.name"
    :required="widget.config.required"
    class="group widget-wrapper bg-white z-50"
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
    <template v-if="widget.type === 'radio'">
      <a-radio-group
        :direction="widget.config.direction"
        :type="widget.config.type"
        :disabled="widget.config.disabled"
      >
        <a-radio
          v-for="(item, i) in widget.config.options"
          :key="i"
          :value="item.value"
        >
          {{ item.label }}
        </a-radio>
      </a-radio-group>
    </template>
    <template v-if="widget.type === 'slider'">
      <a-slider
        :default-value="widget.config.defaultValue"
        :step="widget.config.step"
        :min="widget.config.min"
        :marks="widget.config.marks"
        :max="widget.config.max"
        :direction="widget.config.direction"
        :disabled="widget.config.disabled"
        :show-ticks="widget.config.showTicks"
        :show-input="widget.config.showInput"
        :range="widget.config.range"
        :style="{ width: widget.config.width }"
      />
    </template>
    <template v-if="widget.type === 'inputnumber'">
      <a-input-number
        :default-value="widget.config.defaultValue"
        :placeholder="widget.config.placeholder"
        :allow-clear="widget.config.allowClear"
        :readonly="widget.config.readonly"
        :disabled="widget.config.disabled"
        :error="widget.config.error"
        :size="widget.config.size"
      />
    </template>
    <template v-if="widget.type === 'checkbox'">
      <a-checkbox-group
        :disabled="widget.config.disabled"
        :direction="widget.config.direction"
        :indeterminate="widget.config.indeterminate"
        :defaultchecked="widget.config.defaultChecked"
      >
        <template
          v-for="(item, i) in widget.config.options"
          :key="i"
        >
          <a-checkbox :value="item.value">
            {{ item.label }}
          </a-checkbox>
        </template>

      </a-checkbox-group></template>
    <template v-if="widget.type === 'switch'">
      <a-switch
        :disabled="widget.config.disabled"
        :size="widget.config.size"
        :type="widget.config.type"
        :direction="widget.config.checkedValue"
        :checked-value="widget.config.checkedValue"
        :unchecked-value="widget.config.uncheckedValue"
        :default-checked="widget.config.defaultChecked"
      />
    </template>
    <template v-if="widget.type === 'date-picker'">
      <a-date-picker
        :allow-clear="widget.config.allowClear"
        :readonly="widget.config.readonly"
        :error="widget.config.error"
        :size="widget.config.size"
        :disabled="widget.config.disabled"
        :style="{ width: widget.config.width }"
      />
    </template>
    <template v-if="widget.type === 'rate'">
      <a-rate
        :count="widget.config.count"
        :allow-half="widget.config.allowHalf"
        :grading="widget.config.grading"
        :readonly="widget.config.readonly"
        :disabled="widget.config.disabled"
      />
    </template>
    <template v-if="widget.type === 'time-picker'">
      <a-time-picker
        :type="widget.config.type"
        :disabled="widget.config.disabled"
        :allow-clear="widget.config.allowClear"
        :readonly="widget.config.readonly"
        :error="widget.config.error"
        :size="widget.config.size"
        :placeholder="widget.config.placeholder"
        :style="{ width: widget.config.width }"
      />
    </template>
    <template v-if="widget.type === 'cascader'">
      <a-cascader
        :options="widget.config.options"
        :placeholder="widget.config.placeholder"
        :default-value="widget.config.defaultValue"
        :disabled="widget.config.disabled"
        :allow-search="widget.config.allowSearch"
        :allow-clear="widget.config.allowClear"
        :multiple="widget.config.multiple"
        :check-strictly="widget.config.checkStrictly"
        :expand-trigger="widget.config.expandTrigger"
      />
    </template>
    <template v-if="widget.type === 'textarea'">
      <a-textarea
        :model-value="widget.config.value"
        :placeholder="widget.config.placeholder"
        :disabled="widget.config.disabled"
        :max-length="widget.config.maxLength"
        :show-word-limit="widget.config.showWordLimit"
        :allow-clear="widget.config.allowClear"
        :auto-size="widget.config.autoSize"
      />
    </template>
    <template v-if="widget.type === 'upload'">
      <a-upload
        :action="widget.config.action"
        :disabled="widget.config.disabled"
        :multiple="widget.config.multiple"
        :limit="widget.config.limit"
      />
    </template>
    <template v-if="(widget as any).type === 'grid'">
      <div class="text-red-500 font-bold">栅格布局不可嵌套，请移除此控件</div>
    </template>

    <!-- drag handler -->
    <button
      v-show="isSelected"
      class="widget-action-icon absolute top-0 left-0 cursor-move drag-handler z-50"
    >
      <s-icon :name="DragMove" :size="16" />
    </button>
    <!-- delete -->
    <button
      v-show="isSelected"
      class="widget-action-icon absolute bottom-0 right-0 z-50"
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
.widget-wrapper::before{
  z-index: 10;
}
.arco-picker{
  width: 100%;
}
</style>
