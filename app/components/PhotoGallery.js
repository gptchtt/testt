"use client";

import { motion } from "framer-motion";

const rotations = [-6, 4, -3, 7, -8, 5];

export default function PhotoGallery({ photos }) {
  return (
    <section style={{ padding: "60px 20px", maxWidth: 1000, margin: "0 auto" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.8rem",
          color: "var(--gold-soft)",
          marginBottom: 40
        }}
      >
        لحظات ما بتتنساش
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "28px 20px"
        }}
      >
        {photos.map((photo, i) => (
          <motion.figure
            key={photo.src + i}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: rotations[i % rotations.length] }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ rotate: 0, scale: 1.04, zIndex: 5 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
            style={{
              margin: 0,
              background: "var(--cream)",
              padding: "10px 10px 20px",
              borderRadius: 4,
              boxShadow: "0 12px 24px rgba(0,0,0,0.35)",
              width: 210
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                borderRadius: 2,
                background: "var(--plum-mid)"
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.caption || "ذكرى"}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {photo.caption ? (
              <figcaption
                style={{
                  fontFamily: "Amiri, serif",
                  fontStyle: "italic",
                  color: "var(--plum-deep)",
                  textAlign: "center",
                  marginTop: 10,
                  fontSize: "0.95rem"
                }}
              >
                {photo.caption}
              </figcaption>
            ) : null}
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
