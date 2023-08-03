package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.CaregiverDTO;

import com.carefello.backend.model.Caregiver;
import com.carefello.backend.repo.CaregiverRepo;
import com.carefello.backend.service.CaregiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;
import java.util.Optional;
@Service

public class CaregiverImpl implements CaregiverService {
    @Autowired
    private CaregiverRepo caregiverRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addCaregiver(CaregiverDTO caregiverDTO) {
        Caregiver caregiver = new Caregiver(
                
                caregiverDTO.getEmail(),
                this.passwordEncoder.encode(caregiverDTO.getPassword()),
                caregiverDTO.getdob(),
                caregiverDTO.getAddress(),
                caregiverDTO.getNic(),
                caregiverDTO.getGender(),
                caregiverDTO.getAvailability(),
                caregiverDTO.getName1(),
                caregiverDTO.getName2(),
                caregiverDTO.getCont()
                
        );
        caregiverRepo.save(caregiver);
        return caregiver.getCaregiverEmail();
    }
    
}
