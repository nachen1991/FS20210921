package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.infrastructure.repositories.ActorRepository;
import com.example.ioc.ServicioMockImpl;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@Autowired
	ServicioMockImpl srv;
	@Value("${mi.propia.clave}")
	String name;
	@Autowired
	ActorRepository dao;
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Soy" + name);
		
		dao.findAll().forEach(System.out::println);
		
	}

}
