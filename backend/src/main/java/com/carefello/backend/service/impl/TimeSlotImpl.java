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
        Doctor doctor = doctorRepo.findById(doctorId)
                .orElseThrow(()-> new EntityNotFoundException("Doctor not found"));

        TimeSlot timeSlot = new TimeSlot();
        timeSlot.setId(timeSlotDTO.getId());
        timeSlot.setStartTime(timeSlotDTO.getStartTime());
        timeSlot.setFinishTime(timeSlotDTO.getFinishTime());
        timeSlot.setMaxElders(timeSlotDTO.getMaxElders());
        timeSlot.setDoctor(doctor);

        doctor.getTimeSlots().add(timeSlot);
        doctorRepo.save(doctor);

        return timeSlot;
    }


}
