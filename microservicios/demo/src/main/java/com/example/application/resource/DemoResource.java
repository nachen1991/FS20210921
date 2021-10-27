package com.example.application.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.domains.entities.Actor;
import com.example.domains.entities.dtos.ActorDTO;

import lombok.Data;

@RestController
public class DemoResource {
	
	@GetMapping("/params/{id}")
	public String cotilla(
	        @PathVariable String id,
	        @RequestParam(required = false, defaultValue = "valor por defecto") String nom,
	        @RequestHeader("Accept-Language") String language) { 
	    StringBuilder sb = new StringBuilder();
	    sb.append("id: " + id + "\n");
	    sb.append("nom: " + nom + "\n");
	    sb.append("language: " + language + "\n");
	    return sb.toString();
	}
	
	@GetMapping(path="/params/{id}", produces = {"text/xml"})
	public String cotillaXML(
	        @PathVariable String id,
	        @RequestParam(required = false, defaultValue = "valor por defecto") String nom,
	        @RequestHeader("Accept-Language") String language) { 
	    StringBuilder sb = new StringBuilder();
	    sb.append("<raiz>\n<id>id: " + id + "</id>\n");
	    sb.append("<nombre> " + nom + "</nombre>\n");
	    sb.append("<idioma> " + language + "</idioma>\n</raiz>\n");
	    return sb.toString();
	}
	
	@GetMapping(path="/salida")
	@ResponseStatus(code = HttpStatus.OK)
	public ActorDTO salidaGet() {
		return ActorDTO.from(new Actor(0, "Pepito", "Grillo"));
	}
	
	@PostMapping(path="/salida")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public ActorDTO salidaPOST(@RequestBody ActorDTO item) {
		item.setFirstName(item.getFirstName().toUpperCase());
		return item;
	}
	
	@Autowired
	RestTemplate rest;
	
	@Data
	public static class Categoria{
		private int id;
		private String categoria;
	}
	
	@GetMapping("/categorias")
	public List<Categoria> traeDatos(){
		ResponseEntity<List<Categoria>> response = rest.exchange("http://localhost:8001/categorias/", 
				HttpMethod.GET, 
				HttpEntity.EMPTY,
				new ParameterizedTypeReference<List<Categoria>>() {}
		);
		return response.getBody();
	}
	
	@GetMapping("/categorias/{id}")
	public Categoria traeDatos(@PathVariable int id){
		return rest.getForObject("http://host.docker.internal:8010/categorias/{id}", Categoria.class, id);
	}
	
	@GetMapping("/servicio")
	public String traeHateoas(){
		return rest.getForObject("http://host.docker.internal:8010", String.class);
	}
	
//	@GetMapping("/servicio")
//	public String traeHateoas(){
//		return rest.getForObject("lb://catalogo-service/", String.class);
//	}

}
