const pillars = [
  {
    index: "01",
    title: "Spacetime Surfaces",
    body:
      "Gravolytics is the visual lab for warped geometry, potential wells, field gradients, and the kinds of structures that look theoretical until they start shaping engineering decisions.",
  },
  {
    index: "02",
    title: "Orbital Logic",
    body:
      "The project treats orbital mechanics as interface language: trajectories, capture windows, basin transitions, escape energy, and the ugly elegance of motion constrained by curvature.",
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
      "A cinematic research surface for spacetime intuition, gravity-well geometry, orbital reasoning, and disciplined anomaly triage.",
    detail:
      "Part software platform, part research doctrine, part low-light lab mood. Built for the part of engineering that sits just beyond polite conversation.",
  },
  {
    id: "well",
    eyebrow: "FIELD STRUCTURES",
    title: "Model the well, not just the story.",
    lead:
      "The interface is built around the visual language of curvature: sinks, basins, shear, horizon lines, and trajectories that stop looking metaphorical once the math gets sharp enough.",
    detail:
      "This is where spacetime themes become software. Gravolytics turns abstract structure into something navigable — less lecture, more instrument panel for warped geometry.",
  },
  {
    id: "orbit",
    eyebrow: "ORBITAL MECHANICS",
    title: "Motion under constraint becomes design.",
    lead:
      "Orbital mechanics is not decoration here. It is the grammar: capture, drift, transfer, collapse, escape. The page should feel like a controlled descent through a system with too much hidden structure.",
    detail:
      "As you scroll, each section comes into focus, dominates the field, then yields to the next — like passing through successive regimes in a gravity problem.",
  },
  {
    id: "materials",
    eyebrow: "WATCHLIST",
    title: "Interesting materials. Limited superstition.",
    lead:
      "The materials lane stays grounded: barium titanate, bismuth, and other candidates are tracked as possible experimental levers, not automatic evidence of new physics.",
    detail:
      "Every material gets interrogated for dielectric, magnetic, thermal, geometric, and measurement-artifact behavior before anyone is allowed to whisper the word anomalous.",
  },
  {
    id: "rigor",
    eyebrow: "RIGOR",
    title: "Spooky does not mean sloppy.",
    lead:
      "The page closes on the actual doctrine: momentum accounting, control tests, hostile replication, instrument skepticism, and the refusal to confuse visual drama with physical significance.",
    detail:
      "If a claim cannot survive controls, vacuum logic, thermal checks, and wiring suspicion, it does not graduate. It goes back into the bin with the rest of the ghosts.",
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
  "Momentum ledger first — where did the counter-momentum go?",
  "Suppress ion wind, thermal lift, charging artifacts, and chamber coupling before discussing anomalies.",
  "Treat instrumentation drift as guilty until proven innocent.",
  "Archive failures aggressively. Most ghosts are wiring errors with better branding.",
] as const;

function OrbitalBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_24%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute left-1/2 top-[18%] h-[54rem] w-[54rem] -translate-x-1/2 rounded-full border border-cyan-300/10" />
      <div className="absolute left-1/2 top-[24%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-fuchsia-300/10" />
      <div className="absolute left-1/2 top-[31%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-[39%] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.92)_0%,rgba(2,6,23,0.95)_45%,rgba(125,211,252,0.12)_68%,transparent_74%)] shadow-[0_0_120px_rgba(125,211,252,0.12)]" />
      <div className="absolute left-[12%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.5)]" />
      <div className="absolute left-[20%] top-[44%] h-1 w-1 rounded-full bg-cyan-200/70 shadow-[0_0_14px_rgba(125,211,252,0.6)]" />
      <div className="absolute right-[16%] top-[28%] h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
      <div className="absolute right-[22%] top-[56%] h-1 w-1 rounded-full bg-fuchsia-200/80 shadow-[0_0_12px_rgba(217,70,239,0.65)]" />
      <div className="absolute bottom-[15%] left-[24%] h-1.5 w-1.5 rounded-full bg-white/60" />
      <div className="absolute bottom-[11%] right-[28%] h-1 w-1 rounded-full bg-cyan-100/80" />
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
            <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-[5.6rem] lg:leading-[0.92]">
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
              <div className="relative z-10 h-[22rem] w-full max-w-[26rem]">
                <div className="absolute left-[7%] top-[50%] h-px w-[86%] bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
                <div className="absolute left-[18%] top-[26%] h-[14rem] w-[14rem] rounded-full border border-white/10" />
                <div className="absolute left-[18%] top-[26%] h-[14rem] w-[14rem] rounded-full border border-fuchsia-300/12 [transform:rotateX(72deg)]" />
                <div className="absolute left-[18%] top-[26%] h-[14rem] w-[14rem] rounded-full border border-cyan-300/15 [transform:rotate(28deg)]" />
                <div className="absolute left-[43%] top-[43%] h-3.5 w-3.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
                <div className="absolute left-[66%] top-[34%] h-2.5 w-2.5 rounded-full bg-fuchsia-200 shadow-[0_0_16px_rgba(217,70,239,0.7)]" />
                <div className="absolute left-[72%] top-[60%] h-2 w-2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
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

      <OrbitalBackdrop />
      <SaucerEasterEgg />

      <section className="relative min-h-[110svh] snap-start px-6 pb-20 pt-10 lg:px-10">
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
                  Orbital reasoning
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

      <div className="relative">
        {sections.slice(1).map((section, index) => (
          <FocusSection key={section.id} section={section} index={index + 1} />
        ))}
      </div>

      <section className="relative border-t border-white/8 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-200/70">PLATFORM STRUCTURE</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                One page. Long descent. Controlled mystery.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                The AE-Spooky site should feel like an instrument panel dropped into a gravity problem: sections arrive, dominate, dissolve, and hand off to the next regime. Clean. Premium. Spooky in the right way.
              </p>
            </div>

            <div className="grid gap-4">
              {pillars.map((pillar) => (
                <div key={pillar.index} className="rounded-[1.4rem] border border-white/8 bg-black/24 p-5">
                  <div className="mb-3 text-xs uppercase tracking-[0.28em] text-cyan-200/62">{pillar.index}</div>
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
