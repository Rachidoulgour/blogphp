package com.store.demo.Products.Domain.dao

import com.store.demo.Products.Domain.entities.Product
import org.springframework.data.repository.CrudRepository

interface IProductDao: CrudRepository<Product, Int> {
}