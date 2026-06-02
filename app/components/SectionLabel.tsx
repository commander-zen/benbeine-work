export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "11px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#00E5CC",
        marginBottom: "2rem",
        fontWeight: 400,
      }}
    >
      {children}
    </p>
  );
}
