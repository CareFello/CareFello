package com.carefello.backend.payload.response;

public class Forgotemail {
    String message;
    int code;
    
    public String getMessage() {
        return message;
    }
    public int getCode() {
        return code;
    }
    public void setMessage(String message) {
        this.message = message;
    }
   
    public void setCode(int code) {
        this.code = code;
    }

    public Forgotemail(String message, int code){
        this.message = message;
        this.code = code;
    }
    
}
