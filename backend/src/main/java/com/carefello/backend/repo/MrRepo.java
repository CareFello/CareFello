package com.carefello.backend.repo;

import com.carefello.backend.model.Mr;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MrRepo extends JpaRepository<Mr , Integer> {
    @Query("select m from Mr m where m.recordid = :recordid")
    List<Mr> findAllitems(@Param("recordid") int recordid);

}
