package com.carefello.backend.service.impl;


import com.carefello.backend.DTO.GuardianDTO;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.repo.GuardianRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class GuardianImpl {
    @Autowired
    private GuardianRepo guardianRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public String addGuardian(GuardianDTO guardianDTO){
        Guardian Guardian = new Guardian(
                guardianDTO.getEmail(),
                this.passwordEncoder.encode(guardianDTO.getPassword()),
                guardianDTO.getCont(),
                guardianDTO.getFname(),
                guardianDTO.getLname(),
                guardianDTO.getNic(),
                guardianDTO.getHaddress(),
                guardianDTO.getProfession(),
                guardianDTO.getWaddress()

        );

        guardianRepo.save(Guardian);
        return Guardian.getGuardianEmail();
    }
}
