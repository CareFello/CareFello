package com.carefello.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.carefello.backend.payload.response.Forgotemail;
import com.carefello.backend.repo.EmployeeRepo;
import com.carefello.backend.DTO.EmailDTO;
import com.carefello.backend.model.Employee;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private EmployeeRepo employeeRepo1;

    
    // public EmailService(JavaMailSender javaMailSender) {
    //     this.javaMailSender = javaMailSender;
    // }

    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("praneethjayarathna43@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);

        javaMailSender.send(message);
    }

    public Forgotemail checkEmail(String email1){
        Employee employee = employeeRepo1.findByEmail(email1);
        if (employee != null){
            int random = employee.getCode();
            // sendEmail(email1, "Verification code", "Your verification code is "+random);
            return new Forgotemail("true", random);
        }else{
            return new Forgotemail("false", 0000);
        }
    }

    public Forgotemail checkCode(int code){
        Employee employee = employeeRepo1.findByCode(code);
        if (employee != null){
            return new Forgotemail("true", 0000);
        }else{
            return new Forgotemail("false", 0000);
        }
    }
}
