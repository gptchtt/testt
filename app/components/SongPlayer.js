"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SongPlayer({ song }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  }

  return (
    <section
      style={{
        padding: "40px 20px 70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 22
      }}
    >
      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.96 }}
        animate={{ rotate: playing ? 360 : 0 }}
        transition={
          playing
            ? { repeat: Infinity, duration: 6, ease: "linear" }
            : { duration: 0.3 }
        }
        aria-label={playing ? "وقف الأغنية" : "شغل الأغنية"}
        style={{
          width: 130,
          height: 130,
          borderRadius: "50%",
          background:
            "repeating-radial-gradient(circle, #14090f 0px, #14090f 6px, #1f0f1a 7px, #1f0f1a 12px)",
          border: "3px solid var(--gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "var(--gold-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            color: "var(--plum-deep)"
          }}
        >
          {playing ? "❚❚" : "▶"}
        </span>
      </motion.button>

      <div style={{ textAlign: "center" }}>
        <p style={{ color: "var(--cream)", fontSize: "1.05rem", margin: 0 }}>
          {song.title}
        </p>
        <p style={{ color: "var(--blush)", fontSize: "0.85rem", margin: "4px 0 0", opacity: 0.85 }}>
          {song.artist}
        </p>
      </div>

      <audio ref={audioRef} src={song.src} onEnded={() => setPlaying(false)} />
    </section>
  );
}
