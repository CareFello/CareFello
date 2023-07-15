package com.carefello.backend.repo;

import com.carefello.backend.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource

public interface PersonRepo extends JpaRepository<Person, Long> {

}
