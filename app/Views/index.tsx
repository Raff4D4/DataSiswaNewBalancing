import ReactDOM from "react-dom/client";
import { StudentDirectory } from "./StudentDirectory";
import { StudentRecord, SubjectGrade } from "./types";
import { INITIAL_STUDENTS_DATA } from "./studentData";

const serverStudentsElement = document.getElementById("server-students");
let initialData: StudentRecord[] = INITIAL_STUDENTS_DATA;

if (serverStudentsElement && serverStudentsElement.textContent) {
  try {
    const rawParsed = JSON.parse(serverStudentsElement.textContent);
    if (Array.isArray(rawParsed) && rawParsed.length > 0) {
      initialData = rawParsed.map((item) => {
        const studentGrades: SubjectGrade[] = Array.isArray(item.grades) && item.grades.length > 0
          ? item.grades.map((g: SubjectGrade) => {
              const assignment = Number(g.assignment) || 0;
              const midterm = Number(g.midterm) || 0;
              const finalExam = Number(g.finalExam) || 0;
              const finalScore = Number(((assignment * 0.3) + (midterm * 0.3) + (finalExam * 0.4)).toFixed(2));
              let predicate: "A" | "B" | "C" | "D" = "D";
              if (finalScore >= 90) predicate = "A";
              else if (finalScore >= 80) predicate = "B";
              else if (finalScore >= 75) predicate = "C";
              return {
                id: Number(g.id) || Date.now(),
                subject: String(g.subject),
                assignment,
                midterm,
                finalExam,
                finalScore,
                predicate
              };
            })
          : [
              { id: 1, subject: "Pemodelan Perangkat Lunak", assignment: 85, midterm: 80, finalExam: 85, finalScore: 83.5, predicate: "B" },
              { id: 2, subject: "Basis Data", assignment: 85, midterm: 80, finalExam: 85, finalScore: 83.5, predicate: "B" },
              { id: 3, subject: "Pemrograman Berorientasi Objek", assignment: 85, midterm: 80, finalExam: 85, finalScore: 83.5, predicate: "B" },
              { id: 4, subject: "Pemrograman Web dan Perangkat Bergerak", assignment: 85, midterm: 80, finalExam: 85, finalScore: 83.5, predicate: "B" }
            ];

        const totalScores = studentGrades.reduce((sum, g) => sum + g.finalScore, 0);
        const calculatedAverage = Number((totalScores / studentGrades.length).toFixed(2));

        const studentName = String(item.nama || item.name || "Siswa Baru");
        const emailUsername = studentName
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]/g, ".")
          .replace(/\.+/g, ".")
          .replace(/^\.|\.$/g, "");

        return {
          id: item.id || Date.now(),
          nis: String(item.nis || ""),
          name: studentName,
          className: String(item.kelas || item.className || "XI RPL 1"),
          email: `${emailUsername}@smk.belajar.id`,
          grades: studentGrades,
          gradeAverage: calculatedAverage
        };
      });
    }
  } catch (parseError) {
    initialData = INITIAL_STUDENTS_DATA;
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<StudentDirectory initialData={initialData} />);
}
