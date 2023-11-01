package com.carefello.backend.repo;

import com.carefello.backend.model.Doctor;
import com.carefello.backend.model.Guardian;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@Repository

public interface DoctorRepo extends JpaRepository<Doctor,Integer>{
      Doctor findByEmail(String email);
   Optional<Doctor> findOneByEmailAndPassword(String email, String password);
}
