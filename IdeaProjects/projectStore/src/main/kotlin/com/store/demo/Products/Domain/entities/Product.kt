package com.store.demo.Products.Domain.entities

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id


@Entity
data class Product (
    @Id
    @GeneratedValue
    var id: Int?,
    var title: String,
    var price: Double,
    var size: String?,
    var material: String,
    var imagePath: String?,
    var stock: Int?,
    var productCategory: String?
    )