package com.example.domains.contracts.services;

import java.sql.Timestamp;
import java.util.List;

import com.example.domains.core.services.contracts.DomainService;

import com.example.domains.entities.Category;
import com.example.domains.entities.Film;
import com.example.domains.entities.dtos.FilmShort;

public interface CategoryService extends DomainService<Category, Integer> {
	List<Film> getFilmCategories(int id);
	List<Category> novedades(Timestamp fecha);
}
