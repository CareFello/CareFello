package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.ElderMedicalHistoryDTO;
import com.carefello.backend.model.Elder;
import com.carefello.backend.model.ElderMedicalHistory;
import com.carefello.backend.repo.ElderMedicalHistoryRepo;
import com.carefello.backend.repo.ElderRepo;
import com.carefello.backend.service.ElderMedicalHistoryService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ElderMedicalHistoryImpl implements ElderMedicalHistoryService {

    @Autowired
    private ElderRepo elderRepo;

    @Autowired
    private ElderMedicalHistoryRepo elderMedicalHistoryRepo;

    @Override
    public ElderMedicalHistory addHistory(int elderId, ElderMedicalHistoryDTO elderMedicalHistoryDTO){
        Elder elder = elderRepo.findById(elderId)
                .orElseThrow(()-> new EntityNotFoundException("Elder Not Found"));

        ElderMedicalHistory elderMedicalHistory = new  ElderMedicalHistory();
        elderMedicalHistory.setDisease(elderMedicalHistoryDTO.getDisease());
        elderMedicalHistory.setDescription(elderMedicalHistoryDTO.getDescription());
        elderMedicalHistory.setElder(elder);
        elder.getElderMedicalHistories().add(elderMedicalHistory);
        elderRepo.save(elder);

        return elderMedicalHistory;
    }
}
