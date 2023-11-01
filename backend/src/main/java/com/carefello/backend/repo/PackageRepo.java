package com.carefello.backend.repo;

import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Package;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@Repository

public interface PackageRepo extends JpaRepository<Package,Integer>{
    @Query("select b from Package b where b.name = :name")
    Package findPrice(@Param("name") String name);
}
