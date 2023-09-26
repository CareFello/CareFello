package com.carefello.backend.repo;

import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Caregiver1;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@Repository

public interface Caregiver1Repo extends JpaRepository<Caregiver1,Integer>{
    @Query("SELECT c FROM Caregiver1 c WHERE c.free = 1 and c.gender = :gender")
    List<Caregiver1> findAvailability1(@Param("gender") char gender);

    @Query("SELECT c FROM Caregiver1 c WHERE c.free = 0 and c.gender = :gender and c.assigned = 0 and c.occuEndDate < :assStartDate")
    List<Caregiver1> findAvailability2(@Param("gender") char gender,
    @Param("assStartDate") Date assStartDate);

    @Query("SELECT c FROM Caregiver1 c WHERE c.free = 0 and c.gender = :gender and c.assigned = 1 and c.occuEndDate < :assStartDate and c.assStartDate > :assEndDate")
    List<Caregiver1> findAvailability3(@Param("gender") char gender,
    @Param("assStartDate") Date assStartDate, @Param("assEndDate") Date assEndDate);

    @Query("SELECT c FROM Caregiver1 c WHERE c.free = 0 and c.gender = :gender and c.assigned = 1 and c.assEndDate < :assStartDate")
    List<Caregiver1> findAvailability4(@Param("gender") char gender,
    @Param("assStartDate") Date assStartDate);

    @Query("SELECT c FROM Caregiver1 c WHERE c.free = 0 and c.occupied = 0 and c.gender = :gender and c.assigned = 1 and c.assEndDate < :assStartDate")
    List<Caregiver1> findAvailability5(@Param("gender") char gender,
    @Param("assStartDate") Date assStartDate);

    @Query("SELECT c FROM Caregiver1 c WHERE c.free = 0 and c.occupied = 0 and c.gender = :gender and c.assigned = 1 and c.assStartDate > :assEndDate")
    List<Caregiver1> findAvailability6(@Param("gender") char gender,
    @Param("assEndDate") Date assEndDate);

    @Query("select c from Caregiver1 c where c.user_id = :user_id")
    List<Caregiver1> findAllCaregivers(@Param("user_id") int user_id);

    // @Query("SELECT c FROM Caregiver1 c WHERE c.gender = :gender")
    // Caregiver1 findGenderMatch(@Param("gender") char gender);

    // @Query("SELECT c FROM Caregiver1 c WHERE c.age <= :upperage and c.age > lowerage")
    // Caregiver1 findGenderMatch(@Param("upperage") int upperage, @Param("lowerage") int lowerage);
}
