package com.example.bakerybe.service;

import com.example.bakerybe.model.Account;

import java.util.List;
import java.util.Optional;

public interface IAccountService {
    Optional<Account> findByUsername(String username);
    Boolean existsByEmail(String email);
    Account findById(long id);
    Boolean existsByUsername(String username);
    List<Account> findAll();
    void save(Account account);
    Account findByIdAccount(long id);
    Account findByIdInt(Integer id);
}
