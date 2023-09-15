package com.carefello.backend.repo;

import com.carefello.backend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource

public interface ImageRepo extends JpaRepository<Image, Integer> {

}
