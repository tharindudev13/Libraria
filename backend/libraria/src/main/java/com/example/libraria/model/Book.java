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
public class Book {
    @Id
    private String isbn;
    private Integer Id;
    private String title;
    private String author;
    private String category;
    private Integer total_copies;
    private Integer available_copies;
    private String image_url;
    private String language;

}
