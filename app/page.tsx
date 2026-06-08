import SectionLabel from "./components/SectionLabel";
import WorkCard from "./components/WorkCard";

const workCards = [
  {
    title: "Issues Platform",
    context: "Compliance workflow automation · Optum Serve · 2024",
    description:
      "Our compliance team was managing PII/PHI data in SharePoint. Manual follow-up, no audit trail, federal accreditation on the line. I owned it end to end as we migrated sensitive data to a secure SQL backend, built URAC accreditation workflows, and shipped an 8-trigger automated notification engine that eliminated the manual process entirely. Nobody had to chase anyone anymore. The system did it.",
    lesson:
      "The best platform work is invisible. When it's done right, people stop having the problem.",
  },
  {
    title: "CMDB Modernization",
    context: "Infrastructure visibility · Optum Serve · 2024-25",
    description:
      "9,000+ configuration records. Duplicate relationships everywhere. No real picture of what depended on what. I led the standardization effort, integrated Tanium vulnerability data for real-time asset visibility, and built service maps that finally gave the org a true view of its infrastructure. Unsexy work. Real impact.",
    lesson: "The only way is building things the right way. The first time and every time.",
  },
  {
    title: "NORA",
    context: "AI agent · Internal · 2025–Present",
    description:
      "Built NORA — Norms Oversight and Readiness Agent — on our team's documentation and our principal TPM's directives. Deployed in Microsoft Teams via Copilot. Maxed our Aha! AI credits using NORA. She lives where the team works, knows what the team knows, and handles questions the team used to answer manually. Built inside a regulated healthcare org. Human in the loop always.",
    lesson:
      "AI isn't Skynet, magic or the Omnissiah. It's your best coworker if you onboard it properly.",
  },
];

export default function Home() {
  return (
    <>
      <main style={{ maxWidth: "672px", margin: "0 auto", padding: "0 24px 96px" }}>

        {/* ── IDENTITY ── */}
        <section style={{ paddingTop: "80px", paddingBottom: "96px" }}>
          <p
            style={{
              fontFamily: "var(--font-noto-sans), sans-serif",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginBottom: "4px",
            }}
          >
            HELIX: PORTFOLIO
          </p>
          <h1
            style={{
              fontFamily: "var(--font-zilla-slab), serif",
              fontWeight: 700,
              fontSize: "2.2rem",
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: "6px",
            }}
          >
            ben beine
          </h1>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "var(--gold)",
              marginBottom: "2.5rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-noto-sans), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "var(--ink-muted)",
              marginBottom: "4px",
            }}
          >
            Technical Product Manager
          </p>
          <p
            style={{
              fontFamily: "var(--font-noto-sans), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "var(--ink-muted)",
              marginBottom: "4px",
            }}
          >
            Systems thinker · Human first
          </p>
          <p
            style={{
              fontFamily: "var(--font-noto-sans), sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "var(--ink-muted)",
            }}
          >
            Milwaukee → Oahu
          </p>
        </section>

        {/* ── WORK ── */}
        <section id="work" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <SectionLabel>Work</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {workCards.map((card) => (
              <WorkCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        {/* ── HOW I WORK ── */}
        <section id="how-i-work" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <SectionLabel>How I Work</SectionLabel>
          <div style={{ maxWidth: "560px" }}>
            <p
              style={{
                fontFamily: "var(--font-noto-sans), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              The only constant is change. I saw it on a Volcom sticker in a Zumiez once.
              It's curious where we pull our life lessons from.
              LLM, NLP, etc. certainly seems like the current evolution and I'm cautiously optimistic about it's possibilities.
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto-sans), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              I use Claude daily. I built NORA at work. I'm building MTG DNA on nights and
              weekends. "Human in the loop" is my creed today because it's "ghost in the shell" tomorrow choom.
              Any tool is only as good as the person wielding it.
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto-sans), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.7,
              }}
            >
              I do my best work when leadership clears obstacles instead of creating them.
              In that environment I bring everything and I do it relentlessly, gritty, and with
              a bundle of unbridled golden retriever energy.
            </p>
          </div>
        </section>

        {/* ── BUILDING ── */}
        <section id="building" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <SectionLabel>Building</SectionLabel>
          <div
            style={{
              backgroundColor: "var(--paper)",
              borderLeft: "3px solid var(--gold)",
              padding: "1rem 1.25rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-zilla-slab), serif",
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "var(--ink)",
                marginBottom: "0.25rem",
              }}
            >
              MTG DNA
            </h2>
            <p
              style={{
                fontFamily: "var(--font-noto-sans), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--ink-muted)",
                fontStyle: "italic",
                marginBottom: "0.75rem",
                lineHeight: 1.6,
              }}
            >
              Magic: The Gathering has incredible tools, yet none of them talk to each other
              honestly and no one knows about them all.
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto-sans), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.7,
                marginBottom: "0.75rem",
              }}
            >
              MTG DNA is a source of truth for your Commander deck — from
              first spark of inspiration, to game night, to putting that legendary creature out to pasture. Excellent tools exist. I'm not here to rebuild them. I'm here
              to connect them in a way that's honest, open, and doesn't slap you with a
              freemium wall the second you walk in.
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto-sans), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              Free forever. Tip jar optional. Sponsors maybe.
            </p>
            <BuildingLinks />
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <SectionLabel>About</SectionLabel>
          <div style={{ maxWidth: "560px" }}>
            <p
              style={{
                fontFamily: "var(--font-noto-sans), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              I'm a TPM at Optum Serve. I am moving my family to Oahu so I'm treating
              the most important thing in my life the best way I know how;
              like a product launch. Dependencies
              mapped & Milestones set. Features generated with Claude & artifacts tracked in Linear.
              Dogs & cats cleared for travel.
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto-sans), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              I believe in community, good laughs, servant leadership, and not performing
              professionalism to get a seat at the table.
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto-sans), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--ink-muted)",
                marginBottom: "16px",
              }}
            >
              If you want to work together, talk shop, or just yap about EDH power levels:
            </p>
            <ContactLinks />
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid color-mix(in srgb, var(--ink) 12%, transparent)",
          paddingTop: "1.5rem",
          paddingBottom: "24px",
          paddingLeft: "24px",
          paddingRight: "24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-noto-sans), sans-serif",
            fontWeight: 400,
            fontSize: "11px",
            color: "var(--ink-muted)",
          }}
        >
          Ben Beine · Built with Claude · benbeine.work
        </p>
      </footer>
    </>
  );
}

function BuildingLinks() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <a
        href="https://github.com/commander-zen/deck-stack"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-noto-sans), sans-serif",
          fontWeight: 700,
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "var(--ink)",
          background: "transparent",
          border: "1px solid var(--ink-faint)",
          padding: "6px 10px",
          display: "inline-block",
          lineHeight: 1,
          textDecoration: "none",
        }}
      >
        GitHub →
      </a>
    </div>
  );
}

const ghostLink: React.CSSProperties = {
  fontFamily: "var(--font-noto-sans), sans-serif",
  fontWeight: 700,
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "var(--ink)",
  background: "transparent",
  border: "1px solid var(--ink-faint)",
  padding: "6px 10px",
  display: "inline-block",
  lineHeight: 1,
  textDecoration: "none",
};

function ContactLinks() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <a href="mailto:beine.ben@gmail.com" style={ghostLink}>
        beine.ben@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/ben-beine/" target="_blank" rel="noopener noreferrer" style={ghostLink}>
        LinkedIn ↗
      </a>
      <a href="https://github.com/commander-zen" target="_blank" rel="noopener noreferrer" style={ghostLink}>
        GitHub ↗
      </a>
    </div>
  );
}
