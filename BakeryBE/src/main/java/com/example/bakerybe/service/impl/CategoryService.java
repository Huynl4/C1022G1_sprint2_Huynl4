package com.example.bakerybe.service.impl;

import com.example.bakerybe.model.Category;
import com.example.bakerybe.repository.ICategoryRepository;
import com.example.bakerybe.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;

    @Override
    public List<Category> findCategory() {
        return categoryRepository.findAll();
    }
}
