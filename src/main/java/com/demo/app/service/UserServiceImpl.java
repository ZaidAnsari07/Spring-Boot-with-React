package com.demo.app.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.demo.app.dto.UserDetails;
import com.demo.app.entity.File;
import com.demo.app.entity.User;
import com.demo.app.repository.FileRepository;
import com.demo.app.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private FileRepository fileRepository;
	
	@Override
	public ResponseEntity<?> saveUserDetails(UserDetails userDetails) {
		try {
		User user = new User();
		user.setPassword(userDetails.getPassword());
		user.setEmail(userDetails.getEmail());
		userRepository.save(user);
		log.info("userDetails are saved");
		return ResponseEntity.status(200).body("Success");
		}
		catch(Exception exp) {
			log.error("Failed to save userDetails : ", exp.getMessage());
			return ResponseEntity.internalServerError().body("Failure");	
		}
	}

	@Override
	public ResponseEntity<?> saveImage(MultipartFile image) {
		
		File files= new File();
		
		try {
			files.setData(image.getBytes());
			fileRepository.save(files);
			log.info("userDetails are saved");
		} catch (IOException e) {
			log.error("Failed to save saveImage : ", e.getMessage());
			return ResponseEntity.internalServerError().body("Failure");	
		}
		return ResponseEntity.status(200).body("Success");
	}

	@Override
	public void saveDemoForm(String email, String name) {
		// TODO Auto-generated method stub
		try {
			User user = new User();
			user.setName(name);
			user.setEmail(email);
			userRepository.save(user);
			log.info("userDetails are saved");
			}
			catch(Exception exp) {
				log.error("Failed to save userDetails : ", exp.getMessage());	
			}
	}

	@Override
	public void saveUser(String email, String password) {
		// TODO Auto-generated method stub
		try {
			User user = new User();
			user.setEmail(email);
			user.setPassword(password);
			userRepository.save(user);
			log.info("userDetails are saved");
			}
			catch(Exception exp) {
				log.error("Failed to save userDetails : ", exp.getMessage());	
			}
	}

}
