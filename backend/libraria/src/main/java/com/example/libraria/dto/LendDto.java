package com.example.libraria.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LendDto {
    private Integer lend_id;
    private String email;
    private String isbn;
    private Date lend_date;
}
