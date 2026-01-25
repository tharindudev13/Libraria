package com.example.libraria.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    @Id
    private String email;
    private String password;
    private String fName;
    private String lName;
    private String Address;
    private Integer phone;
    private Boolean isLoggedin;

}
