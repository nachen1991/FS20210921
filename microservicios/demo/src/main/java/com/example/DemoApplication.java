package com.example;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.example.domains.contracts.services.ActorService;
import com.example.domains.contracts.services.CategoryService;
import com.example.infrastructure.repositories.ActorRepository;
import com.example.infrastructure.repositories.CategoryRepository;

@EnableEurekaClient
@EnableFeignClients("com.example.application.proxies")
@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@Bean
	@Qualifier("directo")
	public RestTemplate restTemplateDirecto(RestTemplateBuilder builder) {
		return builder.build();
	}
	@Bean
	@Qualifier("balanceado")
	@LoadBalanced
	public RestTemplate restTemplateBalanceado(RestTemplateBuilder builder) {
		return builder.build();
	}
	
	
	@Autowired
	ActorService srv;
	@Autowired
	CategoryService srv2;

//	@Value("${mi.propia.clave}")
//	String name;

	@Autowired
	ActorRepository dao;
	@Autowired
	CategoryRepository dao2;
	
	@Override
	@Transactional
	public void run(String... args) throws Exception {
//		Optional<Actor> a = dao.findById(201);
//		if(a.isPresent())
//			System.out.println(a.get());
//		else {
//			System.out.println("No encontrado");
//		}
		
//		Actor actor= new Actor(0, "Pepito", "Grillo");
//		actor.addFilmActor(new Film(1));
//		Actor actor= a.get();
//		actor.setFirstName(actor.getFirstName().toUpperCase());
//		dao.save(actor);
////		dao.deleteById(201);
//		dao.findAll().forEach(System.out::println);

		// dao.findAll().forEach(System.out::println);

//		Optional<Actor> a = dao.findById(1);
//		
//		if(a.isPresent()) {
//			System.out.println(a.get());
//			a.get().getFilmActors().forEach(item -> System.out.println(item.getFilm()));
//		}else {
//			System.out.println("No encontrado");
//		}
		// dao.findByFirstNameStartingWithOrderByLastNameDesc("P").forEach(System.out::println);
		// dao.laMia(new Date(LocalDate.now().toString())).forEach(System.out::println);

//		srv.getAll().forEach(System.out::println);
//		srv.getAll().forEach(item -> System.out.println(ActorDTO.from(item)));
//		var fuera = new ActorDTO(205, "PEPITO", "GRILLO");
//		System.out.println(srv.modify(ActorDTO.from(fuera)));
//		dao.findByActorIdNotNull(ActorShort.class).forEach(item -> System.out.println(item.getNombreCompleto()));
//		dao.findByActorIdNotNull(ActorDTO.class).forEach(item -> System.out.println(item));
//		dao.findByActorIdNotNull(Actor.class).forEach(item -> System.out.println(item));
//		srv.modify(new Actor(333));
//		srv.getAll().forEach(System.out::println);

//		Actor actor= new Actor(0, "", "  5 ");
//		if (actor.isInvalid()) {
//			actor.getErrors().forEach(item -> 
//			System.out.println(item.getPropertyPath() + ":" + item.getMessage())
//			);
//		} else {
//			System.out.println("Valido");
//		}
		//dao.save(actor);
//		srv.add(actor);
//		srv.getAll().forEach(System.out::println);
		


//		Category cat = new Category(0, "CienciaFiccion");
//		Film film = new Film(0, "Erase una vez");
//		dao2.save(cat);
//	Optional<Category> c = dao2.findById(1);
//		Category cat2 = c.get();
//		cat2.setName(cat2.getName().toUpperCase());
//		dao2.save(cat2);
//		dao2.deleteById(18);
//		dao2.findAll().forEach(System.out::println);
		
//		srv2.getAll().forEach(System.out::println);
		
//		dao2.findByCategoryIdNotNull(CategoryShort.class).forEach(item -> System.out.println(item.getNombre()));
//		dao2.findByCategoryIdNotNull(CategoryDTO.class).forEach(item -> System.out.println(item));
	}

}
