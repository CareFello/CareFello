package com.carefello.backend.controller;



import com.carefello.backend.service.EmailService;
import com.carefello.backend.DTO.EmailDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin
@RequestMapping("api")

public class EmailController {
    @Autowired
    private EmailService emailService;
    // @Autowired
    // private EmailService emailService;
    @PostMapping(path = "/email")
    public void saveEmail(@RequestBody EmailDTO emailDTO)
    {
        emailService.sendEmail(emailDTO.getRecipient(),
        emailDTO.getSubject(), emailDTO.getContent());
        
    }

    
}
