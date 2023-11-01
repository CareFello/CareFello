package com.carefello.backend.controller;


import com.carefello.backend.DTO.ElderWithGuardianDTO;
import com.carefello.backend.service.ElderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/elders")
@CrossOrigin
public class AllElderController {

    @Autowired
    private ElderService elderService;

    @GetMapping("/getAllElders")
    public ResponseEntity<List<ElderWithGuardianDTO>> getAllElders() {
        List<ElderWithGuardianDTO> allElders = elderService.getAllElders();
        return new ResponseEntity<>(allElders, HttpStatus.OK);
    }
}
