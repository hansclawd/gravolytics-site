"use client";

import { useEffect, useMemo, useState } from "react";

const pillars = [
  {
    index: "01",
    title: "Spacetime Surfaces",
    body:
      "Gravolytics is the visual lab for warped geometry, potential wells, field gradients, and the kinds of structures that look theoretical until they start shaping engineering decisions.",
  },
  {
    index: "02",
    title: "Field Interpretation",
    body:
      "The project is less about spectacle and more about learning to read structure: asymmetry, confinement, flow, charge transport, and the visual signatures of systems that refuse to stay simple.",
  },
  {
    index: "03",
    title: "Anomaly Discipline",
    body:
      "AE-Spooky exists to investigate weirdness without becoming stupid. Signal before myth. Instrumentation before narrative. Hostile debunking before celebration.",
  },
] as const;

const sections = [
  {
    id: "hero",
    eyebrow: "AE-SPOOKY // SPECIAL PROGRAMS",
    title: "Gravolytics",
    lead:
      "A visual environment for spacetime intuition, field asymmetry, gravity-well geometry, and disciplined electrogravitics research.",
    detail:
      "Part software instrument, part research surface, part low-light lab artifact. Built for the side of engineering that lives somewhere between mathematics, hardware, and unanswered questions.",
  },
  {
    id: "well",
    eyebrow: "FIELD STRUCTURES",
    title: "See the shape before you name the effect.",
    lead:
      "Gravolytics is built around the visual language of curvature: sinks, basins, shear, collapse, asymmetry, and boundary conditions that begin as geometry and end as engineering decisions.",
    detail:
      "The point is not to romanticize the unknown. The point is to render difficult structure clearly enough that a real hypothesis can survive contact with it.",
  },
  {
    id: "interpretation",
    eyebrow: "INTERPRETATION LAYER",
    title: "A place to examine strange behavior without flattering it.",
    lead:
      "Not every unusual result is a breakthrough. Some are charge transport. Some are thermal ghosts. Some are geometry finally making itself visible. Gravolytics exists to sort signal from atmosphere.",
    detail:
      "This layer of the project is about reading systems correctly: where gradients sharpen, where materials respond, where fields leak into motion, and where interpretation tends to get ahead of the evidence.",
  },
  {
    id: "materials",
    eyebrow: "WATCHLIST",
    title: "Materials with unusual manners.",
    lead:
      "Some materials seem to invite better questions than others. High-k ceramics, dense diamagnetic metals, strange dielectrics, temperamental semiconductors — the watchlist is less a shopping list than a map of promising trouble.",
    detail:
      "Barium titanate, bismuth, and related candidates sit here because they distort expectations in useful ways: permittivity, polarization, density, magnetic response, leakage, structure. Enough character to deserve a closer look.",
  },
  {
    id: "rigor",
    eyebrow: "RESEARCH DISCIPLINE",
    title: "Electrogravitics has survived this long because curiosity is cheap. Rigor is not.",
    lead:
      "The field is crowded with claims that glow nicely in the dark and collapse in daylight. AE-Spooky takes the opposite route: every effect gets treated as ordinary until it survives the boring explanations.",
    detail:
      "Momentum accounting, pressure dependence, thermal controls, shielding, geometry checks, vacuum behavior, and instrumentation suspicion are not obstacles to discovery. They are the admission price.",
  },
] as const;

const watchlist = [
  "Barium titanate ceramic dielectrics",
  "Bismuth",
  "High-k ceramics",
  "Wide-bandgap semiconductors",
  "Controlled gas media",
] as const;

const rigorChecks = [
  "Where did the counter-momentum go?",
  "Kill ion wind, thermal lift, charging artifacts, and chamber coupling first.",
  "Treat instrumentation drift as guilty until proven innocent.",
  "Archive false positives as carefully as successes.",
] as const;

const brownHistory = [
  {
    title: "Early experiments",
    body:
      "Thomas Townsend Brown began with high-voltage asymmetrical tube experiments and became convinced that strong electric fields were doing something deeper than ordinary electrostatics.",
  },
  {
    title: "Electrogravitics language",
    body:
      "He spent decades describing propulsion, gravity interaction, and what became known as the Biefeld–Brown effect — a mix of real observed force and disputed interpretation.",
  },
  {
    title: "Why it matters now",
    body:
      "Gravolytics inherits that tension directly: the need to visualize field behavior clearly enough to separate atmospheric EHD effects, instrumentation artifacts, and any genuinely interesting residuals.",
  },
] as const;

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      setProgress(window.scrollY / max);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

function BlackHoleBackground() {
  const progress = useScrollProgress();
  const flarePhase = Math.max(0, Math.sin(progress * Math.PI * 8));
  const flareStrength = Math.pow(flarePhase, 18);
  const secondaryFlare = Math.pow(Math.max(0, Math.sin(progress * Math.PI * 13 + 0.8)), 24);
  const translateY = `${8 + progress * 7}%`;
  const rotation = `${progress * 160}deg`;
  const ringRotation = `${-progress * 110}deg`;
  const haloOpacity = 0.22 + flareStrength * 0.18 + secondaryFlare * 0.14;
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${(i * 17.3) % 100}%`,
        top: `${(i * 29.1 + 11) % 100}%`,
        size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1,
        opacity: i % 4 === 0 ? 0.75 : 0.45,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.1),transparent_30%),radial-gradient(circle_at_80%_16%,rgba(168,85,247,0.08),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.04),transparent_26%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:56px_56px]" />

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.4)]"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}

      <div
        className="absolute left-1/2 top-0 h-[95rem] w-[95rem] -translate-x-1/2"
        style={{ transform: `translate(-50%, ${translateY})` }}
      >
        <div className="absolute left-1/2 top-[10%] h-[64rem] w-[64rem] -translate-x-1/2 rounded-full border border-cyan-300/8" />
        <div className="absolute left-1/2 top-[15%] h-[54rem] w-[54rem] -translate-x-1/2 rounded-full border border-fuchsia-300/8" />

        <div
          className="absolute left-1/2 top-[22%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full"
          style={{ transform: `translateX(-50%) rotate(${rotation})` }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-90"
            style={{
              background:
                "conic-gradient(from 140deg, rgba(125,211,252,0.05), rgba(251,191,36,0.22), rgba(245,158,11,0.42), rgba(217,70,239,0.18), rgba(125,211,252,0.05))",
              filter: "blur(10px)",
              transform: "scaleY(0.32) scaleX(1.08)",
            }}
          />
          <div
            className="absolute inset-[8%] rounded-full"
            style={{
              background:
                "conic-gradient(from 220deg, rgba(255,255,255,0.04), rgba(253,224,71,0.2), rgba(251,146,60,0.48), rgba(125,211,252,0.08), rgba(255,255,255,0.04))",
              filter: "blur(18px)",
              transform: "scaleY(0.2) scaleX(1.14)",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[25.5%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full"
          style={{ transform: `translateX(-50%) rotate(${ringRotation})` }}
        >
          <div
            className="absolute inset-0 rounded-full border border-cyan-100/6"
            style={{ transform: "scaleY(0.38) rotate(16deg)", filter: "blur(1px)" }}
          />
          <div
            className="absolute inset-[12%] rounded-full border border-white/6"
            style={{ transform: "scaleY(0.34) rotate(-10deg)", filter: "blur(1px)" }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[26.5%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.98) 38%, rgba(125,211,252,${haloOpacity * 0.22}) 58%, rgba(125,211,252,${haloOpacity * 0.1}) 66%, transparent 74%)`,
            boxShadow: `0 0 120px rgba(125,211,252,${haloOpacity * 0.45})`,
          }}
        >
          <div
            className="absolute inset-[-12%] rounded-full"
            style={{
              background: `radial-gradient(circle at center, transparent 34%, rgba(255,255,255,${0.02 + flareStrength * 0.12}) 50%, transparent 66%)`,
              filter: "blur(14px)",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[28.5%] h-[18rem] w-[34rem] -translate-x-1/2"
          style={{ opacity: 0.16 + flareStrength * 0.5 }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[3px] w-[120%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(125,211,252,0.05), rgba(255,255,255,0.42), rgba(125,211,252,0.08), transparent)",
              filter: "blur(3px)",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[18%] h-[26rem] w-[6rem] -translate-x-1/2"
          style={{ opacity: flareStrength * 0.85 + secondaryFlare * 0.45 }}
        >
          <div
            className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(125,211,252,0.18), rgba(255,255,255,0.8), rgba(125,211,252,0.18), transparent)",
              clipPath: "polygon(50% 0%, 70% 14%, 56% 100%, 44% 100%, 30% 14%)",
              filter: "blur(8px)",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[34%] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full"
          style={{
            opacity: 0.22 + flareStrength * 0.32,
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(125,211,252,0.12) 20%, rgba(125,211,252,0.04) 38%, transparent 64%)",
            filter: "blur(22px)",
          }}
        />
      </div>
    </div>
  );
}

function SaucerEasterEgg() {
  return (
    <div className="pointer-events-none absolute right-[7%] top-[22%] hidden opacity-60 lg:block">
      <div className="relative h-16 w-28 animate-[float_ufo_7s_ease-in-out_infinite]">
        <div className="absolute left-5 top-0 h-6 w-18 rounded-full border border-cyan-200/40 bg-[radial-gradient(circle_at_50%_35%,rgba(186,230,253,0.45),rgba(34,211,238,0.12)_55%,transparent_78%)]" />
        <div className="absolute left-0 top-4 h-7 w-28 rounded-[999px] border border-cyan-100/20 bg-[linear-gradient(180deg,rgba(226,232,240,0.34),rgba(15,23,42,0.8))] shadow-[0_0_24px_rgba(125,211,252,0.18)]" />
        <div className="absolute left-5 top-8 flex w-[4.5rem] justify-between px-1">
          {[0, 1, 2, 3].map((light) => (
            <span key={light} className="h-1.5 w-1.5 rounded-full bg-amber-300/80 shadow-[0_0_12px_rgba(252,211,77,0.75)]" />
          ))}
        </div>
      </div>
    </div>
  );
}

function FocusSection({
  section,
  index,
}: {
  section: (typeof sections)[number];
  index: number;
}) {
  return (
    <section id={section.id} className="relative min-h-[115svh] snap-start px-6 py-10 lg:px-10">
      <div className="sticky top-0 flex min-h-[100svh] items-center py-14">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-cyan-200/70">{section.eyebrow}</p>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl lg:text-[4.8rem] lg:leading-[0.96]">
              {section.title}
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 md:text-xl md:leading-9">{section.lead}</p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/46 md:text-base">{section.detail}</p>
          </div>

          <div className="relative flex min-h-[28rem] items-center justify-center">
            <div className="absolute inset-0 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] backdrop-blur-sm" />
            <div className="absolute inset-[10%] rounded-[1.75rem] border border-cyan-300/10 bg-[radial-gradient(circle_at_50%_45%,rgba(125,211,252,0.16),transparent_26%),radial-gradient(circle_at_50%_72%,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.84),rgba(2,6,23,0.94))]" />

            {index === 1 ? (
              <div className="relative z-10 h-[22rem] w-[22rem]">
                <div className="absolute inset-0 rounded-full border border-cyan-200/10" />
                <div className="absolute inset-[12%] rounded-full border border-fuchsia-300/12" />
                <div className="absolute inset-[25%] rounded-full border border-white/10" />
                <div className="absolute inset-[36%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.98)_0%,rgba(15,23,42,0.98)_42%,rgba(125,211,252,0.12)_60%,transparent_74%)] shadow-[0_0_120px_rgba(125,211,252,0.12)]" />
                <div className="absolute left-[10%] top-[48%] h-px w-[78%] bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent" />
                <div className="absolute left-[48%] top-[10%] h-[78%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              </div>
            ) : null}

            {index === 2 ? (
              <div className="relative z-10 flex w-full max-w-[27rem] flex-col gap-4 px-8">
                {[
                  "Asymmetry",
                  "Charge transport",
                  "Boundary effects",
                  "Interpretation drift",
                ].map((item, itemIndex) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-black/26 px-4 py-4 text-sm uppercase tracking-[0.2em] text-cyan-100/70"
                    style={{ transform: `translateX(${itemIndex % 2 === 0 ? 0 : 18}px)` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : null}

            {index === 3 ? (
              <div className="relative z-10 flex w-full max-w-[26rem] flex-wrap gap-3 px-8">
                {watchlist.map((item, itemIndex) => (
                  <div
                    key={item}
                    className="rounded-full border border-cyan-200/16 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100/78"
                    style={{ transform: `translateY(${(itemIndex % 2) * 8}px)` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : null}

            {index === 4 ? (
              <div className="relative z-10 w-full max-w-[28rem] space-y-3 px-8">
                {rigorChecks.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-black/22 px-4 py-4 text-sm leading-7 text-white/70">
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070b] text-[#f7f8f8]">
      <style>{`
        @keyframes float_ufo {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-1deg); }
          50% { transform: translate3d(-14px, 10px, 0) rotate(1deg); }
        }
      `}</style>

      <BlackHoleBackground />
      <SaucerEasterEgg />

      <section className="relative z-10 min-h-[110svh] snap-start px-6 pb-20 pt-10 lg:px-10">
        <div className="flex min-h-[96svh] items-center">
          <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-cyan-200/70">{sections[0].eyebrow}</p>
              <h1 className="text-6xl font-semibold tracking-[-0.075em] text-white md:text-8xl lg:text-[8rem] lg:leading-[0.88]">
                {sections[0].title}
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-white/68 md:text-2xl md:leading-10">{sections[0].lead}</p>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/48 md:text-base">{sections[0].detail}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <div className="rounded-full border border-cyan-200/18 bg-cyan-300/[0.08] px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100/85">
                  Spacetime visualization
                </div>
                <div className="rounded-full border border-fuchsia-200/14 bg-fuchsia-300/[0.08] px-4 py-2 text-xs uppercase tracking-[0.2em] text-fuchsia-100/80">
                  Electrogravitics research
                </div>
                <div className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/78">
                  Anomaly discipline
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[28rem] items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] backdrop-blur-md" />
              <div className="absolute inset-[9%] rounded-[1.8rem] border border-cyan-200/12 bg-[radial-gradient(circle_at_50%_44%,rgba(125,211,252,0.18),transparent_25%),radial-gradient(circle_at_50%_72%,rgba(168,85,247,0.14),transparent_28%),linear-gradient(180deg,rgba(4,10,22,0.9),rgba(3,7,18,0.98))]" />
              <div className="relative z-10 h-[22rem] w-[22rem]">
                <div className="absolute inset-0 rounded-full border border-cyan-200/12" />
                <div className="absolute inset-[9%] rounded-full border border-fuchsia-300/12" />
                <div className="absolute inset-[20%] rounded-full border border-white/10" />
                <div className="absolute inset-[33%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.98)_0%,rgba(15,23,42,0.98)_40%,rgba(125,211,252,0.14)_62%,transparent_76%)] shadow-[0_0_120px_rgba(125,211,252,0.14)]" />
                <div className="absolute left-[8%] top-[49%] h-px w-[84%] bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.35em] text-white/34">
          Scroll to descend through the stack
        </div>
      </section>

      <div className="relative z-10">
        {sections.slice(1).map((section, index) => (
          <FocusSection key={section.id} section={section} index={index + 1} />
        ))}
      </div>

      <section className="relative z-10 border-t border-white/8 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-200/70">HISTORICAL THREAD</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Thomas Townsend Brown and the long shadow of electrogravitics.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                Brown spent decades exploring whether strong electric fields, asymmetric geometries, and dielectric structures were pointing toward a deeper interaction between electricity and gravitation. Much of what he saw is now usually explained through electrohydrodynamics and ion-driven effects — but the questions he raised never entirely left the room.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/46 md:text-base">
                Gravolytics sits in that aftermath. Not to canonize Brown, and not to recycle mythology, but to give the field a better visual and analytical surface for separating historical intuition, real atmospheric force phenomena, and whatever survives serious modern scrutiny.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/8 bg-black/24">
                <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(20,26,36,0.9),rgba(8,10,14,0.98))] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.1rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/60">Archival placeholder</p>
                      <p className="mt-3 max-w-[16rem] text-sm leading-6 text-white/56">
                        Reserve this frame for a Brown experiment photograph or period lab image once we choose the exact archival source and rights-safe asset.
                      </p>
                    </div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/34">High voltage, asymmetry, interpretation</div>
                  </div>
                </div>
              </div>

              {brownHistory.map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-white/8 bg-black/24 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
