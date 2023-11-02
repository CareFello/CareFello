package com.carefello.backend.repo;

import com.carefello.backend.model.Guardian;
import com.carefello.backend.model.Tempreq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.sql.Date;
import java.util.List;
import java.util.Optional;


@RepositoryRestResource

public interface TempreqRepo extends JpaRepository<Tempreq, Integer> {

    @Query("select t from Tempreq t where t.elderid = :elderid")
    Tempreq getTempreq(@Param("elderid") int elderid);

    @Query("select t from Tempreq t where t.paid = 1 and t.pending = 1")
    List<Tempreq> getTempreq1();

    @Query("select t from Tempreq t where t.assEndDate < :assStartDate and t.bed_id = :bed_id")
    Tempreq getTempreq1(@Param("assStartDate") Date assStartDate, @Param("bed_id") int bed_id);

    @Query("select t from Tempreq t where t.assStartDate > :assEndDate and t.bed_id = :bed_id")
    Tempreq getTempreq2(@Param("assEndDate") Date assEndDate, @Param("bed_id") int bed_id);

    // @Query("select t from Tempreq t where t.assStartDate > :assEndDate and t.caregiverid = :caregiverid")
    // Tempreq getTempreq3(@Param("assEndDate") Date assEndDate, @Param("caregiverid") int caregiverid);

    // @Query("select t from Tempreq t where t.assEndDate < :assStartDate and t.caregiverid = :caregiverid")
    // Tempreq getTempreq4(@Param("assStartDate") Date assStartDate, @Param("caregiverid") int caregiverid);

    Tempreq findById(int id);

    @Query("select t from Tempreq t where t.guardianid = :guardianid and t.pending = 0")
    List<Tempreq> getTemp(@Param("guardianid") int guardianid);

}

