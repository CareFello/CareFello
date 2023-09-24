package com.carefello.backend.service;

import com.carefello.backend.DTO.DailyTaskDTO;
import com.carefello.backend.model.DailyTask;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface DailyTaskService {
    DailyTask addDailyTask(int elderId, DailyTaskDTO dailyTaskDTO);
    DailyTask updateDailyTask(int taskId, DailyTaskDTO dailyTaskDTO);
    List<DailyTask> getTaskByElderIdAndDate(int elderId, LocalDate date);
}
