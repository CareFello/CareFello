package com.carefello.backend.service.impl;


import com.carefello.backend.DTO.MedicalReportsDTO;
import com.carefello.backend.Util.ImageUtil;
import com.carefello.backend.model.ElderMedicalHistory;
import com.carefello.backend.model.Emh;
import com.carefello.backend.model.MedicalReports;
import com.carefello.backend.model.Mr;
import com.carefello.backend.repo.ElderMedicalHistoryRepo;
import com.carefello.backend.repo.EmhRepo;
import com.carefello.backend.repo.MedicalReportsRepo;
import com.carefello.backend.repo.MrRepo;
import com.carefello.backend.service.MedicalReportsService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MedicalReportsImpl implements MedicalReportsService {

    @Autowired
    private ElderMedicalHistoryRepo elderMedicalHistoryRepo;

    @Autowired
    private EmhRepo emhRepo;

    @Autowired
    private MrRepo mrRepo;

    @Autowired
    private MedicalReportsRepo medicalReportsRepo;

    @Override
    public void addReports(int diseaseId , MultipartFile pdfFile) throws IOException {

        Emh emh = emhRepo.findById(diseaseId)
                .orElseThrow(()->new EntityNotFoundException("Disease Id No found"));

        if(pdfFile != null && !pdfFile.isEmpty()){
            String originalFilename = pdfFile.getOriginalFilename();
            String fileType = pdfFile.getContentType();

            if(fileType != null){
                byte[] pdfData = pdfFile.getBytes();
                byte[] compressedPdfData = ImageUtil.compressImage(pdfData);

                Mr mr = new Mr();
                mr.setName(originalFilename);
                mr.setType(fileType);
                mr.setPdfData(compressedPdfData);
                mr.setRecordid(diseaseId);

                mrRepo.save(mr);
            }else{
                throw new IllegalArgumentException("PDF File IS REQUIRED");
            }
        }
    }

    @Override
    public List<MedicalReportsDTO> getAllReportsForDisease(int diseaseId) {
        // Retrieve all medical reports for the specified disease ID
        List<Mr> reports = mrRepo.findAllitems(diseaseId);

        // Convert MedicalReports entities to DTOs
        List<MedicalReportsDTO> reportDTOs = new ArrayList<>();
        for (Mr report : reports) {
            MedicalReportsDTO reportDTO = new MedicalReportsDTO();
            reportDTO.setId(report.getId());
            reportDTO.setName(report.getName());
            reportDTO.setType(report.getType());
            // You can choose to return compressed or uncompressed PDF data here
            reportDTO.setPdf(report.getPdfData());
            reportDTOs.add(reportDTO);
        }

        return reportDTOs;
    }

    public MedicalReports getReportsById(int reportId){
        return medicalReportsRepo.findById(reportId).orElse(null);
    }
}
