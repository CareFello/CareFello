package com.carefello.backend.repo;

import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Caregiver;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@EnableJpaRepositories
@Repository

public interface CaregiverRepo extends JpaRepository<Caregiver,Integer>{
    // @Query("SELECT c FROM Caregiver c WHERE c.free = 1 and c.gender = :gender and c.age < :upperage and c.age >= :lowerage")
    // Caregiver findAvailability1(@Param("gender") char gender, @Param("upperage") int upperage, @Param("lowerage") int lowerage);

    // @Query("SELECT c FROM Caregiver c WHERE c.free = 0 and c.gender = :gender and c.age < :upperage and c.age >= :lowerage and c.assigned = 0 and c.occuEndDate < :assStartDate")
    // Caregiver findAvailability2(@Param("gender") char gender, @Param("upperage") int upperage, @Param("lowerage") int lowerage,
    // @Param("assStartDate") Date assStartDate);

    // @Query("SELECT c FROM Caregiver c WHERE c.free = 0 and c.gender = :gender and c.age < :upperage and c.age >= :lowerage and c.assigned = 1 and c.occuEndDate < :assStartDate and c.assStartDate > :assEndDate")
    // Caregiver findAvailability3(@Param("gender") char gender, @Param("upperage") int upperage, @Param("lowerage") int lowerage,
    // @Param("assStartDate") Date assStartDate, @Param("assEndDate") Date assEndDate);

    // @Query("SELECT c FROM Caregiver c WHERE c.free = 0 and c.gender = :gender and c.age < :upperage and c.age >= :lowerage and c.assigned = 1 and c.assEndDate < :assStartDate")
    // Caregiver findAvailability4(@Param("gender") char gender, @Param("upperage") int upperage, @Param("lowerage") int lowerage,
    // @Param("assStartDate") Date assStartDate);

    // @Query("SELECT c FROM Caregiver c WHERE c.free = 0 and c.occupied = 0 and c.gender = :gender and c.age < :upperage and c.age >= :lowerage and c.assigned = 1 and c.assEndDate < :assStartDate")
    // Caregiver findAvailability5(@Param("gender") char gender, @Param("upperage") int upperage, @Param("lowerage") int lowerage,
    // @Param("assStartDate") Date assStartDate);

    // @Query("SELECT c FROM Caregiver c WHERE c.free = 0 and c.occupied = 0 and c.gender = :gender and c.age < :upperage and c.age >= :lowerage and c.assigned = 1 and c.assStartDate > :assEndDate")
    // Caregiver findAvailability6(@Param("gender") char gender, @Param("upperage") int upperage, @Param("lowerage") int lowerage,
    // @Param("assEndDate") Date assEndDate);

    // @Query("SELECT c FROM Caregiver c WHERE c.gender = :gender")
    // Caregiver findGenderMatch(@Param("gender") char gender);

    // @Query("SELECT c FROM Caregiver c WHERE c.age <= :upperage and c.age > lowerage")
    // Caregiver findGenderMatch(@Param("upperage") int upperage, @Param("lowerage") int lowerage);
}
