"use client";

import { useEffect, useMemo, useState } from "react";

const railStats = [
  { label: "Discipline", value: "Electrogravitics / field analysis" },
  { label: "Mode", value: "Visualization, interpretation, triage" },
  { label: "Method", value: "Geometry first. Myth last." },
] as const;

const sections = [
  {
    id: "hero",
    eyebrow: "AE-SPOOKY // GRAVOLYTICS",
    title: "A visual lab for difficult field behavior.",
    lead:
      "Gravolytics is a research surface for warped geometry, asymmetrical fields, charge-driven motion, and the electrogravitics questions that refuse to die politely.",
    detail:
      "Built for the part of engineering that sits between mathematical structure, instrumentation, materials behavior, and historical claims that still deserve better tools than folklore.",
  },
  {
    id: "field-surfaces",
    eyebrow: "FIELD SURFACES",
    title: "Geometry before interpretation.",
    lead:
      "Potential wells, collapse regions, asymmetry, leakage, shear, confinement — Gravolytics starts by making the shape of a problem visible before anyone decides what story it belongs to.",
    detail:
      "That matters because electrogravitics has always suffered from premature narration. A cleaner visual surface is not decoration. It is a way of reducing interpretive sloppiness.",
  },
  {
    id: "interpretation",
    eyebrow: "INTERPRETATION",
    title: "Not every unusual result deserves a new law of nature.",
    lead:
      "Some strange behavior turns out to be ion wind. Some of it is heating. Some is geometry finally becoming obvious. Some is instrumentation drifting just enough to embarrass everyone involved.",
    detail:
      "The point of the platform is to make these possibilities legible early — before language outruns mechanism and the lab fills with expensive superstition.",
  },
  {
    id: "materials",
    eyebrow: "MATERIALS",
    title: "A catalog of promising trouble.",
    lead:
      "Some materials carry a certain kind of tension: high-k ceramics, dense diamagnetic metals, volatile dielectrics, and semiconductors that behave beautifully right up until they don’t.",
    detail:
      "Barium titanate, bismuth, and related candidates matter here not because they prove anything, but because they have enough structure, response, and inconvenience to make an experiment interesting.",
  },
  {
    id: "discipline",
    eyebrow: "DISCIPLINE",
    title: "The field only gets more interesting after the boring explanations survive contact.",
    lead:
      "Electrogravitics has accumulated decades of heat and very little mercy. If an effect cannot survive momentum accounting, pressure dependence, thermal controls, shielding, geometry checks, and suspicion toward the instrument chain, it does not get promoted.",
    detail:
      "That is not a killjoy position. It is the only reason the subject remains worth touching.",
  },
] as const;

const materials = [
  {
    name: "Barium titanate",
    note: "High-k ceramic with enough polarization behavior to make the lab more interesting than comfortable.",
  },
  {
    name: "Bismuth",
    note: "Dense, diamagnetic, and persistently present in the stranger corners of the conversation.",
  },
  {
    name: "High-k dielectrics",
    note: "Where permittivity, leakage, heating, and expectation start pulling against each other.",
  },
  {
    name: "Controlled gas media",
    note: "Useful when the question is not whether a force exists, but what medium is actually carrying it.",
  },
] as const;

const disciplineChecks = [
  "Momentum ledger: where did the counter-momentum go?",
  "Pressure sweep: what survives as the gas disappears?",
  "Thermal audit: what shifts when heat is no longer ignored?",
  "Geometry check: what changes when the structure does?",
  "Instrument suspicion: what is the sensor chain lying about today?",
] as const;

const brownHistory = [
  {
    title: "The original wager",
    body:
      "Brown’s early high-voltage asymmetrical experiments led him to suspect that electric fields might be doing more than ordinary electrostatics should allow.",
  },
  {
    title: "The split in interpretation",
    body:
      "What he regarded as gravity interaction is now often interpreted through electrohydrodynamics, ion wind, and other conventional force pathways. The force was real enough to see. The ontology remains the fight.",
  },
  {
    title: "Why Gravolytics exists",
    body:
      "The modern problem is not just whether a claim is true. It is whether field behavior can be visualized and interrogated clearly enough that mechanism separates itself from mythology.",
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
  const flarePhase = Math.max(0, Math.sin(progress * Math.PI * 7.5));
  const flareStrength = Math.pow(flarePhase, 18);
  const secondaryFlare = Math.pow(Math.max(0, Math.sin(progress * Math.PI * 11.5 + 0.7)), 26);
  const translateY = `${7 + progress * 6.5}%`;
  const rotation = `${progress * 150}deg`;
  const ringRotation = `${-progress * 105}deg`;
  const haloOpacity = 0.2 + flareStrength * 0.18 + secondaryFlare * 0.14;

  const stars = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: `${(i * 13.7 + 9) % 100}%`,
        top: `${(i * 27.4 + 7) % 100}%`,
        size: i % 4 === 0 ? 3 : i % 4 === 1 ? 2 : 1,
        opacity: i % 5 === 0 ? 0.82 : 0.42,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_16%,rgba(130,148,161,0.14),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(255,135,0,0.06),transparent_20%),radial-gradient(circle_at_52%_80%,rgba(125,211,252,0.05),transparent_24%),linear-gradient(180deg,#040608_0%,#05070b_42%,#020407_100%)]" />
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:62px_62px]" />

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.36)]"
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
        className="absolute left-1/2 top-0 h-[98rem] w-[98rem] -translate-x-1/2"
        style={{ transform: `translate(-50%, ${translateY})` }}
      >
        <div className="absolute left-1/2 top-[10%] h-[66rem] w-[66rem] -translate-x-1/2 rounded-full border border-[#8294A1]/10" />
        <div className="absolute left-1/2 top-[15%] h-[54rem] w-[54rem] -translate-x-1/2 rounded-full border border-cyan-300/8" />

        <div
          className="absolute left-1/2 top-[22%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full"
          style={{ transform: `translateX(-50%) rotate(${rotation})` }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 160deg, rgba(130,148,161,0.04), rgba(255,135,0,0.22), rgba(255,163,54,0.42), rgba(125,211,252,0.08), rgba(130,148,161,0.04))",
              filter: "blur(12px)",
              transform: "scaleY(0.3) scaleX(1.09)",
              opacity: 0.94,
            }}
          />
          <div
            className="absolute inset-[8%] rounded-full"
            style={{
              background:
                "conic-gradient(from 230deg, rgba(255,255,255,0.03), rgba(255,196,113,0.18), rgba(255,135,0,0.44), rgba(125,211,252,0.06), rgba(255,255,255,0.03))",
              filter: "blur(20px)",
              transform: "scaleY(0.22) scaleX(1.16)",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[25.7%] h-[31rem] w-[31rem] -translate-x-1/2 rounded-full"
          style={{ transform: `translateX(-50%) rotate(${ringRotation})` }}
        >
          <div
            className="absolute inset-0 rounded-full border border-cyan-100/6"
            style={{ transform: "scaleY(0.38) rotate(14deg)", filter: "blur(1px)" }}
          />
          <div
            className="absolute inset-[10%] rounded-full border border-[#FF8700]/10"
            style={{ transform: "scaleY(0.26) rotate(-10deg)", filter: "blur(1px)" }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[26.5%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.99) 38%, rgba(125,211,252,${haloOpacity * 0.18}) 57%, rgba(255,135,0,${haloOpacity * 0.1}) 63%, transparent 74%)`,
            boxShadow: `0 0 120px rgba(125,211,252,${haloOpacity * 0.28})`,
          }}
        >
          <div
            className="absolute inset-[-14%] rounded-full"
            style={{
              background: `radial-gradient(circle at center, transparent 34%, rgba(255,255,255,${0.02 + flareStrength * 0.12}) 50%, transparent 66%)`,
              filter: "blur(16px)",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[28.8%] h-[18rem] w-[36rem] -translate-x-1/2"
          style={{ opacity: 0.14 + flareStrength * 0.52 }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[3px] w-[120%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(130,148,161,0.04), rgba(255,255,255,0.42), rgba(255,135,0,0.12), transparent)",
              filter: "blur(3px)",
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[17%] h-[28rem] w-[6rem] -translate-x-1/2"
          style={{ opacity: flareStrength * 0.9 + secondaryFlare * 0.45 }}
        >
          <div
            className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(125,211,252,0.14), rgba(255,255,255,0.78), rgba(255,135,0,0.24), transparent)",
              clipPath: "polygon(50% 0%, 68% 14%, 56% 100%, 44% 100%, 32% 14%)",
              filter: "blur(9px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function SaucerEasterEgg() {
  return (
    <div className="pointer-events-none absolute right-[6%] top-[18%] hidden opacity-50 lg:block">
      <div className="relative h-14 w-24 animate-[float_ufo_8s_ease-in-out_infinite]">
        <div className="absolute left-4 top-0 h-5 w-16 rounded-full border border-cyan-200/30 bg-[radial-gradient(circle_at_50%_35%,rgba(186,230,253,0.36),rgba(34,211,238,0.08)_55%,transparent_78%)]" />
        <div className="absolute left-0 top-3 h-6 w-24 rounded-[999px] border border-white/10 bg-[linear-gradient(180deg,rgba(226,232,240,0.22),rgba(15,23,42,0.78))] shadow-[0_0_18px_rgba(125,211,252,0.14)]" />
        <div className="absolute left-4 top-6 flex w-[4rem] justify-between px-1">
          {[0, 1, 2, 3].map((light) => (
            <span key={light} className="h-1.5 w-1.5 rounded-full bg-[#FF8700]/80 shadow-[0_0_10px_rgba(255,135,0,0.65)]" />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionFrame({
  eyebrow,
  title,
  lead,
  detail,
  visual,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  detail: string;
  visual: React.ReactNode;
}) {
  return (
    <section className="relative min-h-[112svh] px-6 py-10 lg:px-10">
      <div className="sticky top-0 flex min-h-[100svh] items-center py-14">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-cyan-200/72">
              {eyebrow}
            </p>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl lg:text-[4.4rem] lg:leading-[0.98]">
              {title}
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 md:text-xl md:leading-9">
              {lead}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/46 md:text-base">
              {detail}
            </p>
          </div>
          {visual}
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

      <section className="relative z-10 min-h-[110svh] px-6 pb-20 pt-10 lg:px-10">
        <div className="grid min-h-[96svh] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-5xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.36em] text-cyan-200/76">
              {sections[0].eyebrow}
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl lg:text-[6.5rem] lg:leading-[0.9]">
              {sections[0].title}
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/68 md:text-2xl md:leading-10">
              {sections[0].lead}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/48 md:text-base">
              {sections[0].detail}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Spacetime visualization",
                "Electrogravitics research",
                "Field interpretation",
                "Materials watchlist",
              ].map((item, index) => (
                <div
                  key={item}
                  className={[
                    "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em]",
                    index === 1
                      ? "border-[#FF8700]/20 bg-[#FF8700]/10 text-[#ffd2a6]"
                      : "border-cyan-200/18 bg-cyan-300/[0.08] text-cyan-100/85",
                  ].join(" ")}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="relative flex min-h-[32rem] items-stretch justify-center">
            <div className="absolute inset-0 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] backdrop-blur-md" />
            <div className="absolute inset-[8%] rounded-[1.6rem] border border-[#8294A1]/14 bg-[linear-gradient(180deg,rgba(7,12,18,0.84),rgba(4,8,14,0.96))]" />
            <div className="relative z-10 flex w-full max-w-[30rem] flex-col justify-between p-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">Research rail</p>
                <div className="mt-6 space-y-4">
                  {railStats.map((item) => (
                    <div key={item.label} className="rounded-[1.2rem] border border-white/8 bg-black/22 p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/38">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.3rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(130,148,161,0.08),rgba(255,135,0,0.05))] p-5">
                <p className="text-[11px] uppercase tracking-[0.26em] text-cyan-200/62">Current posture</p>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  Better tools for sorting asymmetry, atmosphere, charge transport, and genuinely difficult residuals.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.35em] text-white/34">
          Scroll to descend through the field
        </div>
      </section>

      <div className="relative z-10">
        <SectionFrame
          eyebrow={sections[1].eyebrow}
          title={sections[1].title}
          lead={sections[1].lead}
          detail={sections[1].detail}
          visual={
            <div className="relative flex min-h-[30rem] items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] backdrop-blur-sm" />
              <div className="absolute inset-[10%] rounded-[1.5rem] border border-cyan-300/10 bg-[radial-gradient(circle_at_50%_45%,rgba(125,211,252,0.16),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.84),rgba(2,6,23,0.94))]" />
              <div className="relative z-10 h-[22rem] w-[22rem]">
                <div className="absolute inset-0 rounded-full border border-cyan-200/10" />
                <div className="absolute inset-[13%] rounded-full border border-[#8294A1]/14" />
                <div className="absolute inset-[28%] rounded-full border border-white/10" />
                <div className="absolute inset-[36%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.99)_0%,rgba(15,23,42,0.98)_42%,rgba(125,211,252,0.12)_60%,transparent_74%)] shadow-[0_0_120px_rgba(125,211,252,0.12)]" />
                <div className="absolute left-[7%] top-[48%] h-px w-[86%] bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent" />
                <div className="absolute left-[49%] top-[7%] h-[86%] w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
              </div>
            </div>
          }
        />

        <SectionFrame
          eyebrow={sections[2].eyebrow}
          title={sections[2].title}
          lead={sections[2].lead}
          detail={sections[2].detail}
          visual={
            <div className="relative flex min-h-[30rem] items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] backdrop-blur-sm" />
              <div className="relative z-10 grid w-full max-w-[28rem] gap-4 px-7">
                {[
                  "Atmospheric force pathways",
                  "Thermal drift and sensor bias",
                  "Asymmetry that reads like thrust",
                  "Geometry finally becoming obvious",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/8 bg-black/24 px-4 py-4 text-sm leading-7 text-white/66"
                    style={{ transform: `translateX(${index % 2 === 0 ? 0 : 18}px)` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <SectionFrame
          eyebrow={sections[3].eyebrow}
          title={sections[3].title}
          lead={sections[3].lead}
          detail={sections[3].detail}
          visual={
            <div className="relative flex min-h-[30rem] items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] backdrop-blur-sm" />
              <div className="relative z-10 grid w-full max-w-[30rem] gap-4 px-7">
                {materials.map((item, index) => (
                  <div
                    key={item.name}
                    className="rounded-[1.3rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] px-5 py-5"
                    style={{ transform: `translateY(${index % 2 === 0 ? 0 : 8}px)` }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#FFB366]">{item.name}</p>
                    <p className="mt-3 text-sm leading-7 text-white/58">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <SectionFrame
          eyebrow={sections[4].eyebrow}
          title={sections[4].title}
          lead={sections[4].lead}
          detail={sections[4].detail}
          visual={
            <div className="relative flex min-h-[30rem] items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] backdrop-blur-sm" />
              <div className="relative z-10 grid w-full max-w-[30rem] gap-3 px-7">
                {disciplineChecks.map((item) => (
                  <div key={item} className="rounded-[1.2rem] border border-white/8 bg-black/24 px-4 py-4 text-sm leading-7 text-white/68">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </div>

      <section className="relative z-10 border-t border-white/8 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-cyan-200/70">HISTORICAL THREAD</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Thomas Townsend Brown and the problem that refused to stay buried.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                Brown’s early high-voltage asymmetry experiments helped define the visual and conceptual territory that still shadows electrogravitics. He believed electric fields might be touching gravitation directly. Later work often explained the same observations through electrohydrodynamics, ion transport, and ordinary force pathways that were never quite as ordinary-looking as they should have been.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/46 md:text-base">
                Gravolytics matters because this argument is still unresolved at the level that counts most in practice: not the mythology, but the legibility of the field. The better the structure can be seen, the less room there is for confusion to masquerade as discovery.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/8 bg-black/24">
                <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(20,26,36,0.9),rgba(8,10,14,0.98))] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.1rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/60">Archival slot</p>
                      <p className="mt-3 max-w-[16rem] text-sm leading-6 text-white/56">
                        Reserved for a rights-safe Brown photo, patent figure, or period apparatus image once we settle the exact source.
                      </p>
                    </div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/34">High voltage // asymmetry // interpretation</div>
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
