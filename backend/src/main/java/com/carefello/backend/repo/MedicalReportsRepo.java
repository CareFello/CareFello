package com.carefello.backend.repo;

import com.carefello.backend.model.MedicalReports;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalReportsRepo extends JpaRepository<MedicalReports , Integer> {
}
