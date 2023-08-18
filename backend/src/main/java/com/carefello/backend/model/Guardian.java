package com.carefello.backend.model;

import jakarta.persistence.*;



@Entity
@Table(name = "guardian2")

public class Guardian {

    @Id
    @Column(name = "user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;
    @Column(name = "email", length = 255)
    private String email;
    @Column(name = "password", length = 255)
    private String password;
    @Column(name = "Haddress", length = 255)
    private String haddress;
    @Column(name = "Waddress", length = 255)
    private String waddress;
    @Column(name = "nic", length = 255)
    private String nic;
    @Column(name = "fname", length = 255)
    private String fname;
    @Column(name = "lname", length = 255)
    private String lname;
    @Column(name = "cont", length = 255)
    private String cont;
    @Column(name = "profession", length = 255)
    private String profession;


    public Guardian() {

    }

    public Guardian(String email, String password, String fname, String lname, String cont, String nic,
                    String haddress, String waddress, String profession) {

        this.email = email;
        this.password = password;
        this.cont = cont;
        this.nic = nic;
        this.fname = fname;
        this.lname = lname;
        this.haddress = haddress;
        this.profession = profession;
        this.waddress = waddress;

    }

    public String getGuardianEmail(){
        return email;
    }

    public String getGuardianPassword(){
        return password;
    }

    public String getPassword() {
        return password;
    }
}
