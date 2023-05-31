package com.example.bakerybe.repository;

import com.example.bakerybe.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface IAccountRepository extends JpaRepository<Account, Integer> {
    Optional<Account> findByUsername(String username);

    Boolean existsByEmail(String email);

    Optional<Account> findById(Integer id);

    Boolean existsByUsername(String username);

    @Query(value = "select * from account where id = :id ", nativeQuery = true)
    Account findByIdAccount(@Param("id") long id);
}
