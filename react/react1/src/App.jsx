import { useState } from "react";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  const [students] = useState([
    { id: 1, name: "Sarah Ali", grade: 95 },
    { id: 2, name: "Omar Tarek", grade: 82 },
    { id: 3, name: "Lina Haddad", grade: 76 },
  ]);

  return (
    <div className="app">
      <h1>Student Grades</h1>
      <StudentList students={students} />
      <Footer count={students.length} />
    </div>
  );
}

export default App;
