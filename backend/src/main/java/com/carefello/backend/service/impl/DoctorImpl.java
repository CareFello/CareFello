package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.DoctorDTO;
import com.carefello.backend.DTO.DoctortimeDTO;
import com.carefello.backend.model.Doctor;
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
    
}
