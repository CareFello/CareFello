package com.carefello.backend.repo;

import com.carefello.backend.model.Bed;

import java.sql.Date;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

@EnableJpaRepositories

public interface BedRepo extends JpaRepository<Bed,Integer>{
    @Query("SELECT b FROM Bed b WHERE b.assigned = 1 and b.occupied = 1 and b.assEndDate < :assStartDate and b.type = :type")
    List<Bed> findNotOccupiedBeds(@Param("assStartDate") Date assStartDate, @Param("type") String type);

    @Query("SELECT b FROM Bed b WHERE b.assigned = 1 and b.occupied = 1 and b.occuEndDate < :assStartDate and b.assStartDate > :assEndDate and b.type = :type")
    List<Bed> findNotOccupiedBeds1(@Param("assStartDate") Date assStartDate, @Param("assEndDate") Date assEndDate, @Param("type") String type);

    @Query("SELECT b FROM Bed b WHERE b.assigned = 0 and b.occupied = 1 and b.occuEndDate < :assStartDate and b.type = :type")
    List<Bed> findNotOccupiedBeds2(@Param("assStartDate") Date assStartDate, @Param("type") String type);

    @Query("SELECT b FROM Bed b WHERE b.assigned = 1 and b.occupied = 0 and b.assEndDate < :assStartDate and b.type = :type")
    List<Bed> findNotOccupiedBeds4(@Param("assStartDate") Date assStartDate, @Param("type") String type);

    @Query("SELECT b FROM Bed b WHERE b.assigned = 1 and b.occupied = 0 and b.assStartDate > :assEndDate and b.type = :type")
    List<Bed> findNotOccupiedBeds5(@Param("assEndDate") Date assEndDate, @Param("type") String type);

    @Query("SELECT b FROM Bed b WHERE b.free = 1 and b.type = :type")
    List<Bed> findNotOccupiedBeds3(@Param("type") String type);

    Bed findByAssElderId(int assElderId);

    Bed findByCaregiveridoccu(int caregiveridoccu);

    @Query("select b from Bed b where b.bed_id = :bed_id")
    List<Bed> findAllBeds(@Param("bed_id") int bed_id);

    @Query("select b from Bed b where b.bed_id = :bed_id order by b.assStartDate asc")
    List<Bed> findAllBedsasc(@Param("bed_id") int bed_id);

    @Query("SELECT DISTINCT b.bed_id FROM Bed b")
    int[] getDistinctBed();


    // @Query("select b from Bed b where b.bed_id = :bed_id")
    // Bed findBed(@Param("bed_id") int bed_id);

    // @Query("SELECT b\n" + //
    //         "FROM Bed b\n" + //
    //         "WHERE\n" + //
    //         "  (b.assigned = 1 and b.occupied = 1 and b.assEndDate < :assStartDate)\n" + //
    //         "  OR\n" + //
    //         "  (b.assigned = 1 and b.occupied = 1 and b.occuEndDate < :assStartDate and b.assStartDate > :assEndDate)\n" + //
    //         "  OR\n" + //
    //         "  (b.assigned = 0 and b.occupied = 1 and b.occuEndDate < :assStartDate);\n" + //
    //         "  OR\n" + //
    //         "  (b.assigned = 1 and b.occupied = 0 and b.assEndDate < :assStartDate);\n" + //
    //         "  OR\n" + //
    //         "  (b.assigned = 1 and b.occupied = 0 and b.assStartDate > :assEndDate);\n" + //
    //         "  OR\n" + //
    //         "  (b.free = 1);\n" + //
    //         "")
    // List<Bed> findNotOccupiedBedsss(@Param("assStartDate") Date assStartDate, @Param("assEndDate") Date assEndDate);
}
