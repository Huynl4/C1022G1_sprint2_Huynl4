package com.example.bakerybe.service;

import com.example.bakerybe.model.OrderDetail;
import com.example.bakerybe.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IOrderService {
    void addBill(Orders bill);

    void addBillHistory(OrderDetail billHistory);

    Page<Orders> findAllByAccountId(Integer account_id, Pageable pageable);
}
