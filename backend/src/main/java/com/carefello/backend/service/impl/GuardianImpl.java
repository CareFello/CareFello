package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.DTO.GuardianDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.payload.response.LoginMesage;
import com.carefello.backend.repo.ElderRepo;
import com.carefello.backend.repo.GuardianRepo;
import com.carefello.backend.service.GuardianService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GuardianImpl implements GuardianService {

    @Autowired
    private GuardianRepo guardianRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public GuardianImpl(GuardianRepo guardianRepo, PasswordEncoder passwordEncoder){
        this.guardianRepo = guardianRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Guardian addGuardian(GuardianDTO guardianDTO){
        if(guardianRepo.findByEmail(guardianDTO.getEmail()) != null){
            throw new RuntimeException("Email already registered");
        }

        Guardian guardian = new Guardian();
        guardian.setId(guardianDTO.getId());
        guardian.setFname(guardianDTO.getFname());
        guardian.setLname(guardianDTO.getLname());
        guardian.setEmail(guardianDTO.getEmail());
        guardian.sethAddress(guardianDTO.gethAddress());
        guardian.setwAddress(guardianDTO.getwAddress());
        guardian.setNic(guardianDTO.getNic());
        guardian.setProfession(guardianDTO.getProfession());
        guardian.setCont(guardianDTO.getCont());
        guardian.setPassword(passwordEncoder.encode(guardianDTO.getPassword()));

        guardianRepo.save(guardian);
        return guardian;
    }

    GuardianDTO GuardianDTO;
    @Override
    public LoginMesage loginGuardian(LoginDTO loginDTO) {
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
