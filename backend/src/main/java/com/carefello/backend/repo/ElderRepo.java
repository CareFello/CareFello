package com.carefello.backend.repo;

import com.carefello.backend.model.Elder;
import com.carefello.backend.model.Guardian;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ElderRepo extends JpaRepository<Elder , Integer> {

}
