package com.carefello.backend.repo;

import com.carefello.backend.model.Guardian;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@Repository

public interface GuardianRepo extends JpaRepository<Guardian , Integer> {
}
