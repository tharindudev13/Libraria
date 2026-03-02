package com.example.libraria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.libraria.dto.BookDto;
import com.example.libraria.model.Book;
import com.example.libraria.service.BookService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;





@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/test")
    public String Test(){
        return "Controller is working";
    }

    @GetMapping("/getallbooks")
    public Iterable<BookDto> getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/book/{isbn}")
    public BookDto getBook(@PathVariable String isbn){
        return bookService.getBook(isbn);
    }

    @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam String keyword) {
        return bookService.searchBooks(keyword);
    }
    

}
