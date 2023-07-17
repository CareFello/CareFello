package com.carefello.backend.service;

import com.carefello.backend.DTO.EmployeeDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.payload.response.LoginMesage;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);
    LoginMesage loginEmployee(LoginDTO loginDTO);
}
