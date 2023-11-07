package com.demo.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.app.entity.File;

@Repository
public interface FileRepository extends JpaRepository<File, Long>{
	
}
