package com.carefello.backend.controller;

import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.DTO.GuardianDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.payload.response.LoginMesage;
import com.carefello.backend.repo.GuardianRepo;
import com.carefello.backend.service.GuardianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/viewGuardianList")
    public ResponseEntity<List<GuardianDTO.GuardianElderCountDTO>> getGuardiansWithElderCount(){
        List<GuardianDTO.GuardianElderCountDTO> guardiansWithElderCount = guardianService.getGuardiansWithElderCount();
        return ResponseEntity.ok(guardiansWithElderCount);
    }

    @GetMapping("/{id}/details")
    public ResponseEntity<?> getGuardianDetails(@PathVariable int id) {
        Optional<Guardian> guardian = guardianService.getGuardianWithElders(id);
        if (guardian.isPresent()) {
            return ResponseEntity.ok(guardian.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }



}
