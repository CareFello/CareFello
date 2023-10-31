package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.ElderDTO;
import com.carefello.backend.DTO.ElderWithGuardianDTO;
import com.carefello.backend.Util.ImageUtil;
import com.carefello.backend.model.Elder;
import com.carefello.backend.model.Elder1;
import com.carefello.backend.model.Elderguar;
import com.carefello.backend.model.Guardian;
import com.carefello.backend.model.Tempreq;
import com.carefello.backend.payload.response.ElderInfo;
import com.carefello.backend.payload.response.ElderRequest;
import com.carefello.backend.repo.Elder1Repo;
import com.carefello.backend.repo.ElderRepo;
import com.carefello.backend.repo.ElderguarRepo;
import com.carefello.backend.repo.GuardianRepo;
import com.carefello.backend.service.ElderService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ElderImpl implements ElderService {

    @Autowired
    private GuardianRepo guardianRepo;

    @Autowired
    private ElderguarRepo elderguarRepo;

    @Autowired
    private Elder1Repo elder1Repo;

    @Autowired
    private ElderRepo elderRepo;

    @Override
    public String addElderToGuardian(int guardianId, ElderDTO elderDTO) {
        // Retrieve the guardian
        Guardian guardian = guardianRepo.findById(guardianId)
                .orElseThrow(() -> new EntityNotFoundException("Guardian not found"));

        // Check if the elder count exceeds the maximum limit
        if (guardian.getElders().size() >= 4) {
            throw new MaxEldersReachedException("Maximum elders reached for this guardian");
        }

        // Create an Elder instance and populate it with elderDTO data
        Elder elder = new Elder();
        elder.setName(elderDTO.getName());
        elder.setDob(elderDTO.getDob());
        elder.setNic(elderDTO.getNic());
        elder.setGuardian(guardian);
        elder.setRelationship(elderDTO.getRelationship());
        elder.setGender(elderDTO.getGender());



        // Save the elder and update the guardian's elders list
        guardian.getElders().add(elder);
        guardianRepo.save(guardian);

        LocalDate currentDate = LocalDate.now();
        Period period = Period.between(elderDTO.getDob(), currentDate);

        Elder nic = elderRepo.findByNic(elderDTO.getNic());

        Elder1 elder1 = new Elder1(elderDTO.getName(), elderDTO.getName(), period.getYears(), elderDTO.getGender(), nic.getId());
        elder1Repo.save(elder1);

        Elderguar elderguar = new Elderguar(guardianId, nic.getId());
        elderguarRepo.save(elderguar);

        return "hi";
    }

    public class MaxEldersReachedException extends RuntimeException {
        public MaxEldersReachedException(String message) {
            super(message);
        }
    }

    @Override
    public List<ElderDTO> getEldersByGuardianId(int guardianId){
        List<Elder> elders = elderRepo.findByGuardianId(guardianId);
        List<ElderDTO> elderDTOs = new ArrayList<>();

        for (Elder elder : elders){
            ElderDTO elderDTO = new ElderDTO();
            elderDTO.setId(elder.getId());
            elderDTO.setName(elder.getName());
            elderDTO.setNic(elder.getNic());
            elderDTO.setDob(elder.getDob());
            elderDTO.setRelationship(elder.getRelationship());
            elderDTO.setGender(elder.getGender());


            if (elder.getImage() != null) {
                byte[] decompressedImage = ImageUtil.decompressImage(elder.getImage());
                elderDTO.setImage(decompressedImage);
            } else {
                // Set the image field to null in ElderDTO
                elderDTO.setImage(null);
            }

            elderDTOs.add(elderDTO);
        }

        return elderDTOs;
    }

    @Override
    public ElderDTO getElderById(int guardianId, int elderId) {
        // Retrieve the elder by elderId and guardianId
        Elder elder = elderRepo.findByIdAndGuardianId(elderId, guardianId)
                .orElseThrow(() -> new EntityNotFoundException("Elder not found"));

        // Create an ElderDTO instance and populate it with elder data
        ElderDTO elderDTO = new ElderDTO();
        elderDTO.setId(elder.getId());
        elderDTO.setName(elder.getName());
        elderDTO.setNic(elder.getNic());
        elderDTO.setDob(elder.getDob());
        elderDTO.setRelationship(elder.getRelationship());
        elderDTO.setGender(elder.getGender());

        if (elder.getImage() != null) {
            byte[] decompressedImage = ImageUtil.decompressImage(elder.getImage());
            elderDTO.setImage(decompressedImage);
        } else {
            // Set the image field to null in ElderDTO if no image exists
            elderDTO.setImage(null);
        }

        return elderDTO;
    }

    @Override
    public List<ElderWithGuardianDTO> getAllElders() {
        List<ElderWithGuardianDTO> result = new ArrayList<>();
        List<Elder> elders = elderRepo.findAll(); // Fetch all elders without specifying a guardian

        for (Elder elder : elders) {
            ElderWithGuardianDTO elderWithGuardianDTO = new ElderWithGuardianDTO();
            elderWithGuardianDTO.setName(elder.getName());
            elderWithGuardianDTO.setNic(elder.getNic());
            elderWithGuardianDTO.setAge(calculateAge(elder.getDob()));

            // Assuming you have a 'getGuardian' method in your Elder entity
            if (elder.getGuardian() != null) {
                elderWithGuardianDTO.setGuardianName(elder.getGuardian().getFname());
                elderWithGuardianDTO.setGuardianId(elder.getGuardian().getId());
            } else {
                // Handle the case where the elder has no guardian
                elderWithGuardianDTO.setGuardianName("No Guardian");
                elderWithGuardianDTO.setGuardianId(-1); // You can use a suitable value for no guardian
            }

            if (elder.getImage() != null) {
                byte[] decompressedImage = ImageUtil.decompressImage(elder.getImage());
                elderWithGuardianDTO.setImage(decompressedImage);
            } else {
                elderWithGuardianDTO.setImage(null);
            }

            result.add(elderWithGuardianDTO);
        }

        return result;
    }


    private int calculateAge(LocalDate dob) {
        LocalDate currentDate = LocalDate.now();
        Period period = Period.between(dob, currentDate);
        return period.getYears();
    }


    @Override
    public void updateElderImage(int elderId, MultipartFile imageFile){
        Optional<Elder> elderOptional = elderRepo.findById(elderId);
        if(elderOptional.isPresent()){
            try {
                Elder elder = elderOptional.get();
                byte[] compressedImage = ImageUtil.compressImage(imageFile.getBytes());
                elder.setImage(compressedImage);
                elderRepo.save(elder);
            }catch (IOException e){
        }
    }else {

        }
}
    @Override
    public List<ElderInfo> getElders(int id){
        List<Elderguar> elderguars = elderguarRepo.findByguardianid(id);
        List<ElderInfo> myObjectList = new ArrayList<>();
        for (Elderguar elderguar : elderguars){
            Elder1 elder1 = elder1Repo.findByElderid(elderguar.getElderid());
            ElderInfo elderInfo = new ElderInfo(elder1.getAge(), elder1.getFirstname(), elder1.getGender(), elder1.getLastname(), elder1.getElderid());
            myObjectList.add(elderInfo);
        }
        return myObjectList;
    }

    // @Override
    // public List<Elder1> getElder2(int guardianId){
    //     List<Elder1> myObjectList = new ArrayList<>();
    //     List<Elderguar> elderguars = elderguarRepo.findByguardianid(guardianId);
    //     for (Elderguar elderguar : elderguars){
    //         Eldet
    //     }
    // }


}

