"use client";

import { motion } from "framer-motion";

export default function PhotoGallery({ photos }) {
  return (
    <section style={{ padding: "50px 0 30px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.8rem",
          color: "var(--gold-soft)",
          marginBottom: 8,
          padding: "0 20px"
        }}
      >
        لحظات ما بتتنساش
      </h2>
      <p style={{ textAlign: "center", opacity: 0.45, fontSize: "0.85rem", marginBottom: 6 }}>
        ← اسحبي عشان تشوفي الباقي →
      </p>

      <div className="photo-carousel">
        {photos.map((photo, i) => (
          <motion.figure
            key={photo.src + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
            className="photo-card-large"
          >
            <div className="photo-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.caption || "ذكرى"} />
            </div>
            {photo.caption ? (
              <figcaption
                style={{
                  fontFamily: "Amiri, serif",
                  fontStyle: "italic",
                  color: "var(--plum-deep)",
                  textAlign: "center",
                  marginTop: 12,
                  fontSize: "1rem"
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
