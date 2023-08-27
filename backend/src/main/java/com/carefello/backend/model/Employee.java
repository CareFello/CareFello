package com.carefello.backend.model;

import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
@Table(name="employee")
public class Employee {

    @Id
    @Column(name="employee_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int employeeid;
    @Column(name="employee_name", length = 255)
    private String employeename;
    @Column(name="email", length = 255)
    private String email;
    @Column(name="password", length = 255)
    private String password;
    @Column(name="code", length = 255)
    private int code;

    public Employee() {

    }

    public Employee(int employeeid, String employeename, String email, String password, int code) {
        this.employeeid = employeeid;
        this.employeename = employeename;
        this.email = email;
        this.password = password;
        this.code = code;
    }

    public String getEmployeename() {
        return employeename;
    }

    public String getPassword() {
        return password;
    }

    public int getCode() {
        return code;
    }
    public String getEmail() {
        return email;
    }

}
