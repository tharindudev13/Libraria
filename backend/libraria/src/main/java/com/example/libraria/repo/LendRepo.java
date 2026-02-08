package com.example.libraria.repo;

import java.sql.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.libraria.model.Book;
import com.example.libraria.model.Lend;

@Repository
public interface LendRepo extends JpaRepository<Lend ,Integer>{
    @Query(value = "SELECT * FROM Lend WHERE email = ?1",nativeQuery = true)
    Iterable<Lend> findLendsByUser(String email);

    @Query(value = "SELECT * FROM Book WHERE isbn = ?1",nativeQuery = true)
    Optional<Book> getAvlCopies(String isbn);
    
    @Modifying
    @Query(value = "INSERT INTO Lend(isbn,lend_date,email) VALUES(?2,?3,?1)",nativeQuery = true)
    void newLend(String email, String isbn,Date date);

    @Modifying
    @Query(value = "UPDATE Book SET available_copies = available_copies - 1 WHERE isbn = ?1",nativeQuery = true)
    void updateAvlCopies(String isbn);

}
