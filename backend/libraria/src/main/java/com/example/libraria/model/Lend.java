package com.example.libraria.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Lend {
    @Id
    private Integer lend_id;
    private String email;
    private String isbn;
    private Date lend_date;
    private String status;
    private Date returnedDate;
    private String title;
}
