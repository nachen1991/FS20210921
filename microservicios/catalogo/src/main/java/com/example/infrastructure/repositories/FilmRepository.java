package com.example.infrastructure.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.domains.entities.Film;
import com.example.domains.entities.Language;
import com.example.domains.entities.dtos.ActorDTO;

public interface FilmRepository extends JpaRepository<Film, Integer> {

	<T> List<T> findByFilmIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByFilmIdIsNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByFilmIdIsNotNull(Pageable pageable, Class<T> type);
	
	@Query("Select fa.actor FROM FilmActor fa WHERE fa.film.filmId = ?1 ")
	List<Actor> getFilmActores(int id);
	
	@Query("Select f.language FROM Film f WHERE f.filmId = ?1 ")
	List<Language> getFilmLanguages(int id);
	
	@Query("Select fc.category FROM FilmCategory fc WHERE fc.film.filmId = ?1 ")
	List<Category> getFilmCategorias(int id);
}
