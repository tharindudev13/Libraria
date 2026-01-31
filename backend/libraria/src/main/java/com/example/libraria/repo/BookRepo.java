package com.example.libraria.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.libraria.model.Book;

@Repository
public interface BookRepo extends JpaRepository<Book, String>{

}
