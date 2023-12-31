package com.carefello.backend.service;

import java.util.List;

import com.carefello.backend.DTO.RequestDTO;
import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Caregiver1;
import com.carefello.backend.model.Price;
import com.carefello.backend.payload.response.BedResponse;
import com.carefello.backend.payload.response.BedResponse1;
import com.carefello.backend.payload.response.BedResponse2;
import com.carefello.backend.payload.response.ElderRequest;

public interface RequestService {

    List<Bed> validateRequest(RequestDTO requestDTO);
    List<Caregiver1> validateRequest1(RequestDTO requestDTO);
    // String assignElder(RequestDTO requestDTO);
    // String assignCaregiver(RequestDTO requestDTO);
    BedResponse validateRequest2(int[] id, RequestDTO requestDTO);
    BedResponse validateRequest3(int[] id, RequestDTO requestDTO);
    List<ElderRequest> func1();
    List<ElderRequest> func111();
    BedResponse1 func2(int id);
    String assignElder1(RequestDTO requestDTO);
    BedResponse Tempreqcheck(RequestDTO requestDTO);
    // BedResponse TempreqcheckCaregiver(RequestDTO requestDTO);
    List<BedResponse2> getOccu();
    List<BedResponse2> getOccu1();
    String func5(int id);

}
