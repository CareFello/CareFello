package com.carefello.backend.repo;

import com.carefello.backend.model.Emh;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmhRepo extends JpaRepository<Emh , Integer> {
    @Query("select e from Emh e where e.elderid = :elderid")
    List<Emh> findAllitems(@Param("elderid") int elderid);

    @Query("select e from Emh e where e.id = :id")
    Emh findReport(@Param("id") int id);

}
