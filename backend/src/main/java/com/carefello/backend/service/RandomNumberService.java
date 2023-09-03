package com.carefello.backend.service;

import java.security.SecureRandom;
import org.springframework.stereotype.Service;

@Service
public class RandomNumberService {

    public int generateRandom6DigitNumber() {
        SecureRandom secureRandom = new SecureRandom();
        int randomNumber = secureRandom.nextInt(900000) + 100000; // Generates a number between 100000 and 999999
        return randomNumber;
    }
}

