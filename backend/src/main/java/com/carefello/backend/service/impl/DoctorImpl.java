package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.DoctorDTO;
import com.carefello.backend.DTO.DoctortimeDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.model.Doctor;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.payload.response.LoginMesage;
import com.carefello.backend.repo.DoctorRepo;
import com.carefello.backend.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;
import java.util.Optional;
@Service

public class DoctorImpl implements DoctorService {
    @Autowired
    private DoctorRepo DoctorRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addDoctor(DoctorDTO DoctorDTO) {
        Doctor Doctor = new Doctor(
                
                DoctorDTO.getEmail(),
                this.passwordEncoder.encode(DoctorDTO.getPassword()),
                DoctorDTO.getNic(),
                DoctorDTO.getName1(),
                DoctorDTO.getName2(),
                DoctorDTO.getCont(),
                DoctorDTO.getreg()
                
        );
        DoctorRepo.save(Doctor);
        return Doctor.getDoctorEmail();
    }

    @Override
    public LoginMesage loginDoctor(LoginDTO loginDTO) {
        String msg = "";
        Doctor guardian1 = DoctorRepo.findByEmail(loginDTO.getEmail());
        if (guardian1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = guardian1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Doctor> guardian = DoctorRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (guardian.isPresent()) {
                    return new LoginMesage("Login Success", true,guardian.get().getUser_id());
                } else {
                    return new LoginMesage("Login Failed", false,0);
                }
            } else {
                return new LoginMesage(encodedPassword, false,0);

            }
        }else {
            return new LoginMesage("Email not exits", false,0);
        }
    }
    
}
