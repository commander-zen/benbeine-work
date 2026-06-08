export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-noto-sans), sans-serif",
        fontWeight: 700,
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--gold)",
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}
