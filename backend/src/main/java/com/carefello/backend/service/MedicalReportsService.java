package com.carefello.backend.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface MedicalReportsService {
    void addReports(int diseaseId , MultipartFile pdfFile) throws IOException;
}
