package com.example.bakerybe.repository;

import com.example.bakerybe.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    @Query(value = "select * from order_detail where order_id =:id", nativeQuery = true)
    List<OrderDetail> oderDetailById(@Param("id") Integer oder_id);
}
