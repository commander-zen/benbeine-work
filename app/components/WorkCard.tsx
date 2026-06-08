interface WorkCardProps {
  title: string;
  context: string;
  description: string;
  lesson: string;
}

export default function WorkCard({ title, context, description, lesson }: WorkCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--paper)",
        borderLeft: "3px solid var(--gold)",
        padding: "1rem 1.25rem",
        marginBottom: "1rem",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-zilla-slab), serif",
          fontWeight: 600,
          fontSize: "1.1rem",
          color: "var(--ink)",
          marginBottom: "0.25rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-noto-sans), sans-serif",
          fontWeight: 400,
          fontSize: "11px",
          color: "var(--ink-muted)",
          marginBottom: "0.5rem",
        }}
      >
        {context}
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
        {description}
      </p>
      <p
        style={{
          fontFamily: "var(--font-noto-sans), sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          color: "var(--ink-muted)",
          fontStyle: "italic",
          borderLeft: "2px solid var(--ink-faint)",
          paddingLeft: "0.75rem",
          marginTop: "0.75rem",
        }}
      >
        {lesson}
      </p>
    </div>
  );
}
