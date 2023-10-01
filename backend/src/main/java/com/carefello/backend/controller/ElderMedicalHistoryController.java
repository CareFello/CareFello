package com.carefello.backend.controller;

import com.carefello.backend.DTO.ElderMedicalHistoryDTO;
import com.carefello.backend.model.ElderMedicalHistory;
import com.carefello.backend.service.ElderMedicalHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/guardian/{guardianId}/elders/{elderId}")
public class ElderMedicalHistoryController {

    @Autowired
    private ElderMedicalHistoryService elderMedicalHistoryService;
    @PostMapping("/addHistory")
    public ResponseEntity<ElderMedicalHistory> addHistory(
            @PathVariable int elderId ,
            @RequestBody ElderMedicalHistoryDTO elderMedicalHistoryDTO){

        ElderMedicalHistory elderMedicalHistory = elderMedicalHistoryService.addHistory(elderId, elderMedicalHistoryDTO);
        return new ResponseEntity<>(elderMedicalHistory , HttpStatus.CREATED);
    }

    @GetMapping("/viewHistory")
    public ResponseEntity<List<ElderMedicalHistory>> getAllMedicalHistory(@PathVariable int elderId){
        List<ElderMedicalHistory> medicalHistories = elderMedicalHistoryService.getAllMedicalHistoriesByElderId(elderId);
        return new ResponseEntity<>(medicalHistories, HttpStatus.OK);
    }
}
