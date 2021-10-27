package com.example.domains.contracts.services;

import java.sql.Timestamp;
import java.util.List;

import com.example.domains.core.services.contracts.ProjectionDomainService;
import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.domains.entities.Film;
import com.example.domains.entities.Language;


public interface FilmService extends ProjectionDomainService<Film, Integer> {

	List<Actor> getFilmActores(int id);
	
	List<Language> getFilmLanguages(int id);
	List<Category> getFilmCategorias(int id);
	
	List<Film> findByLastUpdateGreaterThanEqualOrderByLastUpdate(Timestamp fecha);

	
	

}
