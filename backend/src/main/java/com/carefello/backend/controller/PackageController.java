package com.carefello.backend.controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.carefello.backend.DTO.RequestDTO;
import com.carefello.backend.model.Package;

import com.carefello.backend.repo.PackageRepo;

@CrossOrigin
@RestController
@RequestMapping("/api/package")

public class PackageController{
    private final PackageRepo PackageRepo;

    @Autowired
    private PackageRepo packageRepo;

    @Autowired
    public PackageController(PackageRepo PackageRepo){
        this.PackageRepo = PackageRepo;
    }

    @GetMapping("/get")
    public List<Package> getAllPackage(){
        return PackageRepo.findAll();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Package> updatePack(@PathVariable int id, @RequestBody Package updatedItem) {
        Package pack = PackageRepo.findById(id).orElseThrow(RuntimeException::new);
        pack.setConten(updatedItem.getConten());
        pack.setPrice(updatedItem.getPrice());
        pack.setFeature(updatedItem.getFea());
        pack = PackageRepo.save(pack);

        return ResponseEntity.ok(pack);
    }

    @PostMapping("/cal")
    public long calculatePrice(@RequestBody RequestDTO requestDTO){
        
        LocalDate localDate1 = requestDTO.getAssStartDate().toLocalDate();
        LocalDate localDate2 = requestDTO.getAssEndDate().toLocalDate();
        long days = ChronoUnit.DAYS.between(localDate1, localDate2);
        long price = 0;

        long mealpri = (long) requestDTO.getMealprice();

        Package basicPack = packageRepo.findPrice("basic");
        long basicPrice = Long.parseLong(basicPack.getPrice());

        Package classicPack = packageRepo.findPrice("classic");
        long classicPrice = Long.parseLong(classicPack.getPrice());

        Package luxuryPack = packageRepo.findPrice("luxury");
        long luxuryPrice = Long.parseLong(luxuryPack.getPrice());

        if ("basic".equals(requestDTO.getType())){
            if (days <= 7){
                price = days*basicPrice*120/100;
            }else if (days > 7 && days <= 30){
                price = days*basicPrice*110/100;
            }else{
                price = days*basicPrice;
            }
        }else if("classic".equals(requestDTO.getType())){
            if (days <= 7){
                price = days*classicPrice*120/100;
            }else if (days > 7 && days <= 30){
                price = days*classicPrice*110/100;
            }else{
                price = days*classicPrice;
            }
        }else{
            if (days <= 7){
                price = days*luxuryPrice*120/100;
            }else if (days > 7 && days <= 30){
                price = days*luxuryPrice*110/100;
            }else{
                price = days*luxuryPrice;
            }
        }

        return price+mealpri;


    }

}
