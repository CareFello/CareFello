package com.carefello.backend.controller;

import com.carefello.backend.service.EmailService;
import com.carefello.backend.DTO.EmailDTO;
import com.carefello.backend.DTO.EmployeeDTO;
import com.carefello.backend.payload.response.Forgotemail;

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

    @PostMapping(path = "/resetemail")
    public ResponseEntity<?> save1Email(@RequestBody EmailDTO emailDTO)
    {
        Forgotemail id = emailService.checkEmail(emailDTO.getRecipient());
        return ResponseEntity.ok(id);
    }

    @PostMapping(path = "/checkcode")
    public ResponseEntity<?> checkCode1(@RequestBody EmployeeDTO employeeDTO)
    {
        Forgotemail id = emailService.checkCode(employeeDTO.getCode());
        return ResponseEntity.ok(id);
    }

    
}
