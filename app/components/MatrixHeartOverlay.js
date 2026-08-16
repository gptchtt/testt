"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLS = 22;
const ROWS = 30;
const CHAR_POOL = "ABPYHRDT";

// معادلة القلب الرياضية - بتحدد أنهي خلايا هتبقى جوه شكل القلب
function isInsideHeart(nx, ny) {
  const eq = Math.pow(nx * nx + ny * ny - 1, 3) - nx * nx * ny * ny * ny;
  return eq <= 0;
}

function buildGrid() {
  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const nx = ((c / (COLS - 1)) * 2 - 1) * 1.35;
      const ny = -(((r / (ROWS - 1)) * 2 - 1) * 1.35) + 0.35;
      const active = isInsideHeart(nx, ny);
      const char = CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)];
      cells.push({ key: `${r}-${c}`, r, c, active, char });
    }
  }
  return cells;
}

export default function MatrixHeartOverlay({ show, label }) {
  const cells = useMemo(() => buildGrid(), []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="matrix-heart-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="matrix-grid"
            style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
          >
            {cells.map((cell) => (
              <motion.span
                key={cell.key}
                className={`matrix-cell${cell.active ? " matrix-cell--active" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: cell.active ? 1 : 0.4 }}
                transition={{ duration: 0.5, delay: (cell.r + cell.c) * 0.007 }}
              >
                {cell.char}
              </motion.span>
            ))}
          </div>

          {label ? (
            <motion.p
              className="matrix-label"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {label}
            </motion.p>
          ) : null}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
