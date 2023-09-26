package com.carefello.backend.controller;


import com.carefello.backend.model.MedicalReports;
import com.carefello.backend.service.MedicalReportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("api/v1/elderMedical/{diseaseId}/medicalReports")
public class MedicalReportsController {

    @Autowired
    private MedicalReportsService medicalReportsService;

    @PostMapping("/addReports")
    public ResponseEntity<String> addReports(@PathVariable int diseaseId, @RequestParam("pdfFile")MultipartFile pdfFile) throws IOException{
        medicalReportsService.addReports(diseaseId, pdfFile);
        return ResponseEntity.ok("PDF file uploaded successfully with Oriiginal File Name :" + pdfFile.getOriginalFilename());
    }
}
