package com.carefello.backend.DTO;
import java.sql.Date;

public class CaregiverDTO {
    
  
    private String first_name;
    private String email;
    private String password;
    private String last_name;
    private String contact_no;
    private Date DOB;
    private String address;
    private String nic;
    private char gender;
    private int user_id;
    private double rating;
    private int availability;
  
    
    
    public CaregiverDTO() {
    }
    public CaregiverDTO(int user_id, String first_name, String email, String password,
    String last_name, String contact_no, Date DOB, String address, String nic, double rating,
    char gender, int availability) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.email = email;
        this.password = password;
        this.last_name = last_name;
        this.contact_no = contact_no;
        this.DOB = DOB;
        this.address = address;
        this.nic = nic;
        this.rating = rating;
        this.gender = gender;
        this.availability = availability;
    }
    public String getEmail() {
        return email;
    }
    public String getFirstName() {
        return first_name;
    }
    public String getlastName() {
        return last_name;
    }
    public String getAddress() {
        return address;
    }
    public String getNic() {
        return nic;
    }
    public String getContactNo() {
        return contact_no;
    }
    public Date getDob() {
        return DOB;
    }
    public char getGender() {
        return gender;
    }
   
    public CharSequence getPassword() {
        return password;
    }
    public int getUserId() {
        return user_id;
    }
    public int getAvailability() {
        return availability;
    }
    public double getRating() {
        return rating;
    }
}
