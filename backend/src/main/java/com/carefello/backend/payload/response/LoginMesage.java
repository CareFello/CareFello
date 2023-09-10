package com.carefello.backend.payload.response;

public class LoginMesage {
    String message;
    Boolean status;
    int id;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LoginMesage(String message, Boolean status, int id) {
        this.message = message;
        this.status = status;
        this.id = id;
    }




}


