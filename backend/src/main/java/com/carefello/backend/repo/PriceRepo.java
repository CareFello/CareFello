package com.carefello.backend.repo;

import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Price;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource

public interface PriceRepo extends JpaRepository<Price, Integer> {
    @Query("select b from Price b where b.guardianid = :guardianid")
    List<Price> findPrices(@Param("guardianid") int guardianid);

    Price findById(int id);
}
