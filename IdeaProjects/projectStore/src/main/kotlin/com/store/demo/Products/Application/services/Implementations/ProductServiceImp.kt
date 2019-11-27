package com.store.demo.Products.Application.services.Implementations

import com.store.demo.Products.Domain.dao.IProductDao
import com.store.demo.Products.Domain.entities.Product

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*


@Service
class ProductServiceImp: IProductService {

    @Autowired
    private lateinit var productDao: IProductDao
    @Transactional(readOnly = true)
    override fun getProducts():List<Product> = productDao.findAll() as List<Product>

    override fun getProductById(id: Int): Optional<Product> = productDao.findById(id)

    override fun addProduct(product: Product): Product = productDao.save(product)
}