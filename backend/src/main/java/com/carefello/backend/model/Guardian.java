package com.carefello.backend.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Guardian")

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
    private String Haddress;
    @Column(name = "Waddress", length = 255)
    private String Waddress;
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
                    String Haddress, String Waddress, String profession) {

        this.email = email;
        this.password = password;
        this.cont = cont;
        this.nic = nic;
        this.fname = fname;
        this.lname = lname;
        this.Haddress = Haddress;
        this.profession = profession;
        this.Waddress = Waddress;

    }

    public String getGuardianEmail(){
        return email;
    }

    public String getGuardianPassword(){
        return password;
    }
}
