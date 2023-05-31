package com.example.bakerybe.service;


import com.example.bakerybe.model.Account;
import com.example.bakerybe.model.Cart;

import java.util.List;

public interface ICartService {
    List<Cart> findAllByAccount(Account account);
    List<Cart> findCartByAccountId(long accountId);

    Boolean existsByProductIdAndAccountId(int productId, Integer accountId, String size);

    Cart findByProductIdAndAccountId(Integer productId, Integer accountId);
    void deleteById(int id);
    void createCart(Cart cart);

    Cart findById(int id);
    Cart findById(Integer id);

    List<Cart> findAll(Long id);

    void updateSize(int id, String size);

    void deleteCartByIdUser(Long account);

    List<Cart> findAllByUser(Account byId);
}
