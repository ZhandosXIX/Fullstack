package com.example.volunteersite.service;

import com.example.volunteersite.dto.CategoryDto;
import com.example.volunteersite.repositories.CategoryRepository;
import com.example.volunteersite.repositories.UserRepository;
import com.example.volunteersite.user.Category;
import com.example.volunteersite.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Category> findAllCategories(){
        return categoryRepository.findAll();
    }

    public Category findByNameCategory(String name){
        return categoryRepository.findByName(name);
    }

    public void save(CategoryDto categoryDto){
        Category category = new Category();
        category.setName(categoryDto.getName());
        categoryRepository.save(category);
    }
}
