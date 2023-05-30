package com.example.bakerybe.service.impl;

import com.example.bakerybe.model.IProductDto;
import com.example.bakerybe.model.Product;
import com.example.bakerybe.repository.IProductRepository;
import com.example.bakerybe.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Product> getListBanhNgot(Pageable pageable) {
        return productRepository.getListBanhNgot(pageable);
    }

    @Override
    public List<Product> getListBanhMan(Pageable pageable) {
        return productRepository.getListBanhMan(pageable);
    }

    @Override
    public List<Product> getListBanhChay(Pageable pageable) {
        return productRepository.getListBanhChay(pageable);
    }

    @Override
    public Product findByIdProductDetail(long id) {
        return productRepository.findByIdProductDetail(id);
    }

    @Override
    public List<Product> getListSearchResults(String keyword, Pageable pageable) {
        return productRepository.getListSearchResults(keyword, pageable);
    }

    @Override
    public List<Product> getListSearchResultsOption(String keyword, int id, Pageable pageable) {
        return productRepository.getListSearchResultsOption(keyword, id, pageable);
    }

    @Override
    public Product findProduct(long id) {
        return productRepository.findProduct(id);
    }

    @Override
    public IProductDto detailProduct(int id) {
        return productRepository.detailProduct(id);
    }
}
