package com.example.bakerybe.service.impl;

import com.example.bakerybe.model.OrderDetail;
import com.example.bakerybe.model.Orders;
import com.example.bakerybe.repository.IOrderDetailRepository;
import com.example.bakerybe.repository.IOrderRepository;
import com.example.bakerybe.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Override
    public void addBill(Orders bill) {
        orderRepository.save(bill);
    }

    @Override
    public void addBillHistory(OrderDetail billHistory) {
        orderDetailRepository.save(billHistory);
    }

    @Override
    public Page<Orders> findAllByAccountId(Integer account_id, Pageable pageable) {
        return orderRepository.findAllByAccountId(account_id, pageable);
    }
}
