package com.example.domains.entities.dtos;

import org.springframework.beans.factory.annotation.Value;

public interface ActorShort {

	int getActorId();
	
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
