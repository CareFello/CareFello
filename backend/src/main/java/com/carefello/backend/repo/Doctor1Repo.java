package com.carefello.backend.repo;

import com.carefello.backend.model.Doctor1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@Repository

public interface Doctor1Repo extends JpaRepository<Doctor1,Integer>{
      
}
