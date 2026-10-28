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

export const INITIAL_STUDENTS_DATA: StudentRecord[] = [
  {
    "id": 1,
    "nis": "1001",
    "name": "Ahmad Pratama",
    "className": "XI RPL 12",
    "email": "ahmad.pratama@smk.belajar.id",
    "grades": [
      {
        "id": 1,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 90.53,
        "midterm": 76.89,
        "finalExam": 91.18,
        "finalScore": 86.7,
        "predicate": "B"
      },
      {
        "id": 2,
        "subject": "Basis Data",
        "assignment": 90.95,
        "midterm": 77.8,
        "finalExam": 92.49,
        "finalScore": 87.62,
        "predicate": "B"
      },
      {
        "id": 3,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 91.38,
        "midterm": 78.72,
        "finalExam": 93.81,
        "finalScore": 88.55,
        "predicate": "B"
      },
      {
        "id": 4,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 91.8,
        "midterm": 79.63,
        "finalExam": 95.13,
        "finalScore": 89.48,
        "predicate": "B"
      }
    ],
    "gradeAverage": 88.09
  },
  {
    "id": 2,
    "nis": "1002",
    "name": "Siti Rahmawati",
    "className": "XI RPL 1",
    "email": "siti.rahmawati@smk.belajar.id",
    "grades": [
      {
        "id": 5,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 79.08,
        "midterm": 76.98,
        "finalExam": 79.31,
        "finalScore": 78.54,
        "predicate": "C"
      },
      {
        "id": 6,
        "subject": "Basis Data",
        "assignment": 79.5,
        "midterm": 77.89,
        "finalExam": 80.63,
        "finalScore": 79.47,
        "predicate": "C"
      },
      {
        "id": 7,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 79.92,
        "midterm": 78.81,
        "finalExam": 81.94,
        "finalScore": 80.4,
        "predicate": "B"
      },
      {
        "id": 8,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 80.34,
        "midterm": 79.73,
        "finalExam": 83.26,
        "finalScore": 81.33,
        "predicate": "B"
      }
    ],
    "gradeAverage": 79.94
  },
  {
    "id": 3,
    "nis": "1003",
    "name": "Budi Santoso",
    "className": "XI RPL 2",
    "email": "budi.santoso@smk.belajar.id",
    "grades": [
      {
        "id": 9,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 90.62,
        "midterm": 77.07,
        "finalExam": 91.44,
        "finalScore": 86.88,
        "predicate": "B"
      },
      {
        "id": 10,
        "subject": "Basis Data",
        "assignment": 91.04,
        "midterm": 77.99,
        "finalExam": 92.76,
        "finalScore": 87.81,
        "predicate": "B"
      },
      {
        "id": 11,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 91.46,
        "midterm": 78.9,
        "finalExam": 94.08,
        "finalScore": 88.74,
        "predicate": "B"
      },
      {
        "id": 12,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 91.88,
        "midterm": 79.82,
        "finalExam": 95.39,
        "finalScore": 89.67,
        "predicate": "B"
      }
    ],
    "gradeAverage": 88.28
  },
  {
    "id": 7,
    "nis": "2131231",
    "name": "Emanuel Hasan",
    "className": "XII RPL 12",
    "email": "emanuel.hasan@smk.belajar.id",
    "grades": [
      {
        "id": 13,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 90.79,
        "midterm": 77.44,
        "finalExam": 91.97,
        "finalScore": 87.26,
        "predicate": "B"
      },
      {
        "id": 14,
        "subject": "Basis Data",
        "assignment": 91.21,
        "midterm": 78.35,
        "finalExam": 93.28,
        "finalScore": 88.18,
        "predicate": "B"
      },
      {
        "id": 15,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 91.63,
        "midterm": 79.27,
        "finalExam": 94.6,
        "finalScore": 89.11,
        "predicate": "B"
      },
      {
        "id": 16,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.05,
        "midterm": 80.18,
        "finalExam": 95.92,
        "finalScore": 90.04,
        "predicate": "A"
      }
    ],
    "gradeAverage": 88.65
  },
  {
    "id": 11,
    "nis": "1004",
    "name": "Aditya Pratama",
    "className": "XI RPL 1",
    "email": "aditya.pratama@smk.belajar.id",
    "grades": [
      {
        "id": 17,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 90.95,
        "midterm": 77.8,
        "finalExam": 92.49,
        "finalScore": 87.62,
        "predicate": "B"
      },
      {
        "id": 18,
        "subject": "Basis Data",
        "assignment": 91.38,
        "midterm": 78.72,
        "finalExam": 93.81,
        "finalScore": 88.55,
        "predicate": "B"
      },
      {
        "id": 19,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 91.8,
        "midterm": 79.63,
        "finalExam": 95.13,
        "finalScore": 89.48,
        "predicate": "B"
      },
      {
        "id": 20,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.22,
        "midterm": 80.55,
        "finalExam": 96.45,
        "finalScore": 90.41,
        "predicate": "A"
      }
    ],
    "gradeAverage": 89.02
  },
  {
    "id": 12,
    "nis": "1005",
    "name": "Amanda Putri Lestari",
    "className": "XI RPL 1",
    "email": "amanda.putri.lestari@smk.belajar.id",
    "grades": [
      {
        "id": 21,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 79.5,
        "midterm": 77.89,
        "finalExam": 80.63,
        "finalScore": 79.47,
        "predicate": "C"
      },
      {
        "id": 22,
        "subject": "Basis Data",
        "assignment": 79.92,
        "midterm": 78.81,
        "finalExam": 81.94,
        "finalScore": 80.4,
        "predicate": "B"
      },
      {
        "id": 23,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 80.34,
        "midterm": 79.73,
        "finalExam": 83.26,
        "finalScore": 81.33,
        "predicate": "B"
      },
      {
        "id": 24,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 80.76,
        "midterm": 80.64,
        "finalExam": 84.58,
        "finalScore": 82.25,
        "predicate": "B"
      }
    ],
    "gradeAverage": 80.86
  },
  {
    "id": 13,
    "nis": "1006",
    "name": "Andhika Wijaya",
    "className": "XI RPL 1",
    "email": "andhika.wijaya@smk.belajar.id",
    "grades": [
      {
        "id": 25,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.04,
        "midterm": 77.99,
        "finalExam": 92.76,
        "finalScore": 87.81,
        "predicate": "B"
      },
      {
        "id": 26,
        "subject": "Basis Data",
        "assignment": 91.46,
        "midterm": 78.9,
        "finalExam": 94.08,
        "finalScore": 88.74,
        "predicate": "B"
      },
      {
        "id": 27,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 91.88,
        "midterm": 79.82,
        "finalExam": 95.39,
        "finalScore": 89.67,
        "predicate": "B"
      },
      {
        "id": 28,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.3,
        "midterm": 80.73,
        "finalExam": 96.71,
        "finalScore": 90.59,
        "predicate": "A"
      }
    ],
    "gradeAverage": 89.2
  },
  {
    "id": 14,
    "nis": "1007",
    "name": "Annisa Rahmawati",
    "className": "XI RPL 1",
    "email": "annisa.rahmawati@smk.belajar.id",
    "grades": [
      {
        "id": 29,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 79.58,
        "midterm": 78.08,
        "finalExam": 80.89,
        "finalScore": 79.65,
        "predicate": "C"
      },
      {
        "id": 30,
        "subject": "Basis Data",
        "assignment": 80,
        "midterm": 78.99,
        "finalExam": 82.21,
        "finalScore": 80.58,
        "predicate": "B"
      },
      {
        "id": 31,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 80.42,
        "midterm": 79.91,
        "finalExam": 83.53,
        "finalScore": 81.51,
        "predicate": "B"
      },
      {
        "id": 32,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 80.84,
        "midterm": 80.82,
        "finalExam": 84.84,
        "finalScore": 82.43,
        "predicate": "B"
      }
    ],
    "gradeAverage": 81.04
  },
  {
    "id": 15,
    "nis": "1008",
    "name": "Bagas Satria Nugraha",
    "className": "XI RPL 1",
    "email": "bagas.satria.nugraha@smk.belajar.id",
    "grades": [
      {
        "id": 33,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.12,
        "midterm": 78.17,
        "finalExam": 93.02,
        "finalScore": 88,
        "predicate": "B"
      },
      {
        "id": 34,
        "subject": "Basis Data",
        "assignment": 91.54,
        "midterm": 79.08,
        "finalExam": 94.34,
        "finalScore": 88.92,
        "predicate": "B"
      },
      {
        "id": 35,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 91.97,
        "midterm": 80,
        "finalExam": 95.66,
        "finalScore": 89.85,
        "predicate": "B"
      },
      {
        "id": 36,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.39,
        "midterm": 80.92,
        "finalExam": 96.98,
        "finalScore": 90.78,
        "predicate": "A"
      }
    ],
    "gradeAverage": 89.39
  },
  {
    "id": 16,
    "nis": "1009",
    "name": "Cantika Dewi Anggraini",
    "className": "XI RPL 1",
    "email": "cantika.dewi.anggraini@smk.belajar.id",
    "grades": [
      {
        "id": 37,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 79.67,
        "midterm": 78.26,
        "finalExam": 81.15,
        "finalScore": 79.84,
        "predicate": "C"
      },
      {
        "id": 38,
        "subject": "Basis Data",
        "assignment": 80.09,
        "midterm": 79.18,
        "finalExam": 82.47,
        "finalScore": 80.77,
        "predicate": "B"
      },
      {
        "id": 39,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 80.51,
        "midterm": 80.09,
        "finalExam": 83.79,
        "finalScore": 81.7,
        "predicate": "B"
      },
      {
        "id": 40,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 80.93,
        "midterm": 81.01,
        "finalExam": 85.11,
        "finalScore": 82.63,
        "predicate": "B"
      }
    ],
    "gradeAverage": 81.23
  },
  {
    "id": 17,
    "nis": "1010",
    "name": "Daffa Danendra",
    "className": "XI RPL 1",
    "email": "daffa.danendra@smk.belajar.id",
    "grades": [
      {
        "id": 41,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.21,
        "midterm": 78.35,
        "finalExam": 93.28,
        "finalScore": 88.18,
        "predicate": "B"
      },
      {
        "id": 42,
        "subject": "Basis Data",
        "assignment": 91.63,
        "midterm": 79.27,
        "finalExam": 94.6,
        "finalScore": 89.11,
        "predicate": "B"
      },
      {
        "id": 43,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.05,
        "midterm": 80.18,
        "finalExam": 95.92,
        "finalScore": 90.04,
        "predicate": "A"
      },
      {
        "id": 44,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.47,
        "midterm": 81.1,
        "finalExam": 97.24,
        "finalScore": 90.97,
        "predicate": "A"
      }
    ],
    "gradeAverage": 89.58
  },
  {
    "id": 18,
    "nis": "1011",
    "name": "Devina Maharani",
    "className": "XI RPL 1",
    "email": "devina.maharani@smk.belajar.id",
    "grades": [
      {
        "id": 45,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 79.75,
        "midterm": 78.44,
        "finalExam": 81.42,
        "finalScore": 80.03,
        "predicate": "B"
      },
      {
        "id": 46,
        "subject": "Basis Data",
        "assignment": 80.17,
        "midterm": 79.36,
        "finalExam": 82.74,
        "finalScore": 80.95,
        "predicate": "B"
      },
      {
        "id": 47,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 80.59,
        "midterm": 80.28,
        "finalExam": 84.05,
        "finalScore": 81.88,
        "predicate": "B"
      },
      {
        "id": 48,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.01,
        "midterm": 81.19,
        "finalExam": 85.37,
        "finalScore": 82.81,
        "predicate": "B"
      }
    ],
    "gradeAverage": 81.42
  },
  {
    "id": 19,
    "nis": "1012",
    "name": "Dimas Arya Saputra",
    "className": "XI RPL 1",
    "email": "dimas.arya.saputra@smk.belajar.id",
    "grades": [
      {
        "id": 49,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.29,
        "midterm": 78.54,
        "finalExam": 93.55,
        "finalScore": 88.37,
        "predicate": "B"
      },
      {
        "id": 50,
        "subject": "Basis Data",
        "assignment": 91.71,
        "midterm": 79.45,
        "finalExam": 94.87,
        "finalScore": 89.3,
        "predicate": "B"
      },
      {
        "id": 51,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.13,
        "midterm": 80.37,
        "finalExam": 96.19,
        "finalScore": 90.23,
        "predicate": "A"
      },
      {
        "id": 52,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.55,
        "midterm": 81.28,
        "finalExam": 97.5,
        "finalScore": 91.15,
        "predicate": "A"
      }
    ],
    "gradeAverage": 89.76
  },
  {
    "id": 20,
    "nis": "1013",
    "name": "Eka Nur Fadillah",
    "className": "XI RPL 1",
    "email": "eka.nur.fadillah@smk.belajar.id",
    "grades": [
      {
        "id": 53,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 79.83,
        "midterm": 78.63,
        "finalExam": 81.68,
        "finalScore": 80.21,
        "predicate": "B"
      },
      {
        "id": 54,
        "subject": "Basis Data",
        "assignment": 80.25,
        "midterm": 79.54,
        "finalExam": 83,
        "finalScore": 81.14,
        "predicate": "B"
      },
      {
        "id": 55,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 80.68,
        "midterm": 80.46,
        "finalExam": 84.32,
        "finalScore": 82.07,
        "predicate": "B"
      },
      {
        "id": 56,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.1,
        "midterm": 81.37,
        "finalExam": 85.64,
        "finalScore": 83,
        "predicate": "B"
      }
    ],
    "gradeAverage": 81.6
  },
  {
    "id": 21,
    "nis": "1014",
    "name": "Fajar Ramadhan",
    "className": "XI RPL 2",
    "email": "fajar.ramadhan@smk.belajar.id",
    "grades": [
      {
        "id": 57,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.38,
        "midterm": 78.72,
        "finalExam": 93.81,
        "finalScore": 88.55,
        "predicate": "B"
      },
      {
        "id": 58,
        "subject": "Basis Data",
        "assignment": 91.8,
        "midterm": 79.63,
        "finalExam": 95.13,
        "finalScore": 89.48,
        "predicate": "B"
      },
      {
        "id": 59,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.22,
        "midterm": 80.55,
        "finalExam": 96.45,
        "finalScore": 90.41,
        "predicate": "A"
      },
      {
        "id": 60,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.64,
        "midterm": 81.47,
        "finalExam": 97.77,
        "finalScore": 91.34,
        "predicate": "A"
      }
    ],
    "gradeAverage": 89.94
  },
  {
    "id": 22,
    "nis": "1015",
    "name": "Farhan Maulana",
    "className": "XI RPL 2",
    "email": "farhan.maulana@smk.belajar.id",
    "grades": [
      {
        "id": 61,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 79.92,
        "midterm": 78.81,
        "finalExam": 81.94,
        "finalScore": 80.4,
        "predicate": "B"
      },
      {
        "id": 62,
        "subject": "Basis Data",
        "assignment": 80.34,
        "midterm": 79.73,
        "finalExam": 83.26,
        "finalScore": 81.33,
        "predicate": "B"
      },
      {
        "id": 63,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 80.76,
        "midterm": 80.64,
        "finalExam": 84.58,
        "finalScore": 82.25,
        "predicate": "B"
      },
      {
        "id": 64,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.18,
        "midterm": 81.56,
        "finalExam": 85.9,
        "finalScore": 83.18,
        "predicate": "B"
      }
    ],
    "gradeAverage": 81.79
  },
  {
    "id": 23,
    "nis": "1016",
    "name": "Fathir Ilham Robbani",
    "className": "XI RPL 2",
    "email": "fathir.ilham.robbani@smk.belajar.id",
    "grades": [
      {
        "id": 65,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.46,
        "midterm": 78.9,
        "finalExam": 94.08,
        "finalScore": 88.74,
        "predicate": "B"
      },
      {
        "id": 66,
        "subject": "Basis Data",
        "assignment": 91.88,
        "midterm": 79.82,
        "finalExam": 95.39,
        "finalScore": 89.67,
        "predicate": "B"
      },
      {
        "id": 67,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.3,
        "midterm": 80.73,
        "finalExam": 96.71,
        "finalScore": 90.59,
        "predicate": "A"
      },
      {
        "id": 68,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.72,
        "midterm": 81.65,
        "finalExam": 74.03,
        "finalScore": 81.92,
        "predicate": "B"
      }
    ],
    "gradeAverage": 87.73
  },
  {
    "id": 24,
    "nis": "1017",
    "name": "Galih Pangestu",
    "className": "XI RPL 2",
    "email": "galih.pangestu@smk.belajar.id",
    "grades": [
      {
        "id": 69,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80,
        "midterm": 78.99,
        "finalExam": 82.21,
        "finalScore": 80.58,
        "predicate": "B"
      },
      {
        "id": 70,
        "subject": "Basis Data",
        "assignment": 80.42,
        "midterm": 79.91,
        "finalExam": 83.53,
        "finalScore": 81.51,
        "predicate": "B"
      },
      {
        "id": 71,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 80.84,
        "midterm": 80.82,
        "finalExam": 84.84,
        "finalScore": 82.43,
        "predicate": "B"
      },
      {
        "id": 72,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.27,
        "midterm": 81.74,
        "finalExam": 86.16,
        "finalScore": 83.37,
        "predicate": "B"
      }
    ],
    "gradeAverage": 81.97
  },
  {
    "id": 25,
    "nis": "1018",
    "name": "Gita Cahyani",
    "className": "XI RPL 2",
    "email": "gita.cahyani@smk.belajar.id",
    "grades": [
      {
        "id": 73,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.54,
        "midterm": 79.08,
        "finalExam": 94.34,
        "finalScore": 88.92,
        "predicate": "B"
      },
      {
        "id": 74,
        "subject": "Basis Data",
        "assignment": 91.97,
        "midterm": 80,
        "finalExam": 95.66,
        "finalScore": 89.85,
        "predicate": "B"
      },
      {
        "id": 75,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.39,
        "midterm": 80.92,
        "finalExam": 96.98,
        "finalScore": 90.78,
        "predicate": "A"
      },
      {
        "id": 76,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.81,
        "midterm": 81.83,
        "finalExam": 74.29,
        "finalScore": 82.11,
        "predicate": "B"
      }
    ],
    "gradeAverage": 87.91
  },
  {
    "id": 26,
    "nis": "1019",
    "name": "Hafizh Syahputra",
    "className": "XI RPL 2",
    "email": "hafizh.syahputra@smk.belajar.id",
    "grades": [
      {
        "id": 77,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.09,
        "midterm": 79.18,
        "finalExam": 82.47,
        "finalScore": 80.77,
        "predicate": "B"
      },
      {
        "id": 78,
        "subject": "Basis Data",
        "assignment": 80.51,
        "midterm": 80.09,
        "finalExam": 83.79,
        "finalScore": 81.7,
        "predicate": "B"
      },
      {
        "id": 79,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 80.93,
        "midterm": 81.01,
        "finalExam": 85.11,
        "finalScore": 82.63,
        "predicate": "B"
      },
      {
        "id": 80,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.35,
        "midterm": 81.92,
        "finalExam": 86.43,
        "finalScore": 83.55,
        "predicate": "B"
      }
    ],
    "gradeAverage": 82.16
  },
  {
    "id": 27,
    "nis": "1020",
    "name": "Indah Permatasari",
    "className": "XI RPL 2",
    "email": "indah.permatasari@smk.belajar.id",
    "grades": [
      {
        "id": 81,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.63,
        "midterm": 79.27,
        "finalExam": 94.6,
        "finalScore": 89.11,
        "predicate": "B"
      },
      {
        "id": 82,
        "subject": "Basis Data",
        "assignment": 92.05,
        "midterm": 80.18,
        "finalExam": 95.92,
        "finalScore": 90.04,
        "predicate": "A"
      },
      {
        "id": 83,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.47,
        "midterm": 81.1,
        "finalExam": 97.24,
        "finalScore": 90.97,
        "predicate": "A"
      },
      {
        "id": 84,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.89,
        "midterm": 82.01,
        "finalExam": 74.56,
        "finalScore": 82.29,
        "predicate": "B"
      }
    ],
    "gradeAverage": 88.1
  },
  {
    "id": 28,
    "nis": "1021",
    "name": "Kevin Jonathan",
    "className": "XI RPL 2",
    "email": "kevin.jonathan@smk.belajar.id",
    "grades": [
      {
        "id": 85,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.17,
        "midterm": 79.36,
        "finalExam": 82.74,
        "finalScore": 80.95,
        "predicate": "B"
      },
      {
        "id": 86,
        "subject": "Basis Data",
        "assignment": 80.59,
        "midterm": 80.28,
        "finalExam": 84.05,
        "finalScore": 81.88,
        "predicate": "B"
      },
      {
        "id": 87,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.01,
        "midterm": 81.19,
        "finalExam": 85.37,
        "finalScore": 82.81,
        "predicate": "B"
      },
      {
        "id": 88,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.43,
        "midterm": 82.11,
        "finalExam": 86.69,
        "finalScore": 83.74,
        "predicate": "B"
      }
    ],
    "gradeAverage": 82.34
  },
  {
    "id": 29,
    "nis": "1022",
    "name": "Larasati Kusuma",
    "className": "XI RPL 2",
    "email": "larasati.kusuma@smk.belajar.id",
    "grades": [
      {
        "id": 89,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.71,
        "midterm": 79.45,
        "finalExam": 94.87,
        "finalScore": 89.3,
        "predicate": "B"
      },
      {
        "id": 90,
        "subject": "Basis Data",
        "assignment": 92.13,
        "midterm": 80.37,
        "finalExam": 96.19,
        "finalScore": 90.23,
        "predicate": "A"
      },
      {
        "id": 91,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.55,
        "midterm": 81.28,
        "finalExam": 97.5,
        "finalScore": 91.15,
        "predicate": "A"
      },
      {
        "id": 92,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 92.98,
        "midterm": 82.2,
        "finalExam": 74.82,
        "finalScore": 82.48,
        "predicate": "B"
      }
    ],
    "gradeAverage": 88.29
  },
  {
    "id": 30,
    "nis": "1023",
    "name": "Muhammad Zaky Alfarizi",
    "className": "XI RPL 2",
    "email": "muhammad.zaky.alfarizi@smk.belajar.id",
    "grades": [
      {
        "id": 93,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.25,
        "midterm": 79.54,
        "finalExam": 83,
        "finalScore": 81.14,
        "predicate": "B"
      },
      {
        "id": 94,
        "subject": "Basis Data",
        "assignment": 80.68,
        "midterm": 80.46,
        "finalExam": 84.32,
        "finalScore": 82.07,
        "predicate": "B"
      },
      {
        "id": 95,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.1,
        "midterm": 81.37,
        "finalExam": 85.64,
        "finalScore": 83,
        "predicate": "B"
      },
      {
        "id": 96,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.52,
        "midterm": 82.29,
        "finalExam": 86.95,
        "finalScore": 83.92,
        "predicate": "B"
      }
    ],
    "gradeAverage": 82.53
  },
  {
    "id": 31,
    "nis": "1024",
    "name": "Nabila Shafa Kamila",
    "className": "XI RPL 3",
    "email": "nabila.shafa.kamila@smk.belajar.id",
    "grades": [
      {
        "id": 97,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.8,
        "midterm": 79.63,
        "finalExam": 95.13,
        "finalScore": 89.48,
        "predicate": "B"
      },
      {
        "id": 98,
        "subject": "Basis Data",
        "assignment": 92.22,
        "midterm": 80.55,
        "finalExam": 96.45,
        "finalScore": 90.41,
        "predicate": "A"
      },
      {
        "id": 99,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.64,
        "midterm": 81.47,
        "finalExam": 97.77,
        "finalScore": 91.34,
        "predicate": "A"
      },
      {
        "id": 100,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.06,
        "midterm": 82.38,
        "finalExam": 75.09,
        "finalScore": 82.67,
        "predicate": "B"
      }
    ],
    "gradeAverage": 88.48
  },
  {
    "id": 32,
    "nis": "1025",
    "name": "Najwa Aulia Zahra",
    "className": "XI RPL 3",
    "email": "najwa.aulia.zahra@smk.belajar.id",
    "grades": [
      {
        "id": 101,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.34,
        "midterm": 79.73,
        "finalExam": 83.26,
        "finalScore": 81.33,
        "predicate": "B"
      },
      {
        "id": 102,
        "subject": "Basis Data",
        "assignment": 80.76,
        "midterm": 80.64,
        "finalExam": 84.58,
        "finalScore": 82.25,
        "predicate": "B"
      },
      {
        "id": 103,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.18,
        "midterm": 81.56,
        "finalExam": 85.9,
        "finalScore": 83.18,
        "predicate": "B"
      },
      {
        "id": 104,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.6,
        "midterm": 82.47,
        "finalExam": 87.22,
        "finalScore": 84.11,
        "predicate": "B"
      }
    ],
    "gradeAverage": 82.72
  },
  {
    "id": 33,
    "nis": "1026",
    "name": "Rafi Kurniawan",
    "className": "XI RPL 3",
    "email": "rafi.kurniawan@smk.belajar.id",
    "grades": [
      {
        "id": 105,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.88,
        "midterm": 79.82,
        "finalExam": 95.39,
        "finalScore": 89.67,
        "predicate": "B"
      },
      {
        "id": 106,
        "subject": "Basis Data",
        "assignment": 92.3,
        "midterm": 80.73,
        "finalExam": 96.71,
        "finalScore": 90.59,
        "predicate": "A"
      },
      {
        "id": 107,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.72,
        "midterm": 81.65,
        "finalExam": 74.03,
        "finalScore": 81.92,
        "predicate": "B"
      },
      {
        "id": 108,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.14,
        "midterm": 82.56,
        "finalExam": 75.35,
        "finalScore": 82.85,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.26
  },
  {
    "id": 34,
    "nis": "1027",
    "name": "Rangga Putra Pratama",
    "className": "XI RPL 3",
    "email": "rangga.putra.pratama@smk.belajar.id",
    "grades": [
      {
        "id": 109,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.42,
        "midterm": 79.91,
        "finalExam": 83.53,
        "finalScore": 81.51,
        "predicate": "B"
      },
      {
        "id": 110,
        "subject": "Basis Data",
        "assignment": 80.84,
        "midterm": 80.82,
        "finalExam": 84.84,
        "finalScore": 82.43,
        "predicate": "B"
      },
      {
        "id": 111,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.27,
        "midterm": 81.74,
        "finalExam": 86.16,
        "finalScore": 83.37,
        "predicate": "B"
      },
      {
        "id": 112,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.69,
        "midterm": 82.66,
        "finalExam": 87.48,
        "finalScore": 84.3,
        "predicate": "B"
      }
    ],
    "gradeAverage": 82.9
  },
  {
    "id": 35,
    "nis": "1028",
    "name": "Reza Firmansyah",
    "className": "XI RPL 3",
    "email": "reza.firmansyah@smk.belajar.id",
    "grades": [
      {
        "id": 113,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 91.97,
        "midterm": 80,
        "finalExam": 95.66,
        "finalScore": 89.85,
        "predicate": "B"
      },
      {
        "id": 114,
        "subject": "Basis Data",
        "assignment": 92.39,
        "midterm": 80.92,
        "finalExam": 96.98,
        "finalScore": 90.78,
        "predicate": "A"
      },
      {
        "id": 115,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.81,
        "midterm": 81.83,
        "finalExam": 74.29,
        "finalScore": 82.11,
        "predicate": "B"
      },
      {
        "id": 116,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.23,
        "midterm": 82.75,
        "finalExam": 75.61,
        "finalScore": 83.04,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.45
  },
  {
    "id": 36,
    "nis": "1029",
    "name": "Rizky Fadillah",
    "className": "XI RPL 3",
    "email": "rizky.fadillah@smk.belajar.id",
    "grades": [
      {
        "id": 117,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.51,
        "midterm": 80.09,
        "finalExam": 83.79,
        "finalScore": 81.7,
        "predicate": "B"
      },
      {
        "id": 118,
        "subject": "Basis Data",
        "assignment": 80.93,
        "midterm": 81.01,
        "finalExam": 85.11,
        "finalScore": 82.63,
        "predicate": "B"
      },
      {
        "id": 119,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.35,
        "midterm": 81.92,
        "finalExam": 86.43,
        "finalScore": 83.55,
        "predicate": "B"
      },
      {
        "id": 120,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.77,
        "midterm": 82.84,
        "finalExam": 87.75,
        "finalScore": 84.48,
        "predicate": "B"
      }
    ],
    "gradeAverage": 83.09
  },
  {
    "id": 37,
    "nis": "1030",
    "name": "Salma Salsabila",
    "className": "XI RPL 3",
    "email": "salma.salsabila@smk.belajar.id",
    "grades": [
      {
        "id": 121,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.05,
        "midterm": 80.18,
        "finalExam": 95.92,
        "finalScore": 90.04,
        "predicate": "A"
      },
      {
        "id": 122,
        "subject": "Basis Data",
        "assignment": 92.47,
        "midterm": 81.1,
        "finalExam": 97.24,
        "finalScore": 90.97,
        "predicate": "A"
      },
      {
        "id": 123,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.89,
        "midterm": 82.01,
        "finalExam": 74.56,
        "finalScore": 82.29,
        "predicate": "B"
      },
      {
        "id": 124,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.31,
        "midterm": 82.93,
        "finalExam": 75.88,
        "finalScore": 83.22,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.63
  },
  {
    "id": 38,
    "nis": "1031",
    "name": "Taufik Hidayat",
    "className": "XI RPL 3",
    "email": "taufik.hidayat@smk.belajar.id",
    "grades": [
      {
        "id": 125,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.59,
        "midterm": 80.28,
        "finalExam": 84.05,
        "finalScore": 81.88,
        "predicate": "B"
      },
      {
        "id": 126,
        "subject": "Basis Data",
        "assignment": 81.01,
        "midterm": 81.19,
        "finalExam": 85.37,
        "finalScore": 82.81,
        "predicate": "B"
      },
      {
        "id": 127,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.43,
        "midterm": 82.11,
        "finalExam": 86.69,
        "finalScore": 83.74,
        "predicate": "B"
      },
      {
        "id": 128,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.86,
        "midterm": 83.02,
        "finalExam": 88.01,
        "finalScore": 84.67,
        "predicate": "B"
      }
    ],
    "gradeAverage": 83.28
  },
  {
    "id": 39,
    "nis": "1032",
    "name": "Vina Melati",
    "className": "XI RPL 3",
    "email": "vina.melati@smk.belajar.id",
    "grades": [
      {
        "id": 129,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.13,
        "midterm": 80.37,
        "finalExam": 96.19,
        "finalScore": 90.23,
        "predicate": "A"
      },
      {
        "id": 130,
        "subject": "Basis Data",
        "assignment": 92.55,
        "midterm": 81.28,
        "finalExam": 97.5,
        "finalScore": 91.15,
        "predicate": "A"
      },
      {
        "id": 131,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 92.98,
        "midterm": 82.2,
        "finalExam": 74.82,
        "finalScore": 82.48,
        "predicate": "B"
      },
      {
        "id": 132,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.4,
        "midterm": 83.11,
        "finalExam": 76.14,
        "finalScore": 83.41,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.82
  },
  {
    "id": 40,
    "nis": "1033",
    "name": "Yoga Prasetyo",
    "className": "XI RPL 3",
    "email": "yoga.prasetyo@smk.belajar.id",
    "grades": [
      {
        "id": 133,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.68,
        "midterm": 80.46,
        "finalExam": 84.32,
        "finalScore": 82.07,
        "predicate": "B"
      },
      {
        "id": 134,
        "subject": "Basis Data",
        "assignment": 81.1,
        "midterm": 81.37,
        "finalExam": 85.64,
        "finalScore": 83,
        "predicate": "B"
      },
      {
        "id": 135,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.52,
        "midterm": 82.29,
        "finalExam": 86.95,
        "finalScore": 83.92,
        "predicate": "B"
      },
      {
        "id": 136,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 81.94,
        "midterm": 83.2,
        "finalExam": 88.27,
        "finalScore": 84.85,
        "predicate": "B"
      }
    ],
    "gradeAverage": 83.46
  },
  {
    "id": 41,
    "nis": "1034",
    "name": "Abimanyu Danuarta",
    "className": "XI RPL 1",
    "email": "abimanyu.danuarta@smk.belajar.id",
    "grades": [
      {
        "id": 137,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.22,
        "midterm": 80.55,
        "finalExam": 96.45,
        "finalScore": 90.41,
        "predicate": "A"
      },
      {
        "id": 138,
        "subject": "Basis Data",
        "assignment": 92.64,
        "midterm": 81.47,
        "finalExam": 97.77,
        "finalScore": 91.34,
        "predicate": "A"
      },
      {
        "id": 139,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.06,
        "midterm": 82.38,
        "finalExam": 75.09,
        "finalScore": 82.67,
        "predicate": "B"
      },
      {
        "id": 140,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.48,
        "midterm": 83.3,
        "finalExam": 76.4,
        "finalScore": 83.59,
        "predicate": "B"
      }
    ],
    "gradeAverage": 87
  },
  {
    "id": 42,
    "nis": "1035",
    "name": "Aisyah Putri Rahayu",
    "className": "XI RPL 1",
    "email": "aisyah.putri.rahayu@smk.belajar.id",
    "grades": [
      {
        "id": 141,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.76,
        "midterm": 80.64,
        "finalExam": 84.58,
        "finalScore": 82.25,
        "predicate": "B"
      },
      {
        "id": 142,
        "subject": "Basis Data",
        "assignment": 81.18,
        "midterm": 81.56,
        "finalExam": 85.9,
        "finalScore": 83.18,
        "predicate": "B"
      },
      {
        "id": 143,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.6,
        "midterm": 82.47,
        "finalExam": 87.22,
        "finalScore": 84.11,
        "predicate": "B"
      },
      {
        "id": 144,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.02,
        "midterm": 83.39,
        "finalExam": 88.54,
        "finalScore": 85.04,
        "predicate": "B"
      }
    ],
    "gradeAverage": 83.65
  },
  {
    "id": 43,
    "nis": "1036",
    "name": "Alifian Akbar",
    "className": "XI RPL 1",
    "email": "alifian.akbar@smk.belajar.id",
    "grades": [
      {
        "id": 145,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.3,
        "midterm": 80.73,
        "finalExam": 96.71,
        "finalScore": 90.59,
        "predicate": "A"
      },
      {
        "id": 146,
        "subject": "Basis Data",
        "assignment": 92.72,
        "midterm": 81.65,
        "finalExam": 74.03,
        "finalScore": 81.92,
        "predicate": "B"
      },
      {
        "id": 147,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.14,
        "midterm": 82.56,
        "finalExam": 75.35,
        "finalScore": 82.85,
        "predicate": "B"
      },
      {
        "id": 148,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.57,
        "midterm": 83.48,
        "finalExam": 76.67,
        "finalScore": 83.78,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.78
  },
  {
    "id": 44,
    "nis": "1037",
    "name": "Anisa Tri Wahyuni",
    "className": "XI RPL 1",
    "email": "anisa.tri.wahyuni@smk.belajar.id",
    "grades": [
      {
        "id": 149,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.84,
        "midterm": 80.82,
        "finalExam": 84.84,
        "finalScore": 82.43,
        "predicate": "B"
      },
      {
        "id": 150,
        "subject": "Basis Data",
        "assignment": 81.27,
        "midterm": 81.74,
        "finalExam": 86.16,
        "finalScore": 83.37,
        "predicate": "B"
      },
      {
        "id": 151,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.69,
        "midterm": 82.66,
        "finalExam": 87.48,
        "finalScore": 84.3,
        "predicate": "B"
      },
      {
        "id": 152,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.11,
        "midterm": 83.57,
        "finalExam": 88.8,
        "finalScore": 85.22,
        "predicate": "B"
      }
    ],
    "gradeAverage": 83.83
  },
  {
    "id": 45,
    "nis": "1038",
    "name": "Ardiansyah Pratama",
    "className": "XI RPL 1",
    "email": "ardiansyah.pratama@smk.belajar.id",
    "grades": [
      {
        "id": 153,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.39,
        "midterm": 80.92,
        "finalExam": 96.98,
        "finalScore": 90.78,
        "predicate": "A"
      },
      {
        "id": 154,
        "subject": "Basis Data",
        "assignment": 92.81,
        "midterm": 81.83,
        "finalExam": 74.29,
        "finalScore": 82.11,
        "predicate": "B"
      },
      {
        "id": 155,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.23,
        "midterm": 82.75,
        "finalExam": 75.61,
        "finalScore": 83.04,
        "predicate": "B"
      },
      {
        "id": 156,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.65,
        "midterm": 83.66,
        "finalExam": 76.93,
        "finalScore": 83.97,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.97
  },
  {
    "id": 46,
    "nis": "1039",
    "name": "Bayu Tri Pamungkas",
    "className": "XI RPL 1",
    "email": "bayu.tri.pamungkas@smk.belajar.id",
    "grades": [
      {
        "id": 157,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 80.93,
        "midterm": 81.01,
        "finalExam": 85.11,
        "finalScore": 82.63,
        "predicate": "B"
      },
      {
        "id": 158,
        "subject": "Basis Data",
        "assignment": 81.35,
        "midterm": 81.92,
        "finalExam": 86.43,
        "finalScore": 83.55,
        "predicate": "B"
      },
      {
        "id": 159,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.77,
        "midterm": 82.84,
        "finalExam": 87.75,
        "finalScore": 84.48,
        "predicate": "B"
      },
      {
        "id": 160,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.19,
        "midterm": 83.75,
        "finalExam": 89.06,
        "finalScore": 85.41,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.02
  },
  {
    "id": 47,
    "nis": "1040",
    "name": "Bunga Citra Lestari",
    "className": "XI RPL 1",
    "email": "bunga.citra.lestari@smk.belajar.id",
    "grades": [
      {
        "id": 161,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.47,
        "midterm": 81.1,
        "finalExam": 97.24,
        "finalScore": 90.97,
        "predicate": "A"
      },
      {
        "id": 162,
        "subject": "Basis Data",
        "assignment": 92.89,
        "midterm": 82.01,
        "finalExam": 74.56,
        "finalScore": 82.29,
        "predicate": "B"
      },
      {
        "id": 163,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.31,
        "midterm": 82.93,
        "finalExam": 75.88,
        "finalScore": 83.22,
        "predicate": "B"
      },
      {
        "id": 164,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.73,
        "midterm": 83.85,
        "finalExam": 77.2,
        "finalScore": 84.15,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.16
  },
  {
    "id": 48,
    "nis": "1041",
    "name": "Cahya Ramadhani",
    "className": "XI RPL 1",
    "email": "cahya.ramadhani@smk.belajar.id",
    "grades": [
      {
        "id": 165,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.01,
        "midterm": 81.19,
        "finalExam": 85.37,
        "finalScore": 82.81,
        "predicate": "B"
      },
      {
        "id": 166,
        "subject": "Basis Data",
        "assignment": 81.43,
        "midterm": 82.11,
        "finalExam": 86.69,
        "finalScore": 83.74,
        "predicate": "B"
      },
      {
        "id": 167,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.86,
        "midterm": 83.02,
        "finalExam": 88.01,
        "finalScore": 84.67,
        "predicate": "B"
      },
      {
        "id": 168,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.28,
        "midterm": 83.94,
        "finalExam": 89.33,
        "finalScore": 85.6,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.21
  },
  {
    "id": 49,
    "nis": "1042",
    "name": "Damar Jati Saputra",
    "className": "XI RPL 1",
    "email": "damar.jati.saputra@smk.belajar.id",
    "grades": [
      {
        "id": 169,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.55,
        "midterm": 81.28,
        "finalExam": 97.5,
        "finalScore": 91.15,
        "predicate": "A"
      },
      {
        "id": 170,
        "subject": "Basis Data",
        "assignment": 92.98,
        "midterm": 82.2,
        "finalExam": 74.82,
        "finalScore": 82.48,
        "predicate": "B"
      },
      {
        "id": 171,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.4,
        "midterm": 83.11,
        "finalExam": 76.14,
        "finalScore": 83.41,
        "predicate": "B"
      },
      {
        "id": 172,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.82,
        "midterm": 84.03,
        "finalExam": 77.46,
        "finalScore": 84.34,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.34
  },
  {
    "id": 50,
    "nis": "1043",
    "name": "Dina Nurul Azizah",
    "className": "XI RPL 1",
    "email": "dina.nurul.azizah@smk.belajar.id",
    "grades": [
      {
        "id": 173,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.1,
        "midterm": 81.37,
        "finalExam": 85.64,
        "finalScore": 83,
        "predicate": "B"
      },
      {
        "id": 174,
        "subject": "Basis Data",
        "assignment": 81.52,
        "midterm": 82.29,
        "finalExam": 86.95,
        "finalScore": 83.92,
        "predicate": "B"
      },
      {
        "id": 175,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 81.94,
        "midterm": 83.2,
        "finalExam": 88.27,
        "finalScore": 84.85,
        "predicate": "B"
      },
      {
        "id": 176,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.36,
        "midterm": 84.12,
        "finalExam": 89.59,
        "finalScore": 85.78,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.39
  },
  {
    "id": 51,
    "nis": "1044",
    "name": "Erlangga Saputra",
    "className": "XI RPL 2",
    "email": "erlangga.saputra@smk.belajar.id",
    "grades": [
      {
        "id": 177,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.64,
        "midterm": 81.47,
        "finalExam": 97.77,
        "finalScore": 91.34,
        "predicate": "A"
      },
      {
        "id": 178,
        "subject": "Basis Data",
        "assignment": 93.06,
        "midterm": 82.38,
        "finalExam": 75.09,
        "finalScore": 82.67,
        "predicate": "B"
      },
      {
        "id": 179,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.48,
        "midterm": 83.3,
        "finalExam": 76.4,
        "finalScore": 83.59,
        "predicate": "B"
      },
      {
        "id": 180,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.9,
        "midterm": 84.21,
        "finalExam": 77.72,
        "finalScore": 84.52,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.53
  },
  {
    "id": 52,
    "nis": "1045",
    "name": "Fadli Hidayatullah",
    "className": "XI RPL 2",
    "email": "fadli.hidayatullah@smk.belajar.id",
    "grades": [
      {
        "id": 181,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.18,
        "midterm": 81.56,
        "finalExam": 85.9,
        "finalScore": 83.18,
        "predicate": "B"
      },
      {
        "id": 182,
        "subject": "Basis Data",
        "assignment": 81.6,
        "midterm": 82.47,
        "finalExam": 87.22,
        "finalScore": 84.11,
        "predicate": "B"
      },
      {
        "id": 183,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.02,
        "midterm": 83.39,
        "finalExam": 88.54,
        "finalScore": 85.04,
        "predicate": "B"
      },
      {
        "id": 184,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.44,
        "midterm": 84.3,
        "finalExam": 89.85,
        "finalScore": 85.96,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.57
  },
  {
    "id": 53,
    "nis": "1046",
    "name": "Fani Rahmawati",
    "className": "XI RPL 2",
    "email": "fani.rahmawati@smk.belajar.id",
    "grades": [
      {
        "id": 185,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.72,
        "midterm": 81.65,
        "finalExam": 74.03,
        "finalScore": 81.92,
        "predicate": "B"
      },
      {
        "id": 186,
        "subject": "Basis Data",
        "assignment": 93.14,
        "midterm": 82.56,
        "finalExam": 75.35,
        "finalScore": 82.85,
        "predicate": "B"
      },
      {
        "id": 187,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.57,
        "midterm": 83.48,
        "finalExam": 76.67,
        "finalScore": 83.78,
        "predicate": "B"
      },
      {
        "id": 188,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 93.99,
        "midterm": 84.4,
        "finalExam": 77.99,
        "finalScore": 84.71,
        "predicate": "B"
      }
    ],
    "gradeAverage": 83.31
  },
  {
    "id": 54,
    "nis": "1047",
    "name": "Gilang Ramadhan",
    "className": "XI RPL 2",
    "email": "gilang.ramadhan@smk.belajar.id",
    "grades": [
      {
        "id": 189,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.27,
        "midterm": 81.74,
        "finalExam": 86.16,
        "finalScore": 83.37,
        "predicate": "B"
      },
      {
        "id": 190,
        "subject": "Basis Data",
        "assignment": 81.69,
        "midterm": 82.66,
        "finalExam": 87.48,
        "finalScore": 84.3,
        "predicate": "B"
      },
      {
        "id": 191,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.11,
        "midterm": 83.57,
        "finalExam": 88.8,
        "finalScore": 85.22,
        "predicate": "B"
      },
      {
        "id": 192,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.53,
        "midterm": 84.49,
        "finalExam": 90.12,
        "finalScore": 86.15,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.76
  },
  {
    "id": 55,
    "nis": "1048",
    "name": "Hana Fauziah",
    "className": "XI RPL 2",
    "email": "hana.fauziah@smk.belajar.id",
    "grades": [
      {
        "id": 193,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.81,
        "midterm": 81.83,
        "finalExam": 74.29,
        "finalScore": 82.11,
        "predicate": "B"
      },
      {
        "id": 194,
        "subject": "Basis Data",
        "assignment": 93.23,
        "midterm": 82.75,
        "finalExam": 75.61,
        "finalScore": 83.04,
        "predicate": "B"
      },
      {
        "id": 195,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.65,
        "midterm": 83.66,
        "finalExam": 76.93,
        "finalScore": 83.97,
        "predicate": "B"
      },
      {
        "id": 196,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.07,
        "midterm": 84.58,
        "finalExam": 78.25,
        "finalScore": 84.89,
        "predicate": "B"
      }
    ],
    "gradeAverage": 83.5
  },
  {
    "id": 56,
    "nis": "1049",
    "name": "Harris Maulana",
    "className": "XI RPL 2",
    "email": "harris.maulana@smk.belajar.id",
    "grades": [
      {
        "id": 197,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.35,
        "midterm": 81.92,
        "finalExam": 86.43,
        "finalScore": 83.55,
        "predicate": "B"
      },
      {
        "id": 198,
        "subject": "Basis Data",
        "assignment": 81.77,
        "midterm": 82.84,
        "finalExam": 87.75,
        "finalScore": 84.48,
        "predicate": "B"
      },
      {
        "id": 199,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.19,
        "midterm": 83.75,
        "finalExam": 89.06,
        "finalScore": 85.41,
        "predicate": "B"
      },
      {
        "id": 200,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.61,
        "midterm": 84.67,
        "finalExam": 90.38,
        "finalScore": 86.34,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.94
  },
  {
    "id": 57,
    "nis": "1050",
    "name": "Ilham Satria",
    "className": "XI RPL 2",
    "email": "ilham.satria@smk.belajar.id",
    "grades": [
      {
        "id": 201,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.89,
        "midterm": 82.01,
        "finalExam": 74.56,
        "finalScore": 82.29,
        "predicate": "B"
      },
      {
        "id": 202,
        "subject": "Basis Data",
        "assignment": 93.31,
        "midterm": 82.93,
        "finalExam": 75.88,
        "finalScore": 83.22,
        "predicate": "B"
      },
      {
        "id": 203,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.73,
        "midterm": 83.85,
        "finalExam": 77.2,
        "finalScore": 84.15,
        "predicate": "B"
      },
      {
        "id": 204,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.16,
        "midterm": 84.76,
        "finalExam": 78.51,
        "finalScore": 85.08,
        "predicate": "B"
      }
    ],
    "gradeAverage": 83.69
  },
  {
    "id": 58,
    "nis": "1051",
    "name": "Intan Permata Sari",
    "className": "XI RPL 2",
    "email": "intan.permata.sari@smk.belajar.id",
    "grades": [
      {
        "id": 205,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.43,
        "midterm": 82.11,
        "finalExam": 86.69,
        "finalScore": 83.74,
        "predicate": "B"
      },
      {
        "id": 206,
        "subject": "Basis Data",
        "assignment": 81.86,
        "midterm": 83.02,
        "finalExam": 88.01,
        "finalScore": 84.67,
        "predicate": "B"
      },
      {
        "id": 207,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.28,
        "midterm": 83.94,
        "finalExam": 89.33,
        "finalScore": 85.6,
        "predicate": "B"
      },
      {
        "id": 208,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.7,
        "midterm": 84.85,
        "finalExam": 90.65,
        "finalScore": 86.53,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.13
  },
  {
    "id": 59,
    "nis": "1052",
    "name": "Jihan Talitha",
    "className": "XI RPL 2",
    "email": "jihan.talitha@smk.belajar.id",
    "grades": [
      {
        "id": 209,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 92.98,
        "midterm": 82.2,
        "finalExam": 74.82,
        "finalScore": 82.48,
        "predicate": "B"
      },
      {
        "id": 210,
        "subject": "Basis Data",
        "assignment": 93.4,
        "midterm": 83.11,
        "finalExam": 76.14,
        "finalScore": 83.41,
        "predicate": "B"
      },
      {
        "id": 211,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.82,
        "midterm": 84.03,
        "finalExam": 77.46,
        "finalScore": 84.34,
        "predicate": "B"
      },
      {
        "id": 212,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.24,
        "midterm": 84.94,
        "finalExam": 78.78,
        "finalScore": 85.27,
        "predicate": "B"
      }
    ],
    "gradeAverage": 83.88
  },
  {
    "id": 60,
    "nis": "1053",
    "name": "Kurnia Sandy",
    "className": "XI RPL 2",
    "email": "kurnia.sandy@smk.belajar.id",
    "grades": [
      {
        "id": 213,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.52,
        "midterm": 82.29,
        "finalExam": 86.95,
        "finalScore": 83.92,
        "predicate": "B"
      },
      {
        "id": 214,
        "subject": "Basis Data",
        "assignment": 81.94,
        "midterm": 83.2,
        "finalExam": 88.27,
        "finalScore": 84.85,
        "predicate": "B"
      },
      {
        "id": 215,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.36,
        "midterm": 84.12,
        "finalExam": 89.59,
        "finalScore": 85.78,
        "predicate": "B"
      },
      {
        "id": 216,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.78,
        "midterm": 85.04,
        "finalExam": 90.91,
        "finalScore": 86.71,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.31
  },
  {
    "id": 61,
    "nis": "1054",
    "name": "Lutfi Alamsyah",
    "className": "XI RPL 3",
    "email": "lutfi.alamsyah@smk.belajar.id",
    "grades": [
      {
        "id": 217,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.06,
        "midterm": 82.38,
        "finalExam": 75.09,
        "finalScore": 82.67,
        "predicate": "B"
      },
      {
        "id": 218,
        "subject": "Basis Data",
        "assignment": 93.48,
        "midterm": 83.3,
        "finalExam": 76.4,
        "finalScore": 83.59,
        "predicate": "B"
      },
      {
        "id": 219,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.9,
        "midterm": 84.21,
        "finalExam": 77.72,
        "finalScore": 84.52,
        "predicate": "B"
      },
      {
        "id": 220,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.32,
        "midterm": 85.13,
        "finalExam": 79.04,
        "finalScore": 85.45,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.06
  },
  {
    "id": 62,
    "nis": "1055",
    "name": "Maya Novita Sari",
    "className": "XI RPL 3",
    "email": "maya.novita.sari@smk.belajar.id",
    "grades": [
      {
        "id": 221,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.6,
        "midterm": 82.47,
        "finalExam": 87.22,
        "finalScore": 84.11,
        "predicate": "B"
      },
      {
        "id": 222,
        "subject": "Basis Data",
        "assignment": 82.02,
        "midterm": 83.39,
        "finalExam": 88.54,
        "finalScore": 85.04,
        "predicate": "B"
      },
      {
        "id": 223,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.44,
        "midterm": 84.3,
        "finalExam": 89.85,
        "finalScore": 85.96,
        "predicate": "B"
      },
      {
        "id": 224,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.87,
        "midterm": 85.22,
        "finalExam": 91.17,
        "finalScore": 86.9,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.5
  },
  {
    "id": 63,
    "nis": "1056",
    "name": "Muhammad Rizky Pratama",
    "className": "XI RPL 3",
    "email": "muhammad.rizky.pratama@smk.belajar.id",
    "grades": [
      {
        "id": 225,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.14,
        "midterm": 82.56,
        "finalExam": 75.35,
        "finalScore": 82.85,
        "predicate": "B"
      },
      {
        "id": 226,
        "subject": "Basis Data",
        "assignment": 93.57,
        "midterm": 83.48,
        "finalExam": 76.67,
        "finalScore": 83.78,
        "predicate": "B"
      },
      {
        "id": 227,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 93.99,
        "midterm": 84.4,
        "finalExam": 77.99,
        "finalScore": 84.71,
        "predicate": "B"
      },
      {
        "id": 228,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.41,
        "midterm": 85.31,
        "finalExam": 79.3,
        "finalScore": 85.64,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.24
  },
  {
    "id": 64,
    "nis": "1057",
    "name": "Nadia Syahrani",
    "className": "XI RPL 3",
    "email": "nadia.syahrani@smk.belajar.id",
    "grades": [
      {
        "id": 229,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.69,
        "midterm": 82.66,
        "finalExam": 87.48,
        "finalScore": 84.3,
        "predicate": "B"
      },
      {
        "id": 230,
        "subject": "Basis Data",
        "assignment": 82.11,
        "midterm": 83.57,
        "finalExam": 88.8,
        "finalScore": 85.22,
        "predicate": "B"
      },
      {
        "id": 231,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.53,
        "midterm": 84.49,
        "finalExam": 90.12,
        "finalScore": 86.15,
        "predicate": "B"
      },
      {
        "id": 232,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 82.95,
        "midterm": 85.4,
        "finalExam": 91.44,
        "finalScore": 87.08,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.69
  },
  {
    "id": 65,
    "nis": "1058",
    "name": "Nova Ariyanto",
    "className": "XI RPL 3",
    "email": "nova.ariyanto@smk.belajar.id",
    "grades": [
      {
        "id": 233,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.23,
        "midterm": 82.75,
        "finalExam": 75.61,
        "finalScore": 83.04,
        "predicate": "B"
      },
      {
        "id": 234,
        "subject": "Basis Data",
        "assignment": 93.65,
        "midterm": 83.66,
        "finalExam": 76.93,
        "finalScore": 83.97,
        "predicate": "B"
      },
      {
        "id": 235,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 94.07,
        "midterm": 84.58,
        "finalExam": 78.25,
        "finalScore": 84.89,
        "predicate": "B"
      },
      {
        "id": 236,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.49,
        "midterm": 85.49,
        "finalExam": 79.57,
        "finalScore": 85.82,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.43
  },
  {
    "id": 66,
    "nis": "1059",
    "name": "Panji Asmoro Bangun",
    "className": "XI RPL 3",
    "email": "panji.asmoro.bangun@smk.belajar.id",
    "grades": [
      {
        "id": 237,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.77,
        "midterm": 82.84,
        "finalExam": 87.75,
        "finalScore": 84.48,
        "predicate": "B"
      },
      {
        "id": 238,
        "subject": "Basis Data",
        "assignment": 82.19,
        "midterm": 83.75,
        "finalExam": 89.06,
        "finalScore": 85.41,
        "predicate": "B"
      },
      {
        "id": 239,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.61,
        "midterm": 84.67,
        "finalExam": 90.38,
        "finalScore": 86.34,
        "predicate": "B"
      },
      {
        "id": 240,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 83.03,
        "midterm": 85.59,
        "finalExam": 91.7,
        "finalScore": 87.27,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.88
  },
  {
    "id": 67,
    "nis": "1060",
    "name": "Putri Ayu Wandira",
    "className": "XI RPL 3",
    "email": "putri.ayu.wandira@smk.belajar.id",
    "grades": [
      {
        "id": 241,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.31,
        "midterm": 82.93,
        "finalExam": 75.88,
        "finalScore": 83.22,
        "predicate": "B"
      },
      {
        "id": 242,
        "subject": "Basis Data",
        "assignment": 93.73,
        "midterm": 83.85,
        "finalExam": 77.2,
        "finalScore": 84.15,
        "predicate": "B"
      },
      {
        "id": 243,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 94.16,
        "midterm": 84.76,
        "finalExam": 78.51,
        "finalScore": 85.08,
        "predicate": "B"
      },
      {
        "id": 244,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.58,
        "midterm": 85.68,
        "finalExam": 79.83,
        "finalScore": 86.01,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.61
  },
  {
    "id": 68,
    "nis": "1061",
    "name": "Rian Hidayat",
    "className": "XI RPL 3",
    "email": "rian.hidayat@smk.belajar.id",
    "grades": [
      {
        "id": 245,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.86,
        "midterm": 83.02,
        "finalExam": 88.01,
        "finalScore": 84.67,
        "predicate": "B"
      },
      {
        "id": 246,
        "subject": "Basis Data",
        "assignment": 82.28,
        "midterm": 83.94,
        "finalExam": 89.33,
        "finalScore": 85.6,
        "predicate": "B"
      },
      {
        "id": 247,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.7,
        "midterm": 84.85,
        "finalExam": 90.65,
        "finalScore": 86.53,
        "predicate": "B"
      },
      {
        "id": 248,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 83.12,
        "midterm": 85.77,
        "finalExam": 91.96,
        "finalScore": 87.45,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.06
  },
  {
    "id": 69,
    "nis": "1062",
    "name": "Riko Simanjuntak",
    "className": "XI RPL 3",
    "email": "riko.simanjuntak@smk.belajar.id",
    "grades": [
      {
        "id": 249,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.4,
        "midterm": 83.11,
        "finalExam": 76.14,
        "finalScore": 83.41,
        "predicate": "B"
      },
      {
        "id": 250,
        "subject": "Basis Data",
        "assignment": 93.82,
        "midterm": 84.03,
        "finalExam": 77.46,
        "finalScore": 84.34,
        "predicate": "B"
      },
      {
        "id": 251,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 94.24,
        "midterm": 84.94,
        "finalExam": 78.78,
        "finalScore": 85.27,
        "predicate": "B"
      },
      {
        "id": 252,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.66,
        "midterm": 85.86,
        "finalExam": 80.1,
        "finalScore": 86.2,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.8
  },
  {
    "id": 70,
    "nis": "1063",
    "name": "Safira Maharani",
    "className": "XI RPL 3",
    "email": "safira.maharani@smk.belajar.id",
    "grades": [
      {
        "id": 253,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 81.94,
        "midterm": 83.2,
        "finalExam": 88.27,
        "finalScore": 84.85,
        "predicate": "B"
      },
      {
        "id": 254,
        "subject": "Basis Data",
        "assignment": 82.36,
        "midterm": 84.12,
        "finalExam": 89.59,
        "finalScore": 85.78,
        "predicate": "B"
      },
      {
        "id": 255,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.78,
        "midterm": 85.04,
        "finalExam": 90.91,
        "finalScore": 86.71,
        "predicate": "B"
      },
      {
        "id": 256,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 83.2,
        "midterm": 85.95,
        "finalExam": 92.23,
        "finalScore": 87.64,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.24
  },
  {
    "id": 71,
    "nis": "1064",
    "name": "Satria Bagus Pambudi",
    "className": "XI RPL 1",
    "email": "satria.bagus.pambudi@smk.belajar.id",
    "grades": [
      {
        "id": 257,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.48,
        "midterm": 83.3,
        "finalExam": 76.4,
        "finalScore": 83.59,
        "predicate": "B"
      },
      {
        "id": 258,
        "subject": "Basis Data",
        "assignment": 93.9,
        "midterm": 84.21,
        "finalExam": 77.72,
        "finalScore": 84.52,
        "predicate": "B"
      },
      {
        "id": 259,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 94.32,
        "midterm": 85.13,
        "finalExam": 79.04,
        "finalScore": 85.45,
        "predicate": "B"
      },
      {
        "id": 260,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.74,
        "midterm": 86.04,
        "finalExam": 80.36,
        "finalScore": 86.38,
        "predicate": "B"
      }
    ],
    "gradeAverage": 84.98
  },
  {
    "id": 72,
    "nis": "1065",
    "name": "Septian Nugroho",
    "className": "XI RPL 1",
    "email": "septian.nugroho@smk.belajar.id",
    "grades": [
      {
        "id": 261,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 82.02,
        "midterm": 83.39,
        "finalExam": 88.54,
        "finalScore": 85.04,
        "predicate": "B"
      },
      {
        "id": 262,
        "subject": "Basis Data",
        "assignment": 82.44,
        "midterm": 84.3,
        "finalExam": 89.85,
        "finalScore": 85.96,
        "predicate": "B"
      },
      {
        "id": 263,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.87,
        "midterm": 85.22,
        "finalExam": 91.17,
        "finalScore": 86.9,
        "predicate": "B"
      },
      {
        "id": 264,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 83.29,
        "midterm": 86.13,
        "finalExam": 92.49,
        "finalScore": 87.82,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.43
  },
  {
    "id": 73,
    "nis": "1066",
    "name": "Shifa Nurul Aulia",
    "className": "XI RPL 2",
    "email": "shifa.nurul.aulia@smk.belajar.id",
    "grades": [
      {
        "id": 265,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.57,
        "midterm": 83.48,
        "finalExam": 76.67,
        "finalScore": 83.78,
        "predicate": "B"
      },
      {
        "id": 266,
        "subject": "Basis Data",
        "assignment": 93.99,
        "midterm": 84.4,
        "finalExam": 77.99,
        "finalScore": 84.71,
        "predicate": "B"
      },
      {
        "id": 267,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 94.41,
        "midterm": 85.31,
        "finalExam": 79.3,
        "finalScore": 85.64,
        "predicate": "B"
      },
      {
        "id": 268,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.83,
        "midterm": 86.23,
        "finalExam": 80.62,
        "finalScore": 86.57,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.17
  },
  {
    "id": 74,
    "nis": "1067",
    "name": "Tegar Dwi Wicaksono",
    "className": "XI RPL 2",
    "email": "tegar.dwi.wicaksono@smk.belajar.id",
    "grades": [
      {
        "id": 269,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 82.11,
        "midterm": 83.57,
        "finalExam": 88.8,
        "finalScore": 85.22,
        "predicate": "B"
      },
      {
        "id": 270,
        "subject": "Basis Data",
        "assignment": 82.53,
        "midterm": 84.49,
        "finalExam": 90.12,
        "finalScore": 86.15,
        "predicate": "B"
      },
      {
        "id": 271,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 82.95,
        "midterm": 85.4,
        "finalExam": 91.44,
        "finalScore": 87.08,
        "predicate": "B"
      },
      {
        "id": 272,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 83.37,
        "midterm": 86.32,
        "finalExam": 92.75,
        "finalScore": 88.01,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.61
  },
  {
    "id": 75,
    "nis": "1068",
    "name": "Tiara Andini Putri",
    "className": "XI RPL 2",
    "email": "tiara.andini.putri@smk.belajar.id",
    "grades": [
      {
        "id": 273,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.65,
        "midterm": 83.66,
        "finalExam": 76.93,
        "finalScore": 83.97,
        "predicate": "B"
      },
      {
        "id": 274,
        "subject": "Basis Data",
        "assignment": 94.07,
        "midterm": 84.58,
        "finalExam": 78.25,
        "finalScore": 84.89,
        "predicate": "B"
      },
      {
        "id": 275,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 94.49,
        "midterm": 85.49,
        "finalExam": 79.57,
        "finalScore": 85.82,
        "predicate": "B"
      },
      {
        "id": 276,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 94.91,
        "midterm": 86.41,
        "finalExam": 80.89,
        "finalScore": 86.75,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.36
  },
  {
    "id": 76,
    "nis": "1069",
    "name": "Wahyu Setiawan",
    "className": "XI RPL 3",
    "email": "wahyu.setiawan@smk.belajar.id",
    "grades": [
      {
        "id": 277,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 82.19,
        "midterm": 83.75,
        "finalExam": 89.06,
        "finalScore": 85.41,
        "predicate": "B"
      },
      {
        "id": 278,
        "subject": "Basis Data",
        "assignment": 82.61,
        "midterm": 84.67,
        "finalExam": 90.38,
        "finalScore": 86.34,
        "predicate": "B"
      },
      {
        "id": 279,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 83.03,
        "midterm": 85.59,
        "finalExam": 91.7,
        "finalScore": 87.27,
        "predicate": "B"
      },
      {
        "id": 280,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 83.46,
        "midterm": 86.5,
        "finalExam": 93.02,
        "finalScore": 88.2,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.8
  },
  {
    "id": 77,
    "nis": "1070",
    "name": "Widya Kusuma Wardani",
    "className": "XI RPL 3",
    "email": "widya.kusuma.wardani@smk.belajar.id",
    "grades": [
      {
        "id": 281,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.73,
        "midterm": 83.85,
        "finalExam": 77.2,
        "finalScore": 84.15,
        "predicate": "B"
      },
      {
        "id": 282,
        "subject": "Basis Data",
        "assignment": 94.16,
        "midterm": 84.76,
        "finalExam": 78.51,
        "finalScore": 85.08,
        "predicate": "B"
      },
      {
        "id": 283,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 94.58,
        "midterm": 85.68,
        "finalExam": 79.83,
        "finalScore": 86.01,
        "predicate": "B"
      },
      {
        "id": 284,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 95,
        "midterm": 86.59,
        "finalExam": 81.15,
        "finalScore": 86.94,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.55
  },
  {
    "id": 78,
    "nis": "1071",
    "name": "Yusuf Maulana",
    "className": "XI RPL 1",
    "email": "yusuf.maulana@smk.belajar.id",
    "grades": [
      {
        "id": 285,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 82.28,
        "midterm": 83.94,
        "finalExam": 89.33,
        "finalScore": 85.6,
        "predicate": "B"
      },
      {
        "id": 286,
        "subject": "Basis Data",
        "assignment": 82.7,
        "midterm": 84.85,
        "finalExam": 90.65,
        "finalScore": 86.53,
        "predicate": "B"
      },
      {
        "id": 287,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 83.12,
        "midterm": 85.77,
        "finalExam": 91.96,
        "finalScore": 87.45,
        "predicate": "B"
      },
      {
        "id": 288,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 83.54,
        "midterm": 86.68,
        "finalExam": 93.28,
        "finalScore": 88.38,
        "predicate": "B"
      }
    ],
    "gradeAverage": 86.99
  },
  {
    "id": 79,
    "nis": "1072",
    "name": "Zahra Amelia Putri",
    "className": "XI RPL 2",
    "email": "zahra.amelia.putri@smk.belajar.id",
    "grades": [
      {
        "id": 289,
        "subject": "Pemodelan Perangkat Lunak",
        "assignment": 93.82,
        "midterm": 84.03,
        "finalExam": 77.46,
        "finalScore": 84.34,
        "predicate": "B"
      },
      {
        "id": 290,
        "subject": "Basis Data",
        "assignment": 94.24,
        "midterm": 84.94,
        "finalExam": 78.78,
        "finalScore": 85.27,
        "predicate": "B"
      },
      {
        "id": 291,
        "subject": "Pemrograman Berorientasi Objek",
        "assignment": 94.66,
        "midterm": 85.86,
        "finalExam": 80.1,
        "finalScore": 86.2,
        "predicate": "B"
      },
      {
        "id": 292,
        "subject": "Pemrograman Web dan Perangkat Bergerak",
        "assignment": 95.08,
        "midterm": 86.78,
        "finalExam": 81.41,
        "finalScore": 87.12,
        "predicate": "B"
      }
    ],
    "gradeAverage": 85.73
  }
];
