package com.example.bakerybe.repository;

import com.example.bakerybe.model.IProductDto;
import com.example.bakerybe.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product where category_id = 1", nativeQuery = true)
    List<Product> getListBanhNgot(Pageable pageable);

    @Query(value = "select * from product where category_id = 2", nativeQuery = true)
    List<Product> getListBanhMan(Pageable pageable);

    @Query(value = "select * from product where category_id = 3", nativeQuery = true)
    List<Product> getListBanhChay(Pageable pageable);

    @Query(value = "select * from product where product.id = :id", nativeQuery = true)
    Product findByIdProductDetail(long id);

    @Query(value = "select * from product where product.name like concat('%',:keyword,'%')", nativeQuery = true)
    List<Product> getListSearchResults(@Param("keyword") String keyword, Pageable pageable);

    @Query(value = "select * from product where product.name like concat('%',:keyword,'%') and product.category_id =:id", nativeQuery = true)
    List<Product> getListSearchResultsOption(@Param("keyword") String keyword, @Param("id") int id, Pageable pageable);


    @Query(value = "select * from product " +
            "where id =:id ",
            nativeQuery = true)
    Product findProduct(@Param("id") long id);

    @Query(value = "select product.id as id, product.name as name,product.price as price,product.description as description,product.image as image,product.quantity as quantity, category.name as nameCategory,s.name as nameSupplier from product join category on product.category_id= category.id join supplier s on s.id = product.supplier_id where product.id = :id", nativeQuery = true)
    IProductDto detailProduct(@Param("id") int id);
}
