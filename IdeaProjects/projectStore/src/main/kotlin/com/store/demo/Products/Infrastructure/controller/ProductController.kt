package com.store.demo.Products.Infrastructure.controller

import com.store.demo.Products.Application.services.Implementations.IProductService
import com.store.demo.Products.Domain.entities.Product
import com.store.demo.Products.Domain.entities.User

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@CrossOrigin
@RestController
@RequestMapping("api/v1/products")
class ProductController {

    @Autowired
    private lateinit var productService:IProductService


    @CrossOrigin(origins = ["http://localhost:3000"])
    @RequestMapping("/", "GET", "application/json")
    fun getProducts():ResponseEntity<List<Product>> = ResponseEntity(productService.getProducts(), HttpStatus.OK)
    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/{id}")
    fun getProductById(@PathVariable id:Int):ResponseEntity<Product>{
        val result: Optional<Product> = productService.getProductById(id)
        return result.map {res-> ResponseEntity(res, HttpStatus.OK)}
                .orElse(ResponseEntity(HttpStatus.NO_CONTENT))
    }
    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/")
    fun addProduct(@RequestBody product: Product):ResponseEntity<Product> {
        val result: Product = productService.addProduct(product)
        return when (result) {
            null -> ResponseEntity(result, HttpStatus.BAD_REQUEST)
            else -> ResponseEntity(result, HttpStatus.CREATED)
        }
    }


}