package com.carefello.backend.repo;

import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Caregiver;
import com.carefello.backend.model.Guardian;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@Repository

public interface CaregiverRepo extends JpaRepository<Caregiver,Integer>{
    Caregiver findByEmail(String email);
   Optional<Caregiver> findOneByEmailAndPassword(String email, String password);
}
