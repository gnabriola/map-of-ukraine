import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import UkraineMap from './components/UkraineMap'
import FactsSidebar from './components/FactsSidebar'
import GuessPanel from './components/GuessPanel'
import { regionFacts } from './data/ukraineRegionFacts'

const SPRING = { type: 'spring', stiffness: 300, damping: 32 }

// Resolves the region actually under the pointer at drop time by hit-testing
// the real DOM/shape (elementFromPoint), not dnd-kit's bounding-box collision
// — required so jagged/concave oblast borders resolve correctly.
function resolveRegionIdAtPoint(x, y) {
  const el = document.elementFromPoint(x, y)
  const pathEl = el?.closest('path[id^="UA-"]')
  return pathEl?.id ?? null
}

function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [isGuessing, setIsGuessing] = useState(false)
  const [activeDragId, setActiveDragId] = useState(null)
  const [guessedIds, setGuessedIds] = useState(() => new Set())
  const selectedRegion = selectedId ? regionFacts[selectedId] : null
  const isOpen = isGuessing || Boolean(selectedRegion)

  // Live pointer position during a drag, tracked independently of dnd-kit's
  // internal delta (which isn't guaranteed to equal raw pointer movement) so
  // the drop resolution below always hit-tests the real last cursor position.
  const pointerPositionRef = useRef({ x: 0, y: 0 })

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
  )

  const startGuessing = () => {
    setSelectedId(null)
    setGuessedIds(new Set())
    setIsGuessing(true)
  }

  const endGuessing = () => setIsGuessing(false)

  const trackPointer = (e) => {
    pointerPositionRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleDragStart = (event) => {
    setActiveDragId(event.active.id)
    pointerPositionRef.current = {
      x: event.activatorEvent.clientX,
      y: event.activatorEvent.clientY,
    }
    window.addEventListener('pointermove', trackPointer)
  }

  const handleDragEnd = (event) => {
    window.removeEventListener('pointermove', trackPointer)
    setActiveDragId(null)
    const { active } = event
    const { x, y } = pointerPositionRef.current
    const droppedId = resolveRegionIdAtPoint(x, y)
    const isCorrect = droppedId === active.id

    console.log(
      isCorrect
        ? `[guess] correct: ${active.id} -> ${droppedId}`
        : `[guess] incorrect: ${active.id} -> ${droppedId ?? 'none'}`,
    )

    if (isCorrect) {
      setGuessedIds((prev) => new Set(prev).add(active.id))
    }
  }

  const handleDragCancel = () => {
    window.removeEventListener('pointermove', trackPointer)
    setActiveDragId(null)
  }

  const handleUndoGuess = (id) => {
    setGuessedIds((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <header className="shrink-0 px-4 pt-5 pb-3 text-center sm:px-6 sm:pt-8 sm:pb-4">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 sm:mb-2 sm:text-sm sm:tracking-[0.3em]">
          Ukrainian Country Evening
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          Map of Ukraine
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-balance text-xs text-blue-200/80 sm:text-sm md:text-base">
          {isGuessing
            ? 'Drag each region label onto the map.'
            : 'Explore all 27 regions of Ukraine. Click an oblast to reveal its facts.'}
        </p>

        <div className="mt-3 sm:mt-4">
          {isGuessing ? (
            <button
              type="button"
              onClick={endGuessing}
              className="rounded-full border border-rose-400/40 bg-rose-500/10 px-5 py-2 text-sm font-semibold text-rose-300 transition hover:bg-rose-500/20"
            >
              End guessing!
            </button>
          ) : (
            <button
              type="button"
              onClick={startGuessing}
              className="rounded-full border border-amber-400/40 bg-amber-500/10 px-5 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-500/20"
            >
              Let's guess!
            </button>
          )}
        </div>
      </header>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <main className="flex min-h-0 flex-1 justify-center px-3 pb-4 sm:px-6 sm:pb-8">
          <div className="flex h-full w-full max-w-6xl flex-col gap-3 sm:flex-row sm:gap-4">
            <motion.div
              animate={{ flexGrow: isOpen ? 7 : 1 }}
              transition={SPRING}
              style={{ flexBasis: 0 }}
              className="flex min-h-0 min-w-0 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur sm:h-full sm:p-6"
            >
              <UkraineMap
                selectedId={selectedId}
                onSelect={setSelectedId}
                disabled={isGuessing}
                guessedIds={guessedIds}
                onUndoGuess={handleUndoGuess}
              />
            </motion.div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="sidebar"
                  initial={{ flexGrow: 0, opacity: 0 }}
                  animate={{ flexGrow: 3, opacity: 1 }}
                  exit={{ flexGrow: 0, opacity: 0 }}
                  transition={SPRING}
                  style={{ flexBasis: 0 }}
                  className="max-h-[45vh] min-w-0 overflow-hidden sm:h-full sm:max-h-none"
                >
                  {isGuessing ? (
                    <GuessPanel guessedIds={guessedIds} />
                  ) : (
                    <FactsSidebar
                      region={selectedRegion}
                      onClose={() => setSelectedId(null)}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <DragOverlay style={{ pointerEvents: 'none' }}>
          {activeDragId ? (
            <span className="block size-6 rounded-full border border-white/60 bg-amber-400 shadow-lg sm:size-4" />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}

export default App
