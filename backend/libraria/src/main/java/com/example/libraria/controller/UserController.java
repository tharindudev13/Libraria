package com.example.libraria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.libraria.dto.UserDto;
import com.example.libraria.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("getuser/{email}")
    public UserDto getUser(@PathVariable String email){
        return userService.getUser(email);
    }

    @GetMapping("loggedin")
    public UserDto getLoggedInUser(){
        return userService.getLoggedInUser();
    }
    
    @GetMapping("/test")
    public String testEndpoint() {
        return "User Controller is working!";
    }

    @GetMapping("/loginreq")
    public boolean loginReq(@RequestParam String id,@RequestParam String pwd) {
        return userService.validateLogin(id, pwd);
    }
    

}
