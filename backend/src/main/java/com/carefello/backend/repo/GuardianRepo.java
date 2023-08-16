package com.carefello.backend.repo;

import com.carefello.backend.model.Employee;
import com.carefello.backend.model.Guardian;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@Repository

public interface GuardianRepo extends JpaRepository<Guardian , Integer> {
    Guardian findByEmail(String email);
    Optional<Guardian> findOneByEmailAndPassword(String email, String password);
}
