package com.carefello.backend.controller;

import com.carefello.backend.DTO.DoctorDTO;
import com.carefello.backend.DTO.DoctortimeDTO;
import com.carefello.backend.service.DoctorService;
import com.carefello.backend.service.EmailService;
import com.carefello.backend.model.Doctor1;
import com.carefello.backend.repo.Doctor1Repo;
import com.carefello.backend.repo.PackageRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin
@RequestMapping("api/v1/doctor")

public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    @Autowired
    private Doctor1Repo doctor1Repo;
    // @Autowired
    // private EmailService emailService;
    @PostMapping(path = "/save")
    public String saveDoctor(@RequestBody DoctorDTO doctorDTO)
    {
        String id = doctorService.addDoctor(doctorDTO);

        /*try {
            emailService.sendSimpleEmail(DoctorDTO.getEmail(), DoctorDTO.getName1(), DoctorDTO.getName2());
            return "Email sent successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error sending email";
        }*/

        return id;
    }

    @PutMapping("/updat/{id}")
    public ResponseEntity<Doctor1> updatetime(@PathVariable int id, @RequestBody DoctortimeDTO doctortimeDTO){
        Doctor1 doctor1 = doctor1Repo.findById(id).orElseThrow(RuntimeException::new);

        if (doctortimeDTO.getSunday() != null){
            doctor1.setSunday(doctortimeDTO.getSunday());
        }
        if (doctortimeDTO.getSunday1() != null){
            doctor1.setSunday1(doctortimeDTO.getSunday1());
        }
        if (doctortimeDTO.getSaturday() !=null){
            doctor1.setSaturday(doctortimeDTO.getSaturday());
        }
        if (doctortimeDTO.getSaturday1() !=null){
            doctor1.setSaturday1(doctortimeDTO.getSaturday1());
        }
        if (doctortimeDTO.getMonday() != null){
            doctor1.setMonday(doctortimeDTO.getMonday());
        }
        if (doctortimeDTO.getMonday1() != null){
            doctor1.setMonday1(doctortimeDTO.getMonday1());
        }
        if (doctortimeDTO.getTuesday() != null){
            doctor1.setTuesday(doctortimeDTO.getTuesday());
        }
        if (doctortimeDTO.getTuesday1() != null){
            doctor1.setTuesday1(doctortimeDTO.getTuesday1());
        }
        if (doctortimeDTO.getWednesday() != null){
            doctor1.setWednesday(doctortimeDTO.getWednesday());
        }
        if (doctortimeDTO.getWednesday1() != null){
            doctor1.setWednesday1(doctortimeDTO.getWednesday1());
        }
        if (doctortimeDTO.getThusrday() != null){
            doctor1.setThusrday(doctortimeDTO.getThusrday());
        }
        if (doctortimeDTO.getThusrday1() != null){
            doctor1.setThusrday1(doctortimeDTO.getThusrday1());
        }
        if (doctortimeDTO.getFriday() != null){
            doctor1.setFriday(doctortimeDTO.getFriday());
        }
        if (doctortimeDTO.getFriday1() != null){
            doctor1.setFriday1(doctortimeDTO.getFriday1());
        }

        doctor1 = doctor1Repo.save(doctor1);

        return ResponseEntity.ok(doctor1);
    }


    
}
