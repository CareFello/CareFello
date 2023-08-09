package com.carefello.backend.controller;


import com.carefello.backend.DTO.PackageDTO;
import com.carefello.backend.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/package")
@CrossOrigin

public class PackageController {
    @Autowired
    private PackageService packageService;


    @PostMapping("/addPackage")
    public PackageDTO addPackage(@RequestBody PackageDTO packageDTO){
        return packageService.addPackage(packageDTO);
    }

    @GetMapping("/viewPackage")
    public List<PackageDTO> viewPackage(){
        return packageService.viewPackages();
    }

    @PutMapping("/updatePackage")
    public PackageDTO updatePackage(@RequestBody PackageDTO packageDTO){
        return packageService.updatePackage(packageDTO);
    }
}
