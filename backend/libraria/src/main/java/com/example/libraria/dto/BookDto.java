package com.example.libraria.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
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
