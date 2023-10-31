package com.carefello.backend.repo;


import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Guardian;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository

public interface GuardianRepo extends JpaRepository<Guardian , Integer> {
    Guardian findByEmail(String email);
   Optional<Guardian> findOneByEmailAndPassword(String email, String password);

   @Query("select g from Guardian g where g.user_id = :user_id")
    Guardian getGuardian(@Param("user_id") int user_id);

   @Query("SELECT g.id, g.fname, g.lname, g.email, COUNT(e.id) AS elderCount " +
           "FROM Guardian g LEFT JOIN g.elders e " +
           "GROUP BY g.id, g.fname, g.lname, g.email")
    List<Object[]> getGuardiansWithElderCount();
}
