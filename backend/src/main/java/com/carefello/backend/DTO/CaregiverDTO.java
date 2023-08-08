package com.carefello.backend.DTO;
import java.sql.Date;

public class CaregiverDTO {
    
    private String email;
    private String password;
    private Date dob;
    private String address;
    private String nic;
    private char gender;
    private int availability;
    private String name1;
    private String name2;
    private String cont;
    
    public CaregiverDTO() {
    }
    public CaregiverDTO(String email, String password, Date dob, String address, String nic,
    char gender, int availability, String name1, String name2, String cont) {
        
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.address = address;
        this.nic = nic;
        this.gender = gender;
        this.availability = availability;
        this.name1 = name1;
        this.name2 = name2;
        this.cont = cont;
        
    }
    public String getEmail() {
        return email;
    }
    public String getAddress() {
        return address;
    }
    public String getNic() {
        return nic;
    }
    public Date getdob() {
        return dob;
    }
    public char getGender() {
        return gender;
    }
    public CharSequence getPassword() {
        return password;
    }
    public int getAvailability(){
        return availability;
    }
    public String getName1() {
        return name1;
    }
    public String getName2() {
        return name2;
    }
    public String getCont() {
        return cont;
    }
    
    
}
