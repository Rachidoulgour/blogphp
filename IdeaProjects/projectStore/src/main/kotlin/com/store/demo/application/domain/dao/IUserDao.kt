package com.store.demo.application.domain.dao

import com.store.demo.Products.Domain.entities.User
import org.springframework.data.jpa.repository.JpaRepository

import java.util.*



interface IUserDao: JpaRepository<User, Int> {
     fun findUserByUsername(username: String): Optional<User>
}