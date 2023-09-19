package com.carefello.backend.controller;


import com.carefello.backend.DTO.DailyTaskDTO;
import com.carefello.backend.model.DailyTask;
import com.carefello.backend.service.DailyTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/dailyTask")
@CrossOrigin
public class DailyTaskController {

    private final DailyTaskService dailyTaskService;

    @Autowired
    public DailyTaskController(DailyTaskService dailyTaskService){
        this.dailyTaskService = dailyTaskService;
    }

    @PostMapping("addTask/{elderId}")
    public ResponseEntity<String> addDailyTask(@PathVariable int elderId, @RequestBody DailyTaskDTO dailyTaskDTO){
        DailyTask dailyTask = dailyTaskService.addDailyTask(elderId, dailyTaskDTO);
        return ResponseEntity.ok("Task added successfully with ID" + dailyTask.getId() );
    }

    @PutMapping("/updateTask/{taskId}")
    public ResponseEntity<String> updateDailyTask(@PathVariable int taskId,@RequestBody DailyTaskDTO dailyTaskDTO){
        DailyTask dailyTask = dailyTaskService.updateDailyTask(taskId, dailyTaskDTO);
        return ResponseEntity.ok("Task updated succefully with ID : "+ dailyTask.getId());

    }
}
