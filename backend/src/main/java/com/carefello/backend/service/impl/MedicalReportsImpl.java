package com.carefello.backend.service.impl;


import com.carefello.backend.Util.ImageUtil;
import com.carefello.backend.model.ElderMedicalHistory;
import com.carefello.backend.model.MedicalReports;
import com.carefello.backend.repo.ElderMedicalHistoryRepo;
import com.carefello.backend.repo.MedicalReportsRepo;
import com.carefello.backend.service.MedicalReportsService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class MedicalReportsImpl implements MedicalReportsService {

    @Autowired
    private ElderMedicalHistoryRepo elderMedicalHistoryRepo;

    @Autowired
    private MedicalReportsRepo medicalReportsRepo;

    @Override
    public void addReports(int diseaseId , MultipartFile pdfFile) throws IOException {

        ElderMedicalHistory elderMedicalHistory = elderMedicalHistoryRepo.findById(diseaseId)
                .orElseThrow(()->new EntityNotFoundException("Disease Id No found"));

        if(pdfFile != null && !pdfFile.isEmpty()){
            String originalFilename = pdfFile.getOriginalFilename();
            String fileType = pdfFile.getContentType();

            if(fileType != null){
                byte[] pdfData = pdfFile.getBytes();
                byte[] compressedPdfData = ImageUtil.compressImage(pdfData);

                MedicalReports medicalReports = new MedicalReports();
                medicalReports.setName(originalFilename);
                medicalReports.setType(fileType);
                medicalReports.setPdfData(compressedPdfData);
                medicalReports.setElderMedicalHistory(elderMedicalHistory);

                medicalReportsRepo.save(medicalReports);
            }else{
                throw new IllegalArgumentException("PDF File IS REQUIRED");
            }
        }
    }
}
