import { motion, AnimatePresence } from 'motion/react'

export default function FactsSidebar({ region, onClose }) {
  if (!region) return null

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
      <div className="flex shrink-0 items-start justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6 sm:py-5">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-white sm:text-xl">{region.name}</h2>
          <p className="truncate text-xs text-blue-200/70 sm:text-sm">{region.nameUk}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close facts panel"
          className="shrink-0 rounded-full p-2 text-blue-200/70 transition hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={region.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="min-h-0 flex-1 overflow-y-auto px-4 py-3 sm:px-6 sm:py-5"
        >
          <ul className="space-y-3 sm:space-y-4">
            {region.facts.map((fact, i) => (
              <li key={i} className="flex gap-3 text-xs leading-relaxed text-blue-100/90 sm:text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
