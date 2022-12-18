package com.galactica.nw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.galactica.nw.models.User;
import com.galactica.nw.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth/signin")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/admin")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
}
