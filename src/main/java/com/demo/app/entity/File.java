package com.demo.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="ImageStorage")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class File {

	@Id
	@GeneratedValue
	private Long id;
	
	@Lob
	private byte[] data;
	
}
