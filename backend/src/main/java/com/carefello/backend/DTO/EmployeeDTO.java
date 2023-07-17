package com.carefello.backend.DTO;

public class EmployeeDTO {
    
    private int employeeid;
    private String employeename;
    private String email;
    private String password;
    public EmployeeDTO() {
    }
    public EmployeeDTO(int employeeid, String employeename, String email, String password) {
        this.employeeid = employeeid;
        this.employeename = employeename;
        this.email = email;
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public int getEmployeeid() {
        return employeeid;
    }
    public String getEmployeename() {
        return employeename;
    }
    public CharSequence getPassword() {
        return password;
    }
}
