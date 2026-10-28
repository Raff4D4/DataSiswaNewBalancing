<?php

namespace App\Controllers;

use App\Models\SiswaModel;
use CodeIgniter\HTTP\ResponseInterface;

class Home extends BaseController
{
    protected $helpers = ['url'];

    public function index(): string
    {
        $siswaList = [];
        try {
            $db = \Config\Database::connect();
            $studentsQuery = $db->query('SELECT id, nis, nama, kelas FROM siswa ORDER BY id ASC');
            $students = $studentsQuery->getResultArray();
            foreach ($students as &$student) {
                $studentId = (int) $student['id'];
                $gradesQuery = $db->query("SELECT id, mata_pelajaran, nilai_tugas, nilai_uts, nilai_uas, nilai_akhir, predikat FROM nilai_siswa WHERE siswa_id = {$studentId} ORDER BY id ASC");
                $grades = $gradesQuery->getResultArray();
                $formattedGrades = [];
                foreach ($grades as $gradeRow) {
                    $formattedGrades[] = [
                        'id' => (int) $gradeRow['id'],
                        'subject' => $gradeRow['mata_pelajaran'],
                        'assignment' => (float) $gradeRow['nilai_tugas'],
                        'midterm' => (float) $gradeRow['nilai_uts'],
                        'finalExam' => (float) $gradeRow['nilai_uas'],
                        'finalScore' => (float) $gradeRow['nilai_akhir'],
                        'predicate' => $gradeRow['predikat']
                    ];
                }
                $student['id'] = (int) $student['id'];
                $student['grades'] = $formattedGrades;
            }
            $siswaList = $students;
        } catch (\Throwable $databaseException) {
            $siswaList = [];
        }

        $viewData = [
            'siswa' => $siswaList,
            'initialStudentsJson' => json_encode($siswaList, JSON_UNESCAPED_UNICODE) ?: '[]',
            'appJsUrl' => base_url('js/app.js'),
        ];

        return view('siswa_view', $viewData);
    }

    public function tambah(): ResponseInterface
    {
        $isJson = $this->request->is('json');
        $nis = $isJson ? $this->request->getJsonVar('nis') : $this->request->getPost('nis');
        $nama = $isJson ? $this->request->getJsonVar('nama') : $this->request->getPost('nama');
        $kelas = $isJson ? $this->request->getJsonVar('kelas') : $this->request->getPost('kelas');

        $insertedId = null;
        try {
            $siswaModel = new SiswaModel();
            $insertedId = $siswaModel->insert([
                'nis'   => $nis,
                'nama'  => $nama,
                'kelas' => $kelas,
            ]);

            if ($insertedId) {
                $db = \Config\Database::connect();
                $defaultSubjects = [
                    'Pemodelan Perangkat Lunak',
                    'Basis Data',
                    'Pemrograman Berorientasi Objek',
                    'Pemrograman Web dan Perangkat Bergerak'
                ];
                foreach ($defaultSubjects as $subject) {
                    $task = 80.00;
                    $mid = 80.00;
                    $final = 80.00;
                    $db->query("INSERT INTO nilai_siswa (siswa_id, mata_pelajaran, nilai_tugas, nilai_uts, nilai_uas) VALUES ({$insertedId}, '{$subject}', {$task}, {$mid}, {$final})");
                }
            }
        } catch (\Throwable $databaseException) {
        }

        if ($isJson) {
            return $this->response->setJSON([
                'success' => $insertedId !== null,
                'id' => $insertedId,
            ]);
        }

        return redirect()->to(base_url());
    }

    public function hapus($id = null): ResponseInterface
    {
        $success = false;
        try {
            if ($id !== null) {
                $siswaModel = new SiswaModel();
                $siswaModel->delete($id);
                $success = true;
            }
        } catch (\Throwable $databaseException) {
        }

        if ($this->request->is('json') || $this->request->isAJAX()) {
            return $this->response->setJSON(['success' => $success]);
        }

        return redirect()->to(base_url());
    }

    public function edit($id = null): ResponseInterface
    {
        $isJson = $this->request->is('json');
        $nis = $isJson ? $this->request->getJsonVar('nis') : $this->request->getPost('nis');
        $nama = $isJson ? $this->request->getJsonVar('nama') : $this->request->getPost('nama');
        $kelas = $isJson ? $this->request->getJsonVar('kelas') : $this->request->getPost('kelas');

        $success = false;
        try {
            if ($id !== null) {
                $siswaModel = new SiswaModel();
                $updateData = [];
                if ($nis !== null) $updateData['nis'] = $nis;
                if ($nama !== null) $updateData['nama'] = $nama;
                if ($kelas !== null) $updateData['kelas'] = $kelas;

                if (!empty($updateData)) {
                    $siswaModel->update($id, $updateData);
                    $success = true;
                }
            }
        } catch (\Throwable $databaseException) {
        }

        if ($isJson || $this->request->isAJAX()) {
            return $this->response->setJSON(['success' => $success]);
        }

        return redirect()->to(base_url());
    }

    public function updateGrade(): ResponseInterface
    {
        $studentId = (int) $this->request->getJsonVar('studentId');
        $subject = (string) $this->request->getJsonVar('subject');
        $assignment = (float) $this->request->getJsonVar('assignment');
        $midterm = (float) $this->request->getJsonVar('midterm');
        $finalExam = (float) $this->request->getJsonVar('finalExam');

        $success = false;
        try {
            $db = \Config\Database::connect();
            $escapedSubject = $db->escape($subject);
            $db->query("UPDATE nilai_siswa SET nilai_tugas = {$assignment}, nilai_uts = {$midterm}, nilai_uas = {$finalExam} WHERE siswa_id = {$studentId} AND mata_pelajaran = {$escapedSubject}");
            $success = true;
        } catch (\Throwable $databaseException) {
        }

        return $this->response->setJSON(['success' => $success]);
    }

    public function bulkTransfer(): ResponseInterface
    {
        $studentIds = (array) $this->request->getJsonVar('studentIds');
        $targetClass = (string) $this->request->getJsonVar('targetClass');

        $success = false;
        try {
            if (!empty($studentIds) && !empty($targetClass)) {
                $siswaModel = new SiswaModel();
                foreach ($studentIds as $id) {
                    $siswaModel->update($id, ['kelas' => $targetClass]);
                }
                $success = true;
            }
        } catch (\Throwable $databaseException) {
        }

        return $this->response->setJSON(['success' => $success]);
    }
}
