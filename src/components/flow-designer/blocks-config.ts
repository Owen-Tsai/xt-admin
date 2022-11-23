import { Graph } from '@antv/x6'
import type { Node } from '@antv/x6/lib/model'

// register nodes

const attrs = {
  body: {
    fill: '#E8F3FF',
    stroke: '#165DFF'
  },
  label: {
    fill: '#165DFF'
  }
}

const buildingBlocks: Node.Metadata[] = [
  {
    label: '开始',
    shape: 'circle',
    width: 48,
    height: 48,
    attrs
  },
  {
    label: '审批',
    shape: 'rect',
    height: 48,
    width: 80,
    attrs
  },
  {
    label: '抄送',
    shape: 'rect',
    height: 48,
    width: 80,
    attrs: {
      ...attrs,
      body: {
        stroke: '#94BFFF'
      }
    }
  }
]

export default buildingBlocks
