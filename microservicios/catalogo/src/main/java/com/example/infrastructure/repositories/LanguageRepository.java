package com.example.infrastructure.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Film;
import com.example.domains.entities.Language;
import com.example.domains.entities.dtos.FilmShort;


public interface LanguageRepository extends JpaRepository<Language, Integer> {
	<T> List<T> findByLanguageIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByLanguageIdIsNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByLanguageIdIsNotNull(Pageable pageable, Class<T> type);
	
	@Query("Select l.films FROM Language l WHERE l.languageId = ?1 ")
	List<Film> getLanguageFilms(int id);

}
