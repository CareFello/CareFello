package com.carefello.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity

public class Elder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String nic;
    private LocalDate dob;
    private String relationship;
    private String gender;

    private byte[] image;

    @Transient
    private byte[] decompressedImage;



    @ManyToOne
    @JoinColumn(name = "guardian_id")
    private Guardian guardian;

    @OneToMany(mappedBy = "elder")
    private List<DailyTask> dailyTasks;

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

    public Guardian getGuardian() {
        return guardian;
    }

    public void setGuardian(Guardian guardian) {
        this.guardian = guardian;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public byte[] getDecompressedImage() {
        return decompressedImage;
    }

    public void setDecompressedImage(byte[] decompressedImage) {
        this.decompressedImage = decompressedImage;
    }

    public Elder() {
    }

    public Elder(int id, String name, String nic, LocalDate dob, String relationship, String gender, Guardian guardian) {
        this.id = id;
        this.name = name;
        this.nic = nic;
        this.dob = dob;
        this.relationship = relationship;
        this.gender = gender;
        this.guardian = guardian;
    }

    @OneToMany(mappedBy = "elder",cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ElderMedicalHistory> elderMedicalHistories = new ArrayList<>();

    public List<DailyTask> getDailyTasks() {
        return dailyTasks;
    }

    public void setDailyTasks(List<DailyTask> dailyTasks) {
        this.dailyTasks = dailyTasks;
    }

    public List<ElderMedicalHistory> getElderMedicalHistories() {
        return elderMedicalHistories;
    }

    public void setElderMedicalHistories(List<ElderMedicalHistory> elderMedicalHistories) {
        this.elderMedicalHistories = elderMedicalHistories;
    }
}
