import { Graph, Addon, Node } from '@antv/x6'
import type { Options } from '@antv/x6/lib/graph/options'
import buildingBlocks from './blocks-config'

export const defaultConfig: Options.Manual = {
  grid: true,
  mousewheel: {
    enabled: true
  },
  panning: {
    enabled: true,
    eventTypes: ['rightMouseDown']
  },
  selecting: {
    enabled: true,
    rubberband: true,
    multiple: true,
    showNodeSelectionBox: true,
  },
  keyboard: true,
  snapline: true
}

const setupStencil = (container: HTMLElement, target: Graph) => {
  // create stencil
  const stencil = new Addon.Stencil({
    target,
    stencilGraphWidth: 200,
    stencilGraphHeight: 400,
    groups: [
      {
        name: 'default',
        title: '流程与环节',
        collapsable: false
      }
    ]
  })

  const nodes: Node[] = []
  buildingBlocks.forEach((config) => {
    nodes.push(target.createNode(config))
  })

  stencil.load(nodes, 'default')
  container.appendChild(stencil.container)

  return stencil
}

const setupEvents = () => {
  // TODO
}

export const setupGraph = (canvas: HTMLDivElement, stencilPanel: HTMLDivElement) => {
  const graphInstance = new Graph({
    ...defaultConfig,
    container: canvas
  })

  const stencil = setupStencil(stencilPanel, graphInstance)

  return graphInstance
}
