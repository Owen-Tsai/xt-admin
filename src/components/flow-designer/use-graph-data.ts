import { Graph, Node, Shape } from '@antv/x6'
import { Transform } from '@antv/x6-plugin-transform'
import { Snapline } from '@antv/x6-plugin-snapline'
import { Stencil } from '@antv/x6-plugin-stencil'
import { Clipboard } from '@antv/x6-plugin-clipboard'
import { Selection } from '@antv/x6-plugin-selection'
import { History } from '@antv/x6-plugin-history'
import { Keyboard } from '@antv/x6-plugin-keyboard'
import { buildingBlocks, edge } from './blocks-config'
import type { Options } from '@antv/x6/lib/graph/options'

export const defaultConfig: Options.Manual = {
  grid: {
    visible: true,
    type: 'doubleMesh',
  },
  panning: {
    enabled: true,
    eventTypes: ['rightMouseDown', 'mouseWheel'],
  },
  mousewheel: {
    enabled: true,
    modifiers: ['ctrl'],
  },
  autoResize: true,
  connecting: {
    snap: true,
    allowBlank: false,
    allowEdge: false,
    router: {
      name: 'manhattan',
      args: { padding: 20 },
    },
    connector: {
      name: 'rounded',
      args: { radius: 4 },
    },
    validateConnection({ targetMagnet }) {
      return !!targetMagnet
    },
    createEdge() {
      return new Shape.Edge(edge)
    },
  },
  highlighting: {
    magnetAdsorbed: {
      name: 'stroke',
      args: {
        padding: 1,
        attrs: {
          strokeWidth: 2,
          stroke: '#00B42A',
        },
      },
    },
  },
}

const setupStencil = (container: HTMLElement, target: Graph) => {
  // create stencil
  const stencil = new Stencil({
    target,
    stencilGraphWidth: 208,
    stencilGraphHeight: 240,
    groups: [
      {
        name: 'default',
        collapsable: false,
      },
    ],
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
    if (graph.canUndo()) {
      graph.undo()
    }
    return false
  })

  graph.bindKey('ctrl+y', () => {
    if (graph.canRedo()) {
      graph.redo()
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
    const ports = container.querySelectorAll(
      '.x6-port-body'
    ) as NodeListOf<SVGAElement>
    showPorts(ports, true)
  })

  graph.on('node:mouseleave', () => {
    const ports = container.querySelectorAll(
      '.x6-port-body'
    ) as NodeListOf<SVGAElement>
    showPorts(ports, false)
  })
}

const useTransformPlugin = (graph: Graph) => {
  graph.use(
    new Transform({
      resizing: {
        enabled: true,
      },
    })
  )
}

const useSnapPlugin = (graph: Graph) => {
  graph.use(
    new Snapline({
      enabled: true,
      resizing: true,
    })
  )
}

const useClipboardPlugin = (graph: Graph) => {
  graph.use(
    new Clipboard({
      enabled: true,
    })
  )
}

const useSelectionPlugin = (graph: Graph) => {
  graph.use(
    new Selection({
      enabled: true,
      multiple: true,
      rubberband: true,
      showEdgeSelectionBox: true,
      showNodeSelectionBox: true,
    })
  )
}

const useHistoryPlugin = (graph: Graph) => {
  graph.use(
    new History({
      enabled: true,
    })
  )
}

const useKeyboardPlugin = (graph: Graph) => {
  graph.use(
    new Keyboard({
      enabled: true,
    })
  )
}

const setupPlugins = (graph: Graph) => {
  useTransformPlugin(graph)
  useSnapPlugin(graph)
  useClipboardPlugin(graph)
  useSelectionPlugin(graph)
  useHistoryPlugin(graph)
  useKeyboardPlugin(graph)
}

export const useGraphInit = (
  canvas: HTMLDivElement,
  stencilPanel: HTMLDivElement
) => {
  const graphInstance = new Graph({
    ...defaultConfig,
    container: canvas,
  })

  setupPlugins(graphInstance)
  setupKeyboardHotkeys(graphInstance)
  setupPortEvents(canvas, graphInstance)
  setupStencil(stencilPanel, graphInstance)

  return graphInstance
}
