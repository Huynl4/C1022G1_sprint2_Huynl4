package com.example.bakerybe.service.impl;

import com.example.bakerybe.model.OrderDetail;
import com.example.bakerybe.repository.IOrderDetailRepository;
import com.example.bakerybe.repository.IOrderRepository;
import com.example.bakerybe.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Override
    public List<OrderDetail> oderDetailById(Integer oder_id) {
        return orderDetailRepository.oderDetailById(oder_id);
    }
}
