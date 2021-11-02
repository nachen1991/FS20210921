package com.example.domains.entities.dtos;

import com.example.domains.entities.Film;
import com.example.domains.entities.FilmActor;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModelProperty.AccessMode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Value;

@ApiModel(value = "PeliculaCorto", description = "Version corta de las peliculas")
@Value
@Data
@AllArgsConstructor
public class FilmShort {
	@ApiModelProperty(value = "Identificador de la pelicula", required = true, accessMode = AccessMode.READ_ONLY)
	
	private int filmId;
	@ApiModelProperty(value = "Titulo de la pelicula", required = true)
	
	private String title;

	public static FilmShort from(Film source) {
		return new FilmShort(source.getFilmId(), source.getTitle());
	}
	public static FilmShort from(FilmActor source) {
		return new FilmShort(source.getFilm().getFilmId(), source.getFilm().getTitle());
	}
}