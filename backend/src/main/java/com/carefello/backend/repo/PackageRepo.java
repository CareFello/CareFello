package com.carefello.backend.repo;

import com.carefello.backend.model.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@Repository

public interface PackageRepo extends JpaRepository<Package,Integer>{
      
}
