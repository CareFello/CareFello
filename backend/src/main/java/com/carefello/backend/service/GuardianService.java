package com.carefello.backend.service;



import com.carefello.backend.DTO.GuardianDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.payload.response.LoginMesage;

import org.springframework.context.annotation.Bean;

public interface GuardianService {

    String addGuardian(GuardianDTO guardianDTO);
    LoginMesage loginGuardian(LoginDTO loginDTO);
}
