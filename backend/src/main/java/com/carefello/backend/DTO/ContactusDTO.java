package com.carefello.backend.DTO;

import lombok.Data;



@Data
public class ContactusDTO {

    private String name;
    private String email;
    private String subject;
    private String message;
}
