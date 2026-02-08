package com.example.libraria.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.libraria.dto.LendDto;
import com.example.libraria.model.Book;
import com.example.libraria.model.Lend;
import com.example.libraria.repo.LendRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LendService {

    @Autowired
    private LendRepo lendRepo;

    @Autowired
    private ModelMapper modelMapper;
        public Iterable<LendDto> getLendsByEmail(String email){
            Iterable<Lend> lends = lendRepo.findLendsByUser(email);
            return modelMapper.map(lends, new TypeToken<Iterable<LendDto>>(){}.getType());
        }

        public String newLend(String isbn,String email){
            Optional<Book> bookOpt = lendRepo.getAvlCopies(isbn);
            Date date = Date.valueOf(LocalDate.now());

            if(bookOpt.isPresent()){
                Book book = bookOpt.get();
                if (book.getAvailable_copies() > 0) {
                    lendRepo.newLend(email, isbn, date);
                    lendRepo.updateAvlCopies(isbn);
                    return "You Successfuly reserved this book";
                }
            }

            return "Failed to Reserve book";
        }


}
