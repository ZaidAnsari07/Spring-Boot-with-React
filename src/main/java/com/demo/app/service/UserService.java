package com.demo.app.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.demo.app.dto.UserDetails;

public interface UserService {

	public ResponseEntity<?> saveUserDetails(UserDetails userDetails);

	public ResponseEntity<?> saveImage(MultipartFile file);
	public void saveDemoForm(String email, String name);

	public void saveUser(String email, String password);
}
