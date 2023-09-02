package com.carefello.backend.payload.response;

public class Response {
    String message;
    int id;
    
    public String getMessage() {
        return message;
    }
    public int getId() {
        return id;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public void setId(int id) {
        this.id = id;
    }
   
    public Response(String message, int id) {
        this.message = message;
        this.id = id;
    }
}
