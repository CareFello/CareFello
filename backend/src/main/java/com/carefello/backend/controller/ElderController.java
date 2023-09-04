package com.carefello.backend.controller;

import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.model.Elder;
import com.carefello.backend.service.ElderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/v1/guardian/{guardianId}/elders")
@CrossOrigin
public class ElderController {

    @Autowired
    private ElderService elderService;
    @PostMapping("/addElder")
    public ResponseEntity<Elder> addElderToGuardian(
            @PathVariable int guardianId,
            @ModelAttribute ElderDTO elderDTO // Use @ModelAttribute to handle file upload
    ) {
        Elder elder = elderService.addElderToGuardian(guardianId, elderDTO);
        return ResponseEntity.created(URI.create("api/v1/guardian/" + guardianId + "/elders/" + elder.getId()))
                .body(elder);
    }

    @GetMapping("/viewElderByGuardianId")
    public ResponseEntity<List<ElderDTO>> getEldersByGuardianId(@PathVariable int guardianId){
        List<ElderDTO> elders = elderService.getEldersByGuardianId(guardianId);
        return new ResponseEntity<>(elders, HttpStatus.OK);
    }

    @GetMapping("/viewElderImagesByGuardianId")
    public ResponseEntity<List<byte[]>> getElderImagesByGuardianId(@PathVariable int guardianId) {
        List<byte[]> elderImages = elderService.getElderImagesByGuardianId(guardianId);
        if (elderImages.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(elderImages);
    }
}

