package com.carefello.backend.repo;

import com.carefello.backend.model.Tempreq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource

public interface TempreqRepo extends JpaRepository<Tempreq, Integer> {

}
