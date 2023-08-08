package com.carefello.backend.repo;

import com.carefello.backend.model.Caregiver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@Repository

public interface CaregiverRepo extends JpaRepository<Caregiver,Integer>{
      
}
