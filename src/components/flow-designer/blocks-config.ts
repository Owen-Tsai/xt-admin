import type { Node } from '@antv/x6/lib/model'
import type { Attr } from '@antv/x6/lib/registry/attr'
import type { PortManager } from '@antv/x6/lib/model/port'

// common attributes
const endpointAttrs = {
  body: {
    fill: '#E8FFEA',
    stroke: '#00B42A',
    strokeWidth: 1
  },
  label: {
    fill: '#00B42A'
  }
}

const stepAttrs = {
  body: {
    fill: '#E8F3FF',
    stroke: '#165DFF',
    strokeWidth: 1
  },
  label: {
    fill: '#165DFF'
  }
}

// ports
const getPortAttrsByColor = (color: string) => ({
  circle: {
    r: 4,
    magnet: true,
    stroke: color,
    strokeWidth: 1,
    fill: '#fff',
    style: { visibility: 'hidden' }
  }
})

const getPortConfigByColor = (color: string) => ({
  groups: {
    top: {
      position: 'top',
      attrs: getPortAttrsByColor(color)
    },
    bottom: {
      position: 'bottom',
      attrs: getPortAttrsByColor(color)
    },
    left: {
      position: 'left',
      attrs: getPortAttrsByColor(color)
    },
    right: {
      position: 'right',
      attrs: getPortAttrsByColor(color)
    },
  },
  items: [
    { group: 'top' },
    { group: 'bottom' },
    { group: 'left' },
    { group: 'right' }
  ]
})

const buildingBlocks: Node.Metadata[] = [
  {
    label: '开始',
    shape: 'circle',
    width: 48,
    height: 48,
    attrs: endpointAttrs,
    // ports: getPortAttrsByColor('#00B42A')
    ports: getPortConfigByColor('#00B42A')
  },
  {
    label: '结束',
    shape: 'circle',
    width: 48,
    height: 48,
    attrs: endpointAttrs,
    ports: getPortConfigByColor('#00B42A')
  },
  {
    label: '审批',
    shape: 'rect',
    height: 48,
    width: 80,
    attrs: stepAttrs,
    ports: getPortConfigByColor('#165DFF')
  },
  {
    label: '抄送',
    shape: 'rect',
    height: 48,
    width: 80,
    attrs: stepAttrs,
    ports: getPortConfigByColor('#165DFF')
  },
  {
    label: '网关',
    shape: 'polygon',
    height: 58,
    width: 58,
    attrs: {
      body: {
        fill: '#FFF3E8',
        stroke: '#F77234',
        strokeWidth: 1,
        refPoints: '0,10 10,0 20,10 10,20',
      },
      label: {
        fill: '#F77234'
      }
    },
    ports: getPortConfigByColor('#F77234')
  }
]

export default buildingBlocks
