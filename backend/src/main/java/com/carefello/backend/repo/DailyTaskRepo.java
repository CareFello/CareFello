package com.carefello.backend.repo;

import com.carefello.backend.model.DailyTask;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface DailyTaskRepo extends JpaRepository<DailyTask , Integer> {
    List<DailyTask> findByElderIdAndDate(int elderId, LocalDate date);

}
