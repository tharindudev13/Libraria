package com.example.libraria.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.libraria.model.User;

@Repository
public interface UserRepo extends JpaRepository<User ,String> {
    @Query(value = "SELECT * FROM User WHERE isLoggedin = true", nativeQuery = true)
    User findLoggedInUser();
}
