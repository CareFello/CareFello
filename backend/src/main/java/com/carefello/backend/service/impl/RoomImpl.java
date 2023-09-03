package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.RoomDTO;
import com.carefello.backend.model.Room;
import com.carefello.backend.repo.RoomRepo;
import com.carefello.backend.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomImpl implements RoomService {

    @Autowired
    private RoomRepo roomRepo;

    @Override
    public void addRoom(RoomDTO roomDTO){
        Room room = new Room();
        room.setId(roomDTO.getId());
        room.setType(roomDTO.getType());
        room.setAvailability(roomDTO.getAvailability());

        roomRepo.save(room);
    }
}
