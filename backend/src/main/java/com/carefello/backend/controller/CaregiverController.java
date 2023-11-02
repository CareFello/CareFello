package com.carefello.backend.controller;

import com.carefello.backend.DTO.CaregiverDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.model.Bed;
import com.carefello.backend.model.DailyTask;
import com.carefello.backend.model.Elder;
import com.carefello.backend.payload.response.LoginMesage;
import com.carefello.backend.repo.BedRepo;
import com.carefello.backend.repo.DailyTaskRepo;
import com.carefello.backend.repo.Elder1Repo;
import com.carefello.backend.repo.ElderRepo;
import com.carefello.backend.service.CaregiverService;
import com.carefello.backend.service.EmailService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin
@RequestMapping("api/v1/caregiver")

public class CaregiverController {
    @Autowired
    private CaregiverService caregiverService;

    @Autowired
    private BedRepo bedRepo;

    @Autowired
    private ElderRepo elderRepo;

    @Autowired
    private DailyTaskRepo dailyTaskRepo;
    // @Autowired
    // private EmailService emailService;
    @PostMapping(path = "/save")
    public String saveCaregiver(@RequestBody CaregiverDTO caregiverDTO)
    {
        String id = caregiverService.addCaregiver(caregiverDTO);

        /*try {
            emailService.sendSimpleEmail(caregiverDTO.getEmail(), caregiverDTO.getName1(), caregiverDTO.getName2());
            return "Email sent successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error sending email";
        }*/

        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginMesage loginResponse = caregiverService.loginCaregiver(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/getEldertasks/{id}")
    public List<DailyTask> gettasks(@PathVariable int id){
        Bed bed = bedRepo.findByCaregiveridoccu(id);
        return dailyTaskRepo.findByElderId(bed.getOccuElderId());
    }

    @GetMapping("/getElder/{id}")
    public Optional<Elder> getelder(@PathVariable int id){
        Bed bed = bedRepo.findByCaregiveridoccu(id);
        return elderRepo.findById(bed.getOccuElderId());
    }


    
}
