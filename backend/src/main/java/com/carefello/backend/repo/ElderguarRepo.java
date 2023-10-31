package com.carefello.backend.repo;


import com.carefello.backend.model.Elderguar;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource

public interface ElderguarRepo extends JpaRepository<Elderguar, Integer> {
    @Query("select e from Elderguar e where e.elderid = :elderid")
    Elderguar findByElderid(@Param("elderid") int elderid);

    @Query("select e from Elderguar e where e.guardianid = :guardianid")
    List<Elderguar> findByguardianid(@Param("guardianid") int guardianid);

}
