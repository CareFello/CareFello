package com.carefello.backend.DTO;

public class DoctorDTO {
    
    private String email;
    private String password;
    private String nic;
    private String name1;
    private String name2;
    private String cont;
    private String reg;

    public DoctorDTO() {

    }

    public DoctorDTO(String email, String password, String nic,
    String name1, String name2, String cont, String reg) {
        
        this.email = email;
        this.password = password;
        this.nic = nic;
        this.name1 = name1;
        this.name2 = name2;
        this.cont = cont;
        this.reg = reg;
    }

    public String getEmail() {
        return email;
    }
    public String getNic() {
        return nic;
    }
    public CharSequence getPassword() {
        return password;
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
    public String getreg() {
        return reg;
    }
}
