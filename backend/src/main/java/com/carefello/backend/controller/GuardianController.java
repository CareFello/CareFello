package com.carefello.backend.controller;

import com.carefello.backend.DTO.GuardianDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.payload.response.LoginMesage;
import com.carefello.backend.repo.GuardianRepo;
import com.carefello.backend.service.GuardianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/guardian")
public class GuardianController {
    @Autowired
    private GuardianService guardianService;

    @PostMapping("/addGuardian")
    public void addGuardian(@RequestBody GuardianDTO guardianDTO){
        guardianService.addGuardian(guardianDTO);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginMesage loginResponse = guardianService.loginGuardian(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
