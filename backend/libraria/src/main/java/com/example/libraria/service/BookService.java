package com.example.libraria.service;

import java.util.List;
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

    public Iterable<BookDto> getAllBooks(){
        Iterable<Book> books = bookRepo.findAll();
        return modelMapper.map(books, new TypeToken<Iterable<BookDto>>(){}.getType());
    }

    
    public List<Book> searchBooks(String keyword){
        if (keyword != null && !keyword.trim().isEmpty()) {
            keyword = keyword.toLowerCase();    
            return bookRepo.searchBooks(keyword);
        }else{
            return List.of(); // Return an empty list if the keyword is null or empty
        }
    } 
}
