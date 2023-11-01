package com.carefello.backend.service;

import com.carefello.backend.DTO.CaregiverDTO;
import com.carefello.backend.DTO.LoginDTO;
import com.carefello.backend.payload.response.LoginMesage;


public interface CaregiverService {
    String addCaregiver(CaregiverDTO CaregiverDTO);
    LoginMesage loginCaregiver(LoginDTO loginDTO);

}
