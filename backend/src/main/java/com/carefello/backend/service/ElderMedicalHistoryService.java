package com.carefello.backend.service;

import com.carefello.backend.DTO.ElderMedicalHistoryDTO;
import com.carefello.backend.model.ElderMedicalHistory;

import java.util.List;

public interface ElderMedicalHistoryService {
    ElderMedicalHistory addHistory(int elderId , ElderMedicalHistoryDTO elderMedicalHistoryDTO);
    List<ElderMedicalHistory> getAllMedicalHistoriesByElderId(int elderId);
}
