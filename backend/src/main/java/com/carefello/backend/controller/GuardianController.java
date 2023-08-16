package com.carefello.backend.controller;

import com.carefello.backend.DTO.GuardianDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.payload.response.LoginMesage;
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

    @PostMapping(path = "/save")
    public String saveGuardian(@RequestBody GuardianDTO guardianDTO){
        String id = guardianService.addGuardian(guardianDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginMesage loginResponse = guardianService.loginGuardian(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

}
