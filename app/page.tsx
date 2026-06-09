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
    context: "AI agent · Internal · 2024–Present",
    description:
      "Most orgs talk about AI adoption. I shipped it. NORA — Norms Oversight and Review Agent — lives in Microsoft Teams, knows our team's documentation cold, and handles the questions people used to Slack me at 4pm. Built inside a regulated healthcare environment, which means I had to think hard about every guardrail, every edge case, every “what if she’s wrong.” Human in the loop isn’t a checkbox here. It’s the architecture.",
    lesson:
      "The best teammate you’ll ever onboard doesn’t need a benefits package. But you still have to train them right.",
  },
  {
    title: "Cloud Data Migration",
    context: "Azure data engineering · Optum Serve · 2023–2024",
    description:
      "Legacy on-prem infrastructure. 58 data tables. A hard go-live deadline. And $35K/month in hosting costs quietly burning on the other side. I led the ETL delivery that moved a workforce management application to Azure — ahead of schedule — and replaced fragile SFTP file transfers with a secure cloud storage landing zone. The old way cost money and trust every month it ran. Now it doesn’t run.",
    lesson: "Technical debt isn’t abstract. It has a dollar amount. Find it.",
  },
  {
    title: "SOC Compliance & Security Automation",
    context: "ServiceNow · Security integration · Optum Serve · 2023–2024",
    description:
      "Compliance work either happens continuously or it happens in a panic. I built the pipelines to make it continuous — integrating a log analytics platform with ServiceNow to automate security alert-to-incident ticket creation, building dual-approval access workflows, and establishing automated change risk assessments that directly supported SOC audit requirements. Nobody had to scramble at audit time anymore.",
    lesson: "The audit should be boring. That means you did the work.",
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
              The only constant is change. That’s not a motivational poster — it’s just true, and I’ve stopped pretending otherwise. I’m ADHD, I’m a systems thinker, and I have approximately zero interest in performing professionalism for its own sake. What I do have is relentless curiosity and the inability to leave a broken process alone.
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
              I use Claude daily. I built NORA at work. I’m building MTG DNA on nights and weekends. “Human in the loop” isn’t a disclaimer — it’s the whole architecture. AI is a multiplier, not a replacement, and the humans who understand that are going to be very okay.
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
              I also use emojis in emails. Always have. Probably always will. If that’s a dealbreaker we’re probably not a fit, and that’s genuinely fine.
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
              I do my best work when leadership clears obstacles instead of creating them. When I find that environment I bring everything — rigorously, loudly, and with full golden retriever energy.
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
              first spark of inspiration, to game night, to putting that legendary creature out to pasture. Excellent tools exist. I&apos;m not here to rebuild them. I&apos;m here
              to connect them in a way that&apos;s honest, open, and doesn&apos;t slap you with a
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
              I’m a Technical PM at Optum Serve, which means I spend my days at the intersection of engineering, operations, and the humans who depend on both. My brain is wired for systems — find the friction, kill it, build something better in its place. I’ve been doing that in healthcare IT for years and I’m just getting started.
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
              My wife Meg and I are moving to Oahu. We’re treating it like a product launch because that’s the only way my brain knows how to do big things. Dependencies mapped. Milestones set. Three pets in active pre-flight.
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
              I believe in servant leadership, community, good games, and not needing to mask who you are to be taken seriously.
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
              If you want to work together, talk shop, or argue about Commander power levels:
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
