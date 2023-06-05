package com.example.bakerybe.repository;

import com.example.bakerybe.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderRepository extends JpaRepository<Orders, Long> {
    @Query(value = "select * from orders where account_id =:id", nativeQuery = true)
    Page<Orders> findAllByAccountId(@Param("id") Integer account_id, Pageable pageable);
}
