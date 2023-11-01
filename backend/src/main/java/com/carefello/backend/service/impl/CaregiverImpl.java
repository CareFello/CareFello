package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.CaregiverDTO;
import com.carefello.backend.DTO.GuardianDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.model.Caregiver;
import com.carefello.backend.model.Caregiver1;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.payload.response.LoginMesage;
import com.carefello.backend.repo.Caregiver1Repo;
import com.carefello.backend.repo.CaregiverRepo;
import com.carefello.backend.service.CaregiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.util.Optional;
@Service

public class CaregiverImpl implements CaregiverService {
    @Autowired
    private CaregiverRepo caregiverRepo;
    @Autowired
    private Caregiver1Repo caregiver1Repo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addCaregiver(CaregiverDTO caregiverDTO) {

        // LocalDate currentDate = LocalDate.now();
        // LocalDate dob = caregiverDTO.getdob().toInstant()
        //     .atZone(ZoneId.systemDefault())
        //     .toLocalDate();

        // Period period = Period.between(dob, currentDate);

        Caregiver caregiver = new Caregiver(
                
                caregiverDTO.getEmail(),
                this.passwordEncoder.encode(caregiverDTO.getPassword()),
                caregiverDTO.getdob(),
                caregiverDTO.getAddress(),
                caregiverDTO.getNic(),
                caregiverDTO.getGender(),
                caregiverDTO.getName1(),
                caregiverDTO.getName2(),
                caregiverDTO.getCont(),
                40
                
        );
        caregiverRepo.save(caregiver);
        
        //newly added
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

try {
    // Parse the date string and convert it to java.sql.Date
    java.util.Date utilDate = dateFormat.parse("2000-01-01");
    java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());

    // Use sqlDate in your code
    Caregiver1 caregiver1 = new Caregiver1(caregiverDTO.getGender(), 1, 40, 0, 0, sqlDate, sqlDate, sqlDate, sqlDate, caregiver.getUser_id());
    caregiver1Repo.save(caregiver1);
} catch (Exception e) {
    // Handle any parsing or conversion errors here
}
        

        // Caregiver1 caregiver1 = new Caregiver1(caregiverDTO.getGender(), 1, 40, 0, 0, null, null, null, null, caregiver.getUser_id());
        // caregiver1Repo.save(caregiver1);
        
        return caregiver.getCaregiverEmail();
    }



    @Override
    public LoginMesage loginCaregiver(LoginDTO loginDTO) {
        String msg = "";
        Caregiver guardian1 = caregiverRepo.findByEmail(loginDTO.getEmail());
        if (guardian1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = guardian1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Caregiver> guardian = caregiverRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
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
