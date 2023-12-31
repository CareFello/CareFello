package com.carefello.backend.service;



import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.DTO.GuardianDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.payload.response.LoginMesage;

import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Optional;

public interface GuardianService {

    Guardian addGuardian(GuardianDTO guardianDTO);
    LoginMesage loginGuardian(LoginDTO loginDTO);
    List<GuardianDTO.GuardianElderCountDTO> getGuardiansWithElderCount();

    Optional<Guardian> getGuardianWithElders(int id);
}
