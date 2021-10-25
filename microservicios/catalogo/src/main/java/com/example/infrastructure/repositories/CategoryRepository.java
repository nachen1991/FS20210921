package com.example.infrastructure.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Category;
import com.example.domains.entities.Film;
import com.example.domains.entities.dtos.ActorDTO;
import com.example.domains.entities.dtos.FilmShort;


public interface CategoryRepository extends JpaRepository<Category, Integer> {
	<T> List<T> findByCategoryIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByCategoryIdIsNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByCategoryIdIsNotNull(Pageable pageable, Class<T> type);
	
	@Query("Select fc.film FROM FilmCategory fc WHERE fc.category.categoryId = ?1 ")
	List<Film> getFilmCategories(int id);
}
