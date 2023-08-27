package com.carefello.backend.controller;

import com.carefello.backend.DTO.EmployeeDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.model.Employee;
import com.carefello.backend.service.EmployeeService;
import com.carefello.backend.payload.response.LoginMesage;
import com.carefello.backend.repo.EmployeeRepo;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")

public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private EmployeeRepo employeeRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO)
    {
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginMesage loginResponse = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @PutMapping("/updatepass/{resetemail}")
    public ResponseEntity<?> updatepass1(@PathVariable String resetemail, @RequestBody EmployeeDTO updatpass){
        Employee employee = employeeRepo.findByEmail(resetemail);
        employee.setPassword(this.passwordEncoder.encode(updatpass.getPassword()));
        employee = employeeRepo.save(employee);

        return ResponseEntity.ok(employee);
    }
}
