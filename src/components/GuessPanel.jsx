import { useDraggable } from '@dnd-kit/core'
import { REGION_NAMES } from '../data/regions'

const REGIONS = Object.entries(REGION_NAMES)
  .map(([id, name]) => ({ id, name }))
  .sort((a, b) => a.name.localeCompare(b.name))

function DraggableCircle({ id }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id })

  return (
    <span
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`size-6 shrink-0 touch-none rounded-full border border-white/40 bg-blue-400 sm:size-4 ${
        isDragging ? 'cursor-grabbing opacity-30' : 'cursor-grab'
      }`}
    />
  )
}

export default function GuessPanel({ guessedIds }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
      <div className="shrink-0 border-b border-white/10 px-4 py-3 sm:px-6 sm:py-5">
        <h2 className="text-lg font-bold text-white sm:text-xl">Guess the Regions</h2>
        <p className="text-xs text-blue-200/70 sm:text-sm">Drag each label onto the map</p>
      </div>

      <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto px-4 py-3 sm:space-y-1.5 sm:py-4">
        {REGIONS.map((region) => {
          const isGuessed = guessedIds?.has(region.id)

          return (
            <li
              key={region.id}
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 sm:py-2"
            >
              {isGuessed ? (
                <span className="size-6 shrink-0 sm:size-4" />
              ) : (
                <DraggableCircle id={region.id} />
              )}
              <span
                className={`truncate text-sm font-medium ${
                  isGuessed ? 'text-emerald-400' : 'text-slate-400'
                }`}
              >
                {region.name}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
