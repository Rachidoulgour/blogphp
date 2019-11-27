package com.store.demo.Products.Application.services.Implementations

import com.store.demo.Products.Domain.entities.Product
import java.util.*

interface IProductService {
    fun getProducts():List<Product>
    fun getProductById(id:Int): Optional<Product>
    fun addProduct(product: Product):Product
}