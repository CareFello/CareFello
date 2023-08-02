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
                caregiverDTO.getUserId(),
                caregiverDTO.getFirstName(),
                caregiverDTO.getEmail(),
                this.passwordEncoder.encode(caregiverDTO.getPassword()),
                caregiverDTO.getlastName(),
                caregiverDTO.getContactNo(),
                caregiverDTO.getDob(),
                caregiverDTO.getAddress(),
                caregiverDTO.getNic(),
                caregiverDTO.getRating(),
                caregiverDTO.getGender(),
                caregiverDTO.getAvailability()
        );
        caregiverRepo.save(caregiver);
        return caregiver.getFirstName();
    }
    
}
