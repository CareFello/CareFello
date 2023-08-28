package com.carefello.backend.service;


import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.model.Elder;

public interface ElderService {
    Elder addElderToGuardian(int guardianId, ElderDTO elderDTO);
}
