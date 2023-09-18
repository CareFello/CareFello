package com.carefello.backend.service;

import com.carefello.backend.DTO.DailyTaskDTO;
import com.carefello.backend.model.DailyTask;

public interface DailyTaskService {
    DailyTask addDailyTask(int elderId, DailyTaskDTO dailyTaskDTO);
    DailyTask updateDailyTask(int taskId, DailyTaskDTO dailyTaskDTO);
}
