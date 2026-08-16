import { useEffect, useMemo, useRef, useState } from 'react'
import { useDroppable } from '@dnd-kit/core'
import ukraineSvgRaw from '../assets/ukraine.svg?raw'
import { REGION_NAMES } from '../data/regions'

const VIEW_BOX = '0 0 612.47321 408.0199'

const PATH_PATTERN = /<path\s+d="([^"]+)"[^>]*\bid="(UA-\d+)"[^>]*\/>/g

const MIN_LABEL_FONT_SIZE = 3
const MAX_LABEL_FONT_SIZE = 7

function parseRegions(svgSource) {
  const regions = []
  for (const match of svgSource.matchAll(PATH_PATTERN)) {
    const [, d, id] = match
    regions.push({ id, d, name: REGION_NAMES[id] ?? id })
  }
  return regions
}

function RegionPath({ region, isSelected, isHovered, isGuessed, disabled, onMouseEnter, onMouseLeave, onClick, registerNode }) {
  // Registers this region as a dnd-kit droppable. Its rect is only used for
  // dnd-kit's own (bounding-box) collision detection / `isOver` state — the
  // actual drop resolution in App.jsx re-derives the region from the real
  // pointer position via elementFromPoint, which respects the true path
  // shape instead of this rectangle.
  const { setNodeRef } = useDroppable({ id: region.id })

  const setRefs = (node) => {
    setNodeRef(node)
    registerNode?.(region.id, node)
  }

  const fillAndStroke = isGuessed
    ? 'fill-emerald-500 stroke-white/80 stroke-[1.2]'
    : isSelected
      ? 'fill-amber-400 stroke-white/90 stroke-[1.4]'
      : `stroke-slate-900/40 stroke-[0.6] ${
          isHovered && !disabled ? 'fill-blue-400' : 'fill-blue-500'
        }`

  return (
    <path
      ref={setRefs}
      d={region.d}
      id={region.id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`transition-colors duration-150 ease-out ${
        disabled && !isGuessed ? 'cursor-default' : 'cursor-pointer'
      } ${fillAndStroke}`}
    >
      {!disabled && <title>{region.name}</title>}
    </path>
  )
}

export default function UkraineMap({ selectedId, onSelect, disabled = false, guessedIds, onUndoGuess }) {
  const regions = useMemo(() => parseRegions(ukraineSvgRaw), [])
  const [hoveredId, setHoveredId] = useState(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [labels, setLabels] = useState({})
  const pathNodesRef = useRef(new Map())

  const hoveredName = regions.find((r) => r.id === hoveredId)?.name

  const registerPathNode = (id, node) => {
    if (node) pathNodesRef.current.set(id, node)
    else pathNodesRef.current.delete(id)
  }

  // Measured once after the paths mount: each region's label is centered on
  // its actual shape (via getBBox, not a hardcoded position) and sized to fit
  // inside it, so tiny oblasts get a smaller label instead of overflowing.
  useEffect(() => {
    const next = {}
    for (const region of regions) {
      const node = pathNodesRef.current.get(region.id)
      if (!node) continue
      const bbox = node.getBBox()
      const fontSize = Math.max(
        MIN_LABEL_FONT_SIZE,
        Math.min(
          MAX_LABEL_FONT_SIZE,
          (bbox.width * 0.85) / (region.name.length * 0.55),
          bbox.height * 0.5,
        ),
      )
      next[region.id] = {
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2,
        fontSize,
      }
    }
    // Layout can only be measured after the paths exist in the DOM, so this
    // state can't be derived during render — a sanctioned exception to the
    // no-setState-in-effect rule.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLabels(next)
  }, [regions])

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPointer({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
    >
      <svg
        viewBox={VIEW_BOX}
        className="h-full w-full drop-shadow-[0_20px_45px_rgba(15,23,42,0.35)]"
        role="img"
        aria-label="Map of Ukraine by oblast"
      >
        {regions.map((region) => (
          <RegionPath
            key={region.id}
            region={region}
            isSelected={region.id === selectedId}
            isHovered={region.id === hoveredId}
            isGuessed={disabled && guessedIds?.has(region.id)}
            disabled={disabled}
            registerNode={registerPathNode}
            onMouseEnter={() => !disabled && setHoveredId(region.id)}
            onMouseLeave={() =>
              setHoveredId((current) => (current === region.id ? null : current))
            }
            onClick={() => {
              if (disabled) {
                if (guessedIds?.has(region.id)) onUndoGuess?.(region.id)
                return
              }
              onSelect?.(region.id === selectedId ? null : region.id)
            }}
          />
        ))}

        {disabled &&
          regions.map((region) => {
            if (!guessedIds?.has(region.id)) return null
            const label = labels[region.id]
            if (!label) return null
            return (
              <text
                key={region.id}
                x={label.x}
                y={label.y}
                fontSize={label.fontSize}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none select-none fill-white font-semibold"
                style={{
                  paintOrder: 'stroke',
                  stroke: 'rgba(6,78,59,0.65)',
                  strokeWidth: label.fontSize * 0.18,
                }}
              >
                {region.name}
              </text>
            )
          })}
      </svg>

      {!disabled && hoveredId && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+12px)] whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white shadow-lg"
          style={{ left: pointer.x, top: pointer.y }}
        >
          {hoveredName}
          <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-900" />
        </div>
      )}
    </div>
  )
}
