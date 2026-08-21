"use client";
import { useRef, useState } from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, offset: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = { x: e.clientX, offset: dragOffset };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragOffset(dragStart.current.offset + (e.clientX - dragStart.current.x));
  };

  const stopDrag = () => setDragging(false);

  return (
    <section className="overflow-hidden bg-primary-dark py-20 sm:py-28">
      <div className="container-unm">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Prova social
        </p>
        <h2 className="mt-2 max-w-xl text-3xl font-extrabold text-white sm:text-4xl">
          Quem já chamou a UNM, chama de novo.
        </h2>
      </div>

      <div
        className="relative mt-12 touch-pan-y select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <div style={{ transform: `translate3d(${dragOffset}px, 0, 0)` }}>
          <div
            className="marquee-track flex w-max gap-5 px-5"
            style={{ animationPlayState: dragging ? "paused" : "running" }}
          >
            {doubled.map((t, i) => (
              <article
                key={`${t.name}-${i}`}
                className="w-[300px] shrink-0 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:w-[360px]"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {t.service}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-100">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
