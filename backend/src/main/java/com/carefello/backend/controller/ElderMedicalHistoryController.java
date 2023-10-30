package com.carefello.backend.controller;

import com.carefello.backend.DTO.ElderMedicalHistoryDTO;
import com.carefello.backend.model.ElderMedicalHistory;
import com.carefello.backend.model.Emh;
import com.carefello.backend.repo.EmhRepo;
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

    @Autowired
    private EmhRepo emhRepo;

    @PostMapping("/addHistory")
    public String addHistory(
            @PathVariable int elderId ,
            @RequestBody ElderMedicalHistoryDTO elderMedicalHistoryDTO){

        Emh emh = new Emh(elderMedicalHistoryDTO.getDisease(), elderMedicalHistoryDTO.getDescription(), elderId);
        emhRepo.save(emh);
        return "hi";
    }

    @GetMapping("/viewHistory")
    public List<Emh> getAllMedicalHistory(@PathVariable int elderId){
        List<Emh> emhs = emhRepo.findAllitems(elderId);
        return emhs;
    }
}
