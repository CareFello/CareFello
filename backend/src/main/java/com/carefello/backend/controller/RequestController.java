package com.carefello.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.carefello.backend.DTO.RequestDTO;
import com.carefello.backend.model.Room;
import com.carefello.backend.payload.response.Response;
import com.carefello.backend.repo.RoomRepo;
import com.carefello.backend.service.RequestService;

@CrossOrigin
@RestController
@RequestMapping("/api/request")

public class RequestController{

    
}
