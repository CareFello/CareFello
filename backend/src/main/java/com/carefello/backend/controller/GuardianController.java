package com.carefello.backend.controller;

import com.carefello.backend.DTO.GuardianDTO;
import com.carefello.backend.service.GuardianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("api/v1/guardian")

public class GuardianController {
    @Autowired
    private GuardianService guardianService;

    @PostMapping(path = "/save")
    public String saveGuardian(@RequestBody GuardianDTO guardianDTO){
        String id = guardianService.addGuardian(guardianDTO);
        return id;
    }

}
