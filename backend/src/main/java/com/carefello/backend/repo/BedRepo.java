package com.carefello.backend.repo;

import com.carefello.backend.model.Bed;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

@EnableJpaRepositories

public interface BedRepo extends JpaRepository<Bed,Integer>{
    @Query("SELECT b FROM Bed b WHERE b.assigned = 1 and b.occupied = 1 and b.assEndDate < :assStartDate")
    List<Bed> findNotOccupiedBeds(@Param("assStartDate") Date assStartDate);

    @Query("SELECT b FROM Bed b WHERE b.assigned = 1 and b.occupied = 1 and b.occuEndDate < :assStartDate and b.assStartDate > :assEndDate")
    List<Bed> findNotOccupiedBeds1(@Param("assStartDate") Date assStartDate, @Param("assEndDate") Date assEndDate);

    @Query("SELECT b FROM Bed b WHERE b.assigned = 0 and b.occupied = 1 and b.occuEndDate < :assStartDate")
    List<Bed> findNotOccupiedBeds2(@Param("assStartDate") Date assStartDate);

    @Query("SELECT b FROM Bed b WHERE b.assigned = 1 and b.occupied = 0 and b.assEndDate < :assStartDate")
    List<Bed> findNotOccupiedBeds4(@Param("assStartDate") Date assStartDate);

    @Query("SELECT b FROM Bed b WHERE b.assigned = 1 and b.occupied = 0 and b.assStartDate > :assEndDate")
    List<Bed> findNotOccupiedBeds5(@Param("assEndDate") Date assEndDate);

    @Query("SELECT b FROM Bed b WHERE b.free = 1")
    List<Bed> findNotOccupiedBeds3();

    Bed findByAssElderId(int assElderId);

    @Query("select b from Bed b where b.bed_id = :bed_id")
    List<Bed> findAllBeds(@Param("bed_id") int bed_id);
}
