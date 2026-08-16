"use client";

import { motion } from "framer-motion";
import content from "../content.config.js";
import PhotoGallery from "./components/PhotoGallery.js";
import SongPlayer from "./components/SongPlayer.js";
import LoveLetters from "./components/LoveLetters.js";
import FloatingHearts from "./components/FloatingHearts.js";

export default function Home() {
  const featuredPhoto = content.photos?.[0];

  return (
    <main>
      <section
        style={{
          position: "relative",
          minHeight: "94dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "36px 20px 20px",
          gap: 14,
          overflow: "hidden"
        }}
      >
        <FloatingHearts count={14} />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: "var(--blush)", letterSpacing: 1, zIndex: 1 }}
        >
          لـ {content.recipientName}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          style={{
            fontSize: "clamp(1.9rem, 6vw, 3rem)",
            color: "var(--cream)",
            maxWidth: 640,
            lineHeight: 1.4,
            zIndex: 1
          }}
        >
          {content.heroTitle}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="heart-divider"
          style={{ zIndex: 1 }}
        >
          ♥
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="letter-text"
          style={{ fontSize: "1.05rem", color: "var(--gold-soft)", fontStyle: "italic", zIndex: 1 }}
        >
          {content.heroSubtitle}
        </motion.p>

        {featuredPhoto ? (
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hero-photo-frame"
            style={{ marginTop: 18 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featuredPhoto.src} alt={featuredPhoto.caption || "ذكرى"} />

            <motion.span
              className="sparkle"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.15, 0.9] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
              style={{ top: -14, left: -16, fontSize: "1.6rem" }}
            >
              ✦
            </motion.span>
            <motion.span
              className="sparkle"
              animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.6 }}
              style={{ bottom: 6, right: -14, fontSize: "1.2rem" }}
            >
              ✦
            </motion.span>
            <motion.span
              className="heart-badge"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.6 }}
              style={{ top: -18, right: -12, fontSize: "1.8rem" }}
            >
              ♥
            </motion.span>
          </motion.div>
        ) : null}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          style={{ marginTop: 26, color: "var(--gold)", fontSize: "1.3rem", zIndex: 1 }}
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
