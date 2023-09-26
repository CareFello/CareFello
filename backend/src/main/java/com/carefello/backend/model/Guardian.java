package com.carefello.backend.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "guardian2")

public class Guardian {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;
    private String email;
    private String fname;
    private String lname;
    private String nic;
    private String cont;
    private String hAddress;
    private String wAddress;
    private String profession;
    private String password;

    public Guardian() {
    }

    public Guardian(int user_id, String email, String fname, String lname, String nic, String cont, String hAddress, String wAddress, String profession, String password) {
        this.user_id = user_id;
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.nic = nic;
        this.cont = cont;
        this.hAddress = hAddress;
        this.wAddress = wAddress;
        this.profession = profession;
        this.password = password;
    }

    public int getId() {
        return user_id;
    }

    public void setId(int user_id) {
        this.user_id = user_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getCont() {
        return cont;
    }

    public void setCont(String cont) {
        this.cont = cont;
    }

    public String gethAddress() {
        return hAddress;
    }

    public void sethAddress(String hAddress) {
        this.hAddress = hAddress;
    }

    public String getwAddress() {
        return wAddress;
    }

    public void setwAddress(String wAddress) {
        this.wAddress = wAddress;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @OneToMany(mappedBy = "guardian",cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Elder> elders = new ArrayList<>();

    public List<Elder> getElders(){
        return elders;
    }

    public void setElders(List<Elder> elders){
        this.elders = elders;
    }
}
