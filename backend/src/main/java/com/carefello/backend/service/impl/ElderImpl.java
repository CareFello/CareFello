package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.model.Elder;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.repo.ElderRepo;
import com.carefello.backend.repo.GuardianRepo;
import com.carefello.backend.service.ElderService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ElderImpl implements ElderService {
    @Autowired
    private GuardianRepo guardianRepo;

    @Autowired
    private ElderRepo elderRepo;

    @Override
    public Elder addElderToGuardian(int guardianId, ElderDTO elderDTO){
        Guardian guardian = guardianRepo.findById(guardianId)
                .orElseThrow(()-> new EntityNotFoundException("Guardian not found"));

        if(guardian.getElders().size() >= 4){
            throw new MaxEldersReachedException("Maximum elders reached for this guardian");
        }

        Elder elder = new Elder();
        elder.setName(elderDTO.getName());
        elder.setDob(elderDTO.getDob());
        elder.setNic(elderDTO.getNic());
        elder.setGuardian(guardian);

        guardian.getElders().add(elder);
        guardianRepo.save(guardian);

        return elder;
    }

    public class MaxEldersReachedException extends RuntimeException{
        public MaxEldersReachedException(String message){
            super(message);
        }
    }
}
