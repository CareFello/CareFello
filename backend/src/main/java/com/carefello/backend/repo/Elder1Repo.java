package com.carefello.backend.repo;
import com.carefello.backend.model.Elder1;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource

public interface Elder1Repo extends JpaRepository<Elder1, Integer> {
    @Query("select e from Elder1 e where e.elderid = :elderid")
    Elder1 findByElderid(@Param("elderid") int elderid);

    @Query("select e from Elder1 e where e.firstname = :firstname")
    Elder1 findByName1(@Param("firstname") String firstname);
}
