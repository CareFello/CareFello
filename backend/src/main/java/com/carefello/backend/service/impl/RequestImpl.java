package com.carefello.backend.service.impl;


import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;



import com.carefello.backend.DTO.RequestDTO;
import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Caregiver1;
import com.carefello.backend.model.Elder1;
import com.carefello.backend.model.Elderguar;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.model.Tempreq;
import com.carefello.backend.payload.response.BedResponse;
import com.carefello.backend.payload.response.BedResponse1;
import com.carefello.backend.payload.response.BedResponse2;
import com.carefello.backend.payload.response.ElderRequest;
import com.carefello.backend.service.RequestService;
import com.carefello.backend.repo.BedRepo;
import com.carefello.backend.repo.Caregiver1Repo;
import com.carefello.backend.repo.Elder1Repo;
import com.carefello.backend.repo.ElderguarRepo;
import com.carefello.backend.repo.GuardianRepo;
import com.carefello.backend.repo.TempreqRepo;





@Service

public class RequestImpl implements RequestService {
    
    @Autowired
    private BedRepo bedRepo;
    @Autowired
    private Caregiver1Repo caregiver1Repo;
    @Autowired
    private TempreqRepo tempreqRepo;
    @Autowired
    private Elder1Repo elder1Repo;
    @Autowired
    private GuardianRepo guardianRepo;
    @Autowired
    private ElderguarRepo elderguarRepo;
    @Override
    public List<Bed> validateRequest(RequestDTO requestDTO) {
        List<Bed> bed = bedRepo.findNotOccupiedBeds(requestDTO.getAssStartDate(), requestDTO.getType());
        List<Bed> bed1 = bedRepo.findNotOccupiedBeds1(requestDTO.getAssStartDate(), requestDTO.getAssEndDate(), requestDTO.getType());
        List<Bed> bed2 = bedRepo.findNotOccupiedBeds2(requestDTO.getAssStartDate(), requestDTO.getType());
        List<Bed> bed4 = bedRepo.findNotOccupiedBeds4(requestDTO.getAssStartDate(), requestDTO.getType());
        List<Bed> bed5 = bedRepo.findNotOccupiedBeds5(requestDTO.getAssEndDate(), requestDTO.getType());
        List<Bed> bed3 = bedRepo.findNotOccupiedBeds3(requestDTO.getType());
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
        List<Caregiver1> caregiver1 = caregiver1Repo.findAvailability1(requestDTO.getGender());

        List<Caregiver1> caregiver2 = caregiver1Repo.findAvailability2(requestDTO.getGender(), 
        requestDTO.getAssStartDate());

        List<Caregiver1> caregiver3 = caregiver1Repo.findAvailability3(requestDTO.getGender(), 
        requestDTO.getAssStartDate(), requestDTO.getAssEndDate());

        List<Caregiver1> caregiver4 = caregiver1Repo.findAvailability4(requestDTO.getGender(), 
        requestDTO.getAssStartDate());

        List<Caregiver1> caregiver5 = caregiver1Repo.findAvailability5(requestDTO.getGender(), 
        requestDTO.getAssStartDate());

        List<Caregiver1> caregiver6 = caregiver1Repo.findAvailability6(requestDTO.getGender(), 
        requestDTO.getAssEndDate());

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
            return Collections.emptyList();
        }      
    }

    // public String assignElder(RequestDTO requestDTO){

    //     Bed bed = new Bed(requestDTO.getBed_id(),
    //     requestDTO.getFree(), requestDTO.getAssigned(),
    //     requestDTO.getOccupied(),requestDTO.getAssStartDate(),
    //     requestDTO.getAssEndDate(),requestDTO.getOccuStartDate(),
    //     requestDTO.getOccuEndDate(),requestDTO.getOccuElderId(),
    //     requestDTO.getAssElderId(),requestDTO.getType(),
    //     requestDTO.getCaregiverId() );

    //     bedRepo.save(bed);
    //     return requestDTO.getType();
    // }

    // public String assignCaregiver(RequestDTO requestDTO){

    //     Caregiver1 caregiver1 = new Caregiver1(requestDTO.getGender(),
    //     requestDTO.getFree(), requestDTO.getAge(),
    //     requestDTO.getAssigned(),requestDTO.getOccupied(),
    //     requestDTO.getOccuStartDate(),requestDTO.getOccuEndDate(),
    //     requestDTO.getAssStartDate(),requestDTO.getAssEndDate()
    //      );

    //     caregiver1Repo.save(caregiver1);
    //     return requestDTO.getType();
    // }

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

    public BedResponse validateRequest3(int[] ids, RequestDTO requestDTO){

        for (int id : ids){
        List<Caregiver1> caregivers = caregiver1Repo.findAllCaregivers(id);
        BedResponse result = new BedResponse(id, "good");
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
                result = new BedResponse(0, "bad");
            }
            
        }
        if (result.str == "good"){
            return result;
        }
        
    }
    BedResponse result1 = new BedResponse(0, "bad");
    return result1;
}

    public List<ElderRequest> func1(){
        List<Tempreq> tempreqs = tempreqRepo.findAll();
        List<ElderRequest> myObjectList = new ArrayList<>();
        for (Tempreq tempreq : tempreqs){
            Elder1 elder1 = elder1Repo.findByElderid(tempreq.getElderid());
            Elderguar elderguar = elderguarRepo.findByElderid(tempreq.getElderid());
            ElderRequest elderRequest = new ElderRequest(elder1.getAge(), elder1.getFirstname(), elder1.getGender(), tempreq.getElderid(), tempreq.getId());
            myObjectList.add(elderRequest);
        }

        return myObjectList;
    }

    public BedResponse1 func2(int id){
        Elder1 elder1 = elder1Repo.findByElderid(id);
        Elderguar elderguar = elderguarRepo.findByElderid(id);
        Guardian guardian = guardianRepo.getGuardian(elderguar.getGuardianid());
        Tempreq tempreq = tempreqRepo.getTempreq(id);

        

        BedResponse1 elderResponse1 = new BedResponse1(guardian.getFname(), elder1.getFirstname(), 10, tempreq.getType(), tempreq.getGender(), tempreq.getAssStartDate(), tempreq.getCurrentMedication(), tempreq.getBed_id(), tempreq.getAssEndDate(), tempreq.getId());
        return elderResponse1;
    }


    public String assignElder1(RequestDTO requestDTO){

        List<Bed> bed = bedRepo.findAllBeds(requestDTO.getBed_id());
        List<Caregiver1> caregiver = caregiver1Repo.findAllCaregivers(requestDTO.getCaregiverId());

        if (bed.get(0).getFree() == 1){

            bed.get(0).setAssStartDate(requestDTO.getAssStartDate());
            bed.get(0).setAssEndDate(requestDTO.getAssEndDate());
            bed.get(0).setFree(0);
            bed.get(0).setAssigned(1);
            bed.get(0).setOccupied(0);
            bed.get(0).setAssElderId(requestDTO.getAssElderId());
            bed.get(0).setCaregiverId(requestDTO.getCaregiverId());
            bedRepo.save(bed.get(0));
            // return "Elder successfully added";

            if (caregiver.get(0).getFree() == 1){

                caregiver.get(0).setAssStartDate(requestDTO.getAssStartDate());
                caregiver.get(0).setAssEndDate(requestDTO.getAssEndDate());
                caregiver.get(0).setFree(0);
                caregiver.get(0).setAssigned(1);
                caregiver.get(0).setOccupied(0);
                caregiver1Repo.save(caregiver.get(0));
                return "Elder successfully added";

            }else if (caregiver.get(0).getAssigned() == 1 && caregiver.get(0).getOccupied() == 0){

                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                try {
                    // Parse the date string and convert it to java.sql.Date
                    java.util.Date utilDate = dateFormat.parse("2000-01-01");
                    java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());

                int freecare = caregiver.get(0).getFree();
                int assignedcare = caregiver.get(0).getAssigned();
                int occupiedcare = caregiver.get(0).getOccupied();
                Date occuStartDateBedcare = sqlDate;
                Date occuEndDateBedcare = sqlDate;
                char gender = caregiver.get(0).getGender();
                int age = caregiver.get(0).getAge();

                Caregiver1 caregiver1 = new Caregiver1(gender, freecare, age, assignedcare, occupiedcare, occuStartDateBedcare, occuEndDateBedcare, requestDTO.getAssStartDate(), requestDTO.getAssEndDate(), requestDTO.getCaregiverId());
                caregiver1Repo.save(caregiver1);
                return "Elder successfully added";
            } catch (Exception e) {
                return "error";
            }

            }else{

                int freecare = caregiver.get(0).getFree();
                int assignedcare = caregiver.get(0).getAssigned();
                int occupiedcare = caregiver.get(0).getOccupied();
                Date occuStartDateBedcare = caregiver.get(0).getOccuStartDate();
                Date occuEndDateBedcare = caregiver.get(0).getOccuEndDate();
                char gender = caregiver.get(0).getGender();
                int age = caregiver.get(0).getAge();

                Caregiver1 caregiver1 = new Caregiver1(gender, freecare, age, assignedcare, occupiedcare, occuStartDateBedcare, occuEndDateBedcare, requestDTO.getAssStartDate(), requestDTO.getAssEndDate(), requestDTO.getCaregiverId());
                caregiver1Repo.save(caregiver1);
                return "Elder successfully added";

            }

        }else if (bed.get(0).getAssigned() == 1 && bed.get(0).getOccupied() == 0){
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");    
        try {
                    // Parse the date string and convert it to java.sql.Date
                    java.util.Date utilDate = dateFormat.parse("2000-01-01");
                    java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
        int free = bed.get(0).getFree();
        int assigned = bed.get(0).getAssigned();
        int occupied = bed.get(0).getOccupied();
        Date a = sqlDate;
        Date b = sqlDate;

        Bed bed1 = new Bed(requestDTO.getBed_id(),
        free, assigned,
        occupied,requestDTO.getAssStartDate(),
        requestDTO.getAssEndDate(), a,
        b, 0,
        requestDTO.getAssElderId(),requestDTO.getType(),
        requestDTO.getCaregiverId(),0);

        bedRepo.save(bed1);
    
            if (caregiver.get(0).getFree() == 1){

                caregiver.get(0).setAssStartDate(requestDTO.getAssStartDate());
                caregiver.get(0).setAssEndDate(requestDTO.getAssEndDate());
                caregiver.get(0).setFree(0);
                caregiver.get(0).setAssigned(1);
                caregiver.get(0).setOccupied(0);
                caregiver1Repo.save(caregiver.get(0));
                return "Elder successfully added";

            }else if (caregiver.get(0).getAssigned() == 1 && caregiver.get(0).getOccupied() == 0){

                // SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                // try {
                //     // Parse the date string and convert it to java.sql.Date
                //     java.util.Date utilDate = dateFormat.parse("2000-01-01");
                //     java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
                int freecare = caregiver.get(0).getFree();
                int assignedcare = caregiver.get(0).getAssigned();
                int occupiedcare = caregiver.get(0).getOccupied();
                Date occuStartDateBedcare = sqlDate;
                Date occuEndDateBedcare = sqlDate;
                char gender = caregiver.get(0).getGender();
                int age = caregiver.get(0).getAge();

                Caregiver1 caregiver1 = new Caregiver1(gender, freecare, age, assignedcare, occupiedcare, occuStartDateBedcare, occuEndDateBedcare, requestDTO.getAssStartDate(), requestDTO.getAssEndDate(), requestDTO.getCaregiverId());
                caregiver1Repo.save(caregiver1);
                return "Elder successfully added";
            //     } catch (Exception e) {
            //     return "error";
            // }

            }else{

                int freecare = caregiver.get(0).getFree();
                int assignedcare = caregiver.get(0).getAssigned();
                int occupiedcare = caregiver.get(0).getOccupied();
                Date occuStartDateBedcare = caregiver.get(0).getOccuStartDate();
                Date occuEndDateBedcare = caregiver.get(0).getOccuEndDate();
                char gender = caregiver.get(0).getGender();
                int age = caregiver.get(0).getAge();

                Caregiver1 caregiver1 = new Caregiver1(gender, freecare, age, assignedcare, occupiedcare, occuStartDateBedcare, occuEndDateBedcare, requestDTO.getAssStartDate(), requestDTO.getAssEndDate(), requestDTO.getCaregiverId());
                caregiver1Repo.save(caregiver1);
                return "Elder successfully added";

            }
            } catch (Exception e) {
                return "error";}

        }else{

        int free = bed.get(0).getFree();
        int assigned = bed.get(0).getAssigned();
        int occupied = bed.get(0).getOccupied();
        Date occuStartDateBed = bed.get(0).getOccuStartDate();
        Date occuEndDateBed = bed.get(0).getOccuEndDate();
        int occuElderId = bed.get(0).getOccuElderId();
        int caregiveridoccu = bed.get(0).getCaregiveridoccu();

        
        Bed bed1 = new Bed(requestDTO.getBed_id(),
        free, assigned,
        occupied,requestDTO.getAssStartDate(),
        requestDTO.getAssEndDate(), occuStartDateBed,
        occuEndDateBed,occuElderId,
        requestDTO.getAssElderId(),requestDTO.getType(),
        requestDTO.getCaregiverId(),caregiveridoccu);

        bedRepo.save(bed1);

        if (caregiver.get(0).getFree() == 1){

                caregiver.get(0).setAssStartDate(requestDTO.getAssStartDate());
                caregiver.get(0).setAssEndDate(requestDTO.getAssEndDate());
                caregiver.get(0).setFree(0);
                caregiver.get(0).setAssigned(1);
                caregiver.get(0).setOccupied(0);
                caregiver1Repo.save(caregiver.get(0));
                return "Elder successfully added";

            }else if (caregiver.get(0).getAssigned() == 1 && caregiver.get(0).getOccupied() == 0){
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                try {
                    // Parse the date string and convert it to java.sql.Date
                    java.util.Date utilDate = dateFormat.parse("2000-01-01");
                    java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
                int freecare = caregiver.get(0).getFree();
                int assignedcare = caregiver.get(0).getAssigned();
                int occupiedcare = caregiver.get(0).getOccupied();
                Date occuStartDateBedcare = null;
                Date occuEndDateBedcare = null;
                char gender = caregiver.get(0).getGender();
                int age = caregiver.get(0).getAge();

                Caregiver1 caregiver1 = new Caregiver1(gender, freecare, age, assignedcare, occupiedcare, occuStartDateBedcare, occuEndDateBedcare, requestDTO.getAssStartDate(), requestDTO.getAssEndDate(), requestDTO.getCaregiverId());
                caregiver1Repo.save(caregiver1);
                return "Elder successfully added";
                } catch (Exception e) {
                return "error";
            }

            }else{

                int freecare = caregiver.get(0).getFree();
                int assignedcare = caregiver.get(0).getAssigned();
                int occupiedcare = caregiver.get(0).getOccupied();
                Date occuStartDateBedcare = caregiver.get(0).getOccuStartDate();
                Date occuEndDateBedcare = caregiver.get(0).getOccuEndDate();
                char gender = caregiver.get(0).getGender();
                int age = caregiver.get(0).getAge();

                Caregiver1 caregiver1 = new Caregiver1(gender, freecare, age, assignedcare, occupiedcare, occuStartDateBedcare, occuEndDateBedcare, requestDTO.getAssStartDate(), requestDTO.getAssEndDate(), requestDTO.getCaregiverId());
                caregiver1Repo.save(caregiver1);
                return "Elder successfully added";

            }
        }
    }

    public BedResponse Tempreqcheck(RequestDTO requestDTO){
        Tempreq tempreq = tempreqRepo.getTempreq1(requestDTO.getAssStartDate());
        Tempreq tempreq2 = tempreqRepo.getTempreq2(requestDTO.getAssEndDate());

        if (tempreq == null && tempreq2 == null){
            BedResponse response = new BedResponse(requestDTO.getId(), "good");
            return response;
        }else{

        if (tempreq != null){
            BedResponse response = new BedResponse(requestDTO.getId(), "good");
            return response;
        }else if (tempreq2 != null){
            BedResponse response = new BedResponse(requestDTO.getId(), "good");
            return response;
        }else{
            BedResponse response = new BedResponse(0, "bad");
            return response;
        }
    }
    }

    public List<BedResponse2> getOccu(){
        List<BedResponse2> myObjectList = new ArrayList<>();
        int[] bedIds = bedRepo.getDistinctBed();
        // for (int bedId : bedIds){
        //     List<Bed> bed = bedRepo.findAllBeds(bedId);
        //     Elder1 elder1 = elder1Repo.findByElderid(bed.get(0).getOccuElderId());
        //     BedResponse2 bedResponse2 = new BedResponse2(elder1.getFirstname(), bed.get(0).getOccuStartDate(), bedId, bed.get(0).getOccuEndDate(), bed.get(0).getOccuElderId());
        //     myObjectList.add(bedResponse2);
        // }

        for (int bedId : bedIds){
            List<Bed> bed = bedRepo.findAllBeds(bedId);
            if (bed.get(0).getAssigned() == 1 && bed.get(0).getOccupied() == 0){
                Elder1 elder1 = elder1Repo.findByElderid(bed.get(0).getAssElderId());
                BedResponse2 bedResponse2 = new BedResponse2(elder1.getFirstname(), bed.get(0).getAssStartDate(), bedId, bed.get(0).getAssEndDate(), bed.get(0).getAssElderId());
                myObjectList.add(bedResponse2);
            }else{
                Elder1 elder1 = elder1Repo.findByElderid(bed.get(0).getOccuElderId());
                BedResponse2 bedResponse2 = new BedResponse2(elder1.getFirstname(), bed.get(0).getOccuStartDate(), bedId, bed.get(0).getOccuEndDate(), bed.get(0).getOccuElderId());
                myObjectList.add(bedResponse2);
            }
        }
        return myObjectList;
    }

    public String func5(int id){
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                try {
                    // Parse the date string and convert it to java.sql.Date
                    java.util.Date utilDate = dateFormat.parse("2000-01-01");
                    java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
        List<Bed> bedss = bedRepo.findAllBeds(id);
        if (bedss.get(0).getAssigned() == 0){
            // SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            try {
                    // Parse the date string and convert it to java.sql.Date
                    // java.util.Date utilDate = dateFormat.parse("2000-01-01");
                    // java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
            bedss.get(0).setOccuStartDate(sqlDate);
            bedss.get(0).setOccuEndDate(sqlDate);
            bedss.get(0).setCaregiveridoccu(0);
            bedss.get(0).setFree(1);
            bedss.get(0).setOccupied(0);
            bedRepo.save(bedss.get(0));

            List<Caregiver1> caregivers = caregiver1Repo.findAllCaregivers(bedss.get(0).getCaregiveridoccu());
            
            if (caregivers.get(0).getAssigned() == 0){
                caregivers.get(0).setAssStartDate(sqlDate);
                caregivers.get(0).setAssEndDate(sqlDate);
                caregivers.get(0).setFree(1);
                caregivers.get(0).setOccupied(0);
                caregiver1Repo.save(caregivers.get(0));

                return "hi";
            }else if (caregivers.size() == 1){
                Date date1 = bedss.get(0).getAssStartDate();
                Date date2 = bedss.get(0).getAssEndDate();

                caregivers.get(0).setOccuStartDate(date1);
                caregivers.get(0).setOccuEndDate(date2);
                caregivers.get(0).setAssigned(0);
                caregiver1Repo.save(caregivers.get(0));

                return "hi";
            }else{
                int caregiveridoccu = bedss.get(0).getCaregiverId();
                Date date1 = bedss.get(0).getAssStartDate();
                Date date2 = bedss.get(0).getAssEndDate();
                Caregiver1 caregiver1 = caregiver1Repo.findAllCaregivers1(caregiveridoccu, date1);
                int iddd = caregiver1.getId();
                List<Caregiver1> caregiverss = caregiver1Repo.findAllCaregivers(caregiveridoccu);

                for (Caregiver1 caregiver : caregiverss){
                    caregiver.setOccuStartDate(date1);
                    caregiver.setOccuEndDate(date2);
                    caregiver = caregiver1Repo.save(caregiver);
                }
                caregiver1Repo.deleteById(iddd);

                return "hi";
            }

            } catch (Exception e) {
                return "error";}
        }else if (bedss.size() == 1 && bedss.get(0).getAssigned() == 1 && bedss.get(0).getOccupied() == 1){
            Date date1 = bedss.get(0).getAssStartDate();
            Date date2 = bedss.get(0).getAssEndDate();
            int caregiveridoccu = bedss.get(0).getCaregiverId();

            bedss.get(0).setOccuStartDate(date1);
            bedss.get(0).setOccuEndDate(date2);
            bedss.get(0).setCaregiveridoccu(caregiveridoccu);
            bedss.get(0).setAssigned(0);
            bedRepo.save(bedss.get(0));
            
            List<Caregiver1> caregivers = caregiver1Repo.findAllCaregivers(bedss.get(0).getCaregiveridoccu());
            
            if (caregivers.get(0).getAssigned() == 0){
                // SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                try {
                    // Parse the date string and convert it to java.sql.Date
                    // java.util.Date utilDate = dateFormat.parse("2000-01-01");
                    // java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
                caregivers.get(0).setAssStartDate(sqlDate);
                caregivers.get(0).setAssEndDate(sqlDate);
                caregivers.get(0).setFree(1);
                caregivers.get(0).setOccupied(0);
                caregiver1Repo.save(caregivers.get(0));

                return "hi";
                } catch (Exception e) {
                return "error";
            }
            }else if (caregivers.size() == 1){
                

                caregivers.get(0).setOccuStartDate(date1);
                caregivers.get(0).setOccuEndDate(date2);
                caregivers.get(0).setAssigned(0);
                caregiver1Repo.save(caregivers.get(0));

                return "hi";
            }else{
                
                Caregiver1 caregiver1 = caregiver1Repo.findAllCaregivers1(caregiveridoccu, date1);
                int iddd = caregiver1.getId();
                List<Caregiver1> caregiverss = caregiver1Repo.findAllCaregivers(caregiveridoccu);

                for (Caregiver1 caregiver : caregiverss){
                    caregiver.setOccuStartDate(date1);
                    caregiver.setOccuEndDate(date2);
                    caregiver = caregiver1Repo.save(caregiver);
                }
                caregiver1Repo.deleteById(iddd);

                return "hi";
            }
        }else if (bedss.get(0).getAssigned() == 1 && bedss.get(0).getOccupied() == 0 && bedss.size() == 1){
            Date date1 = bedss.get(0).getAssStartDate();
            Date date2 = bedss.get(0).getAssEndDate();
            int caregiveridoccu = bedss.get(0).getCaregiverId();
            int occuelderid = bedss.get(0).getAssElderId();

            bedss.get(0).setOccuStartDate(date1);
            bedss.get(0).setOccuEndDate(date2);
            bedss.get(0).setCaregiveridoccu(caregiveridoccu);
            bedss.get(0).setOccupied(1);
            bedss.get(0).setAssigned(0);
            bedss.get(0).setCaregiverId(0);
            bedss.get(0).setAssElderId(0);
            bedss.get(0).setAssStartDate(sqlDate);
            bedss.get(0).setAssEndDate(sqlDate);
            bedss.get(0).setOccuElderId(occuelderid);

            bedRepo.save(bedss.get(0));

            List<Caregiver1> caregivers = caregiver1Repo.findAllCaregivers(bedss.get(0).getCaregiveridoccu());
            
            if (caregivers.get(0).getAssigned() == 0){
                // SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                try {
                    // Parse the date string and convert it to java.sql.Date
                    // java.util.Date utilDate = dateFormat.parse("2000-01-01");
                    // java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
                caregivers.get(0).setAssStartDate(sqlDate);
                caregivers.get(0).setAssEndDate(sqlDate);
                caregivers.get(0).setFree(1);
                caregivers.get(0).setOccupied(0);
                caregiver1Repo.save(caregivers.get(0));

                return "hi";
                } catch (Exception e) {
                return "error";
            }
            }else if (caregivers.size() == 1 && caregivers.get(0).getAssigned() == 1 && caregivers.get(0).getOccupied() == 0){
                // SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                try {
                    // Parse the date string and convert it to java.sql.Date
                    // java.util.Date utilDate = dateFormat.parse("2000-01-01");
                    // java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());

                caregivers.get(0).setOccuStartDate(date1);
                caregivers.get(0).setOccuEndDate(date2);
                caregivers.get(0).setAssigned(0);
                caregivers.get(0).setOccupied(1);
                caregivers.get(0).setAssStartDate(sqlDate);
                caregivers.get(0).setAssEndDate(sqlDate);
                caregiver1Repo.save(caregivers.get(0));

                return "hi";
                } catch (Exception e) {
                return "error";
            }
            }else{
                
                Caregiver1 caregiver1 = caregiver1Repo.findAllCaregivers1(caregiveridoccu, date1);
                int iddd = caregiver1.getId();
                List<Caregiver1> caregiverss = caregiver1Repo.findAllCaregivers(caregiveridoccu);

                for (Caregiver1 caregiver : caregiverss){
                    caregiver.setOccuStartDate(date1);
                    caregiver.setOccuEndDate(date2);
                    caregiver = caregiver1Repo.save(caregiver);
                }
                caregiver1Repo.deleteById(iddd);

                return "hi";
            }
        
        }else{
            List<Bed> beds = bedRepo.findAllBedsasc(id);
        Date date1 = beds.get(0).getAssStartDate();
        Date date2 = beds.get(0).getAssEndDate();
        int idd = beds.get(0).getId();
        int caregiveridoccu = beds.get(0).getCaregiverId();
        
        for (Bed bed : beds){
            bed.setOccuStartDate(date1);
            bed.setOccuEndDate(date2);
            bed.setCaregiveridoccu(caregiveridoccu);
            bed = bedRepo.save(bed);
        }
        bedRepo.deleteById(idd);

        List<Caregiver1> caregivers = caregiver1Repo.findAllCaregivers(bedss.get(0).getCaregiveridoccu());
            
            if (caregivers.get(0).getAssigned() == 0){
                // SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                try {
                    // Parse the date string and convert it to java.sql.Date
                    // java.util.Date utilDate = dateFormat.parse("2000-01-01");
                    // java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
                caregivers.get(0).setAssStartDate(sqlDate);
                caregivers.get(0).setAssEndDate(sqlDate);
                caregivers.get(0).setFree(1);
                caregivers.get(0).setOccupied(0);
                caregiver1Repo.save(caregivers.get(0));

                return "hi";
                } catch (Exception e) {
                return "error";
            }
            }else if (caregivers.size() == 1){
                

                caregivers.get(0).setOccuStartDate(date1);
                caregivers.get(0).setOccuEndDate(date2);
                caregivers.get(0).setAssigned(0);
                caregiver1Repo.save(caregivers.get(0));

                return "hi";
            }else{
                
                Caregiver1 caregiver1 = caregiver1Repo.findAllCaregivers1(caregiveridoccu, date1);
                int iddd = caregiver1.getId();
                List<Caregiver1> caregiverss = caregiver1Repo.findAllCaregivers(caregiveridoccu);

                for (Caregiver1 caregiver : caregiverss){
                    caregiver.setOccuStartDate(date1);
                    caregiver.setOccuEndDate(date2);
                    caregiver = caregiver1Repo.save(caregiver);
                }
                caregiver1Repo.deleteById(iddd);

                return "hi";
            }

        // Caregiver1 caregiver1 = caregiver1Repo.findAllCaregivers1(caregiveridoccu, date1);
        // int iddd = caregiver1.getId();
        // List<Caregiver1> caregivers = caregiver1Repo.findAllCaregivers(caregiveridoccu);

        // for (Caregiver1 caregiver : caregivers){
        //     caregiver.setOccuStartDate(date1);
        //     caregiver.setOccuEndDate(date2);
        //     caregiver = caregiver1Repo.save(caregiver);
        // }
        // caregiver1Repo.deleteById(iddd);

        // return "hi";
        }

        } catch (Exception e) {
                return "error";}
    }
    
    
}
