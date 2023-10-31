package com.carefello.backend.service;

import com.carefello.backend.DTO.MedicalReportsDTO;
import com.carefello.backend.model.MedicalReports;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface MedicalReportsService {
    void addReports(int diseaseId , MultipartFile pdfFile) throws IOException;
    List<MedicalReportsDTO> getAllReportsForDisease(int diseaseId);
    MedicalReports getReportsById(int reportId);
}
