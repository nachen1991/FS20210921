package com.example.domains.entities.dtos;



import org.springframework.beans.factory.annotation.Value;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModelProperty.AccessMode;


@ApiModel(value = "ActoresCorto", description = "Version corta de los actores")
public interface ActorShort {
	@ApiModelProperty(value = "Identificador del actor", required = true, accessMode = AccessMode.READ_ONLY)
	int getActorId();
	@ApiModelProperty(value = "Nombre completo del actor", required = true)
	@Value("#{target.lastName + ', ' + target.firstName}")
	String getNombreCompleto();
	
//	int getActorId();
//	String getFirstName();
//	String getLastName();
//
//	public static ActorShort from(Actor source) {
//		return new ActorShort(source.getActorId(), source.getFirstName(), source.getLastName());
//	}
	
}
