package com.carefello.backend.repo;

import com.carefello.backend.model.ElderMedicalHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ElderMedicalHistoryRepo extends JpaRepository<ElderMedicalHistory , Integer> {
}
