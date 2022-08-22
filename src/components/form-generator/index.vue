<script lang="tsx">
import {
  defineComponent,
  h,
  compile,
  PropType
} from 'vue'
import type { FormItemConfig, FormConfig } from './types'

export default defineComponent({
  props: {
    itemsConfig: {
      type: Array as PropType<FormItemConfig[]>,
      required: true
    },
    formConfig: {
      type: Object as PropType<FormConfig>,
      default: () => ({
        cols: 1,
        layout: 'vertical',
        labelAlign: 'left'
      })
    },
    model: {
      type: Object as PropType<Record<string, any>>,
      required: true
    }
  },
  setup(props) {
    const determineComponent = (config: FormItemConfig) => {
      // TODO: render a dynamic component based on config.tag
    }

    const renderFormItems = () => {
      const nodes: any = []
      props.itemsConfig.forEach((config) => {
        const inputComponent = determineComponent(config)
        const node = <a-form-item
          label={config.label}
          field={config.field}
          rules={config.rule}
        >{inputComponent}</a-form-item>

        nodes.push(node)
      })

      return nodes
    }

    return () => (
      <a-form
        model={props.model}
        layout={props.formConfig.layout}
        labelAlign={props.formConfig.labelAlign}
        autoLabelWidth={props.formConfig.autoLabelWidth}
      >
        {renderFormItems()}
      </a-form>
    )
  }
})
</script>
