package com.example.domains.entities.dtos;

import javax.lang.model.SourceVersion;
import javax.xml.transform.Source;

import com.example.domains.entities.Actor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class ActorDTO {
	private int actorId;

	private String firstName;

	private String lastName;
	
	public static Actor from(ActorDTO source) {
		return new Actor(
				source.getActorId(),
				source.getFirstName(),
				source.getLastName()
				);
	}
		public static ActorDTO from(Actor source) {
			return new ActorDTO(
					source.getActorId(),
					source.getFirstName(),
					source.getLastName()
					);
	}
		
	

}
