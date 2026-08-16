# Guesser Game — Spec

## Overview
A guessing mode layered on top of the existing interactive map. A "Let's guess!"
button starts it; an "End guessing!" button exits back to normal (facts) mode.
 
## Mode behavior
- While guessing mode is active, the facts feature is fully disabled:
  clicking a region shows nothing, hovering shows no region name.
- The right sidebar swaps from the facts panel to the guess panel.

## Guess panel (right sidebar)
- A vertical list of 27 blocks, one per region.
- Each block is horizontal: a small draggable circle on the left,
  a region-name label on the right.
- Label is GREY when the region is not yet guessed, GREEN when guessed.

## Interaction
- Map regions are droppables. The circles are draggables.
- Drop a circle on the WRONG region: nothing happens — the circle returns to
  its block, the label stays grey.
- Drop a circle on the CORRECT region: the circle disappears from the block,
  the label turns green, and the region on the map turns green.
- Undo: clicking an already-guessed region resets it — its circle returns to
  the block, the label goes grey again, the region goes back to normal.

## Constraints (see CLAUDE.md)
- dnd-kit, not native HTML5 DnD.
- Correct-region detection must use the real region shape (elementFromPoint /
  isPointInFill), matched by UA code — not bounding boxes.