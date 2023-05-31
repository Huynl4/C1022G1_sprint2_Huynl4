package com.example.bakerybe.repository;
import com.example.bakerybe.model.Account;
import com.example.bakerybe.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public interface ICartRepository extends JpaRepository<Cart,Integer> {
    List<Cart> findAllByAccount(Account account);

    Boolean existsByProductIdAndAccountIdAndSize(int product_id, Integer account_id, String size);


    Optional<Cart> findByAccount_IdAndProduct_Id(int product, Integer accountId);

    @Query(value = "select * from cart where account_id =:account_id and product_id =:product_id",nativeQuery = true)
    Cart findCartBy(@Param("account_id") long account_id,
                    @Param("product_id") long product_id);

    @Query(value = "select * from cart where account_id =:account_id",nativeQuery = true)
    List<Cart> findCartByAccountId(@Param("account_id") long account_id);

    @Query(value = "select * from cart where account_id =:id ",
            nativeQuery = true)
    List<Cart> findAllCart(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query(value = "update cart set size = :size" +
            " where id =:id", nativeQuery = true)
    void updateCart(int id, String size);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM cart WHERE cart.account_id =:id", nativeQuery = true)
    void deleteCartById(@Param("id") Long id);
}
