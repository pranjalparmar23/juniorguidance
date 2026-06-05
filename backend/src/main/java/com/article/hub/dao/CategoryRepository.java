package com.article.hub.dao;

import com.article.hub.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    Boolean existsByNameIgnoreCase(String name);

    Boolean existsByNameIgnoreCaseAndIdNot(String name, Integer id);

    List<Category> getAllCategory();

    List<Category> getAllCategoryByUser(@Param("userId") Integer userId);

    @Modifying
    @Transactional
    Integer updateCategory(@Param("name") String name, @Param("id") Integer id);
}
