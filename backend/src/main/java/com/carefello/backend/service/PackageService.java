package com.carefello.backend.service;

import com.carefello.backend.DTO.PackageDTO;
import com.carefello.backend.model.Package;
import com.carefello.backend.repo.PackageRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class PackageService {
    @Autowired
    private PackageRepo packageRepo;
    @Autowired
    private ModelMapper modelMapper;

    public PackageDTO addPackage(PackageDTO packageDTO){
        packageRepo.save(modelMapper.map(packageDTO , Package.class));
        return packageDTO;
    }

    public List<PackageDTO> viewPackages(){
        List<Package>packageList = packageRepo.findAll();
        return modelMapper.map(packageList,new TypeToken<List<PackageDTO>>(){}.getType());
    }

    public PackageDTO updatePackage(PackageDTO packageDTO){
        packageRepo.save(modelMapper.map(packageDTO, Package.class));
        return packageDTO;
    }
}
