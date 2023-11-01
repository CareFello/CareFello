package com.carefello.backend.controller;

import com.carefello.backend.DTO.TimeSlotDTO;
import com.carefello.backend.model.TimeSlot;
import com.carefello.backend.service.TimeSlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@CrossOrigin
@RequestMapping("api/v1/doctor/{doctorId}/timeSlot")

public class TimeSlotController {

    @Autowired
    private TimeSlotService timeSlotService;

    @PostMapping("/addTimeSlot")
    public String addTimeSlot(@PathVariable int doctorId,@RequestBody TimeSlotDTO timeSlotDTO){
        timeSlotService.addTimeSlot(doctorId, timeSlotDTO);
        // return ResponseEntity.created(URI.create("api/v1/guardian/" + doctorId + "/timeSlot/" + timeSlot.getId()))
        //         .body(timeSlot);

        return "hi";
    }
}
