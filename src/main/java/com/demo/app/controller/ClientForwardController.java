package com.demo.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.demo.app.service.UserService;

@Controller
public class ClientForwardController {
    @Autowired
	UserService userService;
	
    @GetMapping(value = "/**/{path:[^\\.]*}")
    public String forward() { 
        return "forward:/";
    }
        
}
