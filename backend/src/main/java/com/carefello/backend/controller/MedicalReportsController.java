package com.carefello.backend.controller;


import com.carefello.backend.DTO.MedicalReportsDTO;
import com.carefello.backend.Util.ImageUtil;
import com.carefello.backend.model.Emh;
import com.carefello.backend.model.MedicalReports;
import com.carefello.backend.repo.EmhRepo;
import com.carefello.backend.service.MedicalReportsService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/elderMedical/{diseaseId}/medicalReports")
public class MedicalReportsController {

    @Autowired
    private MedicalReportsService medicalReportsService;

    @Autowired
    private EmhRepo emhRepo;

    @PostMapping("/addReports")
    public ResponseEntity<String> addReports(@PathVariable int diseaseId, @RequestParam("pdfFile")MultipartFile pdfFile) throws IOException{
        medicalReportsService.addReports(diseaseId, pdfFile);
        return ResponseEntity.ok("PDF file uploaded successfully with Oriiginal File Name :" + pdfFile.getOriginalFilename());
    }

    @GetMapping("/getAllReports")
    public ResponseEntity<List<MedicalReportsDTO>> getAllReports(@PathVariable int diseaseId){
        try {
            List<MedicalReportsDTO> reports = medicalReportsService.getAllReportsForDisease(diseaseId);
            return ResponseEntity.ok(reports);
        } catch (EntityNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/downloadReport/{reportId}")
    public ResponseEntity<byte[]> downloadReport(@PathVariable int reportId){
        try{
            Emh emh = emhRepo.findReport(reportId);

            if(emh != null){
                byte[] decompressedPdfData = ImageUtil.decompressImage(emh.getPdfData());

                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_PDF);
                headers.setContentDisposition(ContentDisposition.builder("inline").filename(emh.getName()).build());
                return ResponseEntity.ok().headers(headers).body(decompressedPdfData);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
