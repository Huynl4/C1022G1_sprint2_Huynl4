package com.example.bakerybe.service;

import com.example.bakerybe.model.OrderDetail;
import com.example.bakerybe.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrderDetailService {

    List<OrderDetail> oderDetailById(Integer oder_id);

}
