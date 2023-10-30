package com.carefello.backend.service;


import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.model.Elder;
import com.carefello.backend.model.Elder1;
import com.carefello.backend.payload.response.ElderInfo;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ElderService {
    String addElderToGuardian(int guardianId, ElderDTO elderDTO);
    List<ElderDTO> getEldersByGuardianId(int guardianId);
    ElderDTO getElderById(int guardianId, int elderId);
    void updateElderImage(int elderId , MultipartFile imageFile);
    List<ElderInfo> getElders(int id);
    // List<Elder1> getElder2(int guardianId);
}
