import { LanguageLocale } from "./types";

export interface Dictionary {
  appTitle: string;
  appSubtitle: string;
  breadcrumbDashboard: string;
  breadcrumbAcademic: string;
  breadcrumbStudents: string;
  registeredCount: string;
  lastSynced: string;
  searchPlaceholder: string;
  clearSearch: string;
  addClassButton: string;
  addStudentButton: string;
  allClasses: string;
  filterScore: string;
  filterScoreAll: string;
  filterScoreHigh: string;
  filterScoreLow: string;
  rowsPerPage: string;
  showing: string;
  of: string;
  students: string;
  deleteRecord: string;
  undo: string;
  academicGrades: string;
  gradeAverage: string;
  transferClass: string;
  exportSelected: string;
  deleteSelected: string;
  selectedCount: string;
  colCheckbox: string;
  colNumber: string;
  colNis: string;
  colName: string;
  colClass: string;
  colAverage: string;
  colActions: string;
  deleteTooltip: string;
  confirmDeleteTitle: string;
  confirmDeleteDesc: string;
  cancel: string;
  confirmDelete: string;
  viewDossier: string;
  subjectHeader: string;
  taskHeader: string;
  midtermHeader: string;
  finalExamHeader: string;
  finalScoreHeader: string;
  predicateHeader: string;
  drawerTitle: string;
  drawerSubtitle: string;
  saveChanges: string;
  close: string;
  studentDeletedToast: string;
  studentRestoredToast: string;
  nameValidationEmpty: string;
  nisValidationEmpty: string;
  selectTargetClass: string;
  applyTransfer: string;
  exportCsv: string;
  exportExcel: string;
  printAudit: string;
  compactDensity: string;
  comfortableDensity: string;
  lightTheme: string;
  darkTheme: string;
  modalAddTitle: string;
  inputNisLabel: string;
  inputNameLabel: string;
  inputClassLabel: string;
  submitAdd: string;
  noResultsTitle: string;
  noResultsSubtitle: string;
  shortcutSearchNotice: string;
}

export const DICTIONARY: Record<LanguageLocale, Dictionary> = {
  ID: {
    appTitle: "Data Siswa XI RPL",
    appSubtitle: "Sistem Administrasi Akademik & Pengelolaan Nilai Rekayasa Perangkat Lunak",
    breadcrumbDashboard: "Dashboard",
    breadcrumbAcademic: "Akademik",
    breadcrumbStudents: "Data Siswa",
    registeredCount: "Siswa Terdaftar",
    lastSynced: "Terakhir disinkronkan: Hari ini",
    searchPlaceholder: "Cari nama atau NIS...",
    clearSearch: "Hapus pencarian",
    addClassButton: "Tambah Kelas",
    addStudentButton: "Tambah Siswa",
    allClasses: "Semua Kelas",
    filterScore: "Filter Nilai",
    filterScoreAll: "Semua Nilai",
    filterScoreHigh: "Rata-rata ≥ 85",
    filterScoreLow: "Rata-rata < 75",
    rowsPerPage: "Baris per halaman",
    showing: "Menampilkan",
    of: "dari",
    students: "siswa",
    deleteRecord: "Hapus Data",
    undo: "Urungkan",
    academicGrades: "Nilai Akademik",
    gradeAverage: "Rata-rata Nilai",
    transferClass: "Pindah Kelas",
    exportSelected: "Export Terpilih",
    deleteSelected: "Hapus Terpilih",
    selectedCount: "Siswa Terpilih",
    colCheckbox: "Pilih",
    colNumber: "No",
    colNis: "NIS",
    colName: "Nama Siswa",
    colClass: "Kelas",
    colAverage: "Rata-rata Nilai",
    colActions: "Aksi",
    deleteTooltip: "Hapus Siswa",
    confirmDeleteTitle: "Konfirmasi Hapus",
    confirmDeleteDesc: "Apakah Anda yakin ingin menghapus siswa ini dari pangkalan data?",
    cancel: "Batal",
    confirmDelete: "Hapus",
    viewDossier: "Lihat Dossier Akademik",
    subjectHeader: "Mata Pelajaran",
    taskHeader: "Tugas",
    midtermHeader: "UTS",
    finalExamHeader: "UAS",
    finalScoreHeader: "Nilai Akhir",
    predicateHeader: "Predikat",
    drawerTitle: "Dossier Nilai Akademik",
    drawerSubtitle: "Spesialisasi Kompetensi Keahlian Rekayasa Perangkat Lunak",
    saveChanges: "Simpan Perubahan",
    close: "Tutup",
    studentDeletedToast: "Siswa berhasil dihapus secara optimis.",
    studentRestoredToast: "Siswa berhasil dipulihkan kembali.",
    nameValidationEmpty: "Nama siswa tidak boleh kosong.",
    nisValidationEmpty: "NIS siswa tidak boleh kosong.",
    selectTargetClass: "Pilih Kelas Tujuan",
    applyTransfer: "Terapkan Pemindahan",
    exportCsv: "Export CSV",
    exportExcel: "Export Excel",
    printAudit: "Cetak Laporan",
    compactDensity: "Kompak",
    comfortableDensity: "Nyaman",
    lightTheme: "Mode Terang",
    darkTheme: "Mode Gelap",
    modalAddTitle: "Pendaftaran Siswa Baru",
    inputNisLabel: "Nomor Induk Siswa (NIS)",
    inputNameLabel: "Nama Lengkap Siswa",
    inputClassLabel: "Rombongan Belajar (Kelas)",
    submitAdd: "Daftarkan Siswa",
    noResultsTitle: "Tidak Ada Siswa Ditemukan",
    noResultsSubtitle: "Coba ubah kata kunci pencarian atau sesuaikan opsi filter.",
    shortcutSearchNotice: "Tekan Ctrl+K atau / untuk mencari"
  },
  EN: {
    appTitle: "Student Directory XI RPL",
    appSubtitle: "Academic Administration & Software Engineering Grade Management System",
    breadcrumbDashboard: "Dashboard",
    breadcrumbAcademic: "Academic",
    breadcrumbStudents: "Student Directory",
    registeredCount: "Registered Students",
    lastSynced: "Last synced: Today",
    searchPlaceholder: "Search by name or NIS...",
    clearSearch: "Clear search",
    addClassButton: "Add Class",
    addStudentButton: "Add Student",
    allClasses: "All Classes",
    filterScore: "Grade Filter",
    filterScoreAll: "All Grades",
    filterScoreHigh: "Average ≥ 85",
    filterScoreLow: "Average < 75",
    rowsPerPage: "Rows per page",
    showing: "Showing",
    of: "of",
    students: "students",
    deleteRecord: "Delete Record",
    undo: "Undo",
    academicGrades: "Academic Grades",
    gradeAverage: "Grade Average",
    transferClass: "Transfer Class",
    exportSelected: "Export Selected",
    deleteSelected: "Delete Selected",
    selectedCount: "Students Selected",
    colCheckbox: "Select",
    colNumber: "No",
    colNis: "NIS",
    colName: "Student Identity",
    colClass: "Class",
    colAverage: "Grade Average",
    colActions: "Actions",
    deleteTooltip: "Delete Student",
    confirmDeleteTitle: "Confirm Deletion",
    confirmDeleteDesc: "Are you sure you want to remove this student record from the directory?",
    cancel: "Cancel",
    confirmDelete: "Delete",
    viewDossier: "View Academic Dossier",
    subjectHeader: "Subject",
    taskHeader: "Assignment",
    midtermHeader: "Midterm",
    finalExamHeader: "Final Exam",
    finalScoreHeader: "Final Score",
    predicateHeader: "Predicate",
    drawerTitle: "Academic Grade Dossier",
    drawerSubtitle: "Vocational Software Engineering Competency Record",
    saveChanges: "Save Changes",
    close: "Close",
    studentDeletedToast: "Student record removed optimistically.",
    studentRestoredToast: "Student record successfully restored.",
    nameValidationEmpty: "Student name cannot be empty.",
    nisValidationEmpty: "Student NIS cannot be empty.",
    selectTargetClass: "Select Target Class",
    applyTransfer: "Apply Transfer",
    exportCsv: "Export CSV",
    exportExcel: "Export Excel",
    printAudit: "Print Report",
    compactDensity: "Compact",
    comfortableDensity: "Comfortable",
    lightTheme: "Light Mode",
    darkTheme: "Dark Mode",
    modalAddTitle: "Register New Student",
    inputNisLabel: "Student Identification Number (NIS)",
    inputNameLabel: "Full Student Name",
    inputClassLabel: "Class Cohort",
    submitAdd: "Register Student",
    noResultsTitle: "No Students Found",
    noResultsSubtitle: "Try modifying your search query or adjusting active filters.",
    shortcutSearchNotice: "Press Ctrl+K or / to search"
  }
};

