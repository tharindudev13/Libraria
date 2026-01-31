package com.example.libraria.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.libraria.dto.BookDto;
import com.example.libraria.model.Book;
import com.example.libraria.repo.BookRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BookService {

    @Autowired
    private BookRepo bookRepo;

    @Autowired
    private ModelMapper modelMapper;

    public BookDto getBook(String isbn){
        Optional<Book> book = bookRepo.findById(isbn);
        return modelMapper.map(book, new TypeToken<BookDto>(){}.getType());
        
    }
}
