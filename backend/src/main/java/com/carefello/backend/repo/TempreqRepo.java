package com.carefello.backend.repo;

import com.carefello.backend.model.Guardian;
import com.carefello.backend.model.Tempreq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;
import java.util.Optional;


@RepositoryRestResource

public interface TempreqRepo extends JpaRepository<Tempreq, Integer> {

    @Query("select t from Tempreq t where t.elderid = :elderid")
    Tempreq getTempreq(@Param("elderid") int elderid);
}
