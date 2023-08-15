package com.carefello.backend.service;



import com.carefello.backend.DTO.GuardianDTO;
import org.springframework.context.annotation.Bean;

public interface GuardianService {

    String addGuardian(GuardianDTO guardianDTO);
}
