package com.carefello.backend.model;
import lombok.Data;

import jakarta.persistence.*;

@Data
@Entity
@Table(name="room")
public class Room {

    @Id
    @Column(name="room_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int roomId;
    @Column(name="type", length = 255)
    private String type;
    @Column(name="availability", length = 255)
    private int availability;
   
    
    

    public Room() {

    }

    public Room(String type, int availability) {
        
        this.type = type;
        this.availability = availability;
    }

    public String getType() {
        return type;
    }

    public int getAvailability() {
        return availability;
    }
    
}
