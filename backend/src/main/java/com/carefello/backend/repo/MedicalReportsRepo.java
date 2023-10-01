package com.carefello.backend.repo;

import com.carefello.backend.model.MedicalReports;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicalReportsRepo extends JpaRepository<MedicalReports , Integer> {
    List<MedicalReports> findByElderMedicalHistory_Id(int diseaseId);
}
