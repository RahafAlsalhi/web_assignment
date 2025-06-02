import AlertButton from "./AlertButton";

function StudentCard({ name, grade }) {
  const message = `Student: ${name} — Grade: ${grade}`;

  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Grade: {grade}</p>
      <p className="badge">
        {grade >= 85 ? "Excellent Student" : "Needs Improvement"}
      </p>
      <AlertButton message={message} />
    </div>
  );
}

export default StudentCard;
