package com.carefello.backend.repo;

import com.carefello.backend.model.Package;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageRepo extends JpaRepository<Package, Integer> {
}
