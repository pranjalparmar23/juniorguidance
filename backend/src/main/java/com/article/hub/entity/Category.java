package com.article.hub.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NamedQuery(name = "Category.updateCategory", query = "update category set name=:name where id=:id")

@Entity(name = "category")
@Table(name = "category")
@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class Category implements Serializable {

    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    private String name;

    public Category() {
        super();
    }

    public Category(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Category(Integer categoryId) {
        this.id = categoryId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
