package com.example.libraria.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.libraria.model.Book;

@Repository
public interface BookRepo extends JpaRepository<Book, String>{
    @Query(value = "SELECT * FROM BOOK WHERE title LIKE CONCAT('%',?1,'%') or author LIKE CONCAT('%',?1,'%') or category LIKE CONCAT('%',?1,'%') or isbn LIKE CONCAT('%',?1,'%')",nativeQuery = true)
    List<Book> searchBooks(String keyword);

}
