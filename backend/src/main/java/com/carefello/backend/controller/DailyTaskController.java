package com.carefello.backend.controller;


import com.carefello.backend.DTO.DailyTaskDTO;
import com.carefello.backend.model.DailyTask;
import com.carefello.backend.service.DailyTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("api/v1/dailyTask")
@CrossOrigin
public class DailyTaskController {

    private final DailyTaskService dailyTaskService;

    @Autowired
    public DailyTaskController(DailyTaskService dailyTaskService){
        this.dailyTaskService = dailyTaskService;
    }

    @PostMapping("/addTask/{elderId}")
    public ResponseEntity<String> addDailyTask(@PathVariable int elderId, @RequestBody DailyTaskDTO dailyTaskDTO){
        DailyTask dailyTask = dailyTaskService.addDailyTask(elderId, dailyTaskDTO);
        return ResponseEntity.ok("Task added successfully with ID" + dailyTask.getId() );
    }

    @PutMapping("/updateTask/{taskId}")
    public ResponseEntity<String> updateDailyTask(@PathVariable int taskId,@RequestBody DailyTaskDTO dailyTaskDTO){
        DailyTask dailyTask = dailyTaskService.updateDailyTask(taskId, dailyTaskDTO);
        return ResponseEntity.ok("Task updated succefully with ID : "+ dailyTask.getId());

    }
    @GetMapping("/viewTask/{elderId}")
    public List<DailyTaskDTO> getTasksByElderIdAndDate(@PathVariable int elderId) {
        LocalDate currentDate = LocalDate.now();
        return dailyTaskService.getTaskByElderIdAndDate(elderId, currentDate);
    }
    @GetMapping("/allTask/{elderId}")
    public List<DailyTaskDTO> getTasksByElderId(@PathVariable int elderId) {
        return dailyTaskService.getTaskByElderId(elderId);
    }

}
