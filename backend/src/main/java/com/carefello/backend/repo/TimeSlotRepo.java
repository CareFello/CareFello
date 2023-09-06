package com.carefello.backend.repo;

import com.carefello.backend.model.TimeSlot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeSlotRepo extends JpaRepository<TimeSlot, Integer> {
}
