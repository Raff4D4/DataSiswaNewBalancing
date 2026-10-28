import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Download,
  Printer,
  Plus,
  Trash2,
  MoreVertical,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Sun,
  Moon,
  RotateCcw,
  FileSpreadsheet,
  GraduationCap,
  BookOpen,
  Layers,
  Edit3,
  CheckCircle2,
  AlertTriangle,
  FolderSync
} from "lucide-react";
import {
  StudentRecord,
  SubjectGrade,
  LanguageLocale,
  ColorTheme,
  TableDensity,
  ScoreFilterOption,
  SortColumn,
  SortOrder,
  DeletedItemBackup
} from "./types";
import { DICTIONARY } from "./i18n";
import { INITIAL_STUDENTS_DATA } from "./studentData";

interface StudentDirectoryProps {
  initialData?: StudentRecord[];
}

export const StudentDirectory: React.FC<StudentDirectoryProps> = ({ initialData }) => {
  const [students, setStudents] = useState<StudentRecord[]>(() => {
    if (initialData && Array.isArray(initialData) && initialData.length > 0) {
      return initialData;
    }
    return INITIAL_STUDENTS_DATA;
  });

  const [locale, setLocale] = useState<LanguageLocale>(() => {
    const saved = localStorage.getItem("ci_siswa_locale");
    return saved === "EN" ? "EN" : "ID";
  });

  const [theme, setTheme] = useState<ColorTheme>(() => {
    const saved = localStorage.getItem("ci_siswa_theme");
    return saved === "light" ? "light" : "dark";
  });

  const [density, setDensity] = useState<TableDensity>(() => {
    const saved = localStorage.getItem("ci_siswa_density");
    return saved === "compact" ? "compact" : "comfortable";
  });

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [classFilter, setClassFilter] = useState<string>("all");
  const [scoreFilter, setScoreFilter] = useState<ScoreFilterOption>("all");

  const [sortColumn, setSortColumn] = useState<SortColumn>("number");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const [selectedStudentIds, setSelectedStudentIds] = useState<Set<number | string>>(new Set());

  const [editingStudentId, setEditingStudentId] = useState<number | string | null>(null);
  const [editingNameValue, setEditingNameValue] = useState<string>("");
  const [editingNameError, setEditingNameError] = useState<string>("");

  const [classPopoverStudentId, setClassPopoverStudentId] = useState<number | string | null>(null);

  const [confirmDeleteId, setConfirmDeleteId] = useState<number | string | null>(null);

  const [undoToast, setUndoToast] = useState<{
    visible: boolean;
    message: string;
    backups: DeletedItemBackup[];
  }>({
    visible: false,
    message: "",
    backups: []
  });

  const [selectedDossierStudent, setSelectedDossierStudent] = useState<StudentRecord | null>(null);
  const [dossierGrades, setDossierGrades] = useState<SubjectGrade[]>([]);
  const [dossierSaveSuccess, setDossierSaveSuccess] = useState<boolean>(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [newStudentNis, setNewStudentNis] = useState<string>("");
  const [newStudentName, setNewStudentName] = useState<string>("");
  const [newStudentClass, setNewStudentClass] = useState<string>("XI RPL 1");
  const [newStudentError, setNewStudentError] = useState<string>("");

  const [isBulkTransferOpen, setIsBulkTransferOpen] = useState<boolean>(false);
  const [bulkTargetClass, setBulkTargetClass] = useState<string>("XI RPL 1");

  const [customClasses, setCustomClasses] = useState<string[]>([]);
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState<boolean>(false);
  const [newClassLevel, setNewClassLevel] = useState<string>("XI");
  const [newClassMajor, setNewClassMajor] = useState<string>("");
  const [newClassIndex, setNewClassIndex] = useState<string>("");
  const [addClassError, setAddClassError] = useState<string>("");
  const [classSuccessToast, setClassSuccessToast] = useState<{
    visible: boolean;
    message: string;
  }>({
    visible: false,
    message: ""
  });

  const [activeMenuStudentId, setActiveMenuStudentId] = useState<number | string | null>(null);

  const searchInputReference = useRef<HTMLInputElement>(null);
  const undoTimerReference = useRef<ReturnType<typeof setTimeout> | null>(null);
  const classPopoverReference = useRef<HTMLDivElement>(null);

  const dict = DICTIONARY[locale];

  useEffect(() => {
    localStorage.setItem("ci_siswa_locale", locale);
  }, [locale]);

  useEffect(() => {
    localStorage.setItem("ci_siswa_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#000000";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#f8fafc";
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("ci_siswa_density", density);
  }, [density]);

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey && event.key.toLowerCase() === "k") || (event.key === "/" && document.activeElement !== searchInputReference.current && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA")) {
        event.preventDefault();
        searchInputReference.current?.focus();
        searchInputReference.current?.select();
      }
      if (event.key === "Escape") {
        if (editingStudentId !== null) {
          setEditingStudentId(null);
          setEditingNameError("");
        }
        if (classPopoverStudentId !== null) {
          setClassPopoverStudentId(null);
        }
        if (confirmDeleteId !== null) {
          setConfirmDeleteId(null);
        }
        if (selectedDossierStudent !== null) {
          setSelectedDossierStudent(null);
        }
        if (isAddModalOpen) {
          setIsAddModalOpen(false);
        }
        if (isAddClassModalOpen) {
          setIsAddClassModalOpen(false);
        }
        if (isBulkTransferOpen) {
          setIsBulkTransferOpen(false);
        }
        if (activeMenuStudentId !== null) {
          setActiveMenuStudentId(null);
        }
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [editingStudentId, classPopoverStudentId, confirmDeleteId, selectedDossierStudent, isAddModalOpen, isAddClassModalOpen, isBulkTransferOpen, activeMenuStudentId]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (classPopoverReference.current && !classPopoverReference.current.contains(event.target as Node)) {
        setClassPopoverStudentId(null);
      }
    };
    if (classPopoverStudentId !== null) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [classPopoverStudentId]);

  const availableClasses = useMemo(() => {
    const classSet = new Set<string>();
    classSet.add("XI RPL 1");
    classSet.add("XI RPL 2");
    classSet.add("XI RPL 3");
    classSet.add("XI RPL 12");
    classSet.add("XII RPL 12");
    customClasses.forEach((customClass) => classSet.add(customClass));
    students.forEach((student) => {
      if (student.className) {
        classSet.add(student.className);
      }
    });
    return Array.from(classSet).sort();
  }, [students, customClasses]);

  const assembledClassPreview = useMemo(() => {
    const level = newClassLevel.trim();
    const major = newClassMajor.trim().toUpperCase();
    const index = newClassIndex.trim();
    if (!level && !major) return "—";
    return `${level} ${major}${index ? " " + index : ""}`.trim();
  }, [newClassLevel, newClassMajor, newClassIndex]);

  const handleSaveNewClass = (event: React.FormEvent) => {
    event.preventDefault();
    const level = newClassLevel.trim();
    const major = newClassMajor.trim().toUpperCase();
    const index = newClassIndex.trim();
    if (!level) {
      setAddClassError("Tingkat / jenjang wajib dipilih.");
      return;
    }
    if (!major) {
      setAddClassError("Nama program keahlian / jurusan wajib diisi.");
      return;
    }
    const assembledName = `${level} ${major}${index ? " " + index : ""}`.trim();
    if (availableClasses.includes(assembledName)) {
      setAddClassError(`Kelas "${assembledName}" sudah ada di dalam sistem.`);
      return;
    }
    setCustomClasses((previous) => [...previous, assembledName]);
    setIsAddClassModalOpen(false);
    setNewClassLevel("XI");
    setNewClassMajor("");
    setNewClassIndex("");
    setAddClassError("");
    setClassSuccessToast({
      visible: true,
      message: `Kelas ${assembledName} berhasil ditambahkan.`
    });
    setTimeout(() => {
      setClassSuccessToast({ visible: false, message: "" });
    }, 4000);
  };

  const calculateGradeMetrics = (grades: SubjectGrade[]) => {
    if (!grades || grades.length === 0) {
      return { average: 0, highest: 0, lowest: 0 };
    }
    const finalScores = grades.map((g) => g.finalScore);
    const sum = finalScores.reduce((acc, curr) => acc + curr, 0);
    const average = Number((sum / finalScores.length).toFixed(2));
    const highest = Math.max(...finalScores);
    const lowest = Math.min(...finalScores);
    return { average, highest, lowest };
  };

  const filteredStudents = useMemo(() => {
    let result = [...students];

    if (searchQuery.trim() !== "") {
      const normalizedQuery = searchQuery.toLowerCase().trim();
      result = result.filter(
        (student) =>
          student.name.toLowerCase().includes(normalizedQuery) ||
          student.nis.toLowerCase().includes(normalizedQuery)
      );
    }

    if (classFilter !== "all") {
      result = result.filter((student) => student.className === classFilter);
    }

    if (scoreFilter === "high") {
      result = result.filter((student) => student.gradeAverage >= 85);
    } else if (scoreFilter === "low") {
      result = result.filter((student) => student.gradeAverage < 75);
    }

    result.sort((a, b) => {
      let comparison = 0;
      if (sortColumn === "nis") {
        comparison = a.nis.localeCompare(b.nis, undefined, { numeric: true });
      } else if (sortColumn === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortColumn === "class") {
        comparison = a.className.localeCompare(b.className);
      } else if (sortColumn === "gradeAverage") {
        comparison = a.gradeAverage - b.gradeAverage;
      } else {
        comparison = 0;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return result;
  }, [students, searchQuery, classFilter, scoreFilter, sortColumn, sortOrder]);

  const totalFilteredCount = filteredStudents.length;
  const totalPages = Math.max(1, Math.ceil(totalFilteredCount / pageSize));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredStudents.slice(startIndex, startIndex + pageSize);
  }, [filteredStudents, currentPage, pageSize]);

  const isAllCurrentPageSelected = useMemo(() => {
    if (paginatedStudents.length === 0) return false;
    return paginatedStudents.every((student) => selectedStudentIds.has(student.id));
  }, [paginatedStudents, selectedStudentIds]);

  const isSomeCurrentPageSelected = useMemo(() => {
    if (paginatedStudents.length === 0) return false;
    const count = paginatedStudents.filter((student) => selectedStudentIds.has(student.id)).length;
    return count > 0 && count < paginatedStudents.length;
  }, [paginatedStudents, selectedStudentIds]);

  const handleToggleSelectAll = () => {
    const updatedSet = new Set(selectedStudentIds);
    if (isAllCurrentPageSelected) {
      paginatedStudents.forEach((student) => updatedSet.delete(student.id));
    } else {
      paginatedStudents.forEach((student) => updatedSet.add(student.id));
    }
    setSelectedStudentIds(updatedSet);
  };

  const handleToggleSelectRow = (studentId: number | string, event: React.MouseEvent) => {
    event.stopPropagation();
    const updatedSet = new Set(selectedStudentIds);
    if (updatedSet.has(studentId)) {
      updatedSet.delete(studentId);
    } else {
      updatedSet.add(studentId);
    }
    setSelectedStudentIds(updatedSet);
  };

  const handleSortToggle = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortOrder((previous) => (previous === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const getAvatarInitials = (name: string): string => {
    const segments = name.trim().split(/\s+/);
    if (segments.length === 1) {
      return segments[0].substring(0, 2).toUpperCase();
    }
    return (segments[0][0] + segments[1][0]).toUpperCase();
  };

  const getAvatarPastelStyle = (name: string, isDark: boolean) => {
    let hash = 0;
    for (let index = 0; index < name.length; index += 1) {
      hash = name.charCodeAt(index) + ((hash << 5) - hash);
    }
    const colorIndex = Math.abs(hash) % 6;
    if (isDark) {
      const darkPalettes = [
        { bg: "bg-sky-500/15 border-sky-400/30 text-sky-300" },
        { bg: "bg-emerald-500/15 border-emerald-400/30 text-emerald-300" },
        { bg: "bg-teal-500/15 border-teal-400/30 text-teal-300" },
        { bg: "bg-indigo-500/15 border-indigo-400/30 text-indigo-300" },
        { bg: "bg-rose-500/15 border-rose-400/30 text-rose-300" },
        { bg: "bg-amber-500/15 border-amber-400/30 text-amber-300" }
      ];
      return darkPalettes[colorIndex].bg;
    }
    const lightPalettes = [
      { bg: "bg-sky-100 border-sky-200 text-sky-800" },
      { bg: "bg-emerald-100 border-emerald-200 text-emerald-800" },
      { bg: "bg-teal-100 border-teal-200 text-teal-800" },
      { bg: "bg-indigo-100 border-indigo-200 text-indigo-800" },
      { bg: "bg-rose-100 border-rose-200 text-rose-800" },
      { bg: "bg-amber-100 border-amber-200 text-amber-800" }
    ];
    return lightPalettes[colorIndex].bg;
  };

  const handleStartNameEdit = (student: StudentRecord, event: React.MouseEvent) => {
    event.stopPropagation();
    setEditingStudentId(student.id);
    setEditingNameValue(student.name);
    setEditingNameError("");
  };

  const handleCommitNameEdit = (studentId: number | string) => {
    const trimmed = editingNameValue.trim();
    if (!trimmed) {
      setEditingNameError(dict.nameValidationEmpty);
      return;
    }
    setStudents((previous) =>
      previous.map((student) => {
        if (student.id === studentId) {
          const emailUsername = trimmed
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/g, ".")
            .replace(/\.+/g, ".")
            .replace(/^\.|\.$/g, "");
          return {
            ...student,
            name: trimmed,
            email: `${emailUsername}@smk.belajar.id`
          };
        }
        return student;
      })
    );
    setEditingStudentId(null);
    setEditingNameError("");

    fetch(`api/students/edit/${studentId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama: trimmed })
    }).catch(() => {});
  };

  const handleKeyDownNameEdit = (event: React.KeyboardEvent, studentId: number | string) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCommitNameEdit(studentId);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setEditingStudentId(null);
      setEditingNameError("");
    }
  };

  const handleDoubleClickClass = (studentId: number | string, event: React.MouseEvent) => {
    event.stopPropagation();
    setClassPopoverStudentId(studentId);
  };

  const handleSelectNewClass = (studentId: number | string, targetClass: string) => {
    setStudents((previous) =>
      previous.map((student) =>
        student.id === studentId ? { ...student, className: targetClass } : student
      )
    );
    setClassPopoverStudentId(null);

    fetch(`api/students/edit/${studentId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kelas: targetClass })
    }).catch(() => {});
  };

  const triggerDeleteWithUndo = (targetStudents: StudentRecord[]) => {
    if (targetStudents.length === 0) return;

    const backups: DeletedItemBackup[] = targetStudents.map((target) => {
      const originalIndex = students.findIndex((s) => s.id === target.id);
      return { student: target, index: originalIndex };
    });

    const targetIdSet = new Set(targetStudents.map((s) => s.id));

    setStudents((previous) => previous.filter((s) => !targetIdSet.has(s.id)));

    const updatedSelected = new Set(selectedStudentIds);
    targetStudents.forEach((s) => updatedSelected.delete(s.id));
    setSelectedStudentIds(updatedSelected);

    if (undoTimerReference.current) {
      clearTimeout(undoTimerReference.current);
    }

    const messageText =
      targetStudents.length === 1
        ? `${targetStudents[0].name} ${dict.studentDeletedToast}`
        : `${targetStudents.length} ${dict.students} ${dict.studentDeletedToast}`;

    setUndoToast({
      visible: true,
      message: messageText,
      backups
    });

    undoTimerReference.current = setTimeout(() => {
      setUndoToast((prev) => ({ ...prev, visible: false }));
      targetStudents.forEach((student) => {
        fetch(`api/students/delete/${student.id}`, {
          method: "POST"
        }).catch(() => {});
      });
    }, 6000);
  };

  const handleConfirmSingleDelete = (studentId: number | string, event: React.MouseEvent) => {
    event.stopPropagation();
    const target = students.find((s) => s.id === studentId);
    if (!target) return;
    setConfirmDeleteId(null);
    triggerDeleteWithUndo([target]);
  };

  const handleRestoreDeleted = () => {
    if (undoTimerReference.current) {
      clearTimeout(undoTimerReference.current);
    }
    const backupsToRestore = [...undoToast.backups];
    setUndoToast((prev) => ({ ...prev, visible: false, backups: [] }));

    setStudents((previous) => {
      const restored = [...previous];
      backupsToRestore.sort((a, b) => a.index - b.index);
      backupsToRestore.forEach((backup) => {
        const safeIndex = Math.min(Math.max(0, backup.index), restored.length);
        restored.splice(safeIndex, 0, backup.student);
      });
      return restored;
    });
  };

  const handleOpenDossier = (student: StudentRecord, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    setSelectedDossierStudent(student);
    setDossierGrades(JSON.parse(JSON.stringify(student.grades)));
    setDossierSaveSuccess(false);
  };

  const calculateSingleSubjectFinal = (assignment: number, midterm: number, finalExam: number) => {
    const finalScore = Number(((assignment * 0.3) + (midterm * 0.3) + (finalExam * 0.4)).toFixed(2));
    let predicate: "A" | "B" | "C" | "D" = "D";
    if (finalScore >= 90) predicate = "A";
    else if (finalScore >= 80) predicate = "B";
    else if (finalScore >= 75) predicate = "C";
    return { finalScore, predicate };
  };

  const handleDossierGradeChange = (
    gradeId: number,
    field: "assignment" | "midterm" | "finalExam",
    rawValue: string
  ) => {
    const parsed = Math.min(100, Math.max(0, parseFloat(rawValue) || 0));
    setDossierGrades((previous) =>
      previous.map((grade) => {
        if (grade.id === gradeId) {
          const updatedAssignment = field === "assignment" ? parsed : grade.assignment;
          const updatedMidterm = field === "midterm" ? parsed : grade.midterm;
          const updatedFinalExam = field === "finalExam" ? parsed : grade.finalExam;
          const { finalScore, predicate } = calculateSingleSubjectFinal(
            updatedAssignment,
            updatedMidterm,
            updatedFinalExam
          );
          return {
            ...grade,
            [field]: parsed,
            finalScore,
            predicate
          };
        }
        return grade;
      })
    );
  };

  const handleSaveDossierChanges = () => {
    if (!selectedDossierStudent) return;

    const total = dossierGrades.reduce((acc, curr) => acc + curr.finalScore, 0);
    const updatedAverage =
      dossierGrades.length > 0 ? Number((total / dossierGrades.length).toFixed(2)) : 0;

    const updatedStudent: StudentRecord = {
      ...selectedDossierStudent,
      grades: dossierGrades,
      gradeAverage: updatedAverage
    };

    setStudents((previous) =>
      previous.map((s) => (s.id === selectedDossierStudent.id ? updatedStudent : s))
    );
    setSelectedDossierStudent(updatedStudent);
    setDossierSaveSuccess(true);
    setTimeout(() => setDossierSaveSuccess(false), 2400);

    dossierGrades.forEach((g) => {
      fetch("api/grades/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: selectedDossierStudent.id,
          subject: g.subject,
          assignment: g.assignment,
          midterm: g.midterm,
          finalExam: g.finalExam
        })
      }).catch(() => {});
    });
  };

  const handleCreateNewStudent = (event: React.FormEvent) => {
    event.preventDefault();
    const cleanNis = newStudentNis.trim();
    const cleanName = newStudentName.trim();

    if (!cleanNis) {
      setNewStudentError(dict.nisValidationEmpty);
      return;
    }
    if (!cleanName) {
      setNewStudentError(dict.nameValidationEmpty);
      return;
    }

    const emailUsername = cleanName
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, ".")
      .replace(/\.+/g, ".")
      .replace(/^\.|\.$/g, "");

    const subjectsList = [
      "Pemodelan Perangkat Lunak",
      "Basis Data",
      "Pemrograman Berorientasi Objek",
      "Pemrograman Web dan Perangkat Bergerak"
    ];

    const generatedGrades: SubjectGrade[] = subjectsList.map((subject, index) => {
      const assignment = 82;
      const midterm = 80;
      const finalExam = 84;
      const { finalScore, predicate } = calculateSingleSubjectFinal(assignment, midterm, finalExam);
      return {
        id: Date.now() + index,
        subject,
        assignment,
        midterm,
        finalExam,
        finalScore,
        predicate
      };
    });

    const averageScore = Number(
      (
        generatedGrades.reduce((acc, curr) => acc + curr.finalScore, 0) /
        generatedGrades.length
      ).toFixed(2)
    );

    const createdStudent: StudentRecord = {
      id: Date.now(),
      nis: cleanNis,
      name: cleanName,
      className: newStudentClass,
      email: `${emailUsername}@smk.belajar.id`,
      grades: generatedGrades,
      gradeAverage: averageScore
    };

    setStudents((previous) => [createdStudent, ...previous]);
    setIsAddModalOpen(false);
    setNewStudentNis("");
    setNewStudentName("");
    setNewStudentError("");

    fetch("api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nis: cleanNis,
        nama: cleanName,
        kelas: newStudentClass
      })
    }).catch(() => {});
  };

  const handleBulkTransferSubmit = () => {
    if (selectedStudentIds.size === 0) return;
    const idsArray = Array.from(selectedStudentIds);

    setStudents((previous) =>
      previous.map((student) =>
        selectedStudentIds.has(student.id)
          ? { ...student, className: bulkTargetClass }
          : student
      )
    );

    setIsBulkTransferOpen(false);

    fetch("api/students/bulk-transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentIds: idsArray,
        targetClass: bulkTargetClass
      })
    }).catch(() => {});
  };

  const handleBulkDeleteSelected = () => {
    if (selectedStudentIds.size === 0) return;
    const targetStudents = students.filter((s) => selectedStudentIds.has(s.id));
    triggerDeleteWithUndo(targetStudents);
  };

  const handleExportCsv = (recordsToExport: StudentRecord[]) => {
    const headers = [
      "No",
      "NIS",
      "Nama Siswa",
      "Kelas",
      "Email",
      "Pemodelan Perangkat Lunak",
      "Basis Data",
      "Pemrograman Berorientasi Objek",
      "Pemrograman Web dan Perangkat Bergerak",
      "Rata-rata Nilai"
    ];

    const rows = recordsToExport.map((student, index) => {
      const getScore = (sub: string) => {
        const found = student.grades.find((g) => g.subject.toLowerCase().includes(sub.toLowerCase()));
        return found ? found.finalScore : 0;
      };
      return [
        index + 1,
        `"${student.nis}"`,
        `"${student.name}"`,
        `"${student.className}"`,
        `"${student.email}"`,
        getScore("Pemodelan"),
        getScore("Basis Data"),
        getScore("Berorientasi Objek"),
        getScore("Perangkat Bergerak"),
        student.gradeAverage
      ].join(",");
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Data_Siswa_XI_RPL_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportExcel = (recordsToExport: StudentRecord[]) => {
    let tableHtml = `<html><head><meta charset="utf-8"></head><body>`;
    tableHtml += `<head><meta charset="utf-8"/></head><body>`;
    tableHtml += `<table border="1">`;
    tableHtml += `<thead><tr style="background:#000000; color:#ffffff; font-weight:bold;">`;
    tableHtml += `<th>No</th><th>NIS</th><th>Nama Siswa</th><th>Kelas</th><th>Email</th><th>Pemodelan Perangkat Lunak</th><th>Basis Data</th><th>Pemrograman Berorientasi Objek</th><th>Pemrograman Web & Mobile</th><th>Rata-rata Nilai</th></tr></thead><tbody>`;

    recordsToExport.forEach((student, index) => {
      const getScore = (sub: string) => {
        const found = student.grades.find((g) => g.subject.toLowerCase().includes(sub.toLowerCase()));
        return found ? found.finalScore : 0;
      };
      tableHtml += `<tr>`;
      tableHtml += `<td>${index + 1}</td>`;
      tableHtml += `<td>${student.nis}</td>`;
      tableHtml += `<td>${student.name}</td>`;
      tableHtml += `<td>${student.className}</td>`;
      tableHtml += `<td>${student.email}</td>`;
      tableHtml += `<td>${getScore("Pemodelan")}</td>`;
      tableHtml += `<td>${getScore("Basis Data")}</td>`;
      tableHtml += `<td>${getScore("Berorientasi Objek")}</td>`;
      tableHtml += `<td>${getScore("Perangkat Bergerak")}</td>`;
      tableHtml += `<td>${student.gradeAverage}</td>`;
      tableHtml += `</tr>`;
    });

    tableHtml += `</tbody></table></body></html>`;

    const blob = new Blob([tableHtml], { type: "application/vnd.ms-excel;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Data_Siswa_XI_RPL_${new Date().toISOString().slice(0, 10)}.xls`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintAudit = () => {
    window.print();
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen relative overflow-x-hidden ${
        isDark ? "bg-[#000000] text-slate-100" : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <header className="space-y-4 no-print">
          <nav className="flex items-center space-x-2 text-xs tracking-wider uppercase font-mono">
            <span className={isDark ? "text-slate-400" : "text-slate-500"}>
              {dict.breadcrumbDashboard}
            </span>
            <span className={isDark ? "text-slate-600" : "text-slate-400"}>/</span>
            <span className={isDark ? "text-slate-400" : "text-slate-500"}>
              {dict.breadcrumbAcademic}
            </span>
            <span className={isDark ? "text-slate-600" : "text-slate-400"}>/</span>
            <span className={isDark ? "text-sky-400 font-semibold" : "text-sky-600 font-semibold"}>
              {dict.breadcrumbStudents}
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-1">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-xl ${
                    isDark
                      ? "bg-white/[0.04] border border-white/10 text-sky-400 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12)]"
                      : "bg-white border border-slate-200 text-sky-600 shadow-sm"
                  }`}
                >
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans">
                    {dict.appTitle}
                  </h1>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full font-mono font-medium ${
                    isDark
                      ? "bg-white/[0.04] border border-white/10 text-slate-300"
                      : "bg-slate-100 border border-slate-200 text-slate-700"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  {students.length} {dict.registeredCount}
                </span>
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full font-mono ${
                    isDark
                      ? "bg-white/[0.02] border border-white/5 text-slate-400"
                      : "bg-slate-50 border border-slate-200 text-slate-500"
                  }`}
                >
                  <FolderSync className="w-3 h-3 mr-1.5 opacity-70" />
                  {dict.lastSynced}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap lg:flex-nowrap shrink-0">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-[0.98] transition-all duration-150 shadow-sm shadow-sky-600/30 shrink-0 whitespace-nowrap min-w-max"
              >
                <Plus className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">{dict.addStudentButton}</span>
              </button>

              <div
                className={`flex items-center p-0.5 rounded-xl border shrink-0 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 backdrop-blur-md"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setDensity("compact")}
                  title={dict.compactDensity}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 whitespace-nowrap ${
                    density === "compact"
                      ? isDark
                        ? "bg-white/10 text-white shadow-inner font-semibold"
                        : "bg-slate-200 text-slate-900 font-semibold"
                      : isDark
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {dict.compactDensity}
                </button>
                <button
                  type="button"
                  onClick={() => setDensity("comfortable")}
                  title={dict.comfortableDensity}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 whitespace-nowrap ${
                    density === "comfortable"
                      ? isDark
                        ? "bg-white/10 text-white shadow-inner font-semibold"
                        : "bg-slate-200 text-slate-900 font-semibold"
                      : isDark
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {dict.comfortableDensity}
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleExportCsv(filteredStudents)}
                title={dict.exportCsv}
                className={`p-2 rounded-xl border transition-all shrink-0 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07] hover:text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm"
                }`}
              >
                <Download className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleExportExcel(filteredStudents)}
                title={dict.exportExcel}
                className={`p-2 rounded-xl border transition-all shrink-0 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07] hover:text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm"
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handlePrintAudit}
                title={dict.printAudit}
                className={`p-2 rounded-xl border transition-all shrink-0 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07] hover:text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm"
                }`}
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setLocale((prev) => (prev === "ID" ? "EN" : "ID"))}
                title="Bilingual Locale Switcher"
                className={`px-2.5 py-1.5 rounded-xl border font-mono text-xs font-semibold tracking-wider transition-all shrink-0 whitespace-nowrap ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-sky-400 hover:bg-white/[0.07]"
                    : "bg-white border-slate-200 text-sky-600 hover:bg-slate-100 shadow-sm"
                }`}
              >
                {locale}
              </button>

              <button
                type="button"
                onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
                title={isDark ? dict.lightTheme : dict.darkTheme}
                className={`p-2 rounded-xl border transition-all shrink-0 ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-amber-300 hover:bg-white/[0.07]"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm"
                }`}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </header>

        <section
          className={`p-3.5 sm:p-4 rounded-2xl border backdrop-blur-[14px] saturate-[180%] no-print ${
            isDark
              ? "bg-white/[0.03] border-white/10 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12)]"
              : "bg-white/80 border-slate-200/80 shadow-sm"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                  isDark ? "text-slate-400" : "text-slate-400"
                }`}
              />
              <input
                ref={searchInputReference}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={dict.searchPlaceholder}
                className={`w-full pl-10 pr-24 py-2 rounded-xl text-xs sm:text-sm font-sans transition-all outline-none border ${
                  isDark
                    ? "bg-white/[0.02] border-white/10 text-white placeholder-slate-500 focus:border-sky-500/60 focus:bg-white/[0.05]"
                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white"
                }`}
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center space-x-1.5">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setCurrentPage(1);
                    }}
                    title={dict.clearSearch}
                    className={`p-1 rounded-md transition-colors ${
                      isDark ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <span
                  title={dict.shortcutSearchNotice}
                  className={`hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono border ${
                    isDark
                      ? "bg-white/[0.04] border-white/10 text-slate-400"
                      : "bg-slate-100 border-slate-200 text-slate-500"
                  }`}
                >
                  Ctrl+K
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center space-x-1.5">
                <Filter className={`w-3.5 h-3.5 ${isDark ? "text-slate-400" : "text-slate-500"}`} />
                <select
                  value={classFilter}
                  onChange={(e) => {
                    setClassFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-sans border outline-none cursor-pointer transition-all ${
                    isDark
                      ? "bg-white/[0.03] border-white/10 text-slate-200 focus:border-sky-500"
                      : "bg-white border-slate-200 text-slate-800 focus:border-sky-500 shadow-sm"
                  }`}
                >
                  <option value="all" className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                    {dict.allClasses}
                  </option>
                  {availableClasses.map((className) => (
                    <option
                      key={className}
                      value={className}
                      className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}
                    >
                      {className}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => {
                    setAddClassError("");
                    setIsAddClassModalOpen(true);
                  }}
                  title="Tambah Kelas Baru"
                  className={`inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all shrink-0 whitespace-nowrap ${
                    isDark
                      ? "bg-white/[0.04] border-white/10 text-sky-400 hover:bg-white/[0.08] hover:border-sky-500/40"
                      : "bg-white border-slate-200 text-sky-600 hover:bg-slate-50 shadow-sm hover:border-sky-300"
                  }`}
                >
                  <Plus className="w-3.5 h-3.5 shrink-0" />
                  <span>{dict.addClassButton}</span>
                </button>
              </div>

              <select
                value={scoreFilter}
                onChange={(e) => {
                  setScoreFilter(e.target.value as ScoreFilterOption);
                  setCurrentPage(1);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-sans border outline-none cursor-pointer transition-all ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-slate-200 focus:border-sky-500"
                    : "bg-white border-slate-200 text-slate-800 focus:border-sky-500 shadow-sm"
                }`}
              >
                <option value="all" className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                  {dict.filterScoreAll}
                </option>
                <option value="high" className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                  {dict.filterScoreHigh}
                </option>
                <option value="low" className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                  {dict.filterScoreLow}
                </option>
              </select>

              {(searchQuery || classFilter !== "all" || scoreFilter !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setClassFilter("all");
                    setScoreFilter("all");
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    isDark
                      ? "text-rose-400 hover:bg-rose-500/10"
                      : "text-rose-600 hover:bg-rose-50"
                  }`}
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </section>

        <main
          className={`rounded-2xl border backdrop-blur-[14px] saturate-[180%] overflow-hidden ${
            isDark
              ? "bg-white/[0.03] border-white/10 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12)]"
              : "bg-white/90 border-slate-200/90 shadow-sm"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr
                  className={`border-b font-mono text-[11px] uppercase tracking-wider ${
                    isDark
                      ? "border-white/10 bg-white/[0.02] text-slate-400"
                      : "border-slate-200 bg-slate-50/80 text-slate-600"
                  }`}
                >
                  <th className={`w-10 text-center ${density === "compact" ? "py-2.5 px-3" : "py-3.5 px-4"}`}>
                    <input
                      type="checkbox"
                      checked={isAllCurrentPageSelected}
                      ref={(inputElement) => {
                        if (inputElement) {
                          inputElement.indeterminate = isSomeCurrentPageSelected;
                        }
                      }}
                      onChange={handleToggleSelectAll}
                      className="rounded border-slate-600 text-sky-600 focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4"
                      aria-label={dict.colCheckbox}
                    />
                  </th>

                  <th
                    className={`w-14 font-semibold ${
                      density === "compact" ? "py-2.5 px-3" : "py-3.5 px-4"
                    }`}
                  >
                    {dict.colNumber}
                  </th>

                  <th
                    onClick={() => handleSortToggle("nis")}
                    className={`w-32 cursor-pointer select-none group font-semibold ${
                      density === "compact" ? "py-2.5 px-3" : "py-3.5 px-4"
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <span>{dict.colNis}</span>
                      <span className="opacity-40 group-hover:opacity-100 transition-opacity">
                        {sortColumn === "nis" ? (
                          sortOrder === "asc" ? <ArrowUp className="w-3 h-3 text-sky-400" /> : <ArrowDown className="w-3 h-3 text-sky-400" />
                        ) : (
                          <ArrowUpDown className="w-3 h-3" />
                        )}
                      </span>
                    </div>
                  </th>

                  <th
                    onClick={() => handleSortToggle("name")}
                    className={`cursor-pointer select-none group font-semibold ${
                      density === "compact" ? "py-2.5 px-3" : "py-3.5 px-4"
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <span>{dict.colName}</span>
                      <span className="opacity-40 group-hover:opacity-100 transition-opacity">
                        {sortColumn === "name" ? (
                          sortOrder === "asc" ? <ArrowUp className="w-3 h-3 text-sky-400" /> : <ArrowDown className="w-3 h-3 text-sky-400" />
                        ) : (
                          <ArrowUpDown className="w-3 h-3" />
                        )}
                      </span>
                    </div>
                  </th>

                  <th
                    onClick={() => handleSortToggle("class")}
                    className={`w-36 cursor-pointer select-none group font-semibold ${
                      density === "compact" ? "py-2.5 px-3" : "py-3.5 px-4"
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <span>{dict.colClass}</span>
                      <span className="opacity-40 group-hover:opacity-100 transition-opacity">
                        {sortColumn === "class" ? (
                          sortOrder === "asc" ? <ArrowUp className="w-3 h-3 text-sky-400" /> : <ArrowDown className="w-3 h-3 text-sky-400" />
                        ) : (
                          <ArrowUpDown className="w-3 h-3" />
                        )}
                      </span>
                    </div>
                  </th>

                  <th
                    onClick={() => handleSortToggle("gradeAverage")}
                    className={`w-40 cursor-pointer select-none group font-semibold ${
                      density === "compact" ? "py-2.5 px-3" : "py-3.5 px-4"
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <span>{dict.colAverage}</span>
                      <span className="opacity-40 group-hover:opacity-100 transition-opacity">
                        {sortColumn === "gradeAverage" ? (
                          sortOrder === "asc" ? <ArrowUp className="w-3 h-3 text-sky-400" /> : <ArrowDown className="w-3 h-3 text-sky-400" />
                        ) : (
                          <ArrowUpDown className="w-3 h-3" />
                        )}
                      </span>
                    </div>
                  </th>

                  <th
                    className={`w-24 text-right font-semibold ${
                      density === "compact" ? "py-2.5 px-3" : "py-3.5 px-4"
                    }`}
                  >
                    {dict.colActions}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/[0.05]">
                {paginatedStudents.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-16 text-center">
                      <div className="max-w-sm mx-auto space-y-2">
                        <AlertTriangle className={`w-8 h-8 mx-auto ${isDark ? "text-slate-500" : "text-slate-400"}`} />
                        <p className="text-sm font-semibold">{dict.noResultsTitle}</p>
                        <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          {dict.noResultsSubtitle}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedStudents.map((student, rowIndex) => {
                    const continuousIndex = (currentPage - 1) * pageSize + rowIndex + 1;
                    const isSelected = selectedStudentIds.has(student.id);
                    const isEditingName = editingStudentId === student.id;
                    const isClassPopoverOpen = classPopoverStudentId === student.id;
                    const isConfirmingDelete = confirmDeleteId === student.id;

                    const scoreColorClass =
                      student.gradeAverage >= 85
                        ? isDark
                          ? "bg-emerald-500/15 border-emerald-400/30 text-emerald-300"
                          : "bg-emerald-50 border-emerald-200 text-emerald-800"
                        : student.gradeAverage >= 75
                        ? isDark
                          ? "bg-sky-500/15 border-sky-400/30 text-sky-300"
                          : "bg-sky-50 border-sky-200 text-sky-800"
                        : isDark
                        ? "bg-rose-500/15 border-rose-400/30 text-rose-300"
                        : "bg-rose-50 border-rose-200 text-rose-800";

                    return (
                      <tr
                        key={student.id}
                        onClick={() => handleOpenDossier(student)}
                        className={`cursor-pointer transition-colors duration-150 ${
                          isSelected
                            ? isDark
                              ? "bg-sky-500/10"
                              : "bg-sky-50/70"
                            : isDark
                            ? "hover:bg-white/[0.035]"
                            : "hover:bg-slate-50/80"
                        }`}
                      >
                        <td
                          onClick={(e) => handleToggleSelectRow(student.id, e)}
                          className={`text-center ${density === "compact" ? "py-2 px-3" : "py-3.5 px-4"}`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}}
                            className="rounded border-slate-600 text-sky-600 focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4"
                            aria-label={`Select student ${student.name}`}
                          />
                        </td>

                        <td
                          className={`font-mono text-xs opacity-60 tabular-nums ${
                            density === "compact" ? "py-2 px-3" : "py-3.5 px-4"
                          }`}
                        >
                          {continuousIndex}
                        </td>

                        <td
                          className={`font-mono text-xs font-semibold tracking-tight tabular-nums ${
                            density === "compact" ? "py-2 px-3" : "py-3.5 px-4"
                          } ${isDark ? "text-slate-300" : "text-slate-700"}`}
                        >
                          {student.nis}
                        </td>

                        <td className={density === "compact" ? "py-2 px-3" : "py-3.5 px-4"}>
                          {isEditingName ? (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="relative max-w-sm space-y-1"
                            >
                              <div className="flex items-center space-x-1.5">
                                <input
                                  type="text"
                                  autoFocus
                                  value={editingNameValue}
                                  onChange={(e) => {
                                    setEditingNameValue(e.target.value);
                                    if (editingNameError) setEditingNameError("");
                                  }}
                                  onKeyDown={(e) => handleKeyDownNameEdit(e, student.id)}
                                  onBlur={() => handleCommitNameEdit(student.id)}
                                  className={`w-full px-2.5 py-1 text-xs rounded-lg border outline-none font-sans font-medium ${
                                    isDark
                                      ? "bg-slate-900 border-sky-400 text-white"
                                      : "bg-white border-sky-500 text-slate-900 shadow-sm"
                                  }`}
                                />
                                <button
                                  type="button"
                                  onClick={() => handleCommitNameEdit(student.id)}
                                  className="p-1 rounded-md text-emerald-400 hover:bg-emerald-500/10"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingStudentId(null);
                                    setEditingNameError("");
                                  }}
                                  className="p-1 rounded-md text-slate-400 hover:bg-slate-500/10"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              {editingNameError && (
                                <p className="text-[10px] text-rose-400 font-medium">
                                  {editingNameError}
                                </p>
                              )}
                            </div>
                          ) : (
                            <div className="flex items-center space-x-3 group/name">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-[11px] border shrink-0 ${getAvatarPastelStyle(
                                  student.name,
                                  isDark
                                )}`}
                              >
                                {getAvatarInitials(student.name)}
                              </div>
                              <div className="min-w-0">
                                <div
                                  onClick={(e) => handleStartNameEdit(student, e)}
                                  title="Click to edit name directly"
                                  className="font-medium text-xs sm:text-sm tracking-tight flex items-center space-x-1.5 hover:underline cursor-text"
                                >
                                  <span className="truncate">{student.name}</span>
                                  <Edit3 className="w-2.5 h-2.5 opacity-0 group-hover/name:opacity-60 transition-opacity text-sky-400" />
                                </div>
                                <div
                                  className={`text-[11px] font-mono truncate ${
                                    isDark ? "text-slate-500" : "text-slate-400"
                                  }`}
                                >
                                  {student.email}
                                </div>
                              </div>
                            </div>
                          )}
                        </td>

                        <td
                          className={`relative ${
                            density === "compact" ? "py-2 px-3" : "py-3.5 px-4"
                          }`}
                        >
                          <div
                            onDoubleClick={(e) => handleDoubleClickClass(student.id, e)}
                            title="Double click to change class"
                            className={`inline-flex items-center px-2.5 py-1 rounded-lg font-mono text-xs border select-none cursor-pointer transition-all ${
                              isDark
                                ? "bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.08] hover:border-white/20"
                                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200/70 shadow-sm"
                            }`}
                          >
                            <span>{student.className}</span>
                          </div>

                          {isClassPopoverOpen && (
                            <div
                              ref={classPopoverReference}
                              onClick={(e) => e.stopPropagation()}
                              className={`absolute left-0 top-full mt-1.5 z-30 w-44 rounded-xl border p-1.5 shadow-xl backdrop-blur-xl ${
                                isDark
                                  ? "bg-slate-900/95 border-white/15 text-white shadow-2xl"
                                  : "bg-white/95 border-slate-200 text-slate-900 shadow-lg"
                              }`}
                            >
                              <div className="px-2 py-1 text-[10px] uppercase font-mono tracking-wider opacity-60">
                                {dict.selectTargetClass}
                              </div>
                              <div className="space-y-0.5">
                                {availableClasses.map((cName) => (
                                  <button
                                    key={cName}
                                    type="button"
                                    onClick={() => handleSelectNewClass(student.id, cName)}
                                    className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-mono text-left transition-colors ${
                                      student.className === cName
                                        ? "bg-sky-500/20 text-sky-400 font-semibold"
                                        : isDark
                                        ? "hover:bg-white/10 text-slate-300"
                                        : "hover:bg-slate-100 text-slate-700"
                                    }`}
                                  >
                                    <span>{cName}</span>
                                    {student.className === cName && <Check className="w-3.5 h-3.5" />}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </td>

                        <td className={density === "compact" ? "py-2 px-3" : "py-3.5 px-4"}>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-md font-mono text-xs font-bold border tabular-nums ${scoreColorClass}`}
                          >
                            {student.gradeAverage.toFixed(2)}
                          </span>
                        </td>

                        <td
                          onClick={(e) => e.stopPropagation()}
                          className={`text-right ${density === "compact" ? "py-2 px-3" : "py-3.5 px-4"}`}
                        >
                          <div className="relative inline-flex items-center space-x-1 justify-end">
                            {isConfirmingDelete ? (
                              <div
                                onClick={(e) => e.stopPropagation()}
                                className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 flex items-center space-x-1.5 p-1 rounded-xl border shadow-xl backdrop-blur-md ${
                                  isDark
                                    ? "bg-slate-900/95 border-rose-500/30 text-white"
                                    : "bg-white border-rose-300 text-slate-900 shadow-md"
                                }`}
                              >
                                <span className="text-[11px] px-1 font-sans text-rose-400 font-medium whitespace-nowrap">
                                  {dict.confirmDelete}?
                                </span>
                                <button
                                  type="button"
                                  onClick={(e) => handleConfirmSingleDelete(student.id, e)}
                                  className="px-2 py-0.5 rounded-lg text-xs font-semibold bg-rose-600 text-white hover:bg-rose-500"
                                >
                                  {dict.confirmDelete}
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setConfirmDeleteId(null);
                                  }}
                                  className="px-1.5 py-0.5 rounded-lg text-xs text-slate-400 hover:text-white"
                                >
                                  {dict.cancel}
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setConfirmDeleteId(student.id);
                                }}
                                title={dict.deleteTooltip}
                                className={`p-1.5 rounded-lg transition-all text-rose-500 hover:bg-rose-500/10 active:scale-95`}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}

                            <div className="relative">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveMenuStudentId((prev) =>
                                    prev === student.id ? null : student.id
                                  );
                                }}
                                className={`p-1.5 rounded-lg transition-colors ${
                                  isDark
                                    ? "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                                }`}
                              >
                                <MoreVertical className="w-4 h-4" />
                              </button>

                              {activeMenuStudentId === student.id && (
                                <div
                                  onClick={(e) => e.stopPropagation()}
                                  className={`absolute right-0 top-full mt-1 z-30 w-48 rounded-xl border p-1 shadow-xl backdrop-blur-xl ${
                                    isDark
                                      ? "bg-slate-900/95 border-white/10 text-slate-200"
                                      : "bg-white border-slate-200 text-slate-800 shadow-lg"
                                  }`}
                                >
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setActiveMenuStudentId(null);
                                      handleOpenDossier(student);
                                    }}
                                    className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-xs text-left transition-colors ${
                                      isDark ? "hover:bg-white/10" : "hover:bg-slate-100"
                                    }`}
                                  >
                                    <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                                    <span>{dict.viewDossier}</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setActiveMenuStudentId(null);
                                      setClassPopoverStudentId(student.id);
                                    }}
                                    className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-xs text-left transition-colors ${
                                      isDark ? "hover:bg-white/10" : "hover:bg-slate-100"
                                    }`}
                                  >
                                    <Layers className="w-3.5 h-3.5 text-teal-400" />
                                    <span>{dict.transferClass}</span>
                                  </button>
                                  <div className={`my-1 border-t ${isDark ? "border-white/10" : "border-slate-200"}`} />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setActiveMenuStudentId(null);
                                      setConfirmDeleteId(student.id);
                                    }}
                                    className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-xs text-left text-rose-400 hover:bg-rose-500/10 transition-colors"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    <span>{dict.deleteRecord}</span>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <footer
            className={`p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs ${
              isDark
                ? "border-white/10 bg-white/[0.015] text-slate-400"
                : "border-slate-200 bg-slate-50/60 text-slate-600"
            }`}
          >
            <div className="font-mono">
              {dict.showing}{" "}
              <span className="font-semibold text-sky-400">
                {totalFilteredCount === 0 ? 0 : (currentPage - 1) * pageSize + 1}
              </span>
              –
              <span className="font-semibold text-sky-400">
                {Math.min(currentPage * pageSize, totalFilteredCount)}
              </span>{" "}
              {dict.of}{" "}
              <span className="font-semibold">{totalFilteredCount}</span> {dict.students}
            </div>

            <div
              className={`flex items-center p-1 rounded-full border backdrop-blur-md ${
                isDark
                  ? "bg-white/[0.03] border-white/10 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12)]"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className={`p-1.5 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                  isDark ? "hover:bg-white/10 text-slate-300" : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`p-1.5 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                  isDark ? "hover:bg-white/10 text-slate-300" : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center px-2 space-x-1">
                {Array.from({ length: totalPages }, (_, index) => index + 1)
                  .filter((pageNumber) => {
                    return (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      Math.abs(pageNumber - currentPage) <= 1
                    );
                  })
                  .map((pageNumber, idx, visiblePages) => {
                    const previous = visiblePages[idx - 1];
                    const showEllipsis = previous && pageNumber - previous > 1;
                    return (
                      <React.Fragment key={pageNumber}>
                        {showEllipsis && (
                          <span className="px-1 text-xs opacity-40 font-mono">...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`w-7 h-7 rounded-full text-xs font-mono font-bold transition-all ${
                            currentPage === pageNumber
                              ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-105"
                              : isDark
                              ? "text-slate-400 hover:text-white hover:bg-white/5"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                          }`}
                        >
                          {pageNumber}
                        </button>
                      </React.Fragment>
                    );
                  })}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`p-1.5 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                  isDark ? "hover:bg-white/10 text-slate-300" : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className={`p-1.5 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                  isDark ? "hover:bg-white/10 text-slate-300" : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs opacity-70">{dict.rowsPerPage}:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-xl text-xs font-mono border outline-none cursor-pointer ${
                  isDark
                    ? "bg-white/[0.04] border-white/10 text-slate-200"
                    : "bg-white border-slate-200 text-slate-800 shadow-sm"
                }`}
              >
                <option value={10} className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>10</option>
                <option value={25} className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>25</option>
                <option value={50} className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>50</option>
              </select>
            </div>
          </footer>
        </main>
      </div>

      {selectedStudentIds.size > 0 && (
        <aside
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center space-x-3 px-4 py-2.5 rounded-2xl border shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200 ${
            isDark
              ? "bg-slate-900/90 border-sky-500/40 text-white shadow-sky-500/10"
              : "bg-white/95 border-sky-400 text-slate-900 shadow-xl"
          }`}
        >
          <span className="font-mono text-xs font-bold px-2 py-1 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30">
            {selectedStudentIds.size} {dict.selectedCount}
          </span>

          <div className="h-4 w-px bg-white/20" />

          <button
            type="button"
            onClick={() => setIsBulkTransferOpen(true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              isDark
                ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200"
                : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-800"
            }`}
          >
            {dict.transferClass}
          </button>

          <button
            type="button"
            onClick={() => {
              const selectedStudents = students.filter((s) => selectedStudentIds.has(s.id));
              handleExportCsv(selectedStudents);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              isDark
                ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200"
                : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-800"
            }`}
          >
            {dict.exportSelected}
          </button>

          <button
            type="button"
            onClick={handleBulkDeleteSelected}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-600/90 hover:bg-rose-600 text-white transition-all shadow-sm shadow-rose-600/30"
          >
            {dict.deleteSelected}
          </button>

          <button
            type="button"
            onClick={() => setSelectedStudentIds(new Set())}
            className={`p-1.5 rounded-lg transition-colors ${
              isDark ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-slate-900"
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}

      {undoToast.visible && (
        <aside
          className={`fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-4 py-3 rounded-2xl border shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200 ${
            isDark
              ? "bg-slate-900/95 border-rose-500/40 text-white shadow-rose-500/10"
              : "bg-white border-rose-400 text-slate-900 shadow-xl"
          }`}
        >
          <div className="flex items-center space-x-2 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>{undoToast.message}</span>
          </div>

          <button
            type="button"
            onClick={handleRestoreDeleted}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-600 text-white hover:bg-sky-500 active:scale-95 transition-all shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{dict.undo}</span>
          </button>

          <button
            type="button"
            onClick={() => setUndoToast((prev) => ({ ...prev, visible: false }))}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {classSuccessToast.visible && (
        <aside
          className={`fixed bottom-6 right-6 z-50 flex items-center space-x-2.5 px-4 py-3 rounded-2xl border shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200 ${
            isDark
              ? "bg-slate-900/95 border-emerald-500/40 text-white shadow-emerald-500/10"
              : "bg-white border-emerald-400 text-slate-900 shadow-xl"
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{classSuccessToast.message}</span>
          <button
            type="button"
            onClick={() => setClassSuccessToast({ visible: false, message: "" })}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {selectedDossierStudent && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            onClick={() => setSelectedDossierStudent(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <section
            className={`absolute inset-y-0 right-0 max-w-2xl w-full flex flex-col border-l shadow-2xl backdrop-blur-2xl animate-in slide-in-from-right duration-300 ${
              isDark
                ? "bg-[#000000]/95 border-white/10 text-slate-100"
                : "bg-white/95 border-slate-200 text-slate-900"
            }`}
          >
            <header className="p-6 border-b border-white/10 flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-lg border ${getAvatarPastelStyle(
                    selectedDossierStudent.name,
                    isDark
                  )}`}
                >
                  {getAvatarInitials(selectedDossierStudent.name)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-xl font-bold tracking-tight">
                      {selectedDossierStudent.name}
                    </h2>
                    <span
                      className={`px-2.5 py-0.5 rounded-md font-mono text-xs font-medium border ${
                        isDark ? "bg-white/5 border-white/10 text-sky-400" : "bg-sky-50 border-sky-200 text-sky-800"
                      }`}
                    >
                      {selectedDossierStudent.className}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-mono opacity-70">
                    <span>NIS: {selectedDossierStudent.nis}</span>
                    <span>•</span>
                    <span>{selectedDossierStudent.email}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDossierStudent(null)}
                className={`p-2 rounded-xl border transition-colors ${
                  isDark ? "border-white/10 hover:bg-white/10 text-slate-400 hover:text-white" : "border-slate-200 hover:bg-slate-100 text-slate-600"
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            <div className="p-6 space-y-6 flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-3">
                {(() => {
                  const metrics = calculateGradeMetrics(dossierGrades);
                  return (
                    <>
                      <div
                        className={`p-3.5 rounded-xl border ${
                          isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <div className="text-[10px] uppercase font-mono tracking-wider opacity-60">
                          {dict.gradeAverage}
                        </div>
                        <div className="text-xl font-bold font-mono text-sky-400 pt-1">
                          {metrics.average.toFixed(2)}
                        </div>
                      </div>

                      <div
                        className={`p-3.5 rounded-xl border ${
                          isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <div className="text-[10px] uppercase font-mono tracking-wider opacity-60">
                          Tertinggi
                        </div>
                        <div className="text-xl font-bold font-mono text-emerald-400 pt-1">
                          {metrics.highest.toFixed(2)}
                        </div>
                      </div>

                      <div
                        className={`p-3.5 rounded-xl border ${
                          isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <div className="text-[10px] uppercase font-mono tracking-wider opacity-60">
                          Terendah
                        </div>
                        <div className="text-xl font-bold font-mono text-amber-400 pt-1">
                          {metrics.lowest.toFixed(2)}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold tracking-wide uppercase font-mono text-sky-400">
                    {dict.academicGrades}
                  </h3>
                  <span className="text-[11px] font-mono opacity-60">
                    Formula: (Tugas×30%) + (UTS×30%) + (UAS×40%)
                  </span>
                </div>

                <div
                  className={`rounded-xl border overflow-hidden ${
                    isDark ? "border-white/10" : "border-slate-200"
                  }`}
                >
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr
                        className={`font-mono text-[10px] uppercase tracking-wider border-b ${
                          isDark ? "bg-white/[0.02] border-white/10 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
                        }`}
                      >
                        <th className="py-2.5 px-3">{dict.subjectHeader}</th>
                        <th className="py-2.5 px-2 w-16 text-center">{dict.taskHeader}</th>
                        <th className="py-2.5 px-2 w-16 text-center">{dict.midtermHeader}</th>
                        <th className="py-2.5 px-2 w-16 text-center">{dict.finalExamHeader}</th>
                        <th className="py-2.5 px-2 w-20 text-center">{dict.finalScoreHeader}</th>
                        <th className="py-2.5 px-2 w-16 text-center">{dict.predicateHeader}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.05]">
                      {dossierGrades.map((grade) => {
                        const predicateColor =
                          grade.predicate === "A"
                            ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
                            : grade.predicate === "B"
                            ? "text-sky-400 bg-sky-500/10 border-sky-500/30"
                            : grade.predicate === "C"
                            ? "text-amber-400 bg-amber-500/10 border-amber-500/30"
                            : "text-rose-400 bg-rose-500/10 border-rose-500/30";

                        return (
                          <tr key={grade.id} className={isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"}>
                            <td className="py-2.5 px-3 font-medium">
                              {grade.subject}
                            </td>
                            <td className="py-2.5 px-2 text-center">
                              <input
                                type="number"
                                min={0}
                                max={100}
                                step="0.5"
                                value={grade.assignment}
                                onChange={(e) =>
                                  handleDossierGradeChange(grade.id, "assignment", e.target.value)
                                }
                                className={`w-14 px-1.5 py-1 text-center font-mono rounded-lg border outline-none text-xs ${
                                  isDark
                                    ? "bg-white/[0.04] border-white/10 text-white focus:border-sky-500"
                                    : "bg-white border-slate-200 text-slate-900 focus:border-sky-500"
                                }`}
                              />
                            </td>
                            <td className="py-2.5 px-2 text-center">
                              <input
                                type="number"
                                min={0}
                                max={100}
                                step="0.5"
                                value={grade.midterm}
                                onChange={(e) =>
                                  handleDossierGradeChange(grade.id, "midterm", e.target.value)
                                }
                                className={`w-14 px-1.5 py-1 text-center font-mono rounded-lg border outline-none text-xs ${
                                  isDark
                                    ? "bg-white/[0.04] border-white/10 text-white focus:border-sky-500"
                                    : "bg-white border-slate-200 text-slate-900 focus:border-sky-500"
                                }`}
                              />
                            </td>
                            <td className="py-2.5 px-2 text-center">
                              <input
                                type="number"
                                min={0}
                                max={100}
                                step="0.5"
                                value={grade.finalExam}
                                onChange={(e) =>
                                  handleDossierGradeChange(grade.id, "finalExam", e.target.value)
                                }
                                className={`w-14 px-1.5 py-1 text-center font-mono rounded-lg border outline-none text-xs ${
                                  isDark
                                    ? "bg-white/[0.04] border-white/10 text-white focus:border-sky-500"
                                    : "bg-white border-slate-200 text-slate-900 focus:border-sky-500"
                                }`}
                              />
                            </td>
                            <td className="py-2.5 px-2 text-center font-mono font-bold text-sky-400">
                              {grade.finalScore.toFixed(2)}
                            </td>
                            <td className="py-2.5 px-2 text-center">
                              <span
                                className={`inline-block w-6 py-0.5 rounded font-mono font-bold border text-[11px] ${predicateColor}`}
                              >
                                {grade.predicate}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <footer className="p-4 border-t border-white/10 flex items-center justify-between">
              <div>
                {dossierSaveSuccess && (
                  <span className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Perubahan nilai berhasil disimpan!</span>
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setSelectedDossierStudent(null)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                    isDark ? "border-white/10 text-slate-300 hover:bg-white/10" : "border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {dict.close}
                </button>
                <button
                  type="button"
                  onClick={handleSaveDossierChanges}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-sm"
                >
                  {dict.saveChanges}
                </button>
              </div>
            </footer>
          </section>
        </div>
      )}

      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            onClick={() => setIsAddModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div
            className={`relative w-full max-w-md rounded-2xl border p-6 shadow-2xl backdrop-blur-2xl animate-in zoom-in-95 duration-200 ${
              isDark
                ? "bg-slate-900/95 border-white/15 text-slate-100"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold tracking-tight">{dict.modalAddTitle}</h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateNewStudent} className="pt-4 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider opacity-70">
                  {dict.inputNisLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 1073"
                  value={newStudentNis}
                  onChange={(e) => setNewStudentNis(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-mono border outline-none ${
                    isDark
                      ? "bg-white/[0.04] border-white/10 text-white focus:border-sky-500"
                      : "bg-slate-50 border-slate-200 text-slate-900 focus:border-sky-500"
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider opacity-70">
                  {dict.inputNameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Zaidan Al-Farisi"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-sans border outline-none ${
                    isDark
                      ? "bg-white/[0.04] border-white/10 text-white focus:border-sky-500"
                      : "bg-slate-50 border-slate-200 text-slate-900 focus:border-sky-500"
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider opacity-70">
                  {dict.inputClassLabel}
                </label>
                <select
                  value={newStudentClass}
                  onChange={(e) => setNewStudentClass(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-mono border outline-none ${
                    isDark
                      ? "bg-slate-900 border-white/10 text-white"
                      : "bg-slate-50 border-slate-200 text-slate-900"
                  }`}
                >
                  {availableClasses.map((cName) => (
                    <option key={cName} value={cName}>
                      {cName}
                    </option>
                  ))}
                </select>
              </div>

              {newStudentError && (
                <p className="text-xs text-rose-400 font-medium">{newStudentError}</p>
              )}

              <div className="pt-2 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border ${
                    isDark ? "border-white/10 text-slate-300 hover:bg-white/10" : "border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {dict.cancel}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-sm"
                >
                  {dict.submitAdd}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isBulkTransferOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            onClick={() => setIsBulkTransferOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div
            className={`relative w-full max-w-sm rounded-2xl border p-6 shadow-2xl backdrop-blur-2xl animate-in zoom-in-95 duration-200 ${
              isDark
                ? "bg-slate-900/95 border-white/15 text-slate-100"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold tracking-tight">{dict.transferClass}</h3>
              <button
                type="button"
                onClick={() => setIsBulkTransferOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <p className="text-xs opacity-75">
                Pindahkan {selectedStudentIds.size} {dict.students} terpilih ke rombongan belajar:
              </p>
              <select
                value={bulkTargetClass}
                onChange={(e) => setBulkTargetClass(e.target.value)}
                className={`w-full px-3 py-2 rounded-xl text-xs font-mono border outline-none ${
                  isDark
                    ? "bg-slate-900 border-white/10 text-white"
                    : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
              >
                {availableClasses.map((cName) => (
                  <option key={cName} value={cName}>
                    {cName}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2 flex items-center justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsBulkTransferOpen(false)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                  isDark ? "border-white/10 text-slate-300 hover:bg-white/10" : "border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {dict.cancel}
              </button>
              <button
                type="button"
                onClick={handleBulkTransferSubmit}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-sm"
              >
                {dict.applyTransfer}
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddClassModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            onClick={() => setIsAddClassModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div
            className={`relative w-full max-w-md rounded-2xl border p-6 shadow-2xl backdrop-blur-2xl animate-in zoom-in-95 duration-200 ${
              isDark
                ? "bg-slate-900/95 border-white/15 text-slate-100"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight">Tambah Kelas Baru</h3>
                <p className="text-xs opacity-70 mt-0.5">Tambahkan rombel atau jurusan baru ke dalam sistem.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsAddClassModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveNewClass} className="pt-4 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider opacity-70">
                  Tingkat / Jenjang
                </label>
                <select
                  value={newClassLevel}
                  onChange={(e) => setNewClassLevel(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-mono border outline-none ${
                    isDark
                      ? "bg-slate-900 border-white/10 text-white"
                      : "bg-slate-50 border-slate-200 text-slate-900"
                  }`}
                >
                  <option value="X">X</option>
                  <option value="XI">XI</option>
                  <option value="XII">XII</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider opacity-70">
                  Nama Program Keahlian / Jurusan
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: RPL, TKJ, DKV, AKL, OTKP"
                  value={newClassMajor}
                  onChange={(e) => setNewClassMajor(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-sans uppercase border outline-none ${
                    isDark
                      ? "bg-white/[0.04] border-white/10 text-white focus:border-sky-500"
                      : "bg-slate-50 border-slate-200 text-slate-900 focus:border-sky-500"
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider opacity-70">
                  Nomor Rombel (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: 1, 2, 3, 12"
                  value={newClassIndex}
                  onChange={(e) => setNewClassIndex(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-mono border outline-none ${
                    isDark
                      ? "bg-white/[0.04] border-white/10 text-white focus:border-sky-500"
                      : "bg-slate-50 border-slate-200 text-slate-900 focus:border-sky-500"
                  }`}
                />
              </div>

              <div
                className={`p-3 rounded-xl border flex items-center justify-between ${
                  isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                }`}
              >
                <span className="text-xs opacity-70">Pratinjau Format Kelas:</span>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg border bg-sky-500/15 border-sky-400/30 text-sky-400">
                  {assembledClassPreview}
                </span>
              </div>

              {addClassError && (
                <p className="text-xs text-rose-400 font-medium">{addClassError}</p>
              )}

              <div className="pt-2 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddClassModalOpen(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border ${
                    isDark ? "border-white/10 text-slate-300 hover:bg-white/10" : "border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-sm"
                >
                  Simpan Kelas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
