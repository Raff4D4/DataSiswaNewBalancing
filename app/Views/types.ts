export type LanguageLocale = "ID" | "EN";
export type ColorTheme = "dark" | "light";
export type TableDensity = "compact" | "comfortable";
export type ScoreFilterOption = "all" | "high" | "low";
export type SortColumn = "number" | "nis" | "name" | "class" | "gradeAverage";
export type SortOrder = "asc" | "desc";

export interface SubjectGrade {
  id: number;
  subject: string;
  assignment: number;
  midterm: number;
  finalExam: number;
  finalScore: number;
  predicate: "A" | "B" | "C" | "D";
}

export interface StudentRecord {
  id: number | string;
  nis: string;
  name: string;
  className: string;
  email: string;
  grades: SubjectGrade[];
  gradeAverage: number;
}

export interface DeletedItemBackup {
  student: StudentRecord;
  index: number;
}

