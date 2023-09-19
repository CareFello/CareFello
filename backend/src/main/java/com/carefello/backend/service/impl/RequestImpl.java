package com.carefello.backend.service.impl;


import java.sql.Date;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.carefello.backend.DTO.RequestDTO;
import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Caregiver1;
import com.carefello.backend.payload.response.BedResponse;
import com.carefello.backend.service.RequestService;
import com.carefello.backend.repo.BedRepo;
import com.carefello.backend.repo.Caregiver1Repo;
import com.carefello.backend.repo.TempreqRepo;


@Service

public class RequestImpl implements RequestService {
    
    @Autowired
    private BedRepo bedRepo;
    @Autowired
    private Caregiver1Repo caregiver1Repo;
    @Override
    public List<Bed> validateRequest(RequestDTO requestDTO) {
        List<Bed> bed = bedRepo.findNotOccupiedBeds(requestDTO.getAssStartDate());
        List<Bed> bed1 = bedRepo.findNotOccupiedBeds1(requestDTO.getAssStartDate(), requestDTO.getAssEndDate());
        List<Bed> bed2 = bedRepo.findNotOccupiedBeds2(requestDTO.getAssStartDate());
        List<Bed> bed4 = bedRepo.findNotOccupiedBeds4(requestDTO.getAssStartDate());
        List<Bed> bed5 = bedRepo.findNotOccupiedBeds5(requestDTO.getAssEndDate());
        List<Bed> bed3 = bedRepo.findNotOccupiedBeds3();
        if (!bed3.isEmpty()){
            return bed3;
        }else if (!bed4.isEmpty()){
            return bed4;
        }else if (!bed2.isEmpty()){
            return bed2;
        }else if (!bed.isEmpty()){
            return bed;
        }else if (!bed1.isEmpty()){
            return bed1;
        }else if (!bed5.isEmpty()){
            return bed5;
        }else{
            return Collections.emptyList();
        }

        // List<Bed> bed =bedRepo.findNotOccupiedBedsss(requestDTO.getAssStartDate(), requestDTO.getAssEndDate());
        // return bed;
    }

    public List<Caregiver1> validateRequest1(RequestDTO requestDTO){
        List<Caregiver1> caregiver1 = caregiver1Repo.findAvailability1(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage());

        List<Caregiver1> caregiver2 = caregiver1Repo.findAvailability2(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssStartDate());

        List<Caregiver1> caregiver3 = caregiver1Repo.findAvailability3(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssStartDate(), requestDTO.getAssEndDate());

        List<Caregiver1> caregiver4 = caregiver1Repo.findAvailability4(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssStartDate());

        List<Caregiver1> caregiver5 = caregiver1Repo.findAvailability5(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssStartDate());

        List<Caregiver1> caregiver6 = caregiver1Repo.findAvailability6(requestDTO.getGender(), 
        requestDTO.getUpperage(), requestDTO.getLowerage(), requestDTO.getAssEndDate());

        if (!caregiver1.isEmpty()){
            return caregiver1;
        }else if (!caregiver2.isEmpty()){
            return caregiver2;
        }else if (!caregiver3.isEmpty()){
            return caregiver3;
        }else if (!caregiver4.isEmpty()){
            return caregiver4;
        }else if (!caregiver5.isEmpty()){
            return caregiver5;
        }else if (!caregiver6.isEmpty()){
            return caregiver6;  
        }else{
            return null;
        }      
    }

    public String assignElder(RequestDTO requestDTO){

        Bed bed = new Bed(requestDTO.getBed_id(),
        requestDTO.getFree(), requestDTO.getAssigned(),
        requestDTO.getOccupied(),requestDTO.getAssStartDate(),
        requestDTO.getAssEndDate(),requestDTO.getOccuStartDate(),
        requestDTO.getOccuEndDate(),requestDTO.getOccuElderId(),
        requestDTO.getAssElderId(),requestDTO.getType(),
        requestDTO.getCaregiverId() );

        bedRepo.save(bed);
        return requestDTO.getType();
    }

    public String assignCaregiver(RequestDTO requestDTO){

        Caregiver1 caregiver1 = new Caregiver1(requestDTO.getGender(),
        requestDTO.getFree(), requestDTO.getAge(),
        requestDTO.getAssigned(),requestDTO.getOccupied(),
        requestDTO.getOccuStartDate(),requestDTO.getOccuEndDate(),
        requestDTO.getAssStartDate(),requestDTO.getAssEndDate()
         );

        caregiver1Repo.save(caregiver1);
        return requestDTO.getType();
    }

    public BedResponse validateRequest2(int[] ids, RequestDTO requestDTO){

        for (int id : ids){
        List<Bed> beds = bedRepo.findAllBeds(id);
        BedResponse result = new BedResponse(id,"good");
        for (Bed bed : beds){
            
            int free = bed.getFree();
            int assigned = bed.getAssigned();
            int occupied = bed.getOccupied();
            Date assStartDateBed = bed.getAssStartDate();
            Date assEndDateBed = bed.getAssEndDate();
            Date occuEndDateBed = bed.getOccuEndDate();

            int cr1 = assEndDateBed.compareTo(requestDTO.getAssStartDate());
            int cr2 = occuEndDateBed.compareTo(requestDTO.getAssStartDate());
            int cr3 = assStartDateBed.compareTo(requestDTO.getAssEndDate());

            if ((assigned == 1) && (occupied == 1) && (cr1 < 0)){
                
            }else if ((assigned == 1) && (occupied == 1) && (cr2 < 0) && (cr3 > 0)){
                
            }else if ((assigned == 0) && (occupied == 1) && (cr2 < 0)){
                
            }else if ((assigned == 1) && (occupied == 0) && (cr1 < 0)){
                
            }else if ((assigned == 1) && (occupied == 0) && (cr3 > 0)){
                
            }else if (free == 1){
                
            }else{
                result = new BedResponse(0, "bad");
            }
            
        }

        if (result.str == "good"){
            return result;
        }
        }
        

        // if (result.getStr() == "good"){
        //     Tempreq tempreq = new Tempreq(requestDTO.getAssElderId(), id);
        //     tempreqRepo.save(tempreq);
        // }
        BedResponse result1 = new BedResponse(0, "bad");
        return result1;
        
    }

    public String validateRequest3(int id, RequestDTO requestDTO){
        List<Caregiver1> caregivers = caregiver1Repo.findAllCaregivers(id);
        String result = "good";
        for (Caregiver1 caregiver : caregivers){
            
            int free = caregiver.getFree();
            int assigned = caregiver.getAssigned();
            int occupied = caregiver.getOccupied();
            Date assStartDateBed = caregiver.getAssStartDate();
            Date assEndDateBed = caregiver.getAssEndDate();
            Date occuEndDateBed = caregiver.getOccuEndDate();

            int cr1 = assEndDateBed.compareTo(requestDTO.getAssStartDate());
            int cr2 = occuEndDateBed.compareTo(requestDTO.getAssStartDate());
            int cr3 = assStartDateBed.compareTo(requestDTO.getAssEndDate());

            if ((assigned == 1) && (occupied == 1) && (cr1 < 0)){
                
            }else if ((assigned == 1) && (occupied == 1) && (cr2 < 0) && (cr3 > 0)){
                
            }else if ((assigned == 0) && (occupied == 1) && (cr2 < 0)){
                
            }else if ((assigned == 1) && (occupied == 0) && (cr1 < 0)){
                
            }else if ((assigned == 1) && (occupied == 0) && (cr3 > 0)){
                
            }else if (free == 1){
                
            }else{
                result = "bad";
            }
            
        }
        return result;
        
    }
    
}
