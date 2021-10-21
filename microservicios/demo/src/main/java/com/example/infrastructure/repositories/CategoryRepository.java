package com.example.infrastructure.repositories;

import java.util.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.domains.entities.Category;


public interface CategoryRepository extends JpaRepository<Category, Integer> {
	List<Category> findByNameStartingWith(String prefijo);
	
	
	List<Category> findByLastUpdateGreaterThan(LocalDate fecha);
	
//	List<CategoryDTO> findByCategoryIdNotNull();
	<T> List<T> findByCategoryIdNotNull(Class<T> type);
	
	@Query("FROM Category c WHERE c.lastUpdate > ?1 ")
	List<Category> laMia(Date date);
}
