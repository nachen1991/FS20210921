package com.example.domains.entities;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PastOrPresent;

import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.hibernate.validator.constraints.Length;

import com.example.domains.core.EntityBase;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


/**
 * The persistent class for the category database table.
 * 
 */
@Entity
@Table(name="category")
@NamedQuery(name="Category.findAll", query="SELECT c FROM Category c")
public class Category extends EntityBase<Category> implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="category_id")
	private int categoryId;

	@Column(name="last_update")
	@Generated(value = GenerationTime.ALWAYS)
	@PastOrPresent
	private Timestamp lastUpdate;
	
	@NotBlank
	@Length(min=2, max = 20)
	private String name;

	//bi-directional many-to-one association to FilmCategory
	@OneToMany(mappedBy="category")
	private List<FilmCategory> filmCategories = new ArrayList<FilmCategory>();

	public Category() {
	}

	
	public Category(int categoryId) {
		super();
		this.categoryId = categoryId;
	}


	public Category(int categoryId, @NotBlank @Length(min = 2, max = 20) String name
			) {
		super();
		this.categoryId = categoryId;
		this.name = name;
		
	}


	public int getCategoryId() {
		return this.categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public Timestamp getLastUpdate() {
		return this.lastUpdate;
	}

	public void setLastUpdate(Timestamp lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<FilmCategory> getFilmCategories() {
		return this.filmCategories;
	}

	public void setFilmCategories(List<FilmCategory> filmCategories) {
		this.filmCategories = filmCategories;
	}

	public FilmCategory addFilmCategory(FilmCategory filmCategory) {
		getFilmCategories().add(filmCategory);
		filmCategory.setCategory(this);

		return filmCategory;
	}

	public FilmCategory removeFilmCategory(FilmCategory filmCategory) {
		getFilmCategories().remove(filmCategory);
		filmCategory.setCategory(null);

		return filmCategory;
	}


	@Override
	public int hashCode() {
		return Objects.hash(categoryId);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Category other = (Category) obj;
		return categoryId == other.categoryId;
	}


	@Override
	public String toString() {
		return "Category [categoryId=" + categoryId + ", lastUpdate=" + lastUpdate + ", name=" + name
				+ ", filmCategories=" + filmCategories + "]";
	}

}