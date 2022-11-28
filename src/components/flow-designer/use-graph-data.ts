import {
  Graph, Addon, Node, Shape
} from '@antv/x6'
import type { Options } from '@antv/x6/lib/graph/options'
import {
  buildingBlocks,
  edge
} from './blocks-config'

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
    showEdgeSelectionBox: true,
    multiple: true,
    showNodeSelectionBox: true,
  },
  connecting: {
    router: {
      name: 'manhattan',
      args: { padding: 10 }
    },
    connector: {
      name: 'rounded',
      args: { radius: 4 }
    },
    allowBlank: false,
    snap: {
      radius: 16
    },
    createEdge: () => new Shape.Edge(edge),
    validateConnection: ({ targetMagnet }) => !!targetMagnet
  },
  highlighting: {
    magnetAdsorbed: {
      name: 'stroke',
      args: {
        padding: 1,
        attrs: {
          strokeWidth: 2,
          stroke: '#00B42A'
        }
      }
    }
  },
  keyboard: true,
  snapline: true,
  resizing: true,
  clipboard: true,
  history: true
}

const setupStencil = (container: HTMLElement, target: Graph) => {
  // create stencil
  const stencil = new Addon.Stencil({
    target,
    stencilGraphWidth: 200,
    stencilGraphHeight: 240,
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

const setupKeyboardHotkeys = (graph: Graph) => {
  graph.bindKey('ctrl+c', () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.copy(cells)
    }
    return false
  })

  graph.bindKey('ctrl+v', () => {
    if (!graph.isClipboardEmpty()) {
      const cells = graph.paste({ offset: 32 })
      graph.cleanSelection()
      graph.select(cells)
    }
  })

  graph.bindKey('ctrl+x', () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.cut(cells)
    }
    return false
  })

  graph.bindKey('ctrl+a', () => {
    graph.select(graph.getNodes())
  })

  graph.bindKey(['backspace', 'delete'], () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.removeCells(cells)
    }
  })

  graph.bindKey('ctrl+z', () => {
    if (graph.history.canUndo()) {
      graph.history.undo()
    }
    return false
  })

  graph.bindKey('ctrl+y', () => {
    if (graph.history.canRedo()) {
      graph.history.redo()
    }
    return false
  })
}

const setupPortEvents = (container: HTMLElement, graph: Graph) => {
  const showPorts = (ports: NodeListOf<SVGElement>, visible: boolean) => {
    ports.forEach((port) => {
      port.style.visibility = visible ? 'visible' : 'hidden'
    })
  }

  graph.on('node:mouseenter', () => {
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>
    showPorts(ports, true)
  })

  graph.on('node:mouseleave', () => {
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>
    showPorts(ports, false)
  })
}

export const useGraphInit = (
  canvas: HTMLDivElement,
  stencilPanel: HTMLDivElement
) => {
  const graphInstance = new Graph({
    ...defaultConfig,
    container: canvas
  })

  setupKeyboardHotkeys(graphInstance)
  setupPortEvents(canvas, graphInstance)
  setupStencil(stencilPanel, graphInstance)

  return graphInstance
}
