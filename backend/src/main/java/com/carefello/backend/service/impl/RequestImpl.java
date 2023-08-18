package com.carefello.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carefello.backend.DTO.RequestDTO;
import com.carefello.backend.model.Room;
import com.carefello.backend.service.RequestService;
import com.carefello.backend.repo.RoomRepo;
import com.carefello.backend.payload.response.Response;
import org.springframework.stereotype.Service;
@Service

public class RequestImpl implements RequestService {
    
    @Autowired
    private RoomRepo roomRepo;
    @Override
    public Response validateRequest(RequestDTO requestDTO) {
        Room room = roomRepo.findBytype(requestDTO.getRoomType());
        if (room != null){
            return new Response("true");
        }else{
            return new Response("false");
        }
    }
    
}
