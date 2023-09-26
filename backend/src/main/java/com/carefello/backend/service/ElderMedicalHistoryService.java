package com.carefello.backend.service;

import com.carefello.backend.DTO.ElderMedicalHistoryDTO;
import com.carefello.backend.model.ElderMedicalHistory;

public interface ElderMedicalHistoryService {
    ElderMedicalHistory addHistory(int elderId , ElderMedicalHistoryDTO elderMedicalHistoryDTO);
}
