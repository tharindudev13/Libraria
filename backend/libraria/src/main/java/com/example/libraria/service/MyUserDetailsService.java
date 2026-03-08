package com.example.libraria.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.libraria.model.User;
import com.example.libraria.model.UserPrincipal;
import com.example.libraria.repo.UserRepo;

@Service
public class MyUserDetailsService implements UserDetailsService{

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findById(username).get();
        if (user == null) {
            System.out.println("User Not Found");
            throw new UsernameNotFoundException("user not found");
            
        }
        return new UserPrincipal(user);
    }

}
