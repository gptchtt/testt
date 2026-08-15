"use client";

import { motion } from "framer-motion";
import content from "../content.config.js";
import PhotoGallery from "./components/PhotoGallery.js";
import SongPlayer from "./components/SongPlayer.js";
import LoveLetters from "./components/LoveLetters.js";

export default function Home() {
  return (
    <main>
      <section
        style={{
          minHeight: "90dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
          gap: 18
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: "var(--blush)", letterSpacing: 1 }}
        >
          لـ {content.recipientName}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          style={{
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            color: "var(--cream)",
            maxWidth: 700,
            lineHeight: 1.4
          }}
        >
          {content.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="letter-text"
          style={{ fontSize: "1.1rem", color: "var(--gold-soft)", fontStyle: "italic" }}
        >
          {content.heroSubtitle}
        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          style={{ marginTop: 40, color: "var(--gold)", fontSize: "1.4rem" }}
        >
          ↓
        </motion.div>
      </section>

      <PhotoGallery photos={content.photos} />
      <SongPlayer song={content.song} />
      <LoveLetters letters={content.loveLetters} signature={content.signature} />

      <footer style={{ textAlign: "center", padding: "30px 20px 50px", opacity: 0.4, fontSize: "0.85rem" }}>
        صُنعت بحب 🤍
      </footer>
    </main>
  );
}
