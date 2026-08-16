"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import content from "../../content.config.js";
import MatrixHeartOverlay from "../components/MatrixHeartOverlay.js";

export default function UnlockPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | checking | wrong | success
  const initial = content.recipientName?.trim()?.charAt(0) || "♥";

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "checking" || status === "success") return;
    setStatus("checking");

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 2300);
      } else {
        setStatus("wrong");
        setTimeout(() => setStatus("idle"), 900);
      }
    } catch {
      setStatus("wrong");
      setTimeout(() => setStatus("idle"), 900);
    }
  }

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        gap: "28px",
        textAlign: "center",
        position: "relative"
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: "Amiri, serif",
          fontStyle: "italic",
          color: "var(--gold-soft)",
          fontSize: "1.1rem",
          letterSpacing: "0.5px"
        }}
      >
        رسالة مقفولة باسمك...
      </motion.p>

      {/* الختم / الظرف - العنصر المميز في الصفحة */}
      <motion.div
        animate={
          status === "wrong"
            ? { x: [0, -10, 10, -8, 8, 0] }
            : status === "success"
            ? { scale: [1, 1.15, 0] }
            : {}
        }
        transition={{ duration: status === "success" ? 0.7 : 0.45 }}
        style={{
          width: 132,
          height: 132,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 30%, var(--gold-soft), var(--gold) 55%, #8a6a2c 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.45), inset 0 2px 4px rgba(255,255,255,0.35)",
          position: "relative"
        }}
      >
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.span
              key="seal"
              exit={{ scale: 1.6, opacity: 0, rotate: 12 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "Aref Ruqaa, serif",
                fontSize: "2.6rem",
                color: "var(--plum-deep)"
              }}
            >
              {initial}
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ fontSize: "2rem" }}
            >
              💌
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <div>
        <h1 style={{ fontSize: "1.9rem", color: "var(--cream)" }}>
          {content.recipientName}
        </h1>
        <p style={{ opacity: 0.6, marginTop: 6, fontSize: "0.95rem" }}>
          {status === "success" ? "الختم اتكسر... بيتفتح دلوقتي" : "اكتبي كلمة السر عشان تفتحي الرسالة"}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 14, width: "100%", maxWidth: 320 }}
      >
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={status === "checking" || status === "success"}
          placeholder="كلمة السر"
          style={{
            background: "var(--plum-mid)",
            border: `1px solid ${status === "wrong" ? "#c05a5a" : "rgba(201,162,75,0.35)"}`,
            borderRadius: 999,
            padding: "14px 20px",
            color: "var(--ink)",
            fontSize: "1rem",
            textAlign: "center"
          }}
        />
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={status === "checking" || status === "success"}
          style={{
            background: "linear-gradient(135deg, var(--gold-soft), var(--gold))",
            border: "none",
            borderRadius: 999,
            padding: "13px 20px",
            color: "var(--plum-deep)",
            fontWeight: 600,
            fontSize: "1rem",
            opacity: status === "checking" ? 0.7 : 1
          }}
        >
          {status === "checking" ? "لحظة..." : status === "success" ? "اتفتحت 🤍" : "افتحي الرسالة"}
        </motion.button>
      </form>

      {/* الترانزيشن الكبير: حروف عشوائية بتتجمع تبقي شكل قلب متوهج */}
      <MatrixHeartOverlay show={status === "success"} label="✨ بتتفتح دلوقتي ✨" />
    </main>
  );
}
