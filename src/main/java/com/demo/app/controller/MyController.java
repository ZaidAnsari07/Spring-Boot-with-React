package com.demo.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.demo.app.dto.UserDetails;
import com.demo.app.service.UserService;

@RestController
@RequestMapping("/api")
//@CrossOrigin("http://localhost:3000")
public class MyController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(value = "/user-details")
	public ResponseEntity<?> saveUserDetails(@RequestBody UserDetails userDetails){
		
		return userService.saveUserDetails(userDetails); 
	} 
	
	@PostMapping(value = "/image")
	public ResponseEntity<?> saveFile(@RequestParam("file") MultipartFile file){
		return userService.saveImage(file);
	}

}
