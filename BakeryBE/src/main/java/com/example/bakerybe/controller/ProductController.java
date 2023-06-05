package com.example.bakerybe.controller;

import com.example.bakerybe.model.*;
import com.example.bakerybe.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private IAccountService accountService;

    @Autowired
    private IOrderService orderService;
    @Autowired
    private IOrderDetailService orderDetailService;

    @GetMapping("/list-banh-ngot")
    public ResponseEntity<List<Product>> getListBanhNgot(@RequestParam("page") int page,
                                                         @RequestParam("size") int size) {
        Pageable pageable = PageRequest.of(page, size);
        List<Product> listBanhNgot = productService.getListBanhNgot(pageable);
        if (listBanhNgot.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listBanhNgot, HttpStatus.OK);
    }

    @GetMapping("/list-banh-man")
    public ResponseEntity<List<Product>> getListBanhMan(@RequestParam("page1") int page1,
                                                        @RequestParam("size1") int size1) {
        Pageable pageable = PageRequest.of(page1, size1);
        List<Product> listBanhMan = productService.getListBanhMan(pageable);
        if ((listBanhMan.isEmpty())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listBanhMan, HttpStatus.OK);
    }

    @GetMapping("/list-banh-chay")
    public ResponseEntity<List<Product>> getListBanhChay(@RequestParam("page2") int page2,
                                                         @RequestParam("size2") int size2) {
        Pageable pageable = PageRequest.of(page2, size2);
        List<Product> listBanhChay = productService.getListBanhChay(pageable);
        if ((listBanhChay.isEmpty())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listBanhChay, HttpStatus.OK);
    }


    @GetMapping("findProductById/{id}")
    public ResponseEntity<IProductDto> findByIdProductDetail(@PathVariable("id") int id) {
        IProductDto product = productService.detailProduct(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(product, HttpStatus.OK);
        }
    }

    @GetMapping("/getListSearchResults")
    public ResponseEntity<List<Product>> getListSearchResults(
            @RequestParam("page") int page,
            @RequestParam("size") int size,
            @RequestParam("keyword") String keyword) {
        Pageable pageable = PageRequest.of(page, size);
        List<Product> listSearchResults = productService.getListSearchResults(keyword, pageable);
        if (listSearchResults.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listSearchResults, HttpStatus.OK);
    }

    @GetMapping("listProductCategory")
    public ResponseEntity<List<Category>> aquaTypeList() {
        List<Category> aquaType = categoryService.findCategory();
        if (aquaType == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(aquaType, HttpStatus.OK);
        }
    }

    @GetMapping("/changeListForOptionList")
    public ResponseEntity<List<Product>> getListSearchResultsByOption(
            @RequestParam("page") int page,
            @RequestParam("size") int size,
            @RequestParam("keyword") String keyword,
            @RequestParam("id") int id) {
        Pageable pageable = PageRequest.of(page, size);
        List<Product> listSearchResults = productService.getListSearchResultsOption(keyword, id, pageable);
        return new ResponseEntity<>(listSearchResults, HttpStatus.OK);
    }

    @GetMapping("/info/{id}")
    public ResponseEntity<Account> findById(@PathVariable long id) {
        Account accountList = accountService.findByIdAccount(id);
        if (accountList == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(accountList, HttpStatus.OK);
    }

    @GetMapping("/oder/{id}")
    public ResponseEntity<Page<Orders>> getListOder(@PathVariable("id") int id,
                                                    @PageableDefault(size = 3) Pageable pageable) {
        Page<Orders> oderPage = orderService.findAllByAccountId(id, pageable);
        return new ResponseEntity<>(oderPage, HttpStatus.OK);
    }

    @GetMapping("/oderDetail/{id}")
    public ResponseEntity<List<OrderDetail>> getListOderDetail(@PathVariable("id") int id) {
        List<OrderDetail> oderDetailList = orderDetailService.oderDetailById(id);
        return new ResponseEntity<>(oderDetailList, HttpStatus.OK);
    }
}
