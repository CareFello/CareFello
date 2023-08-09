package com.carefello.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.carefello.backend.model.Package;

import com.carefello.backend.repo.PackageRepo;

@CrossOrigin
@RestController
@RequestMapping("/api/package")

public class PackageController{
    private final PackageRepo PackageRepo;

    @Autowired
    public PackageController(PackageRepo PackageRepo){
        this.PackageRepo = PackageRepo;
    }

    @GetMapping("/get")
    public List<Package> getAllPackage(){
        return PackageRepo.findAll();
    }

}
