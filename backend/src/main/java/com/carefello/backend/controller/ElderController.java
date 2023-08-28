package com.carefello.backend.controller;

import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.model.Elder;
import com.carefello.backend.service.ElderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("api/v1/guardian/{guardianId}/elders")

public class ElderController {

    @Autowired
    private ElderService elderService;

    @PostMapping ("/addElder")
    public ResponseEntity<Elder> addElderToGuardian(
            @PathVariable int guardianId,
            @RequestBody ElderDTO elderDTO
            ){
        Elder elder = elderService.addElderToGuardian(guardianId,elderDTO);
        return ResponseEntity.created(URI.create("api/v1/guardian" + guardianId + "/elders/" +elder.getId()))
                .body(elder);
    }
}
