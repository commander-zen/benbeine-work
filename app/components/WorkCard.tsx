interface WorkCardProps {
  title: string;
  context: string;
  description: string;
  lesson: string;
}

export default function WorkCard({ title, context, description, lesson }: WorkCardProps) {
  return (
    <div
      className="work-card"
      style={{
        backgroundColor: "#141414",
        padding: "24px",
        paddingLeft: "22px", /* 24px - 2px border = visual alignment */
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#F0F0F0",
          marginBottom: "4px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "13px",
          color: "#666666",
          marginBottom: "16px",
        }}
      >
        {context}
      </p>
      <p
        style={{
          fontSize: "15px",
          color: "#F0F0F0",
          lineHeight: 1.7,
          marginBottom: "16px",
        }}
      >
        {description}
      </p>
      <p
        style={{
          fontSize: "14px",
          color: "#666666",
          fontStyle: "italic",
        }}
      >
        {lesson}
      </p>
    </div>
  );
}
