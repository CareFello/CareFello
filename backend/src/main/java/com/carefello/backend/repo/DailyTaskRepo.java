package com.carefello.backend.repo;

import com.carefello.backend.model.DailyTask;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyTaskRepo extends JpaRepository<DailyTask , Integer> {
}
