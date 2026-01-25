package com.example.libraria.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.libraria.dto.UserDto;
import com.example.libraria.model.User;
import com.example.libraria.repo.UserRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired 
    private ModelMapper modelMapper;

    public UserDto getUser(String email){
       Optional<User> user = userRepo.findById(email);
       return modelMapper.map(user, new TypeToken<UserDto>(){

       }.getType());
    }
    public UserDto getLoggedInUser(){
        User user = userRepo.findLoggedInUser();
        return modelMapper.map(user, new TypeToken<UserDto>(){

        }.getType());
     }

}
