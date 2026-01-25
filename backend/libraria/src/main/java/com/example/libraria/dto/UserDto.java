package com.example.libraria.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String email;
    private String password;
    private String fName;
    private String lName;
    private String Address;
    private Integer phone;
    private Boolean isLoggedin;
}
