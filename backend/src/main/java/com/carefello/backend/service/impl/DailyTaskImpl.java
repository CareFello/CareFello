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

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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
        dailyTask.setDate(dailyTaskDTO.getDate());
        dailyTask.setStatus("Incomplete");
        dailyTask.setElder(elder);

        return dailyTaskRepo.save(dailyTask);
    }

    // @Override
    // public DailyTask updateDailyTask(int taskId,DailyTaskDTO dailyTaskDTO){
    //     DailyTask dailyTask = dailyTaskRepo.findById(taskId)
    //             .orElseThrow(()-> new EntityNotFoundException("Task not found with ID : " + taskId));

    //     dailyTask.setTaskName(dailyTaskDTO.getTaskName());
    //     dailyTask.setDescription(dailyTaskDTO.getDescription());
    //     dailyTask.setTime(dailyTaskDTO.getTime());
    //     dailyTask.setDate(dailyTaskDTO.getDate());

    //     return dailyTaskRepo.save(dailyTask);
    // }


    // @Override
    // public List<DailyTaskDTO> getTaskByElderIdAndDate(int elderId, LocalDate currentDate) {
    //     List<DailyTask> dailyTasks = dailyTaskRepo.findByElderIdAndDate(elderId, currentDate);

    //     // Convert the list of DailyTask objects to DailyTaskDTO objects
    //     List<DailyTaskDTO> dailyTaskDTOs = new ArrayList<>();
    //     for (DailyTask dailyTask : dailyTasks) {
    //         DailyTaskDTO dto = new DailyTaskDTO();
    //         dto.setId(dailyTask.getId());
    //         dto.setTaskName(dailyTask.getTaskName());
    //         dto.setDescription(dailyTask.getDescription());
    //         dto.setStatus(dailyTask.isStatus());
    //         dto.setTime(dailyTask.getTime());
    //         dto.setDate(dailyTask.getDate());
    //         // Set other properties as needed
    //         dailyTaskDTOs.add(dto);
    //     }

    //     return dailyTaskDTOs;
    // }

    @Override
    public List<DailyTaskDTO> getTaskByElderId(int elderId) {
        List<DailyTask> dailyTasks = dailyTaskRepo.findByElderId(elderId);

        // Convert the list of DailyTask objects to DailyTaskDTO objects
        List<DailyTaskDTO> dailyTaskDTOs = new ArrayList<>();
        for (DailyTask dailyTask : dailyTasks) {
            DailyTaskDTO dto = new DailyTaskDTO();
            dto.setId(dailyTask.getId());
            dto.setTaskName(dailyTask.getTaskName());
            dto.setDescription(dailyTask.getDescription());
            dto.setStatus(dailyTask.getStatus());
            dto.setTime(dailyTask.getTime());
            dto.setDate(dailyTask.getDate());
            // Set other properties as needed
            dailyTaskDTOs.add(dto);
        }

        return dailyTaskDTOs;
    }
}
