package com.carefello.backend.controller;

import com.carefello.backend.DTO.RoomDTO;
import com.carefello.backend.model.Room;
import com.carefello.backend.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/room")
@CrossOrigin
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/addRoom")
    public ResponseEntity<String> addRoom(@RequestBody RoomDTO roomDTO){
        Room room = new Room();
        room.setId(roomDTO.getId());
        room.setType(roomDTO.getType());
        room.setAvailability(roomDTO.getAvailability());

        roomService.addRoom(roomDTO);
        return ResponseEntity.ok("Room added successfully");
    }
}
