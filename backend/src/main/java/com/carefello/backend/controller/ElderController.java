package com.carefello.backend.controller;

import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.model.Elder;
import com.carefello.backend.model.Elder1;
import com.carefello.backend.model.Elderguar;
import com.carefello.backend.payload.response.ElderInfo;
import com.carefello.backend.payload.response.ElderRequest;
import com.carefello.backend.repo.Elder1Repo;
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
    @Autowired
    private Elder1Repo elder1Repo;
    @PostMapping("/addElder")
    public String addElderToGuardian(
            @PathVariable int guardianId,
            @RequestBody ElderDTO elderDTO // Use @ModelAttribute to handle file upload
    ) {
        elderService.addElderToGuardian(guardianId, elderDTO);
        // return new ResponseEntity<>(elder, HttpStatus.CREATED);
        return "hi";
    }

    @GetMapping("/viewElderByGuardianId")
    public ResponseEntity<List<ElderDTO>> getEldersByGuardianId(@PathVariable int guardianId){
        List<ElderDTO> elders = elderService.getEldersByGuardianId(guardianId);
        return new ResponseEntity<>(elders, HttpStatus.OK);
    }

    @GetMapping("/{elderId}")
    public ResponseEntity<ElderDTO> getElderById(@PathVariable int guardianId, @PathVariable int elderId) {
        ElderDTO elder = elderService.getElderById(guardianId, elderId);

        if (elder != null) {
            return new ResponseEntity<>(elder, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{elderId}/updateImage")
    public ResponseEntity<String> updateElderImage(
            @PathVariable int elderId,
            @RequestParam("imageFile") MultipartFile imageFile
    ){
        elderService.updateElderImage(elderId, imageFile);
        return ResponseEntity.ok("ElderImage updated successfully with" + imageFile);
    }

    @GetMapping("/get/{id}")
    public List<ElderInfo> func(@PathVariable int id){
        List<ElderInfo> str = elderService.getElders(id);
        return str;
    }

    @GetMapping("/get1/{name}")
    public Elder1 func1(@PathVariable String name){
        Elder1 str = elder1Repo.findByName1(name);
        return str;
    }



   
    


}

