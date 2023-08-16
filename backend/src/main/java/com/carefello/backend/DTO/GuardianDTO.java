package com.carefello.backend.DTO;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


// @AllArgsConstructor
@NoArgsConstructor
public class GuardianDTO {

    // private int user_id;
    private String email;
    private String password;
    private String haddress;
    private String waddress;
    private String nic;
    private String fname;
    private String lname;
    private String cont;
    private String profession;



    public GuardianDTO(String email, String password, String fname, String lname, String cont, String nic,
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

    // public int getUser_id() {
    //     return user_id;
    // }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getHaddress() {
        return haddress;
    }

    public String getWaddress() {
        return waddress;
    }

    public String getNic() {
        return nic;
    }

    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public String getCont() {
        return cont;
    }

    public String getProfession() {
        return profession;
    }
}
