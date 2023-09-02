package com.carefello.backend.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.carefello.backend.DTO.RequestCaregiverDTO;
import com.carefello.backend.DTO.RequestDTO;
import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Caregiver;
import com.carefello.backend.service.RequestService;
import com.carefello.backend.repo.BedRepo;
import com.carefello.backend.repo.CaregiverRepo;
import com.carefello.backend.payload.response.Response;
import org.springframework.stereotype.Service;
@Service

public class RequestImpl implements RequestService {
    
    @Autowired
    private BedRepo bedRepo;
    @Autowired
    private CaregiverRepo caregiverRepo;
    @Override
    public Response validateRequest(RequestDTO requestDTO) {
        Bed bed = bedRepo.findNotOccupiedBeds(requestDTO.getAssStartDate());
        Bed bed1 = bedRepo.findNotOccupiedBeds1(requestDTO.getAssStartDate(), requestDTO.getAssEndDate());
        Bed bed2 = bedRepo.findNotOccupiedBeds2(requestDTO.getAssStartDate());
        Bed bed4 = bedRepo.findNotOccupiedBeds4(requestDTO.getAssStartDate());
        Bed bed5 = bedRepo.findNotOccupiedBeds5(requestDTO.getAssEndDate());
        Bed bed3 = bedRepo.findNotOccupiedBeds3();
        if (bed != null){
            int id = bed.getBed_id();
            return new Response("true",id);
        }else if (bed1 != null){
            int id = bed1.getBed_id();
            return new Response("true",id);
        }else if (bed2 != null){
            int id = bed2.getBed_id();
            return new Response("true",id);
        }else if (bed3 != null){
            int id = bed3.getBed_id();
            return new Response("true",id);
        }else if (bed4 != null){
            int id = bed4.getBed_id();
            return new Response("true",id);
        }else if (bed5 != null){
            int id = bed5.getBed_id();
            return new Response("true",id);
        }else{
            return new Response("false",0);
        }
    }

    public Response validateRequest1(RequestDTO requestDTO){
        Caregiver caregiver1 = caregiverRepo.findAvailability1(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage());

        Caregiver caregiver2 = caregiverRepo.findAvailability2(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssStartDate());

        Caregiver caregiver3 = caregiverRepo.findAvailability3(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssStartDate(), requestDTO.getAssEndDate());

        Caregiver caregiver4 = caregiverRepo.findAvailability4(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssStartDate());

        Caregiver caregiver5 = caregiverRepo.findAvailability5(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssStartDate());

        Caregiver caregiver6 = caregiverRepo.findAvailability6(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssEndDate());

        if (caregiver1 != null){
            int id = caregiver1.getUser_id();
            return new Response("true",id);
        }else if (caregiver2 != null){
            int id = caregiver2.getUser_id();
            return new Response("true",id);
        }else if (caregiver3 != null){
            int id = caregiver3.getUser_id();
            return new Response("true",id);
        }else if (caregiver4 != null){
            int id = caregiver4.getUser_id();
            return new Response("true",id);
        }else if (caregiver5 != null){
            int id = caregiver5.getUser_id();
            return new Response("true",id);
        }else if (caregiver6 != null){
            int id = caregiver6.getUser_id();
            return new Response("true",id);  
        }else{
            return new Response("false",0);
        }      
    }
    
}
