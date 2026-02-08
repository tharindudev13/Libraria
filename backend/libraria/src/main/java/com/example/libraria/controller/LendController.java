package com.example.libraria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.libraria.dto.LendDto;
import com.example.libraria.service.LendService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/lends")
public class LendController {


    @Autowired
    private LendService lendService;

    @GetMapping("/test")
    public String test(){
        return "Controller is working";
    }

    @GetMapping("/getlends/{email}")
    public Iterable<LendDto> getLendsByUser(@PathVariable String email){
        return lendService.getLendsByEmail(email);
    }

    @PostMapping("/newLends")
    public String newLend(@RequestParam String email, @RequestParam String isbn){
        return lendService.newLend(isbn, email);
    }
}
