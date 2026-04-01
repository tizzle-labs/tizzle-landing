import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Hero entry timeline ──────────────────────────────────────────────────────
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from("#hero-eyebrow", { x: -24, opacity: 0, duration: 0.6 })
  .from("#hero-logo", { y: 24, opacity: 0, duration: 0.7 }, "-=0.3")
  .from("#hero-headline", { y: 32, opacity: 0, duration: 0.8 }, "-=0.4")
  .from("#hero-cta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.35")
  .from(".hero-stat", { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
  .from(
    "#hero-statue-wrap",
    { x: 64, opacity: 0, duration: 1.1, ease: "power3.out" },
    0.15
  );

// ─── Eye glow: core pulse (all screens) ──────────────────────────────────────
gsap.to("#eye-glow", {
  scale: 1.8,
  opacity: 0.75,
  duration: 1.9,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
});

// ─── Eye glow: outer expanding ring (all screens) ────────────────────────────
gsap.fromTo(
  "#eye-glow-outer",
  { scale: 0.8, opacity: 0.7 },
  { scale: 3.0, opacity: 0, duration: 2.5, repeat: -1, ease: "power1.out" }
);

// ─── Desktop-only: float + mouse parallax ────────────────────────────────────
gsap.matchMedia().add("(min-width: 768px)", () => {
  gsap.to(".hero-float", {
    y: -16,
    duration: 3.6,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
  });

  document.addEventListener("mousemove", (e) => {
    const xFactor = (e.clientX / window.innerWidth - 0.5) * 2;
    const yFactor = (e.clientY / window.innerHeight - 0.5) * 2;
    gsap.to("#hero-statue-wrap", {
      x: xFactor * -14,
      y: yFactor * -9,
      duration: 1.4,
      ease: "power1.out",
      overwrite: "auto",
    });
  });
});

// ─── Scroll: section eyebrows ─────────────────────────────────────────────────
gsap.utils.toArray(".section-eyebrow").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 90%" },
    x: -20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});

// ─── Scroll: section headings ─────────────────────────────────────────────────
gsap.utils.toArray(".section-heading").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 88%" },
    y: 24,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  });
});

// ─── Scroll: How It Works cards ───────────────────────────────────────────────
gsap.from(".hiw-card", {
  scrollTrigger: { trigger: "#section-hiw", start: "top 80%" },
  y: 40,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out",
});

// ─── Scroll: Feature cards ────────────────────────────────────────────────────
gsap.from(".feature-card", {
  scrollTrigger: { trigger: "#section-features", start: "top 80%" },
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.07,
  ease: "power2.out",
});

// ─── Scroll: App screenshots ──────────────────────────────────────────────────
gsap.from(".app-screenshot", {
  scrollTrigger: { trigger: "#section-app", start: "top 80%" },
  y: 50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out",
});

// ─── Scroll: FAQ items ────────────────────────────────────────────────────────
gsap.from(".faq-item", {
  scrollTrigger: { trigger: "#section-faq", start: "top 85%" },
  y: 20,
  opacity: 0,
  duration: 0.45,
  stagger: 0.08,
  ease: "power1.out",
});

// ─── Scroll: Waitlist ─────────────────────────────────────────────────────────
gsap.from(".waitlist-content", {
  scrollTrigger: { trigger: "#waitlist", start: "top 82%" },
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.12,
  ease: "power2.out",
});
