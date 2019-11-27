package com.store.demo.Products.Domain.entities

import java.net.PasswordAuthentication
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id



@Entity
data class User (
        @Id
        @GeneratedValue
        var id: Int?,
        var firstname: String?,
        var lastname: String?,
        var username: String,
        var email: String?,
        var password: String?
)