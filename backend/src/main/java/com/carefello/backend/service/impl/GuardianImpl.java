package com.carefello.backend.service.impl;


import com.carefello.backend.DTO.GuardianDTO;

import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.model.Guardian;

import com.carefello.backend.payload.response.LoginMesage;
import com.carefello.backend.service.GuardianService;
import com.carefello.backend.repo.GuardianRepo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class GuardianImpl implements GuardianService {
    @Autowired
    private GuardianRepo guardianRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public String addGuardian(GuardianDTO guardianDTO){
        Guardian Guardian = new Guardian(
                guardianDTO.getEmail(),
                this.passwordEncoder.encode(guardianDTO.getPassword()),
                guardianDTO.getFname(),
                guardianDTO.getLname(),
                guardianDTO.getCont(),
                guardianDTO.getNic(),
                guardianDTO.getHaddress(),
                guardianDTO.getWaddress(),
                guardianDTO.getProfession()

        );

        guardianRepo.save(Guardian);
        return Guardian.getGuardianEmail();
    }

    GuardianDTO GuardianDTO;
    @Override
    public LoginMesage  loginGuardian(LoginDTO loginDTO) {
        String msg = "";
        Guardian guardian1 = guardianRepo.findByEmail(loginDTO.getEmail());
        if (guardian1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = guardian1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Guardian> guardian = guardianRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (guardian.isPresent()) {
                    return new LoginMesage("Login Success", true);
                } else {
                    return new LoginMesage("Login Failed", false);
                }
            } else {
                return new LoginMesage(encodedPassword, false);
                
            }
        }else {
            return new LoginMesage("Email not exits", false);
        }
    }
   
}
