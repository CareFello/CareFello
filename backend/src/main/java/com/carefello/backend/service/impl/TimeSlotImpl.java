package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.TimeSlotDTO;
import com.carefello.backend.model.Doctor;
import com.carefello.backend.model.TimeSlot;
import com.carefello.backend.repo.DoctorRepo;
import com.carefello.backend.repo.TimeSlotRepo;
import com.carefello.backend.service.TimeSlotService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimeSlotImpl implements TimeSlotService {

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private TimeSlotRepo timeSlotRepo;

    @Override
    public TimeSlot addTimeSlot(int doctorId, TimeSlotDTO timeSlotDTO) {
        

        TimeSlot timeSlot = new TimeSlot(timeSlotDTO.getStartTime(), timeSlotDTO.getFinishTime(), timeSlotDTO.getMaxElders(), timeSlotDTO.getDate(), doctorId);
        

        timeSlotRepo.save(timeSlot);
        

        return timeSlot;
    }


}
