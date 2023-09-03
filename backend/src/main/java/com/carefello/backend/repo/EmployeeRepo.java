package com.carefello.backend.repo;

import com.carefello.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@EnableJpaRepositories
@Repository

public interface EmployeeRepo extends JpaRepository<Employee,Integer>
{
      Optional<Employee> findOneByEmailAndPassword(String email, String password);
    Employee findByEmail(String email);
    Employee findByCode(int code);
}
