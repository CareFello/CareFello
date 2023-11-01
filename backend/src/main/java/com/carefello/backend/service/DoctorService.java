package com.carefello.backend.service;

import com.carefello.backend.DTO.DoctorDTO;
import com.carefello.backend.DTO.DoctortimeDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.payload.response.LoginMesage;


public interface DoctorService {
    String addDoctor(DoctorDTO doctorDTO);
    LoginMesage loginDoctor(LoginDTO loginDTO);
}
