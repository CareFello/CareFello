package com.carefello.backend.repo;

import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.model.Elder;
import com.carefello.backend.model.Guardian;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ElderRepo extends JpaRepository<Elder , Integer> {

    List<Elder> findByGuardianId(int guardianId);
    Optional<Elder> findByIdAndGuardianId(int elderId, int guardianId);

}
