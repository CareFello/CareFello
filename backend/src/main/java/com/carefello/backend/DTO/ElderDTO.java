package com.carefello.backend.DTO;

import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

public class ElderDTO {

    private int id;
    private String name;
    private String nic;
    private LocalDate dob;
    private String relationship;

    private MultipartFile image;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImageFile(MultipartFile image) {
        this.image = image;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }
}
