package com.example.bakerybe.service;

import com.example.bakerybe.model.IProductDto;
import com.example.bakerybe.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> getListBanhNgot(Pageable pageable);

    List<Product> getListBanhMan(Pageable pageable);

    List<Product> getListBanhChay(Pageable pageable);

    Product findByIdProductDetail(long id);

    List<Product> getListSearchResults(String keyword, Pageable pageable);

    List<Product> getListSearchResultsOption(String keyword, int id, Pageable pageable);

    Product findProduct(long id);

   IProductDto detailProduct(int id);

}
