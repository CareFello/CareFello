package com.carefello.backend.service;

import com.carefello.backend.DTO.TimeSlotDTO;
import com.carefello.backend.model.TimeSlot;

public interface TimeSlotService {
    TimeSlot addTimeSlot(int doctorId, TimeSlotDTO timeSlotDTO);

}
