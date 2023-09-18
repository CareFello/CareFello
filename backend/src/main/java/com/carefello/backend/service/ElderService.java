package com.carefello.backend.service;


import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.model.Elder;

import java.util.List;

public interface ElderService {
    Elder addElderToGuardian(int guardianId, ElderDTO elderDTO);
    List<ElderDTO> getEldersByGuardianId(int guardianId);
    ElderDTO getElderById(int guardianId, int elderId);
}
