package com.carefello.backend.repo;
import com.carefello.backend.model.Doctorelder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories

public interface DoctorelderRepo extends JpaRepository<Doctorelder,Integer>{
      
}
