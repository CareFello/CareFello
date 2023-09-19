package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.DailyTaskDTO;
import com.carefello.backend.model.DailyTask;
import com.carefello.backend.model.Elder;
import com.carefello.backend.repo.DailyTaskRepo;
import com.carefello.backend.repo.ElderRepo;
import com.carefello.backend.service.DailyTaskService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DailyTaskImpl implements DailyTaskService {
    private final DailyTaskRepo dailyTaskRepo;
    private final ElderRepo elderRepo;

    @Autowired
    public DailyTaskImpl(DailyTaskRepo dailyTaskRepo,ElderRepo elderRepo){
        this.dailyTaskRepo = dailyTaskRepo;
        this.elderRepo = elderRepo;
    }

    @Override
    public DailyTask addDailyTask(int elderId, DailyTaskDTO dailyTaskDTO){
        Elder elder = elderRepo.findById(elderId)
                .orElseThrow(()-> new EntityNotFoundException("Elder not found"));

        DailyTask dailyTask = new DailyTask();
        dailyTask.setTaskName(dailyTaskDTO.getTaskName());
        dailyTask.setDescription(dailyTaskDTO.getDescription());
        dailyTask.setTime(dailyTaskDTO.getTime());
        dailyTask.setStatus(false);
        dailyTask.setElder(elder);

        return dailyTaskRepo.save(dailyTask);
    }

    @Override
    public DailyTask updateDailyTask(int taskId,DailyTaskDTO dailyTaskDTO){
        DailyTask dailyTask = dailyTaskRepo.findById(taskId)
                .orElseThrow(()-> new EntityNotFoundException("Task not found with ID : " + taskId));

        dailyTask.setTaskName(dailyTaskDTO.getTaskName());
        dailyTask.setDescription(dailyTaskDTO.getDescription());
        dailyTask.setTime(dailyTaskDTO.getTime());

        return dailyTaskRepo.save(dailyTask);
    }
}
